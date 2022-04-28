import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Container,
  Typography,
  Button,
  Grid,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import Slider from "react-slick";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  appbarbg:{
    backgroundColor:"#F0F4FC",
    padding:"20px 0",
    marginTop:"100px",
},
[theme.breakpoints.only('xl')]: {
  appbarbg:{
   
    marginTop:"190px",
},
},
  root: {
    marginTop: "10px",
    // maxWidth: "279px",
    borderRadius: "10px",
  },
  media: {
    height: 140,
  },
  [theme.breakpoints.down("md")]: {
    media: {
      height: 240,
    },
  },
  [theme.breakpoints.down('xl')]: {
  slidersetting:{
   " & .slick-dots":{
      bottom: "380px",
      // @media (max-width: 900px) {
      //     bottom: 20px;
      // }
      
  },
  " & .slick-dots li":{
      margin: "0px 11px",
      background: "transparent",
     
  },
  " & .slick-dots li.slick-active button:before":{
      opacity:"1",
      color: "white",
      background: "transparent",
  },
  " & .slick-dots li button:before":{
      fontFamily: 'slick',
      fontSize: "16px",
      border: "1px solid white",
      borderRadius: "10px",
      background: "transparent",
     
      
  },
  },
},
  [theme.breakpoints.down('lg')]: {
    slidersetting:{
      " & .slick-dots":{
         bottom: "300px",
       
         
     },
    },
  },
  [theme.breakpoints.down('md')]: {
    slidersetting:{
      " & .slick-dots":{
         bottom: "354px",
       
         
     },
    },
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const carddata = [
    { image: "/images/Rectangle plan.png" },
    { image: "/images/Rectangle1.png" },
    { image: "/images/Rectangle2.png" },
    { image: "/images/Rectangle3.png" },
    { image: "/images/Rectangle4.png" },
    { image: "/images/Rectangle5.png" },
    { image: "/images/Rectangle6.png" },
    { image: "/images/Rectangle7.png" },
    { image: "/images/Rectangle8.png" },
  ];
  const facebookdata = [
    { facebookimage: "/images/skey1.png" },
    { facebookimage: "/images/skey2.png" },
    { facebookimage: "/images/skey3.png" },
    { facebookimage: "/images/skey4.png" },
    { facebookimage: "/images/skey5.png" },
    { facebookimage: "/images/skey6.png" },
  ];

  return (
    <>
    <AppBar position="static" className={classes.appbarbg}>
        <Toolbar>
          <Container>
            <Button className="capitalize">
              <Typography className="  font-f-bold text-secondary   xl:text-4xl lg:text-2xl md:text-xl xs:text-xl ">
              Developers
              </Typography>
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
    
      <Slider {...settings} className={classes.slidersetting}>
      <div className="partners-bg-img">
      <img   src="/images/Mask Group 9.png  " />
      <div className="setting xl:bottom-96 lg:bottom-80  md:bottom-72 sm:bottom-72  xs:bottom-52  relative ">
        <Container>
          <Grid container>
            <Grid item xl={9}>
              <Box
                className="text-white font-f-bold  xl:text-4xl md:text-3xl xs:text-xl xs:pt-24 "
                pt={45}
              >
                News Heading
              </Box>
              <Typography className="text-white font-f-regular xl:text-lg md:text-sm sm:text-sm xs:text-xs xl:pt-8 lg:pt-8 md:pt-8 sm:pt-4 xs:pt-0 ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, 
              </Typography>
              <Grid container>
                <Grid item xl={4} lg={4} md={3} sm={3} xs={12}>
                  
                  <Button
          variant="contained"
          fullWidth
          className="capitalize  xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm xl:mt-8 lg:mt-4 md:mt-4  sm:mt-4 xs:mt-0 text-primary  border border-solid  bg-white"
          color="primary"
        >
    Learn More
        </Button>
                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
       
        </div>
      </div>
      <div className="partners-bg-img">
      <img   src="/images/Mask Group 9.png  " />
      <div className="setting xl:bottom-96 lg:bottom-80  md:bottom-72 sm:bottom-72  xs:bottom-52  relative ">
        <Container>
          <Grid container>
            <Grid item xl={9}>
              <Box
                className="text-white font-f-bold  xl:text-4xl md:text-3xl xs:text-xl xs:pt-24 "
                pt={45}
              >
                News Heading
              </Box>
              <Typography className="text-white font-f-regular xl:text-lg md:text-sm sm:text-sm xs:text-xs xl:pt-8 lg:pt-8 md:pt-8 sm:pt-4 xs:pt-0 ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, 
              </Typography>
              <Grid container>
                <Grid item xl={4} lg={4} md={3} sm={3} xs={12}>
                <Button
          variant="contained"
          fullWidth
          className="capitalize pb-24 xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm xl:mt-8 lg:mt-4 md:mt-4  sm:mt-4 xs:mt-0 text-primary  border border-solid  bg-white"
          color="primary"
        >
    Learn More
        </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
       
        </div>
      </div>
      <div className="partners-bg-img">
      <img   src="/images/Mask Group 9.png  " />
      <div className="setting xl:bottom-96 lg:bottom-80  md:bottom-72 sm:bottom-72  xs:bottom-52  relative ">
        <Container>
          <Grid container>
            <Grid item xl={9}>
              <Box
                className="text-white font-f-bold  xl:text-4xl md:text-3xl xs:text-xl xs:pt-24 "
                pt={45}
              >
                News Heading
              </Box>
              <Typography className="text-white font-f-regular xl:text-lg md:text-sm sm:text-sm xs:text-xs xl:pt-8 lg:pt-8 md:pt-8 sm:pt-4 xs:pt-0 ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, 
              </Typography>
              <Grid container>
                <Grid item xl={4} lg={4} md={3} sm={3} xs={12}>
                <Button
          variant="contained"
          fullWidth
          className="capitalize pb-24 xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm xl:mt-8 lg:mt-4 md:mt-4  sm:mt-4 xs:mt-0 text-primary  border border-solid  bg-white"
          color="primary"
        >
    Learn More
        </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
       
        </div>
      </div>
    
     

       
      </Slider>

      {/* top news component started */}

      {/* top news component ended */}
      <div className="xl:-mt-72 lg:-mt-64 md:-mt-64  xs:-mt-80  ">
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={7} md={12} sm={12} xs={12}>
            <Typography className="font-f-bold   xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-base mt-7 mb-5 ">
              Top News
            </Typography>
            <Grid container spacing={3}>
              {carddata.map((data) => {
                return (
                  <>
                    <Grid item  xl={4} lg={6} md={6} sm={6}>
                    <Link href="/blogsdata">
                        <Card className={classes.root}>
                          <CardActionArea>
                            <CardMedia
                              className={classes.media}
                              image={data.image}
                              title="Contemplative Reptile"
                            />
                            <CardContent>
                              <Typography className="xl:text-xl md:text-base sm:text-sm xs:text-xs font-f-bold ">
                                Lorem ipsum dolor sit amet, consetetur
                              </Typography>
                              <Typography
                                className="xl:text-sm lg:text-xs font-f-light my-2 "
                                color="primary"
                              >
                                January 21, 2021 | 05:00 PM
                              </Typography>
                              <Typography
                                className=" font-f-regular xl:text-base lg:text-sm "
                                color="primary"
                              >
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                              </Typography>
                             
                            </CardContent>
                            <Button
                        className="capitalize xl:text-xl  md:text-sm xs:text-xs  mt-2 float-right"
                        color="primary"
                      >
                        Learn More <ArrowForwardIcon   className="ml-2 xl:text-2xl md:text-xl xs:text-lg" />
                      </Button>
                           
                          </CardActionArea>
                        </Card>
                      </Link>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Grid>
          <Grid item lg={5} md={12} sm={12} xs={12}>
          <Typography className="font-f-bold text-2xl text-secondary mt-20">
              Facebook Feed
            </Typography>
            <Grid container>
              {facebookdata.map((data) => {
                return (
                  <>
                    <Grid item lg={4} md={4} sm={4} xs={6}>
                      <img src={data.facebookimage} className="w-full" />
                    </Grid>
                  </>
                );
              })}
            </Grid>
            <Box textAlign="center" mt={2}>
            
            <Button
          variant="contained"
          className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm"
          color="primary"
        >
         <img src="/images/Group 833.png" className="mr-4" /> Follow us on Facebook         
        </Button>
            </Box>

            <Typography className="font-f-bold text-2xl text-secondary xl:mt-20 lg:mt-14 ">
              Instagram Feed
            </Typography>
            <Grid container>
              {facebookdata.map((data) => {
                return (
                  <>
                    <Grid item lg={4} md={4} sm={4} xs={6}>
                      <img src={data.facebookimage} className="w-full" />
                    </Grid>
                  </>
                );
              })}
            </Grid>
            <Box textAlign="center" my={3}>
            <Button
          variant="contained"
          className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm   instabg  "
          color="primary"
        >
         <InstagramIcon className="mr-4" /> Follow us on Instagram        
        </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      </div>
    </>
  );
}