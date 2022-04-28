import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
} from "@material-ui/core";
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
              Partners
              </Typography>
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      <div className="partners-bg-img">
      <img   src="/images/partaners.png  " />
      <div className="setting xl:bottom-96 lg:bottom-80  md:bottom-72 sm:bottom-72  xs:bottom-52  relative ">
        <Container>
          <Grid container>
            <Grid item xl={9}>
              <Box
                className="text-white font-f-bold  xl:text-4xl md:text-3xl xs:text-xl xs:pt-20 "
                pt={45}
              >
                Work with us!
              </Box>
              <Typography className="text-white font-f-regular xl:text-lg md:text-sm sm:text-sm xs:text-xs xl:pt-8 lg:pt-8 md:pt-8 sm:pt-4 xs:pt-0 ">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores
              </Typography>
              <Grid container>
                <Grid item xl={5} lg={4} md={5} sm={8} xs={12}>
                  <div className="pb-24">
                  <Button
          variant="contained"
          fullWidth
          className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm xl:mt-8 lg:mt-4 md:mt-4  sm:mt-4 xs:mt-0 text-primary  border border-solid  bg-white"
          color="primary"
        >
     Get API for your business!
        </Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
       
        </div>
      </div>
      <Box py={8}  className="-mt-96">
        <Container>
          <Grid container spacing={3} justify="center">
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <div className="  xl:pt-14 lg:pt-7 md:pt-7 sm:pt-7 xs:pt-7 ">
                <Typography className=" xl:text-4xl  lg:text-2xl md:text-sm xs:text-sm   font-f-medium  text-secondary  ">
                  Best Plans
                </Typography>
                <Typography className=" font-f-bold text-secondary xl:mt-4 lg:mt-0  xl:text-5xl lg:text-3xl md:text-xl sm:text-sm xs:text-sm ">
                  For your business
                </Typography>
                <Typography className="font-f-regular  xl:mt-8  lg:mt-3 md:mt-4 xl:text-lg md:text-sm sm:text-sm xs:text-xs sm:mt-4 xs:mt-4 ">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et{" "}
                </Typography>
                <Button color="primary" variant="contained" className="capitalize xl:text-xl lg:text-base xl:px-16 xl:py-4 md:px-12 md:py-3 font-f-medium mt-5">Sign Up today!</Button>
              </div>
            </Grid>
            <Grid item xl={6} lg={5} md={12} sm={12} xs={12}>
              <img
                src="/images/Group 3392.png"
                className=" xs:-mt-10 sm:-mt-10 xl:-mt-10 lg:mt-2 md:-mt-24 sm:-mt-16  w-full lg:w-full sm:w-96  md:w-96 xs:w-80 mr-auto ml-auto  "
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* benifits section is started */}
      <Box bgcolor="#F0F4FC" mt={-8} mb={6} py={6}>
        <Container>
          <Typography className="xl:text-4xl md:text-3xl xs:text-xl text-secondary text-center font-f-bold mb-10 ">
            How to get Started?
          </Typography>
          <Grid container justify="center" spacing={3}>
            <Grid item lg={3} md={3} sm={3} xs={10}>
              <Box textAlign="center">
                <Paper
                  elevation={3}
                  className="py-5 w-24 ml-auto mr-auto rounded-lg"
                >
                  <img
                    src="/images/Group 3377.png"
                    className="ml-auto mr-auto"
                  />
                </Paper>
                <Typography className="xl:text-2xl md:text-xl xs:text-lg font-f-bold text-secondary mt-4 ">
                  Step Title
                </Typography>
                <Typography className="xl:text-lg md:text-base sm:text-sm xs:text-xs mt-7">
                  Lorem ipsum dolor sit amet,
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={1} md={1} sm={1} xs={2}>
              <div className=" xl:mt-24 lg:mt-24 md:mt-24 sm:mt-20 xs:mt-20">
                <ArrowForwardIosIcon fontSize="large" />
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={10}>
              <Box textAlign="center">
                <Paper
                  elevation={3}
                  className="py-5 w-24 ml-auto mr-auto rounded-lg"
                >
                  <img
                    src="/images/Group 3377.png"
                    className="ml-auto mr-auto"
                  />
                </Paper>
                <Typography className="xl:text-2xl md:text-xl xs:text-lg font-f-bold text-secondary mt-4 ">
                  Step Title
                </Typography>
                <Typography className="xl:text-lg md:text-base sm:text-sm xs:text-xs mt-7">
                  Lorem ipsum dolor sit amet,
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={1} md={1} sm={1} xs={2}>
              <div className=" xl:mt-24 lg:mt-24 md:mt-24 sm:mt-20 xs:mt-20">
                <ArrowForwardIosIcon fontSize="large" />
              </div>
            </Grid>
            <Grid item lg={3} md={3} sm={3} xs={12}>
              <Box textAlign="center" className="xs:pr-11" >
                <Paper
                  elevation={3}
                  className="py-5 w-24 ml-auto mr-auto rounded-lg"
                >
                  <img
                    src="/images/Group 3377.png"
                    className="ml-auto mr-auto"
                  />
                </Paper>
                <Typography className="xl:text-2xl md:text-xl xs:text-lg font-f-bold text-secondary mt-4 ">
                  Step Title
                </Typography>
                <Typography className="xl:text-lg md:text-base sm:text-sm xs:text-xs mt-7">
                  Lorem ipsum dolor sit amet,
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* benifits section is ended */}
    </>
  );
}
