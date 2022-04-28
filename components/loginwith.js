import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import clsx from 'clsx';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useRouter } from 'next/router'
import {Box, InputBase, Typography, Button, Avatar, FormControl, Checkbox, FormGroup, FormControlLabel} from '@material-ui/core/';

import Link from 'next/link'

const useStyles = makeStyles((theme) => ({

    facebookbutton:{
        marginTop:20,
        padding:10,
        width:'100%',
    },
    gmailbutton:{
        marginTop:15,
        padding:0,
        width:'100%',
        backgroundColor:'transparent',
        '& .MuiAvatar-img':{
            height:20,
            width:20,
        },
    },
    borderbottom:{
        borderBottom:'1px solid ',
        margin:"25px 0px",
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
    textright:{
      float:'right',
      paddingTop:'10px',
      color:'#2E58A6',
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
    textdecoration:{
      textDecoration:'revert!important',
      color:'#2E58A6',
      
    },
    textdecorationbold:{
      textDecoration:'revert!important',
      color:'#2E58A6',
      fontWeight:'400',
    },
    [theme.breakpoints.between('xs','lg')]: {
      iconinfo: {
        position: "absolute",
        right: '10px',
        top: '10px',
        color: "#2E58A6",
      },
    },
}));

export default function Loginwith({goto}) {
  const classes = useStyles();
  let location = useRouter();
  const [state, setstate] = React.useState({
    show:false,
    fields: {
      email: "",
      password:""
    },
    errors: {
      email: "",
      password: "",
    }
  })
  const validate = (name, value) => {
    switch (name) {
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
      case "password":
        if (!value || value.trim() === "") {
          return "Please filled This Field";
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
      errors: {
        ...state.errors,
        [e.target.name]: validate(e.target.name, e.target.value)
      },
      fields: {
        ...state.fields,
        [e.target.name]: e.target.value
      }
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
  };
const {errors} = state;

  let showpassword = ()=>{
    setstate({...state,show: !state.show})
  }

  return (
    <div className="text-center">
        <Button
        variant="contained"
        color="primary"
        className={clsx(classes.facebookbutton,"capitalize  xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm")}  
        
        startIcon={<FacebookIcon />}
      >
        Login using Facebook
      </Button>
      <Button
        variant="contained"
        className={clsx( classes.gmailbutton,"xl:text-base md:text-sm capitalize ")}
        startIcon={<Avatar src={'/images/Google.png'} />}
      >
        Login using Google
      </Button>
      <Box color='#707070' className={classes.borderbottom}>
          <Typography className={classes.position}>OR</Typography>
      </Box>
      <Box className={classes.inputcolor}>
      <InputBase placeholder="Email Address" name="email" onChange={handleUserInput} className="custom-input" />
      <span className="text-red-500 text-left block">{errors.email}</span>
      </Box>
      <Box className={classes.positionrelative}>
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
      <Box color='#2E58A6' pt={0.5} textAlign='left'>
      <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          label="Remember me"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
    <span className={classes.textright}><Link className={classes.textdecoration} href='/forgotpassword'>Forgot Password?</Link></span>
      </Box>
     
        {['/'].includes(location.pathname) ?
        <>
         <Box pt={2}>
        <Button
        variant="contained"
        color="primary"
        className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm"
        fullWidth
        onClick={handleSubmit}
      >
        Login
      </Button>
      </Box>
      <Typography className="pt-3" >Not a registered member? <span><button onClick={() => goto('reg-main')} className={classes.textdecorationbold} type="button"> Sign up</button></span></Typography>
      </>
      :
      <>
      <Box pt={2}>
      <Button
      variant="contained"
      color="primary"
      className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm"
      fullWidth
      onClick={handleSubmit}
    >   
      Login 
    </Button>
    </Box>
    <Typography className="pt-5">Not a registered member? <span><Link className={classes.textdecorationbold} href='/signup'> Sign up</Link></span></Typography>
        </>
        }
      
        
    </div>
  );
}
