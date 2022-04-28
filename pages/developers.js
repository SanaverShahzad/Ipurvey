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
  Link,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import CloseIcon from '@material-ui/icons/Close';
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
}));

export default function ButtonAppBar() {
  const classes = useStyles();

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
      {/*  our team component started */}

      <Box bgcolor="#fff" py={8} className="xs:py-10">
        <Container>
          <Grid container>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <Typography className="xl:text-4xl md:text-3xl xs:text-xl  font-f-bold  text-secondary ">
                iPurvey API
              </Typography>
              <Typography className="xl:text-lg md:text-base sm:text-sm xs:text-xs font-f-regular  mt-2">
         
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum{" "}
              </Typography>
              <Button
                        className="capitalize xl:text-xl  md:text-sm xs:text-xs  mt-2 float-right"
                        color="primary"
                      >
                        Start Integration <ArrowForwardIcon   className="ml-2 xl:text-2xl md:text-xl xs:text-lg" />
                      </Button>
              <Grid container justify="center">
                <Grid item xl={9} lg={10} md={10} sm={12} xs={12}>
                <Button
          variant="contained"
          fullWidth
          className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm xl:mt-8 lg:mt-4 md:mt-4  sm:mt-4 xs:mt-4"
          color="primary"
        >
         View API Documentation
        </Button>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xl={9} lg={10} md={10} sm={12} xs={12}>
                <Link href="/getintouch">
                <Button
          variant="contained"
          fullWidth
          className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm xl:mt-8 lg:mt-4 md:mt-4  sm:mt-4 xs:mt-4 text-primary hover:text-white  hover:border hover:border-solid hover:bg-white    border border-solid  bg-white"
    
        >
        Contact Us
        </Button>
        </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <img
                src="/images/Mask Group.png "
                className="  xl:-mt-28 lg:-mt-20 md:-mt-20  sm:-mt-14 xs:-mt-10 w-full lg:w-full sm:w-full md:w-full  "
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box bgcolor="#fff" py={8} className="xs:py-10">
        <Container>
          <Grid container>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <img
                src="/images/Pc.png"
                className="  xl:mt-0 lg:mt-0 md:-mt-32  sm:-mt-24 xs:-mt-24 ml-auto mr-auto w-full lg:w-full sm:w-full md:w-full  "
              />
            </Grid>
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <Typography className="xl:text-4xl md:text-2xl xs:text-xl font-f-bold  text-secondary text-right md:text-center sm:text-center xs:text-center  ">
                Lorem ipsum dolor sit
              </Typography>
              <Grid container spacing={4}>
                <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                  <Typography className="xl:text-2xl lg:text-lg md:text-xl xs:text-lg font-f-bold text-secondary text-center xl:mt-5 lg:mt-5 md:mt-5 sm:mt-5 xs:mt-5 ">
                    Lorem ipsum dolor sit
                  </Typography>
                  <Typography className="xl:text-lg md:text-sm sm:text-sm xs:text-xs font-f-regular  mt-3 text-center">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam
                  </Typography>
                </Grid>
                <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                  <Typography className="xl:text-2xl lg:text-lg md:text-xl xs:text-lg font-f-bold text-secondary text-center xl:mt-5 lg:mt-5 md:mt-0 sm:mt-0 xs:mt-0 ">
                    Lorem ipsum dolor sit
                  </Typography>
                  <Typography className="xl:text-lg md:text-sm sm:text-sm xs:text-xs font-f-regular  mt-3 text-center">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam
                  </Typography>
                </Grid>
              </Grid>
              <Typography className="xl:text-2xl  lg:text-lg md:text-xl xs:text-lg font-f-bold text-secondary text-center xl:mt-10 lg:mt-5 md:mt-5 sm:mt-5 xs:mt-5 ">
                Lorem ipsum dolor sit
              </Typography>
              <Typography className="xl:text-lg md:text-sm sm:text-sm xs:text-xs font-f-regular  mt-3 text-center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor
              </Typography>
              <Button
                        className="capitalize xl:text-xl  md:text-sm xs:text-xs  mt-2 float-right"
                        color="primary"
                      >
                        Start Integration <ArrowForwardIcon   className="ml-2 xl:text-2xl md:text-xl xs:text-lg" />
                      </Button>
            </Grid>
          </Grid>
        </Container>
        
      </Box>
     
    </>
  );
}
