import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  FormControlLabel,
  TextField,
  Button,
} from "@material-ui/core";
import Video from "../components/homecomponents/video";

export default function getintouch() {
  const [state, setstate] = React.useState({
    email: "",
    password: "",
    emailError:false,
    passwordError: false,
    error:false,
    
    firstname:"",
    firstnameError:false,
    
    lastname:"",
    lastnameError:false,
    message:"",
    messageError:false,
    subject:"",
    subjectError:false,

  });
  // Check email validate
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const na=/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
  return (
    <div className="getintouch ">
      <Container>
        <div className=" py-14  xl:mt-40 lg:mt-0 md:mt-0 sm:mt-0 xs:mt-0" >
          <Grid container>
            <Grid item lg={6} md={6} sm={12}>
              <Typography className=" font-f-bold pt-12 text-secondary xl:text-4xl  lg:text-2xl md:text-sm xs:text-sm  xl:mt-0 lg:mt-0 md:mt-7">
                We love
              </Typography>
              <Typography className="font-f-bold  text-secondary  mt-3  xl:text-5xl lg:text-3xl md:text-sm sm:text-sm xs:text-sm sm:mt-0   xs:mt-0 ">
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
              <Box mt={3}>
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
                src="/images/Group 3122.png"
                className="w-full lg:w-full lg:ml-7 sm:w-full lg:mt-24 md:mt-24 xl:mt-0"
              />
            </Grid>
          </Grid>
        </div>
      </Container>
      <Box bgcolor="#F0F4FC" className="py-20 ">
        <Container>
          <Grid container spacing={6}>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Box className="  xl:pr-9 lg:pr-9 xl:border-r-2 border-blue-600  md:mt-14  md:border-r-0 sm:border-r-0 xs:border-r-0">
                <Video />
                <Typography className="video-text xl:text-lg  lg:text-sm  sm:text-xs  xs:text-xs mt-4 p-9  rounded-md opacity-60 ">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Typography className=" xl:text-4xl  lg:text-2xl font-f-semibold xl:mt-14 lg:mt-0 md:mt-0 sm:mt-0 xs:mt-0 " color="primary">
                Get in touch!
              </Typography>
              <Grid container spacing={2}>
                <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    label="First Name"
                    color="primary"
                    type="text"
                    variant="outlined"
                    fullWidth
                    className="  xl:mt-8 md:mt-3  lg:mt-3 sm:mt-3 xs:mt-3  xl:text-lg  lg:text-base font-f-regular leading-8  bg-white text-opacity-60  text-error "
              
                    helperText = {state.lastnameError && !na.test(state.lastname) && 'First Name is not valid' }
                    error = {state.lastnameError && !na.test(state.lastname)}
                    onChange = {e => setstate({...state,lastname:e.target.value})}
                    autoComplete="email"
                    onFocus={()=>setstate({...state,lastnameError:true})}
                     />
                </Grid>
                <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    label="Surname"
                    type="text"
                    color="primary"
                    variant="outlined"
                    fullWidth
                    className="xl:mt-8  xl:mt-3 xl:text-lg  lg:text-base  lg:mt-0 md:mt-0 sm:mt-0  xs:mt-0 leading-8 namefiled bg-white  text-opacity-60 text-error"
                  
                    helperText = {state.firstnameError && !na.test(state.firstname) && 'Last Name is not valid'}
                    error = {state.firstnameError && !na.test(state.firstname)}
                    onChange = {e => setstate({...state,firstname:e.target.value})}
                    autoComplete="email"
                    onFocus={()=>setstate({...state,firstnameError:true})}
                  
                  />
                </Grid>
              </Grid>
              <TextField
                label="Email Address"
                color="primary"
                type="text"
                variant="outlined"
                fullWidth
                className="xl:mt-8 md:mt-3  xl:text-lg  lg:text-base  lg:mt-3 sm:mt-3 xs:mt-3  namefiled bg-white text-opacity-60 text-error"
                helperText = {state.emailError && !re.test(state.email) && 'Email is not valid'}
                error = {state.emailError && !re.test(state.email)}
                onChange = {e => setstate({...state,email:e.target.value})}
                autoComplete="email"
                onFocus={()=>setstate({...state,emailError:true})}
             />
              <TextField
                label="Subject"
                color="primary"
                type="text"
                variant="outlined"
                fullWidth
                className="xl:mt-8 md:mt-3 xl:text-lg  lg:text-base  lg:mt-3 sm:mt-3 xs:mt-3  namefiled bg-white text-opacity-60 text-error"
                helperText = {state.subjectError && !na.test(state.subject) && 'Subject is not valid' }
                error = {state.subjectError && !na.test(state.subject)}
                onChange = {e => setstate({...state,subject:e.target.value})}
                autoComplete="email"
                onFocus={()=>setstate({...state,subjectError:true})}
             />
              <TextField
                label="Message"
                color="primary"
                type="text"
                multiline
                rows={7}
                variant="outlined"
                fullWidth
                className="xl:mt-8 md:mt-3 xl:text-lg  lg:text-base   lg:mt-3 sm:mt-3 xs:mt-3  namefiled bg-white text-opacity-60 text-error"
                helperText = {state.messageError && !na.test(state.message) && 'message is not valid' }
                error = {state.messageError && !na.test(state.message)}
                onChange = {e => setstate({...state,message:e.target.value})}
                autoComplete="email"
                onFocus={()=>setstate({...state,messageError:true})}
             />
                <Button
          variant="contained"
          fullWidth
          className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm xl:mt-8 lg:mt-4 md:mt-4  sm:mt-4 xs:mt-4"
          color="primary"
        >
          Send
        </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/*  our office component started */}
      <Box bgcolor="#fff" py={10}>
        <Box bgcolor="#F0F4FC" py={8}>
          <Container>
            <Typography className="text-center xl:text-4xl md:text-3xl xs:text-xl text-secondary font-f-bold ">
              Our Office
            </Typography>
            <Grid container spacing={3}>
              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <img
                  src="/images/Mask Group 30.png "
                  className=" xs:mt-8 xl:mt-10 lg:mt-14 md:mt-10  w-full lg:w-full sm:w-full md:w-full  "
                />
              </Grid>

              <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                <div className="ml-12 xl:pt-7 lg:pt-0 ">
                  <Typography className="xl:text-3xl md:2x-l xs:text-xl text-secondary font-f-bold opacity-60  xl:mt-10  lg:mt-10  ">
                    Head Office
                  </Typography>
                  <Box mt="8px">
                    <FormControlLabel
                      control={
                        <img
                          src="/images/Icon awesome-building.png"
                          className=" "
                          width="16px"
                          height="19px"
                        />
                      }
                      label={
                        <Typography
                          className=" xl:text-lg md:text-base sm:text-sm xs:text-xs font-f-regular ml-5"
                          color="primary"
                        >
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy
                        </Typography>
                      }
                    />
                  </Box>
                  <Box mt="8px">
                    <FormControlLabel
                      control={
                        <img
                          src="/images/Icon ionic-ios-call.png"
                          className=" "
                          width="16px"
                          height="19px"
                        />
                      }
                      label={
                        <Typography
                          className=" xl:text-lg md:text-base sm:text-sm xs:text-xs font-f-regular ml-5"
                          color="primary"
                        >
                          Lorem ipsum
                        </Typography>
                      }
                    />
                  </Box>
                  <Box mt="8px">
                    <FormControlLabel
                      control={
                        <img
                          src="/images/Icon ionic-ios-mail.png"
                          className=" "
                          width="16px"
                          height="19px"
                        />
                      }
                      label={
                        <Typography
                          className=" xl:text-lg md:text-base sm:text-sm xs:text-xs font-f-regular ml-5"
                          color="primary"
                        >
                          Lorem ipsum dolor sit
                        </Typography>
                      }
                    />
                  </Box>
                  <Typography className="xl:text-3xl md:2x-l xs:text-xl  text-secondary font-f-bold opacity-60  xl:mt-10  lg:mt-4 md:mt-5 xs:mt-5 ">
                    iPurvey Business Support
                  </Typography>
                  <Box mt="8px">
                    <FormControlLabel
                      control={
                        <img
                          src="/images/Icon ionic-ios-call.png"
                          className=" "
                          width="16px"
                          height="19px"
                        />
                      }
                      label={
                        <Typography
                          className=" xl:text-lg md:text-base sm:text-sm xs:text-xs font-f-regular ml-5"
                          color="primary"
                        >
                          Lorem ipsum
                        </Typography>
                      }
                    />
                  </Box>
                  <Typography className="xl:text-3xl lg:text-lg md:2x-l xs:text-xl  text-secondary font-f-bold opacity-60  xl:mt-10  lg:mt-4 md:mt-5 xs:mt-5 ">
                    Client Support
                  </Typography>
                  <Box mt="8px">
                    <FormControlLabel
                      control={
                        <img
                          src="/images/Icon ionic-ios-call.png"
                          className=" "
                          width="16px"
                          height="19px"
                        />
                      }
                      label={
                        <Typography
                          className="xl:text-2xl lg:text-sm  sm:text-xs  xs:text-xs font-f-regular ml-5"
                          color="primary"
                        >
                          +1 1234 4567 898
                        </Typography>
                      }
                    />
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
