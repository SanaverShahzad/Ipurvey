import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Typography,IconButton,Box, Button,Checkbox,FormControlLabel,FormHelperText } from '@material-ui/core';
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
     title:'YOUR DETAILS',
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
  
]



export default function Register({data}) {
    const classes = useStyles();
    const [state, setstate] = React.useState({
      checked:false
    })

    const handleChange = (event) => {
      setstate({...state,checked:event.target.checked})
    };

    return (
        <>
             <IconButton size="small" className="absolute top-1" onClick={()=>data('booking')}>
          <ArrowBackIcon fontSize="inherit" className="fill-primary" />
        </IconButton>
        <Typography component="h4" className="xl:text-2xl md:text-lg xs:text-md font-f-medium text-secondary text-center">
        Register with iPurvey
        </Typography>
        <Typography component="p" className="text-center xl:text-base md:text-sm xs:text-xs px-7 mt-7">
        iPurvey service will automatically request a claim on your behalf in the event of a qualifying travel disruption!
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
                <ListItemText>
                <Typography  className="text-primary uppercase xl:text-base xs:text-xs">
                  {value.key}
                  </Typography>
               
               </ListItemText>
               </ListItem> 
               <ListItem button className="py-2 px-1">
             <ListItemText>
             <Typography  className="text-primary uppercase xl:text-base xs:text-xs text-right">
               {value.value}
               </Typography>
                   
                   </ListItemText>
               </ListItem>
               </List>
                   )} 
            </Box>
        </Paper>
            )}

      <FormControlLabel className="items-start mt-5"
        control={<Checkbox onChange={handleChange} name="agree" color="primary" className="pt-0 mr-2" />}
        label={<span className="xl:text-base xs:text-xs">
          I agree that the booking information provided is my own information and that this information will be used to register me on iPurvey. 
        </span>}
      />
      {state.checked==false ?<FormHelperText className="text-red-500">Please select the box</FormHelperText>:"" }
       
        <div className="text-center mt-7">
        <Button
          variant="contained"
          className="capitalize xl:ml-7 xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm"
          color="primary"
         
        >
          Continue <ArrowRightAltIcon className="mt-1 ml-2"  />
        </Button>
        <Typography component="p" className="mt-2 xl:text-base xs:text-xs">
        Already a member?
        <Link href="javascript: void(0)" className="font-f-medium ml-1" onClick={()=>data('login')}>Login</Link>
        </Typography>
       
        </div>
        </>
    )
}
