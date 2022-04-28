import React from 'react'
import { Typography,IconButton} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SignupForm from '../signupform'


export default function regMain({data}) {
    return (
        <>
          <IconButton size="small" className="absolute top-1" onClick={()=>data('Register')}>
          <ArrowBackIcon fontSize="inherit" className="fill-primary" />
        </IconButton>  
        <Typography component="h4" className="xl:text-2xl md:text-lg xs:text-md font-f-medium text-secondary text-center">
          Register with iPurvey
        </Typography>
        <SignupForm data = {(v)=> data(v)} />
        </>
    )
}
