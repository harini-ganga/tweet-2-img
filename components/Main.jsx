
import {Text, Box, Spinner} from "@chakra-ui/react"

import Tweet from './Tweet'


const Main = ({scale, hint, loading, error, tweetData, bg, showTime, showMetrics, showSource, tweetRef}) => {

    
    const pic_size = { base: "90vw", md: "80vh", lg: "50vw" }
    const padX = { base: '1rem' }
    const padY = { base: '3rem', md: '5rem' }

    if(hint){
    	return (
    		<Box m="0 auto" className='non-tweet i' py='2rem' flexDirection='column'>
    		    <Box>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8rem" height="8rem" viewBox="0 0 1200 1227">
  <path fill="black" d="M714 636l486 591h-183L564 743 212 1227H0l511-622L42 0h183l426 518 324-395h211L714 636z"/></svg>

    		    </Box>
    		    <Text className='i' p='4' color='gray.700' textAlign='center'>Welcome! To get started, paste the link of the tweet in the box above</Text>
    		</Box>
    	)
    }

    if(loading){
    	return <Box minW={pic_size} m="0 auto" className='non-tweet i'><Spinner size='xl' /> </Box>
    }

    if(error){
    	return  <Box m="0 auto" minW={pic_size} className='non-tweet i'><Text p='4' fontSize='20px'>Oops! 😬 Something went wrong. Please try again.</Text></Box>
    }

    if(tweetData){
        if(tweetData.message){
            return  <Box m="0 auto" minW={pic_size} className='non-tweet i'><Text p='4' fontSize='20px'>Something is wrong with the URL. Please double check.</Text></Box>
        }
    }

	return (
        <Box m="0 auto">
            <Box className='con' style={{background : bg}} minW={pic_size} maxW={pic_size} rounded="sm" px={padX} py={padY} ref={tweetRef}>
                <div className='container' style={{transform: `scale(${scale})`}} >
                    { 
                        tweetData && <Tweet
                            tweet={tweetData}
                            showTime={showTime}
                            showMetrics={showMetrics}
                            showSource={showSource}
                         />
                	}
                </div>
            </Box>
        </Box>

	)
}

export default Main