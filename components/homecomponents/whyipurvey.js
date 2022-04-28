import React from 'react'
import { Box, Typography,Container } from '@material-ui/core'
const data = [
    {img:'images/Group 3377.png',
    title:'No paperwork',
    text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"      
    },
    {img:'images/Group 3385.png',
    title:'Secure Transactions',
    text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"      
    },
    {img:'images/Group 3379.png',
    title:'Quick and easy',
    text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"      
    },
    {img:'images/Group 3381.png',
    title:'Seamless Payments',
    text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"      
    }
]
export default function Whyipurvey() {
    return (
        <div className="why-ipurvey pb-20">
        <Container>
            <Typography component="h4" className="xl:text-4xl md:text-3xl xs:text-xl font-f-bold text-secondary text-center xl:pt-20 xl:pb-12 xs:pt-12 xs:pb-8">
            Why iPurvey?
            </Typography>
            <Typography className ="text-center xl:text-xl md:text-base sm:text-sm xs:text-xs">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, coaliquyam erat, s
            </Typography>
            <div className="grid lg:grid-cols-4 xs:grid-cols-1 gap-4 xl:mt-16 xs:mt-10">
                {data.map(value => 
                     <div className='why-ipurvey-content text-center' key={value.title}>
                     <Box className="rounded-lg p-4 px-6 box">
                         <img src={value.img} alt='img' />
                     </Box>
                     <Typography component ="h5" className="xl:text-2xl md:text-xl xs:text-lg text-secondary font-f-bold my-7">
                        {value.title} 
                     </Typography>
                     <Typography component="p" className="xl:text-lg md:text-base xs:text-sm w-9/12 mx-auto">
                         {value.text}
                     </Typography>
                       </div>
                    
                    )}
                </div>
            </Container>  
        </div>
    )
}
