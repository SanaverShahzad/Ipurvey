import React from 'react'
import { Box, Typography,Button,Container } from '@material-ui/core'
import Link from '../../src/Link'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const data = [
    {img:'/images/Group 3350.png',
    title:'Feature Name',
    text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo doloolore mag ipsum dolor sit'
    },
    {img:'/images/Group 3351.png',
    title:'Feature Name',
    text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo doloolore mag ipsum dolor sit'
    },
    {img:'/images/Group 3355.png',
    title:'Feature Name',
    text:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo doloolore mag ipsum dolor sit'
    }
]
export default function Ipurveyspecial() {
    return (
        <div className="ipurvey-special">
            <Container>
            <Typography component="h4" className="heading xl:text-4xl md:text-3xl xs:text-xl font-f-bold text-secondary text-center pt-14 pb-8 xl:w-3/6 mx-auto">
            Why iPurvey? We got somethings really special!
            </Typography>
            <Typography component="p" className="w-4/5 mx-auto text-center xl:text-lg md:text-base sm:text-sm xs:text-xs">
             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
            </Typography>
            <Box className="content mt-12">
            <div className="grid lg:grid-cols-3 xs:grid-cols-1 gap-4">
                {data.map((value,i) =>
                    <div className="box " key={i}>
                    <img src={value.img} className={`${i !== 0 ? "mx-auto":''}`} alt ="" />
                    <Typography component="h4" className="title font-f-samibold xl:text-3xl md:2x-l xs:text-xl text-secondary my-12">
                        {value.title}
                    </Typography>
                    <Box className="lg:w-4/5 xs:w-full">
                    <Typography component="p" className="text-secondary xl:text-base md:text-sm xs:text-xs ">
                        {value.text}
                    </Typography>
                    <Link href="/" className="mt-12 block  xl:text-xl  md:text-sm xs:text-xs text-right">Learn More <ArrowForwardIcon className="text-sm"/></Link>
                    </Box>
                    </div>
                    )}
            
            </div>
            <div className="text-center py-16">
            <Button
          variant="contained"
          className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm"
          color="primary"
        >
          Get Started and Enjoy<ArrowForwardIcon className="mt-1 ml-2 xl:text-2xl md:text-xl xs:text-lg" />
        </Button>
        </div>
            </Box>
            </Container>
        </div>
    )
}
