import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography, Grid, Slide } from "@material-ui/core";
import Signupstep1 from "../components/signupstep1";
import Signup from "../components/signupform";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(240,244,252,0.5)",
  },
  background: {
    marginTop: 50,
    border: "1px solid #eee",
    boxShadow:
      "-webkit-box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);-moz-box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);!important",
    textAlign: "center",
    backgroundColor: "white",
    overflow: "hidden",
    [theme.breakpoints.only("xl")]: {
      width: "75%",
    },
  },
  [theme.breakpoints.between("xs", "md")]: {
    mediasetting: {
      display: "none",
    },
  },
}));

export default function login() {
  const classes = useStyles();
  const [state, setstate] = React.useState({
    show: true,
  });
  let goto = (prop) =>  setstate({ ...state, show: prop });

  return (
    <div className={classes.root}>
      <Container fixed>
        <Box pt={10} />
        <Grid container>
          <Grid item xs={12} md={12} lg={6}>
            <Box className={classes.background} py={5} px={5} color="black">
              <Typography className="my-8 font-f-semibold " variant="h4" component="p">
                Sign Up
              </Typography>
              {state.show ? (
                <Signupstep1 data={goto} />
              ) : (
                <Slide direction="left" in={true}>
                  <Box>
                    <Signup />
                  </Box>
                </Slide>
              )}
            </Box>
          </Grid>

          <Grid className="self-end" item xs={6}>
            <Box className={classes.mediasetting}>
              <img
                className="ml-auto"
                src="/images/man.png"
                alt="me"
                width="auto"
                height="auto"
              />
            </Box>
          </Grid>
        </Grid>
        <Box pb={15} />
      </Container>
    </div>
  );
}
