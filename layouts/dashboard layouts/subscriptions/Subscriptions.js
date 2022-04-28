import React,{useState} from 'react';
import { Container, Typography ,Button,Grid,Box, } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

export default function Subscriptions() {
    return (
        <div>
          <Container>
          <Box bgcolor="rgba(116,138,166,0.5)" className="rounded-xl  " py={4}  px={4}>
          
          <Grid container spacing={1} >
              <Grid item xl={3} lg={3} md={12} sm={12} xs={12} >
                  <Typography className="font-f-samibold text-base pl-4 xl:mt-20  lg:mt-24 xs:mb-4 ">FeaTUres</Typography>
                  <div className="bg-white  xl:py-10 lg:py-10  md:py-10 sm:py-10 xs:py-10      rounded-lg  xl:mt-7 lg:mt-6 ">
                  <Typography  className="xl:text-right lg:text-right md:text-center sm:text-center  xs:text-center font-f-regular  xl:text-sm md:text-sm   sm:text-sm xs:text-sm lg:text-xs   pr-5 ">Travel disruption monitoring</Typography>
                  </div>
                <div className="bg-white  xl:py-8 lg:py-7  md:py-10 sm:py-10 xs:py-10   rounded-lg  mt-4 ">
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
                <Grid item lg={2} xl={2} md={4} sm={6} xs={12}  >
              <Typography className="font-f-samibold xl:text-base lg:text-sm  text-secondary text-center xl:mt-6  lg:mt-7 md:mt-16 sm:mt-16  xs:mt-6">1 Month</Typography>
              <Typography className="font-f-samibold xl:text-3xl lg:text-lg  text-center mt-3  ">FREE TRAIL</Typography>
              <Typography className="font-f-regular  text-xs  text-center  sm:mt-4 xl:mt-1 lg:mt-1 md:mt-1 xs:mt-1 ">*Limited to 5 journeys</Typography>
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
              <Grid item lg={2} xl={2} md={4} sm={6} xs={12} >
                <div className="ourplan-border xl:-mt-8 lg:-mt-8 md:mt-1  sm:mt-4 price-primary" >
                <div className="  xl:-mt-10 lg:-mt-10 md:-mt-2 sm:-mt-2 xs:-mt-2">
                <img src="/images/Group 3676.png " className="relative xl:top-7 lg:top-8   right-2.5 xl:w-20 lg:w-16 md:w-16 "
                  />
                                  
              <Typography className="font-f-samibold xl:text-base lg:text-sm  text-white text-center xl:-mt-5 lg:mt-3 sm:-mt-6 xs:-mt-6  xl:pt-2">Frequent Rail Commuter Plan</Typography>
              <Typography className="font-f-samibold xl:text-3xl lg:text-xs text-white text-center xl:mt-3 lg:mt-0">£2.99</Typography>
              <Typography className="font-f-regular  xl:text-xs  lg:text-xs text-white text-center mt-1  ">(+30p<span className="lg:break-normal  lg:text-xs"></span> /Transaction)</Typography>
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
                                        className="capitalize xl:mt-4  py-3 lg:mt-4 md:mt-5 sm:mt-5 xs:mt-5   text-primary xl:text-base lg:text-sm md:text-sm sm:text-sm xs:text-sm xl:w-32 lg:w-full md:w-full sm:w-full  xs:w-full bg-white "
                                        fullWidth
                                        
                                        >
                                  Subscribe
                                    </Button>
                                    </div>
                                    </div>
              </Grid>
              <Grid item lg={2} xl={2} md={4} sm={6} xs={12} >
              <Typography className="font-f-samibold xl:text-base lg:text-sm  text-secondary text-center xl:mt-6 lg:mt-5 md:mt-16  sm:mt-16 xs:mt-8 ">Frequent Flyer Plan</Typography>
              <Typography className="font-f-samibold xl:text-3xl lg:text-lg  text-center xl:mt-3 lg:mt-0 md:mt-2">£5.99</Typography>
              <Typography className="font-f-regular  text-xs  text-center mt-1  ">(+30p<span className="lg:break-normal"></span> /Transaction)</Typography>
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
              <Grid item lg={2} xl={2} md={4} sm={6} xs={12} >
                <div className="ourplan-border xl:-mt-8 lg:-mt-8 md:mt-4" >
                <div className="  xl:-mt-10 lg:-mt-10 md:-mt-0">
                <Button
                                   variant="contained"
                                        className="capitalize popular relative xl:top-4 lg:top-5 md:top-0 sm:top-0 xs:top-0 py-2  xl:ml-2 lg:ml-0 md:ml-0 sm:ml-0 xs:ml-0  xl:text-base lg:text-sm md:text-sm sm:text-sm xs:text-sm xl:w-36 lg:w-full md:w-full sm:w-full  xs:w-full  "
                                        fullWidth
                                        color="primary"
                                        >
                                  Popular
                                    </Button>
              <Typography className="font-f-samibold xl:text-base lg:text-sm  text-white text-center xl:mt-0 lg:mt-0 xl:pt-7 lg:pt-8 ">Frequent Rail & Flight Combo Plan</Typography>
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
              <Grid item lg={2} xl={2} md={4} sm={6} xs={12} >
              <Typography className="font-f-samibold xl:text-base lg:text-sm  text-secondary text-center xl:-mt-1 lg:mt-4 md:mt-12 sm:mt-10 xs:mt-6   ">Occasional Rail <br/> Plan</Typography>
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
              <Grid item lg={2} xl={2} md={4} sm={6} xs={12} >
              <Typography className="font-f-samibold xl:text-base lg:text-sm  text-secondary text-center xl:-mt-1 lg:mt-9 md:mt-16 sm:mt-16 xs:mt-6 ">Occasional Flight <span className="lg:break-all br"></span>Plan</Typography>
<Typography className="font-f-samibold xl:text-3xl lg:text-lg  text-center xl:mt-3 lg:mt-0 md:mt-2">£1.99</Typography>
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
                  <div className="text-center">
                  <Button
                                   variant="contained"
                                        className="capitalize xl:mt-4   py-3 lg:mt-4 md:mt-5 sm:mt-5 xs:mt-5   xl:text-base lg:text-sm md:text-sm sm:text-sm xs:text-sm xl:w-32 lg:w-full md:w-full sm:w-full  xs:w-full "
                                        fullWidth
                                        color="primary"
                                        >
                                  Subscribe
                                    </Button>
                                    </div>
              </Grid>
                </Grid>
              </Grid>
              
          
              
          </Grid>       </Box>
           </Container>
         </div>
    )
}
