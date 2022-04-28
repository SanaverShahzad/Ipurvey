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
  Paper,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import clsx from "clsx";
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
              Terms of Service
              </Typography>
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      <Container>
        <div className="mb-10">
          <Grid container >
          <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              {[0, 1, 2].map(() => {
                return (
                  <>
                    <Typography className=" xl:text-2xl md:text-xl xs:text-lg font-f-medium text-secondary mt-12">
                      Heading
                    </Typography>
                    <Typography className=" xl:text-lg md:text-base sm:text-sm xs:text-xs font-f-regular  mt-2">
                      {" "}
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum.{" "}
                    </Typography>
                    <div>
                      <Button
                        className="capitalize xl:text-xl  md:text-sm xs:text-xs  mt-2 float-right"
                        color="primary"
                      >
                        Learn More <ArrowForwardIcon   className="ml-2 xl:text-2xl md:text-xl xs:text-lg" />
                      </Button>
                    
                    </div>
                  </>
                );
              })}
            </Grid>
            <Grid item xl={1} lg={1} ></Grid>
            <Grid item xl={5} lg={5} md={12} sm={12} xs={12}>
              <Paper className=" xl:p-16 lg:p-8 md:p-10  sm:p-10 xs:p-8  xl:mt-32 lg:mt-32 xs:mt-6 ml-5">
                <Typography className="xl:text-3xl lg:text-xl md:text-base  sm:text-base  font-f-medium text-center pb-3">
                  In Simple English
                </Typography>
                <Typography
                  className="xl:text-lg  md:text-base sm:text-sm xs:text-xs font-f-regular text-center xl:mt-9 lg:mt-0 md:mt-0 sm:mt-0  "
                  color="primary"
                >
                  {" "}
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}
