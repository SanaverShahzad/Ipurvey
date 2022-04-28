import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Typography,IconButton,Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Link from '../../src/Link'
const useStyles = makeStyles((theme) => ({
    paper:{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 5,
        '& .heading':{
            backgroundColor:'rgba(46,88,166,0.1)',
            borderRadius:"5px 5px 0 0"
        },
        '& .MuiTypography-body1':{
            fontFamily:'Poppins-Medium',
            color:theme.palette.primary.main
        }
    }
}));
const bookingdata = [
    {
     title:'PASSENGER DETAILS',
     data:[
        {
          key:'First Name',
          value:'Salman'
        },
        {
          key:'SurName',
          value:'Altaf'
        },
        {
          key:'Phone Number',
          value:'+44 7540 123 456'
        },
        {
          key:'Email Address',
          value:'salman.altaf@hotmail.com'
        },
      ]
    },
    {
        title:'BOOKING DETAIL',
        data:[
            {
              key:'Booking Reference',
              value:'1564-584134'
            },
            {
              key:'TRAVEL Date',
              value:'12/05/2020'
            },
            {
              key:'Departure TIME',
              value:'05:00 AM GMT'
            },
            {
              key:'Departure Location',
              value:'DUBAI, UAE'
            },
          ]
       },
]


export default function Foundbooking({data}) {
    const classes = useStyles();
    return (
        <>
             <IconButton size="small" className="absolute top-1" onClick={()=>data('main-tab')}>
          <ArrowBackIcon fontSize="inherit" className="fill-primary" />
        </IconButton>
        <Typography component="h4" className="xl:text-2xl md:text-lg xs:text-md font-f-medium text-secondary text-center">
        We've found a booking!
        </Typography>
        {bookingdata.map(data => 
            <Paper elevation={0} className={clsx(classes.paper,'mt-5')} >
            <Box className="heading">
               <Typography className="text-center xl:text-base md:text-sm xs:text-xs font-f-samibold text-primary py-2">
                 {data.title}
                </Typography> 
            </Box>
            <Box className="p-4">
            {data.data.map(value => 
               <List className="flex p-0">
                   <ListItem button className="py-2 px-1">
                <ListItemText >
                  <Typography className="text-primary uppercase xl:text-base  xs:text-xs">
                  {value.key}
                  </Typography>
               
               </ListItemText>
               </ListItem> 
               <ListItem button className="py-2 px-1">
             <ListItemText className="font-f-medium text-right">
               <Typography  className="text-primary uppercase xl:text-base xs:text-xs">
               {value.value}
               </Typography>
                   </ListItemText>
               </ListItem>
               </List>
                   )} 
            </Box>
        </Paper>
            )}
         
        <div className="text-center mt-7">
        <Button
          variant="contained"
          className="capitalize xl:ml-7 xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm"
          color="primary"
          onClick={ () => data('Register')}
        >
          Continue <ArrowRightAltIcon className="mt-1 ml-2" />
        </Button>

        <Button onClick={()=>data('main-tab')} className="block xl:text-base xs:text-xs mx-auto underline mt-2 capitalize text-blue-600">Is this not the booking?</Button>
        </div>
        </>
    )
}
