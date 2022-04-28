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
    Hidden


  } from "@material-ui/core";
  import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
  import { makeStyles } from '@material-ui/core/styles';
  import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Datpick from './pickerss'
import Transportcheck from './transportcheck'
import Disturbationcheck from './disturbationcheck'
import Status from './status'


  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    
  }));




export default function Booking() {
  // const [count, setcount] = useState(15)
// The first commit of Material-UI
const [IpureyDate, setIpureyDate] = React.useState(new Date('2014-08-18T21:11:54'));
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
const DateChange = (date) => {
  setIpureyDate(date);
};


    const classes = useStyles();
    return (
        <>
      
            
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
          <Box bgcolor="#D0D8E5" py={8} className="rounded-lg travel-background" >
              <Box  className="xs:pl-0  xl:pl-7 lg:pl-7 md:pl-7 sm:pl-7">
              <Grid container spacing={2}>
                  <Grid item lg={3} md={6} sm={6} xs={12} >
                      <Typography className=" text-xl font-f-medium text-secondary " >Travel Date</Typography>
                      <Datpick/>
                  
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
     
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    inputVariant="outlined"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date To"
                   className="bg-white rounded-md mt-2"
                    value={IpureyDate}
                    fullWidth
                    onChange={DateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                

              </MuiPickersUtilsProvider>

              <Typography className=" text-xl font-f-medium text-secondary  mt-6" >Travel Time</Typography>
              <TextField id="outlined-basic" label="Time From" variant="outlined" fullWidth
               className="bg-white rounded-md mt-5"
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
                <TextField id="outlined-basic" label="Time From" variant="outlined" fullWidth
               className="bg-white rounded-md mt-4"
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
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                  <Typography className=" text-xl font-f-medium text-secondary " >Travel Details</Typography>
                  <Box mt={2}>
                  <TextField id="outlined-basic" label="From" variant="outlined" fullWidth  className="bg-white rounded-md" />
                  <TextField id="outlined-basic" label="To" variant="outlined" fullWidth  className="bg-white rounded-md mt-4" />
                 
                  </Box>
                  <Typography className=" text-xl font-f-medium text-secondary mt-9 " >Transport Operator</Typography>
                  <Box mt={2}>
                  <TextField id="outlined-basic" label="Search for an operator" variant="outlined" fullWidth  className="bg-white rounded-md" />
                 
                 
                  </Box>
                  </Grid>
                  <Grid item lg={6} md={12} sm={12} xs={12}>
                    <Grid container spacing={1} >
                      <Grid item lg={3} md={4} sm={4} xs={12} >
                  
                      <Typography className=" text-xl font-f-medium text-secondary  " >Transport Operator</Typography>
                      <div className="xs:pl-5   sm:pl-0 md:pl-0 lg:pl-4 xl:pl-4 ">
                  <Transportcheck  />  
                  </div>
           
                  
                      </Grid>
                      <Grid item lg={3} md={4} sm={4} xs={12}>
                  
                  
                  <Typography className=" text-xl font-f-medium text-secondary  " >Distruption Type</Typography>
                      <div className="pl-5">
                  <Disturbationcheck/>
                  </div> 
              
         
                      </Grid>
                      <Grid item lg={3} md={4} sm={4} xs={12}>
                      <Typography className=" text-xl font-f-medium text-secondary  " >Distruption Type</Typography>
                      <div className="pl-5">
                  <Status/>
                  </div>
                      </Grid>
                    </Grid>
                  </Grid>
              </Grid>
            <Grid container justify="center">
              <Grid item lg={2}>
           <div className=" sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 xs:mt-5">
                <Button
                    variant="contained"
                    className="capitalize py-4  text-base"
                    fullWidth
                    color="primary"
                  >
                    Search
                  </Button>
                  <Button className=" float-right my-4 capitalize    " color="primary" fullWidth  >
           
              <Typography className="font-f-medium  text-base  browfile "  >Reset Filters</Typography>
        
            </Button>
            </div>
              </Grid>
            </Grid>
              </Box>
          </Box>
          
        </>
         
    )
}
