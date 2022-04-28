import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import clsx from 'clsx';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {Box, Typography, InputBase, Grid, Button, Avatar,} from '@material-ui/core/';
import Link from 'next/link'




const useStyles = makeStyles((theme) => ({
  
  textdecorationbold:{
    textDecoration:'revert!important',
    color:'#2E58A6',
    fontWeight:'500',
  },
  positionrelative: {
    position: "relative",
  },
  iconinfo: {
    position: "absolute",
    right: '10px',
    top: '15px',
    color: "#2E58A6",
  },
    background:{
        marginTop:50,
        border: "1px solid #eee",
        boxShadow:
      "-webkit-box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);-moz-box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);!important",
      textAlign:'center',
      backgroundColor:'white',
      [theme.breakpoints.only('xl')]: {
        width:'75%',
      },
    },
    facebookbutton:{
        marginTop:20,
        padding:15,
        width:'75%',
    },
    gmailbutton:{
        marginTop:15,
        padding:5,
        width:'75%',
        backgroundColor:'transparent',
        '& .MuiAvatar-img':{
            height:20,
            width:20,
        },
    },
    borderbottom:{
        borderBottom:'1px solid ',
        margin:"35px 50px",
        position:'relative',
    },
    position:{
        position:'absolute',
        textAlign:'center',
        left:"50%",
        background:'white',
        top:"-10px",
        width:'70px',
        transform:'translateX(-50%)',
    },
    textsetting:{
      paddingTop:20,
    },
    [theme.breakpoints.between('xs','md')]: {
      mediasetting:{
        display:'none',
      },
    },
}));

export default function login({data}) {
  const classes = useStyles();
  const [state, setstate] = React.useState({
    password:'',
    fields: {
      firstName:'',
      lastName:'',
      email: "",
      confirmEmail:'',
      password:""
    },
    errors: {
      firstName:'',
      lastName:'',
      email: "",
      confirmEmail:'',
      password: "",
    }
  });
  const validate = (name, value) => {
    const {fields} = state;
    switch (name) {
      case "firstName":
        if (!value || value.trim() === "") {
          return "First name is Required";
        } else {
          return "";
        }
        case "lastName":
        if (!value || value.trim() === "") {
          return "Last name is Required";
        } else {
          return "";
        }
      case "email":
        if (!value) {
          return "Email is Required";
        } else if (
          !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          return "Enter a valid email address";
        } else {
          return "";
        }
      case "confirmEmail":
        if (!value || value.trim() === "") {
          return "Confirm Email is Required";
        }else
        if (value !== fields.email) {
          return "Email is Not Match";
        } else {
          return "";
        }
        case "password":
        if (!value) {
          return "Password is Required";
        } else if (value.length < 8 || value.length > 15) {
          return "Please fill at least 8 character";
        } else if (!value.match(/[a-z]/g)) {
          return "Please enter at least lower character.";
        } else if (!value.match(/[A-Z]/g)) {
          return "Please enter at least upper character.";
        } else if (!value.match(/[0-9]/g)) {
          return "Please enter at least one digit.";
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };
  const handleUserInput = e => {
    setstate({
      ...state,
      errors: {
        ...state.errors,
        [e.target.name]: validate(e.target.name, e.target.value)
      },
      fields: {
        ...state.fields,
        [e.target.name]: e.target.value
      },
      password: e.target.name ==="password" && e.target.value 
    });
  };
  const handleSubmit = e => {
    const { fields } = state;
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach(name => {
      const error = validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setstate({...state, errors: validationErrors });
      return;
    }
   data(false)
  
  };
const {errors} = state;
  
  let showpassword = ()=>{
   state.password &&  setstate({...state,show: !state.show})
  }


  return (
    <div className={classes.root}>
      
   
        
        <Button
        variant="contained"
        color="primary"
        className={clsx(classes.facebookbutton,"capitalize  xl:py-4 md:py-2  lg:px-12 xs:px-8 xl:text-base md:text-sm")} 
        startIcon={<FacebookIcon />}
      >
        Login using Facebook
      </Button>
      <Button
        variant="contained"
        className={clsx( classes.gmailbutton,"capitalize xl:py-4 md:py-2 xl:px-26 lg:px-12 xs:px-8 xl:text-base md:text-sm")}
        startIcon={<Avatar src={'/images/Google.png'} />}
      >
        Login using Google
      </Button>
      <Box color='#707070' className={classes.borderbottom}>
          <Typography className={classes.position}>OR</Typography>
      </Box>
      <Grid container spacing={3} >
        <Grid item xs={6}>
        <Box className={classes.inputcolor} ml={6}>
        <InputBase placeholder="First Name" className="custom-input" name="firstName" onChange={handleUserInput} />
        <span className="text-red-500 text-left block">{errors.firstName}</span>
       </Box>
        </Grid>
        <Grid item xs={6}>
        <Box className={classes.inputcolor} mr={6}>
        <InputBase placeholder="Surname" className="custom-input" name="lastName" onChange={handleUserInput} />
        <span className="text-red-500 text-left block">{errors.lastName}</span>
      </Box>
        </Grid>
      </Grid>
      <Box className={classes.inputcolor} pt={2} mx={6}>
      <InputBase placeholder="Email Address" className="custom-input" name="email" onChange={handleUserInput} />
      <span className="text-red-500 text-left block">{errors.email}</span>
      </Box>
      <Box className={classes.inputcolor} pt={2} mx={6}>
      <InputBase placeholder="Confirm Email Address" className="custom-input" name="confirmEmail" onChange={handleUserInput} />
      <span className="text-red-500 text-left block">{errors.confirmEmail}</span>
      </Box>
      <Box className={classes.positionrelative} mx={6}>
                   <InputBase
                     placeholder="Password"
                     className="custom-input mt-4"
                     type={state.show ? 'text' : 'password'}
                     name="password"
                     onChange={handleUserInput}
                   />
                   {!state.show ? 
                   <VisibilityIcon className={classes.iconinfo} onClick={showpassword} />
                   :<VisibilityOffIcon className={clsx(classes.iconinfo,"fill-current text-gray-400")} onClick={showpassword} />
                  }
                     <span className="text-red-500 text-left block">{errors.password}</span>
                 </Box>
      <Box pt={10} mx={6}>
      <Button
        className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm"
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      
      >
        Next
      </Button>
      </Box>
      <Typography className={classes.textsetting}>Already a member? <span><Link className={classes.textdecorationbold} href='/login'> Login</Link></span></Typography>
       
       
    </div>
  );
}
