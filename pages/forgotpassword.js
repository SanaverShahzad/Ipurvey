import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Typography,
  InputBase,
  Grid,
  Button,
} from "@material-ui/core/";

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
  const [state, setstate] = React.useState({
    show:false,
    fields: {
      email: ""
    },
    errors: {
      email: ""
    }
  })
  const validate = (name, value) => {
    switch (name) {
      case "email":
        if (!value) {
          return "Email is Required";
        } else if (
          !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          return "Enter a valid email address";
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };
  const handleUserInput = e => {
    setstate({
      errors: {
        ...state.errors,
        [e.target.name]: validate(e.target.name, e.target.value)
      },
      fields: {
        ...state.fields,
        [e.target.name]: e.target.value
      }
    });
  };
  const handleSubmit = e => {
    const { fields } = state;
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach(name => {
      const error = validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setstate({...state, errors: validationErrors });
      return;
    }
  };
const {fields,errors} = state;

  return (
    <div className={classes.root}>
      <Container fixed>
        <Box pt={10} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={6}>
            <Container fixed>
              <Box className={classes.background} py={5} color="black">
                <Typography variant="h4" component="p" className="font-f-semibold "  >
                  Forgot Password?
                </Typography>

                <img
                  className="mx-auto py-10"
                  src="/images/forgot_password.png"
                  alt="me"
                  width="auto"
                  height="auto"
                />
                <Typography
                  className="mx-8 pb-5 text-primary text-base  font-f-regular "
                  component="p"
                >
                  We'll send a magic link on your email address and your
                  password can be recovered!
                </Typography>

                <Box className={classes.inputcolor} pt={2} mx={6}>
                  <InputBase
                    placeholder="Confirm Email Address"
                    className="custom-input"
                    onChange={handleUserInput}
                    name="email"
                    type="email"
                  />
                  <span className="text-red-500 text-left block mt-2">{errors.email}</span>
                </Box>

                <Box pt={15} mx={6}>
                  <Button
                    className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Get Magic Link
                  </Button>
                  
                </Box>
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
        <Box pb={15} />
      </Container>
    </div>
  );
}
