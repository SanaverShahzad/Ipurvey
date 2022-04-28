import React from 'react'
import { Button,Typography,Grid,Box,Slide,Container,IconButton} from '@material-ui/core'
import MainTab from '../components/tabdata/mainTab'
import Loading from '../components/tabdata/tabLoaing'
import Foundbooking from '../components/tabdata/Foundbooking'
import Registertab from '../components/tabdata/registerTab'
import Registermain from '../components/tabdata/regMain'
import NoFound from '../components/tabdata/noFound'
import Logintab from '../components/tabdata/logintab'
import Whyipurvey from '../components/homecomponents/whyipurvey' 
import Ipurveyspecial from '../components/homecomponents/Ipurveyspecial' 
import Delayedflight from '../components/homecomponents/delayedflight'
import Services from '../components/homecomponents/services'
import Trustedby from '../components/homecomponents/trustedby'
import Video from '../components/homecomponents/video'
import Notfound from '../components/tabdata/noFound'
import CloseIcon from '@material-ui/icons/Close';
export default function Home() {
  const [state, setstate] = React.useState({
    show:"main-tab",
    open:true
  })

  let goto = (prop) => setstate({...state,show: prop})
const handleClose = () => {
  setstate({...state,open:false})
};
console.log(state.show)
  return (
    <>
    
     <div className="wrapper">
       <Container>
       <Grid container justify="space-between" spacing={3}>
        <Grid item xs={12} lg={6}>
        <div className="wrapper-text pt-32">
         <Typography component="h3" className="xl:text-5xl md:text-3xl xs:text-2xl font-f-bold md:text-left xs:text-center text-black">
         Simplifying Travel Claims
         </Typography> 
         <Typography component="p" className="xl:text-xl md:text-base sm:text-sm xs:text-xs pt-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore 
          et dolore magna aliquyam erat, sed diam voluptua.
         </Typography>
         <div className="xl:text-left lg:text-left md:text-left sm:text-left  xs:text-center">
           
         <Button href="/login" color="primary" variant="contained" className="capitalize xl:text-xl lg:text-base xl:px-16 xl:py-4 md:px-12 md:py-3 font-f-medium mt-5  ">Sign Up today!</Button>
         </div>
       </div>
        </Grid>
        <Grid item xs={12} lg={5}>
        <div className="xl:mt-12 lg:mt-28 xs:mt-4 module-box xl:px-7 xl:py-8 xs:px-6 xs:py-7 lg:mr-auto lg:ml-0 xs:mx-auto">
          <div className="module-inner">
            {
             state.show === "main-tab" ? 
              <MainTab data ={goto} />
              : state.show === "booking" ? <Slide direction="left" in={true}>
              <Box position="relative">
              <Foundbooking data = {goto}/>
              </Box>
              </Slide>
              : state.show === 'Register' ? <Slide direction="left" in={true}>
              <Box position="relative">
              <Registertab data ={goto}/>
              </Box>
              </Slide>
              : state.show ==='reg-main' ? <Slide direction="left" in={true}>
              <Box position="relative">
              <Registermain data ={goto}/>
              </Box>
              </Slide>
              : state.show ==='login' ? <Slide direction="left" in={true}>
              <Box position="relative">
              <Logintab data ={goto}/>
              </Box>
              </Slide>
              : state.show === 'no-found' ? <Slide direction="left" in={true}>
              <Box position="relative">
              <NoFound data ={goto}/>
              </Box>
              </Slide>
              :'Default'
            
            }
            
        </div>
        </div>
        </Grid>
        </Grid>
     </Container>
    
     <img src='/images/Group 4050.png' className="car" alt= "" />
     <img src='/images/Group 3870.png' className="flight" alt= "" />
       </div>
       {state.open==true && <Box bgcolor="rgba(116,138,166,0.8)" padding={3} className="ipurvey-cookie" > 
      <Grid container>
        <Grid item lg={1} md={2} sm={2} xs={2}>
          <img src="/images/undraw_cookie_love_ulvn.png " />
        </Grid>
        <Grid item lg={10} md={10} sm={10} xs={10}>
          <Typography className=" text-2xl font-f-medium  text-white">We use cookies! <IconButton className="text-white float-right "   component="span" onClick={handleClose} ><CloseIcon fontSize="large"/></IconButton></Typography>
          <Typography className=" text-white font-f-light  text-base mt-4 ">Lorem ipsumsdsdsd dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,  </Typography>
          <Button
          variant="contained"
          
          className=" capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm xl:mt-8 lg:mt-4 md:mt-4  sm:mt-4 xs:mt-4  cookiesborder  text-white  hover:text-white    bg-transparent  hover:bg-transparent"
          
        >
       More Information
        </Button>
        
          <Button
          variant="contained"
          
          className=" ml-3 capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm xl:mt-8 lg:mt-4 md:mt-4  sm:mt-4 xs:mt-4 text-primary hover:text-white    bg-white hover:bg-white"
          color="primary"
        >
        I Accept!
        </Button>
      
        </Grid>
      </Grid>
      
       </Box> }
        
      
      <Whyipurvey/>
      <Container>
      <Box className="text-center xl:pb-28 xs:pb-16">
      <Typography component="h4" className="xl:text-4xl md:text-3xl xs:text-xl font-f-bold text-secondary text-center xl:pt-20 xl:pb-12 xs:pt-12 xs:pb-8">
        Lorem ipsum dolor sit amet, consetetur
       </Typography> 
      <Typography className ="text-center xl:text-xl md:text-base sm:text-sm xs:text-xs mb-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
            </Typography>
            <div className="xl:w-3/4 xs:w-full mx-auto">
      <Video/>
      </div>
      </Box>
      </Container>
      
     
      <Ipurveyspecial/>
      <Delayedflight/>
      <Services />
      <Trustedby />    
    </>
  )
}