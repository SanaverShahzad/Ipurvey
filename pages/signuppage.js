import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Appbar from "../components/appbar/Appbar";
import SginUp from "../components/signupform";
import { Container, Box, Typography, Grid } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  background: {
    marginTop: 50,
    border: "1px solid #eee",
    boxShadow:
      "-webkit-box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);-moz-box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);box-shadow: 0px 7px 5px 0px rgba(238,238,238,1)",
    textAlign: "center",
    backgroundColor: "white",

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

  return (
    <div className={classes.root}>
      <Appbar />
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={6}>
            <Container fixed>
              <Box className={classes.background} py={5} px={5} color="black">
                <Typography variant="h4" component="p">
                  Sign Up
                </Typography>
                <Box pb={5} />

                <SginUp />
              </Box>
            </Container>
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
      </Container>
    </div>
  );
}
