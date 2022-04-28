import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useRouter } from 'next/router'
import Link from '../src/Link'
import clsx from 'clsx';
import {
  Box,
  Typography,
  Grid,
  Button,
  InputBase,
  InputAdornment,
  Zoom,
  Tooltip,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  
  textdecorationbold:{
    textDecoration:'revert!important',
    color:'#2E58A6',
    fontWeight:'500',
  },
  background: {
    marginTop: 50,
    border: "1px solid #eee",
    boxShadow:
      "-webkit-box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);-moz-box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);!important",
    textAlign: "center",
    backgroundColor: "white",


  },
  inputcolor: {
    '& .custom-input input':{
      borderTopRightRadius:'0rem',
      borderBottomRightRadius:'0rem',
   
    },
    "& .rounded-l-lg": {
        borderTopLeftRadius:'0rem',
        borderBottomLeftRadius:'0rem',
    },
  },
  textsetting: {
    paddingTop: 20,
   textAlign:'center',
  },
  arrow: {
    "&:before": {
      border: "1px solid #E6E8ED",
    },
    color: theme.palette.common.white,
  },
  tooltip: {
    backgroundColor: theme.palette.common.white,
    border: "1px solid #E6E8ED",
    color: "#4A4A4A",
    maxWidth: 220,
  },
  iconinfo: {
    position: "absolute",
    right: '10px',
    top: '15px',
    color: "#2E58A6",
  },
  positionrelative: {
    position: "relative",
  },
  codebtn: {
    boxShadow:'none!important',
    marginTop: "15px",
    backgroundColor: "#00DC1C!important",
    color: "white",
    "& .MuiButton-label": {
      backgroundColor: "#00DC1C",
      height:'44px',
    },
  },
  [theme.breakpoints.between('md','lg')]: {
    mediasetting:{
      display:'none',
    },
    iconinfo: {
      position: "absolute",
      right: '10px',
      top: '8px',
      color: "#2E58A6",
    },
  },
  [theme.breakpoints.only('lg')]: {
    codebtn: {
      boxShadow:'none!important',
      marginTop: "15px",
      backgroundColor: "#00DC1C!important",
      color: "white",
      "& .MuiButton-label": {
        backgroundColor: "#00DC1C",
        height:'30px',
        fontSize:'11px'
      },
    },
  
  
  },
  [theme.breakpoints.between('xs','md')]: {
    codebtn: {
      boxShadow:'none!important',
      marginTop: "15px",
      backgroundColor: "#00DC1C!important",
      color: "white",
      "& .MuiButton-label": {
        backgroundColor: "#00DC1C",
        height:'30px',
        fontSize:'11px'
      },
    },
    iconinfo: {
      position: "absolute",
      right: '10px',
      top: '8px',
      color: "#2E58A6",
    },
  },
}));
const TooltipText = function () {
  
  return (
    <>
      <Typography component="span" className="text-xs inline-block mb-4">
      'Default payment method is BACS. In the event BACS payment method can not be requested, we will request for your chosen alternative compensation method'
      </Typography>
    </>
  );
};
export default function login({data}) {
  const [state, setstate] = React.useState({
    show:false,
    password:'',
    fields: {
      postalcode:'',
      address:'',
      sortcode:'',
      accountno:'',
      alternative:'',
      password:''
    },
    errors: {
      postalcode:'',
      address:'',
      sortcode:'',
      accountno:'',
      alternative:'',
      password:''
   
    }
  });
  const validate = (name, value) => {

    switch (name) {
      case "postalcode":
        if (!value || value.trim() === "") {
          return "This Field is Required";
        } else {
          return "";
        }
        case "address":
          if (!value || value.trim() === "") {
            return "This Field is Required";
          } else {
            return "";
          }
          case "sortcode":
            if (!value || value.trim() === "") {
              return "This Field is Required";
            } else {
              return "";
            }
            case "accountno":
            if (!value || value.trim() === "") {
              return "This Field is Required";
            } else {
              return "";
            }
            case "alternative":
            if (!value || value.trim() === "") {
              return "This Field is Required";
            } else {
              return "";
            }
            case "password":
            if (!value || value.trim() === "") {
              return "This Field is Required";
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

  
  };
 const {errors} = state;
  let location = useRouter();
  const classes = useStyles();
  let showpassword = ()=>{
   state.password && setstate({...state,show: !state.show})
  }
  

  return (
    <div className={classes.root}>
                <Grid container>
                  <Grid item xs={8}>
                    <Box className={classes.inputcolor}>
                      <InputBase
                        placeholder="Postal Code"
                        className="custom-input mt-4 rounded-l-lg"
                        name="postalcode"
                        onChange={handleUserInput}
                      />
                      <span className="text-red-500 text-left block">{errors.postalcode}</span>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className={classes.inputcolor} >
                      <Button
                        className={clsx(classes.codebtn,'rounded-l-lg')}
                        variant="contained"
                        fullWidth
                        size="Medium"
                      >
                        Find Address
                      </Button>
                    </Box>
                  </Grid>
                </Grid>

                <form noValidate autoComplete="off" className="mt-4">
                  <InputBase placeholder="Address" className="custom-input"  name="address"
                    onChange={handleUserInput} />
                    <span className="text-red-500 text-left block">{errors.address}</span>
                  <InputBase
                    placeholder="Sort Code"
                    className="custom-input mt-4"
                    name="sortcode"
                    onChange={handleUserInput}
                  />
                    <span className="text-red-500 text-left block">{errors.sortcode}</span>
                  <Box mt={2} />
                  <InputBase
                    placeholder="Account Number"
                    className="custom-input"
                    name="accountno"
                    onChange={handleUserInput}
                  />
                   <span className="text-red-500 text-left block">{errors.accountno}</span>
                  <Box className={classes.positionrelative}>
                    <InputBase
                      placeholder="Alternative Compensation Method"
                      className="custom-input mt-4"
                      name="alternative"
                      onChange={handleUserInput}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end"></InputAdornment>
                        ),
                      }}
                    />

                    <Tooltip
                      TransitionComponent={Zoom}
                      classes={{
                        arrow: classes.arrow,
                        tooltip: classes.tooltip,
                      }}
                      title={<TooltipText />}
                      arrow
                      placement="right-start"
                    >
                      <InfoIcon className={classes.iconinfo} />
                    </Tooltip>
                    <span className="text-red-500 text-left block">{errors.alternative}</span>
                  </Box>
                   {['/'].includes(location.pathname) && 
                   <Box className={classes.positionrelative}>
                   <InputBase
                     placeholder="Password"
                     name="password"
                     onChange={handleUserInput}
                     className="custom-input mt-4"
                     type={state.show ? 'text' : 'password'}
                     
                   />
                   {!state.show ? 
                   <VisibilityIcon className={classes.iconinfo} onClick={showpassword} />
                   :<VisibilityOffIcon className={clsx(classes.iconinfo,"fill-current text-gray-400")} onClick={showpassword} />
                  }
                   <span className="text-red-500 text-left block">{errors.password}</span>
                 </Box>
                   
                   }     
                  
                </form>
                <Box pt={15}  mt={5}>
                  <Button className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm" onClick={handleSubmit} variant="contained" color="primary" fullWidth>
                    Sign Up
                  </Button>
                </Box>
                <Typography className={classes.textsetting}>
                  Already a member?{" "}
                  <span>
                    {['/'].includes(location.pathname) ? 
                     <Link className={classes.textdecorationbold} href="javascript: void(0)" onClick={()=>data('login')}>
                     {" "}
                     Login
                   </Link>:
                    <Link className={classes.textdecorationbold} href="/login">
                    {" "}
                    Login
                  </Link>
                    
                    }
                   
                  </span>
                </Typography>
             
            
         
     
    </div>
  );
}
