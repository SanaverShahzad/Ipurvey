import React from 'react'
import { Box, Typography,Button,Paper,Container } from '@material-ui/core'
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx'
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
const useStyles = makeStyles((theme) => ({
   box:{
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 32,
   }
  }));

var settings = {
    dots: false,
    infinite: true,
    arrows:false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  const images = ['/images/Group 3317.png','/images/Group 3318.png','/images/Group 3319.png','/images/Group 3320.png','/images/Group 3317.png','/images/Group 3318.png','/images/Group 3319.png','/images/Group 3320.png','/images/Group 3317.png','/images/Group 3318.png','/images/Group 3319.png','/images/Group 3320.png','/images/Group 3317.png','/images/Group 3318.png','/images/Group 3319.png','/images/Group 3320.png']
export default function Trustedby() {
const classes = useStyles()
    return (
        <div className="trusted-by mb-20">
               <Container>
            <Typography component="h4" className="heading xl:text-4xl md:text-3xl xs:text-xl font-f-bold text-secondary text-center xl:pt-20 xl:pb-12 xs:pt-12 xs:pb-8">
            Trusted by
            </Typography>
            
            <Slider {...settings}>
                {
                    images.map((value,i) => 
                        <div key={i}>
                            <img src={value} alt = "" />
                        </div>
                        
                        )
                
                }
            </Slider>
            <Paper elevation={0} className={clsx(classes.box,'xl:w-3/5 lg:w-11/12 xs:w-full mx-auto mt-12')}>
             <div className="grid lg:grid-cols-2 xs:grid-cols-1  gap-4">
                 <div className="p-12">
                 <Typography component="h4" className="heading xl:text-3xl md:text-2xl xs:text-xl font-f-bold text-secondary mb-4">
                 Get registered today!
                 </Typography>
                 <Typography component="p" className="text-primary md:text-base xs:text-sm">
                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore e
                 </Typography>
                 <Box className="mt-7">
        <Button
          variant="contained"
          className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm lg:inline-block xs:block xs:w-full lg:w-auto"
          color="primary"
        >
          Sign Up  today!<ArrowRightAltIcon className="mt-1 ml-2" />
        </Button>
      </Box>
      <Box className="mt-16 text-center">
      <Typography component="h4" className="heading md:text-2xl  xs:text-xl font-f-bold text-secondary mb-4">
      Coming Soon 
   
                 </Typography>
                 <img src="/images/App store Icons.png" className="mx-auto" alt="img"/>
      </Box>
                 </div>
                 <div className="trust-bg">
                 </div>
                 </div>   
           
            </Paper>
    </Container>
        </div>
    )
}
