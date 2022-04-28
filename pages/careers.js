import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  FormControlLabel,
  Box,
  Paper,
} from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";


const data = [
  {img:'images/Group 3377.png',
  title:'Benefit Title',
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"      
  },
  {img:'images/Group 3385.png',
  title:'Benefit Title',
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"      
  },
  {img:'images/Group 3379.png',
  title:'Benefit Title',
  text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"      
  },

]

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
  const [accpect, setaccpect] = useState({
    files: [],
  });
  const handleChange = (files) => {
    setaccpect({ files: files });
    console.log(accpect);
  };

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
  const na=/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/

  return (
    <>
      <AppBar position="static" className={classes.appbarbg}>
        <Toolbar>
          <Container>
            <Button className="capitalize">
              <Typography className="  font-f-bold text-secondary   xl:text-4xl lg:text-2xl md:text-xl xs:text-xl ">
              Careers
              </Typography>
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container>
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Typography className="xl:text-4xl md:text-3xl xs:text-xl  font-f-bold  text-secondary  xl:mt-24  lg:mt-6 sm:mt-6 xs:mt-6  ">
              Be a part of iPurvey
            </Typography>
            <Typography
              color="primary"
              className="xl:text-lg md:text-base sm:text-sm xs:text-xs font-f-regular xl:mt-6 lg:mt-3 sm:mt-3 xs:mt-3"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et{" "}
            </Typography>
            <Typography
              color="primary"
              className="xl:text-lg md:text-base sm:text-sm xs:text-xs font-f-regular xl:mt-6 lg:mt-3 sm:mt-3 xs:mt-3"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum{" "}
            </Typography>
            <Typography
              color="primary"
              className="xl:text-lg md:text-base sm:text-sm xs:text-xs font-f-regular xl:mt-6 lg:mt-3 sm:mt-3 xs:mt-3"
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum{" "}
            </Typography>
            <Box mt={3} className="xs:mt-3">
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
          <Grid item lg={1}></Grid>
          <Grid item lg={5} md={12} sm={12} xs={12}>
            <Typography
              className="xl:text-4xl md:text-3xl xs:text-xl font-f-semibold  xl:mt-20 lg:mt-7 md:mt-7 sm:mt-7 xs:my-3 "
              color="primary"
            >
              Drop your resume!
            </Typography>
            <Grid container spacing={2}>
              <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
                <TextField
                  label="First Name"
                  color="primary"
                  type="text"
                  variant="outlined"
                  fullWidth
                  className="bgcolor xl:mt-8 md:mt-3  lg:mt-3 sm:mt-3 xs:mt-3  text-lg font-f-regular leading-8  bg-white text-opacity-60 careers-error"
                  helperText = {state.firstnameError && !na.test(state.firstname) && 'First Name is not valid'}
                    error = {state.firstnameError && !na.test(state.firstname)}
                    onChange = {e => setstate({...state,firstname:e.target.value})}
                    autoComplete="email"
                    onFocus={()=>setstate({...state,firstnameError:true})}
               
               />
              </Grid>
              <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
                <TextField
                  label="Surname"
                  type="text"
                  color="primary"
                  variant="outlined"
                  fullWidth
                  className=" bgcolor xl:mt-8  xl:mt-3  lg:mt-0 md:mt-0 sm:mt-0  xs:mt-0 leading-8 namefiled bg-white  text-opacity-60 careers-error "
                  helperText = {state.lastnameError && !na.test(state.lastname) && 'Surname is not valid' }
                  error = {state.lastnameError && !na.test(state.lastname)}
                  onChange = {e => setstate({...state,lastname:e.target.value})}
                  autoComplete="email"
                  onFocus={()=>setstate({...state,lastnameError:true})}
               />
              </Grid>
            </Grid>
            <TextField
              label="Email Address"
              color="primary"
              type="text"
              variant="outlined"
              fullWidth
              className=" bgcolor xl:mt-8 md:mt-3  lg:mt-3 sm:mt-3 xs:mt-3  namefiled bg-white text-opacity-60 careers-error"
              helperText = {state.emailError && !re.test(state.email) && 'Email is not valid'}
              error = {state.emailError && !re.test(state.email)}
              onChange = {e => setstate({...state,email:e.target.value})}
              autoComplete="email"
              onFocus={()=>setstate({...state,emailError:true})}
           
           />
            <TextField
              label="Job Position Interested"
              color="primary"
              type="text"
              variant="outlined"
              fullWidth
              className=" bgcolor xl:mt-8 md:mt-3  lg:mt-3 sm:mt-3 xs:mt-3  namefiled bg-white text-opacity-60 careers-error"
              helperText = {state.subjectError && !na.test(state.subject) && 'Job Position Interested is not valid' }
              error = {state.subjectError && !na.test(state.subject)}
              onChange = {e => setstate({...state,subject:e.target.value})}
              autoComplete="email"
              onFocus={()=>setstate({...state,subjectError:true})}
           
           />
            {/* <Box bgcolor="#F0F4FC" pt={2} pb={5} mt={4} className="browserborder rounded-md">
                            <img src="/images/Icon material-file-upload.png" className="mt-8 ml-auto mr-auto " width="44px"  />
                            <Typography className="text-lg  font-f-regular text-center py-2">Drag and drop resume/CV</Typography>
                            <Typography className="text-lg  font-f-regular text-center ">OR</Typography>
                            <div className="text-center">
                            <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        className="hidden"
      />
      <label htmlFor="contained-button-file">
        <Button className="capitalize text-lg  font-f-medium border-b browfile" color="primary" component="span">
        Browse Files
        </Button>
      </label>
                            </div>
                            </Box> */}
            <div className="xl:mt-8 md:mt-3  lg:mt-3 sm:mt-3 xs:mt-3 dropzonesetting ">
              <DropzoneArea
                acceptedFiles={["image/*", "video/*", "application/*"]}
                onChange={handleChange.bind(this)}
                showFileNames
                showAlerts={false}
                dropzoneText={
                  <Typography className="text-lg  font-f-regular text-center py-2">
                    Drag and drop resume/CV
                  </Typography>
                }
                filesLimit={20}
              />
            </div>
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
      <Box bgcolor="#F0F4FC" mt={6} py={6}>
        <Container>
          <Typography className="xl:text-4xl md:text-3xl xs:text-xl text-secondary text-center font-f-bold mb-10 ">
            Benefits
          </Typography>
         
           <div className="why-ipurvey">
          <div className="ipurvey-special">
           <div className="grid lg:grid-cols-3 xs:grid-cols-1 gap-4 xl:mt-16 xs:mt-10">
                {data.map(value => 
                     <div className='why-ipurvey-content text-center' key={value.title}>
                     <Box className="rounded-lg p-4 px-6 box">
                         <img src={value.img} alt='img' className="mx-auto" />
                     </Box>
                     <Typography component ="h5" className="xl:text-2xl md:text-xl xs:text-lg text-secondary font-f-bold my-7">
                        {value.title} 
                     </Typography>
                     <Typography component="p" className="xl:text-lg md:text-base xs:text-sm w-9/12 mx-auto">
                         {value.text}
                     </Typography>
                       </div>
                    
                    )}
                </div>
                </div>
                </div>
        </Container>
      </Box>
      {/*  our team component started */}

      <Box bgcolor="#fff" py={8}>
        <Container>
          <Grid container spacing={3} justify="center">
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
              <img
                src="/images/Rectangle 1137.png "
                className=" xs:mt-0 sm:mt-0 xl:mt-10 lg:mt-20 md:mt-10  w-full lg:w-full sm:w-full md:w-full  "
              />
            </Grid>

            <Grid item xl={5} lg={6} md={12} sm={12} xs={12}>
              <div className=" xl:ml-12  xl:pt-14 lg:pt-0 ">
                <Typography className="xl:text-4xl md:text-3xl xs:text-xl font-f-bold text-secondary text-center ">
                  Our Team
                </Typography>
                <Typography className="xl:text-lg md:text-base sm:text-sm xs:text-xs  font-f-regular text-center mt-5 ">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem
                </Typography>
                <Typography className="xl:text-lg md:text-base sm:text-sm xs:text-xs  font-f-regular text-center mt-5 ">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
