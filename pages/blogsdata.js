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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
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
[theme.breakpoints.down('lg')]: {
  appbarbg:{
    padding:"0px 0",
},
},

[theme.breakpoints.down('xs')]: {
  appbarbg:{
    padding:"0px 0",
    marginTop:"68px",
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
  blogslider: {
    "& .slick-prev,.slick-prev:hover, .slick-prev:focus": {
      left: "28px",
      color: "white",
      zIndex: "100",
      height: "40px",
      width: "40px",
    },
    "& .slick-next,.slick-next:hover, .slick-next:focus": {
      right: "28px",
      color: "white",
      zIndex: "100",
      height: "40px",
      width: "40px",
    },
    "& .slick-dots": {
      bottom: "45px",
    },
    " & .slick-dots li.slick-active button:before": {
      opacity: 1,
      color: "white",
      background: "transparent",
    },
    "& .slick-dots li button:before": {
      fontSize: "16px",
      border: "1px solid white",
      borderRadius: "10px",
      background: "transparent",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    nextArrow: <ArrowForwardIosIcon fontSize="large" />,
    prevArrow: <ArrowBackIosIcon fontSize="large" />,
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
              <Typography className=" xl:text-4xl md:text-3xl xs:text-xl  font-f-bold text-secondary md:text-3xl sm:text-2xl xs:text-xl ">
                iPurvey Blogs
              </Typography>
            </Button>
          </Container>
        </Toolbar>
      </AppBar>

      {/* top news component started */}

      {/* top news component ended */}
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={7} md={12} sm={12} xs={12}>
            <Typography className="xl:text-3xl lg:text-xl md:text-base  sm:text-base  text-secondary font-f-bold  mt-16 ">
              Lorem ipsum dolor sit amet, consetetur
            </Typography>

            <Typography
              className="xl:text-sm lg:text-xs font-f-regular my-2 "
              color="primary"
            >
              January 21, 2021 | 05:00 PM
            </Typography>
            <Slider {...settings} className={classes.blogslider}>
              <div>
                <img
                  src="/images/Rectangle plan.png"
                  className="w-full overflow-hidden "
                />
              </div>
              <div>
                <img
                  src="/images/Rectangle plan.png"
                  className="w-full overflow-hidden "
                />
              </div>
              <div>
                <img
                  src="/images/Rectangle plan.png"
                  className="w-full overflow-hidden "
                />
              </div>
              <div>
                <img
                  src="/images/Rectangle plan.png"
                  className="w-full overflow-hidden "
                />
              </div>
              <div>
                <img
                  src="/images/Rectangle plan.png"
                  className="w-full overflow-hidden "
                />
              </div>
            </Slider>
            <Typography
              className=" font-f-regular xl:text-base  lg:text-sm md:text-sm sm:text-xs xl:my-8 lg:my-4 md:my-3 sm:my-3 xs:my-3  "
              color="primary"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolconsetetur s
            </Typography>
            <Typography
              className=" font-f-regular xl:text-base  lg:text-sm md:text-sm sm:text-xs xl:my-8  lg:my-4 md:my-3 sm:my-3 xs:my-3" 
              color="primary"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolconsetetur s
            </Typography>
            <Typography
              className=" font-f-regular xl:text-base  lg:text-sm md:text-sm sm:text-xs xl:my-8 lg:my-4 md:my-3 sm:my-3 xs:my-3  "
              color="primary"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolconsetetur s
            </Typography>
            <div className="my-14">
              <Typography className="font-f-bold   xl:text-4xl lg:text-2xl md:text-xl sm:text-lg xs:text-base  mb-5 ">
                Top News
              </Typography>
              <Grid container spacing={3}>
                {carddata.map((data) => {
                  return (
                    <>
                      <Grid item xl={4} lg={6} md={4} sm={6}>
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
                      </Grid>
                    </>
                  );
                })}
              </Grid>
            </div>
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

            <Typography className="font-f-bold text-2xl text-secondary mt-20">
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
    </>
  );
}
