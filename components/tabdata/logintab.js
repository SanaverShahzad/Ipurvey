import React from 'react'
import { Typography,IconButton} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Loginwith from '../loginwith'


export default function Logintab({data}) {
  
    return (
        <>
          <IconButton size="small" className="absolute top-1" onClick={()=>data('Register')}>
          <ArrowBackIcon fontSize="inherit" className="fill-primary" />
        </IconButton>  
        <Typography component="h4" className="xl:text-2xl md:text-lg xs:text-md font-f-medium text-secondary text-center">
         Login to iPurvey
        </Typography>
        <Typography className="text-center lg:font-f-medium xs:text- md:text-base xs:text-xs mt-4" component ="h6">Seems like you are already a member!</Typography>
        <Typography className="text-center xl:text-base md:text-sm xs:text-xs px-7 mt-4" component ="p">Please login into your account to see the status of your travel disruption!</Typography>
        <Loginwith goto = { (v)=> data(v)}/>
        </>
    )
}
