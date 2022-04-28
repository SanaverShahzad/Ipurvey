import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Typography ,Button,Grid,Box, } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
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
  const [state, setstate] = useState({
    files:[]
  })
  const  handleChange=(files)=>{
    setstate({files:files})
    console.log(state)
  }
  
  return (
    <>
    <AppBar position="static" className={classes.appbarbg}>
        <Toolbar>
        <Container>
        <Button className="capitalize">
            <Typography className="  font-f-bold text-secondary xl:text-4xl lg:text-2xl md:text-xl xs:text-xl ">Pricing</Typography>
            </Button>
        </Container>
        </Toolbar>
        </AppBar>
        <Container>
      <Box bgcolor="#F0F4FC" className="rounded-xl" py={4} my={8} px={4}>
          
          <Grid container spacing={1} >
              <Grid item xl={3} lg={3} md={12} sm={12} xs={12} >
                  <Typography className="font-f-samibold text-base pl-4 xl:mt-20  lg:mt-24 ">FeaTUres</Typography>
                  <div className="bg-white  xl:py-10 lg:py-10  md:py-10 sm:py-10 xs:py-10      rounded-lg  mt-6 ">
                  <Typography  className="xl:text-right lg:text-right md:text-center sm:text-center  xs:text-center font-f-regular  xl:text-sm md:text-sm   sm:text-sm xs:text-sm lg:text-xs   pr-5 ">Travel disruption monitoring</Typography>
                  </div>
                <div className="bg-white  xl:py-8 lg:py-6  md:py-10 sm:py-10 xs:py-10   rounded-lg  mt-4 ">
                  <Typography  className="xl:text-right lg:text-right md:text-center sm:text-center  xs:text-center font-f-regular  xl:text-sm md:text-sm   sm:text-sm xs:text-sm lg:text-xs   pr-5   ">Automatic claim request to travel operator* </Typography>
                  <Typography  className="xl:text-right lg:text-right md:text-center sm:text-center  xs:text-center font-f-regular text-xs  pr-5 text-color">*Qualifying travel disruption </Typography>
                  </div>
                  <div className="bg-white  xl:py-11 lg:py-9 md:py-10 sm:py-10 xs:py-10    rounded-lg  mt-4 ">
                  <Typography  className="xl:text-right lg:text-right md:text-center sm:text-center  xs:text-center font-f-regular  xl:text-sm md:text-sm   sm:text-sm xs:text-sm lg:text-xs   pr-5  pl-4  ">Customer notification of submitted claim </Typography>
                  </div>
                  <div className="bg-white  xl:py-8 lg:py-10 md:py-10 sm:py-10 xs:py-10   rounded-lg  mt-4 ">
                  <Typography  className="xl:text-right lg:text-right md:text-center sm:text-center  xs:text-center font-f-regular  xl:text-sm md:text-sm   sm:text-sm xs:text-sm lg:text-xs   pr-5  pl-4  ">History of customer journeys and submitted claim </Typography>
                  </div>
                  <div className="bg-white  xl:py-9 lg:py-7  md:py-10 sm:py-10 xs:py-10  rounded-lg  mt-4 ">
                  <Typography  className="xl:text-right lg:text-right md:text-center sm:text-center  xs:text-center font-f-regular  xl:text-sm md:text-sm   sm:text-sm xs:text-sm lg:text-xs   pr-5  pl-4  ">Multiple choice of compensation payment method</Typography>
                  </div>
                                   
              </Grid>
              <Grid item xl={9} lg={9} md={12} sm={12} xs={12} >
                <Grid container spacing={1}>
                <Grid item lg={2} xl={2} md={4} sm={6} xs={6}  >
              <Typography className="font-f-samibold xl:text-base lg:text-sm  text-secondary text-center xl:mt-6  lg:mt-7 md:mt-7  xs:mt-8">1 Month</Typography>
              <Typography className="font-f-samibold xl:text-3xl lg:text-lg  text-center mt-3 ">FREE TRAIL</Typography>
              <Typography className="font-f-regular  text-xs  text-center mt-1 ">*Limited to 5 journeys</Typography>
              <div className="bg-white  py-8  rounded-lg  mt-4 text-center ourplan-br  ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-8  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CloseIcon fontSize="large" className="text-red-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CloseIcon fontSize="large" className="text-red-500"  />
                  </div>
                  <Button
                                   variant="contained"
                                        className="capitalize xl:mt-4 py-3 lg:mt-4 md:mt-5 sm:mt-5 xs:mt-5 ml:auto mr:auto  xl:text-base lg:text-sm md:text-sm sm:text-sm xs:text-sm xl:w-36 lg:w-full md:w-full sm:w-full  xs:w-full "
                                        fullWidth
                                        color="primary"
                                        >
                                  Subscribe
                                    </Button>
              </Grid>
              <Grid item lg={2} xl={2} md={4} sm={6} xs={6} >
              <Typography className="font-f-samibold xl:text-base lg:text-sm  text-secondary text-center xl:mt-0 lg:mt-0 md:mt-10  sm:mt-10 xs:mt-5 ">Frequent Rail Commuter Plan</Typography>
              <Typography className="font-f-samibold xl:text-3xl lg:text-lg  text-center xl:mt-3 lg:mt-0">£2.99</Typography>
              <Typography className="font-f-regular  text-xs  text-center mt-1 ">(+30p<span className="lg:break-normal"></span> /Transaction)</Typography>
              <div className="bg-white  py-8  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-8  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="text-center ">
                  <Button
                                   variant="contained"
                                        className="capitalize xl:mt-4 xl:mb-5 py-3 lg:mt-4 md:mt-5 sm:mt-5 xs:mt-5   xl:text-base lg:text-sm md:text-sm sm:text-sm xs:text-sm xl:w-32 lg:w-full md:w-full sm:w-full  xs:w-full "
                                        fullWidth
                                        color="primary"
                                        >
                                  Subscribe
                                    </Button>
                                    </div>
              </Grid>
              <Grid item lg={2} xl={2} md={4} sm={6} xs={6} >
              <Typography className="font-f-samibold xl:text-base lg:text-sm  text-secondary text-center xl:mt-6 lg:mt-5 md:mt-10  sm:mt-9 xs:mt-16 ">Frequent Flyer Plan</Typography>
              <Typography className="font-f-samibold xl:text-3xl lg:text-lg  text-center xl:mt-3 lg:mt-0">£5.99</Typography>
              <Typography className="font-f-regular  text-xs  text-center mt-1 ">(+30p<span className="lg:break-normal"></span> /Transaction)</Typography>
              <div className="bg-white  py-8  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-8  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="text-center mb-4">
                  <Button
                                   variant="contained"
                                        className="capitalize xl:mt-4  py-3 lg:mt-4 md:mt-5 sm:mt-5 xs:mt-5   xl:text-base lg:text-sm md:text-sm sm:text-sm xs:text-sm xl:w-32 lg:w-full md:w-full sm:w-full  xs:w-full "
                                        fullWidth
                                        color="primary"
                                        >
                                  Subscribe
                                    </Button>
                                    </div>
              </Grid>
              <Grid item lg={2} xl={2} md={4} sm={6} xs={6} >
                <div className="ourplan-border xl:mt-0 lg:mt-0 md:mt-5" >
                <div className="bgprimary  xl:-mt-10 lg:-mt-10 md:-mt-0">
                <Button
                                   variant="contained"
                                        className="capitalize popular relative xl:-top-5 lg:-top-5 md:top-0 sm:top-0 xs:top-0 py-2  xl:ml-2 lg:ml-0 md:ml-0 sm:ml-0 xs:ml-0  xl:text-base lg:text-sm md:text-sm sm:text-sm xs:text-sm xl:w-36 lg:w-full md:w-full sm:w-full  xs:w-full  "
                                        fullWidth
                                        color="primary"
                                        >
                                  Subscribe
                                    </Button>
              <Typography className="font-f-samibold xl:text-base lg:text-sm  text-white text-center xl:mt-0 lg:mt-0 md:mt-5 ">Frequent Rail & Flight Combo Plan</Typography>
              <Typography className="font-f-samibold xl:text-3xl lg:text-lg text-white text-center xl:mt-3 lg:mt-0">£6.99</Typography>
              <Typography className="font-f-regular  text-xs text-white text-center mt-1 ">(+30p<span className="lg:break-normal"></span> /Transaction)</Typography>
              </div>
              <div className="bg-white  py-8  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-8  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="text-center mb-4">
                  <Button
                                   variant="contained"
                                        className="capitalize xl:mt-4  py-3 lg:mt-4 md:mt-5 sm:mt-5 xs:mt-5   xl:text-base lg:text-sm md:text-sm sm:text-sm xs:text-sm xl:w-32 lg:w-full md:w-full sm:w-full  xs:w-full "
                                        fullWidth
                                        color="primary"
                                        >
                                  Subscribe
                                    </Button>
                                    </div>
                                    </div>
              </Grid>
              <Grid item lg={2} xl={2} md={4} sm={6} xs={6} >
              <Typography className="font-f-samibold xl:text-base lg:text-sm  text-secondary text-center xl:mt-0 lg:mt-4 md:mt-14 sm:mt-4 xs:mt-6   ">Occasional Rail <br/> Plan</Typography>
              <Typography className="font-f-samibold xl:text-3xl lg:text-lg  text-center xl:mt-3 lg:mt-0">£0.79</Typography>
             <Typography className="font-f-regular  text-xs  text-center mt-1 ">Per transaction </Typography>
              <div className="bg-white  py-8  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-8  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CloseIcon fontSize="large" className="text-red-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br ">
                 <CloseIcon fontSize="large" className="text-red-500"  />
                  </div>
                  
              </Grid>
              <Grid item lg={2} xl={2} md={4} sm={6} xs={6} >
              <Typography className="font-f-samibold xl:text-base lg:text-sm  text-secondary text-center xl:mt-0 lg:mt-8 md:mt-20 sm:mt-10 xs:mt-6 ">Occasional Flight <span className="lg:break-all br"></span>Plan</Typography>
<Typography className="font-f-samibold xl:text-3xl lg:text-lg  text-center xl:mt-3 lg:mt-0">£1.99</Typography>
             <Typography className="font-f-regular  text-xs  text-center mt-1 ">Per transaction </Typography>
               <div className="bg-white  py-8  rounded-lg  mt-4 text-center ourplan-br  ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-8  rounded-lg  mt-4 text-center ourplan-br   ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br   ">
                 <CheckIcon fontSize="large" className="text-green-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br   ">
                 <CloseIcon fontSize="large" className="text-red-500"  />
                  </div>
                  <div className="bg-white  py-9  rounded-lg  mt-4 text-center ourplan-br   ">
                 <CloseIcon fontSize="large" className="text-red-500"  />
                  </div>
               
              </Grid>
                </Grid>
              </Grid>
              {/*  */}
          
              
          </Grid>
      </Box>
      </Container>                   
        </>
  );
}




