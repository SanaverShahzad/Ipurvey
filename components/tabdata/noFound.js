import React from 'react'
import { Typography,IconButton,Box, Button} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default function NoFound({data}) {
    return (
        <>
        <IconButton size="small" className="absolute top-1" onClick={()=>data('Register')}>
        <ArrowBackIcon fontSize="inherit" className="fill-primary" />
      </IconButton>  
      <Typography component="h4" className="text-2xl font-f-medium text-secondary text-center">
      We couldn't find a booking!
      </Typography>
      <Box className="text-center mt-12 pb-8">
      <img src ="/images/Group 3459.png" className="mx-auto" alt=""/>
      <Typography component="p" className="px-7 mt-10">
      We could find any booking by this reference number! Please re-enter the details or contact us!
      </Typography>
      <Button
          variant="contained"
          className="capitalize py-4 px-20 text-base mt-24"
          color="primary"
          onClick={()=>data('main-tab')}
         
        >
          Search another booking  
        </Button>
      </Box>

     
      </>
    )
}
