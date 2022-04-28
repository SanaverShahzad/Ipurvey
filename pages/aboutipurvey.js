import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  FormControlLabel,
} from "@material-ui/core";
import Trustby from "../components/homecomponents/trustedby";

export default function getintouch() {
  return (
    <>
      <Container>
      <div className=" py-14  xl:mt-40 lg:mt-0 md:mt-0 sm:mt-0 xs:mt-0" >
          <Grid container>
            <Grid item lg={6} md={6} sm={12}>
              <Typography className=" font-f-bold pt-12 text-secondary xl:text-4xl  lg:text-2xl md:text-sm xs:text-sm  xl:mt-0 lg:mt-0 md:mt-7">
                We love
              </Typography>
              <Typography className="font-f-bold  text-secondary xl:text-5xl mt-3  lg:text-3xl md:text-sm sm:text-sm  sm:mt-0  xs:text-sm xs:mt-0 ">
                to hear from you!
              </Typography>
              <Typography
                className=" font-f-regular xl:text-lg  lg:text-sm  sm:text-xs  xs:text-xs  lg:mt-3 md:mt-3 sm:mt-2 xs:mt-2 mt-10"
                color="primary"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea
              </Typography>
              <Typography
                className="font-f-regular xl:text-lg  lg:text-sm  sm:text-xs  xs:text-xs   lg:mt-3  md:mt-3 mt-7 sm:mt-2  xs:mt-2"
                color="primary"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea
              </Typography>
              <Box mt={3} className="xs:mt-2" >
              <FormControlLabel
                control={
                  <img
                    src="/images/Icon ionic-ios-mail.png"
                    className=" w-full  xs:ml-4 "
                  />
                }
                label={
                  <Typography className="ml-3 xl:text-2xl lg:text-xs ">
                    contact@ipurvey.com
                  </Typography>
                }
              />
              </Box>
            </Grid>

            <Grid item lg={6} md={6} sm={12}>
              <img
                src="/images/aboutipury.png"
                className="w-full lg:w-full lg:ml-7 sm:w-full lg:mt-24 md:mt-24 xl:mt-0"
              />
            </Grid>
          </Grid>
        </div>
      </Container>
      {/* about ipurvey section */}
      <Box bgcolor="#F0F4FC" py={5}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={7} md={12} sm={12} xs={12}>
              <Typography className="xl:text-4xl md:text-3xl xs:text-xl  font-f-bold text-secondary xl:pt-12 lg:pt-0  md:pt-0 ">
                About iPurvey
              </Typography>
              <Typography
                className=" xl:text-lg  lg:text-sm  sm:text-xs  xs:text-xs font-f-regular mt-4"
                color="primary"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </Typography>
              <Typography
                className=" xl:text-lg  lg:text-sm  sm:text-xs  xs:text-xs font-f-regular mt-4"
                color="primary"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </Typography>
              <Typography
                className=" xl:text-lg  lg:text-sm  sm:text-xs  xs:text-xs font-f-regular mt-4"
                color="primary"
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et{" "}
              </Typography>
            </Grid>
            <Grid item lg={5} md={12} sm={12} xs={12}>
              <img
                src="/images/iPurvery Logo PNG.png"
                className="w-full xl:mt-40 xl:ml-10 md:ml-auto md:mr-auto md:mt-8 lg:w-8/12 lg:ml-7 sm:w-full lg:mt-36 md:w-44 sm:w-44 xs:w-44  sm:ml-auto sm:mr-auto xs:ml-auto xs:mr-auto md:text-center  sm:text-center md:mt-0 xl:mt-0"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Trustby />
    </>
  );
}
