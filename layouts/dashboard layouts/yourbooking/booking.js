import React,{useState} from 'react'
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    IconButton,
    InputAdornment,
    Paper,
    Button,
    ButtonGroup,
    Link

  } from "@material-ui/core";
  import clsx from 'clsx';
  import { makeStyles } from '@material-ui/core/styles';
  import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
  import Ipurvytable from './table'
  import AddIcon from '@material-ui/icons/Add';
  import RemoveIcon from '@material-ui/icons/Remove';

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },

  }));




export default function Booking() {
  const [counter, setcounter] = useState(15)
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
  
  const na=/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;



    const classes = useStyles();
    return (
        <>
        <Box bgcolor="#F0F4FC" py={10}>
            
                <Typography className="font-f-medium  text-xl text-secondary uppercase " >Search your travel bookings</Typography>
                <Box mt={3}>
            <Grid container spacing={3}>
                <Grid item lg={4} md={6} sm={6} xs={12} >
                <TextField id="outlined-basic" label="Add a reference number" variant="outlined" fullWidth
 helperText = {state.lastnameError && !na.test(state.lastname) && 'Add a reference number' }
 error = {state.lastnameError && !na.test(state.lastname)}
 onChange = {e => setstate({...state,lastname:e.target.value})}
 autoComplete="email"
 onFocus={()=>setstate({...state,lastnameError:true})}
                />
                </Grid>
               
               
                <Grid item lg={3} md={6} sm={6} xs={12}>
                <TextField id="outlined-basic" label="Travel From" variant="outlined" fullWidth
 helperText = {state.firstnameError && !na.test(state.firstname) && 'Enter Travel From'}
 error = {state.firstnameError && !na.test(state.firstname)}
 onChange = {e => setstate({...state,firstname:e.target.value})}
 autoComplete="email"
 onFocus={()=>setstate({...state,firstnameError:true})}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                  
               <ArrowDownwardIcon color="primary" /> 
                  </IconButton>
                </InputAdornment>,
                }}
                />
                </Grid>
                <Grid item lg={3} md={6}  sm={6}  xs={12}> 
                <TextField id="outlined-basic" label="Travel To" variant="outlined" fullWidth
                  helperText = {state.subjectError && !na.test(state.subject) && 'Enter Travel To' }
                  error = {state.subjectError && !na.test(state.subject)}
                  onChange = {e => setstate({...state,subject:e.target.value})}
                  autoComplete="email"
                  onFocus={()=>setstate({...state,subjectError:true})}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                  
               <ArrowDownwardIcon color="primary" /> 
                  </IconButton>
                </InputAdornment>,
                }}
                />
                </Grid>
                <Grid item lg={2} md={6} sm={6} xs={12}>
                <Button
                    variant="contained"
                    className="capitalize py-4  text-base"
                    fullWidth
                    color="primary"
                  >
                    Search
                  </Button>
                  <Button className=" float-right my-4 capitalize " color="primary" fullWidth >
            <img src="/images/Group 3570.png" className="mr-4 " />
              <Typography className="font-f-medium  text-base" >Advanced FIlters</Typography>
        
            </Button>
                </Grid>
            </Grid>
            
            </Box>
            <Box borderRadius="10px" bgcolor="#fff" p={2}  boxShadow='0px 3px 6px 6px rgba(0,0,0,0.16)'>
            <Ipurvytable/>
            </Box>
            <Box mt={5}>
            <Grid container>
              <Grid item xl={1} lg={2}>
              <Typography className="text-base font-f-regular text-inherit mt-5"> Results per page</Typography>
              </Grid>
              <Grid item xl={1} lg={1}>
        <Button className="bg-white rounded-md">{counter}</Button>
        <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
        className="ml-3 mt-3"
      >
        <Button className="py-0  bg-white hover:text-white rounded-md " onClick={()=>{setcounter(counter+1)}}><AddIcon className="hover:text-white" fontSize="small" color="primary" /></Button>
        <Button className="py-0 rounded-md  minues-bg"onClick={()=>{setcounter(counter-1)}} ><RemoveIcon className="hover:text-white" fontSize="small" color="primary" /></Button>
    
      </ButtonGroup>
              </Grid>
              
            </Grid>
           
            
            </Box>
            </Box>
        </>
    )
}
