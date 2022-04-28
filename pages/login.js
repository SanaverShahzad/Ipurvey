import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Login from "../components/loginwith";
import { Container, Box, Typography, Grid } from "@material-ui/core/";

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
      <Container fixed>
        <Box pt={10} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={6}>
            <Container fixed>
              <Box className={classes.background} py={5} px={5} color="black">
                <Typography variant="h4" component="p">
                  Login
                </Typography>
                <Login />
              </Box>
            </Container>
          </Grid>
          <Grid className="self-end" item xs={6} md={4} lg={6}>
            <Box className={classes.mediasetting}>
              <img
                className="ml-auto"
                src="/images/woman.png"
                alt="me"
                width="auto"
                height="auto"
              />
            </Box>
          </Grid>
        </Grid>
        <Box pb={5} />
      </Container>
    </div>
  );
}
