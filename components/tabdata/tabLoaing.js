import { Typography } from '@material-ui/core'
import React from 'react'

export default function TabLoaing() {
    return (
        <>
          <Typography className="text-2xl text-black text-center font-f-medium">
             Please hold on while we retrieve your booking details!
          </Typography> 
          <img src="/images/dribbble-spinner.gif" alt="loading" /> 

        </>
    )
}
