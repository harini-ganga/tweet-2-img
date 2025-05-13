import axios from 'axios'

export default async function handler(req, res) {
    const id = req.query.id
    const token = process.env.NEXT_APP_BEARER_TOKEN

    if (!token) {
        return res.status(500).json({ message: 'Bearer token is not set in environment' })
    }

    const headers = {
        'Authorization': `Bearer ${token}`
    }

    try {
        const url = `https://api.twitter.com/2/tweets/${id}?expansions=author_id,attachments.media_keys&user.fields=profile_image_url,verified&tweet.fields=created_at,attachments,public_metrics,entities,source&media.fields=preview_image_url,url`
        const response = await axios.get(url, { headers })

        console.log('Response from Twitter API:', response.data)

        res.status(200).json({ data: response.data, status: response.status })
    } catch (e) {
        console.error('Error fetching tweet:', e.response?.data || e.message || e)
        res.status(500).json({ message: 'Something went wrong, please try again' })
    }
}
