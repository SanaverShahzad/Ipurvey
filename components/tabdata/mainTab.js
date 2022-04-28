import React from "react";
import {
  Button,
  Typography,
  Tooltip,
  Zoom,
  InputBase,
  Box,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import FlightIcon from "@material-ui/icons/Flight";
import TrainIcon from "@material-ui/icons/Train";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
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
}));
const TooltipText = function () {
  return (
    <>
      <Typography component="h6" className="font-f-medium text-sm">
        Flight:
      </Typography>
      <Typography component="span" className="text-xs inline-block mb-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </Typography>
      <Typography component="h6" className="font-f-medium text-sm">
        Rail:
      </Typography>
      <Typography component="span" className="text-xs inline-block mb-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </Typography>
    </>
  );
};

export default function mainTab({ data }) {
  let classes = useStyles();
  const [state, setstate] = React.useState({
    tabdata: "",
    choose:false,
    refNumber: '',
    RefError:false,
    name:'',
    nameError:false

  });
  let tabChange = (prop) => () => {
    setstate({ ...state,choose:false, tabdata: prop });
  };
  const handleChange = (prop)=>(e)=>{
  if(prop === 'referanceNo'){
    setstate({...state,RefError:false,refNumber:e.target.value})
  }else{
    setstate({...state,nameError:false,name:e.target.value})
  }
  }
  const onSubmit = ()=>{
 
  if(!state.refNumber){
  setstate({...state,RefError:true})
  return ''

  }else if(!state.name){
    setstate({...state ,nameError:true})
    return ''
  }else if(!state.tabdata){
    setstate({...state ,choose:true})
    return ''
  }
  data('booking')
 
  }

  return (
    <>
      <Typography component="h5" className="font-f-medium xl:text-xl md:text-md xs:text-sm text-center">
        Would you like your travel claim to be automatically submitted if there
        is a disruption?
      </Typography>
      <div className="info text-center">
        <Typography
          component="span"
          className="xl:text-base xs:text-sm  mr-2 my-2 inline-block"
        >
          Retrieve your travel booking
        </Typography>
        <Tooltip
          TransitionComponent={Zoom}
          classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}
          title={<TooltipText />}
          arrow
          placement="right-start"
        >
          <InfoIcon />
        </Tooltip>
      </div>
      <form
       
        autoComplete="off"
        className="mt-4 xl:px-12 md:px-8"
      >
        <InputBase
          placeholder="Booking Reference Number"
          className="custom-input input-number "
          type="number"
          onChange={handleChange('referanceNo')}
          
        />
        {state.RefError && 
        <span className="block text-red-500">Please Provide The Referance Number</span>
        }
        
        <InputBase placeholder="Surname" className="custom-input mt-4" onChange={handleChange('surname')} />
        {state.nameError && 
         <span className="block text-red-500">Provide the Name</span>
        }
       
      </form>
      <Typography
        component="h5"
        className="font-f-medium text-base text-center my-7"
      >
        Mode of travel
      </Typography>
      <ul className="flex main-tabs justify-center">
        <li className="ml-7">
          <Button
            className={`block ${
              state.tabdata === "flight"
                ? "border-primary text-primay bg-white"
                : ""
            }`}
            color={`${state.tabdata === "flight" ? "default" : "secondary"}`}
            onClick={tabChange("flight")}
            variant="contained"
          >
            <FlightIcon
              className={`text-5xl ${
                state.tabdata === "flight" ? "fill-primary" : ""
              }`}
            />
            <Typography
              component="p"
              className={`${state.tabdata === "flight" ? "font-f-bold" : ""}`}
            >
              Flight
            </Typography>
            {state.tabdata === "flight" && (
              <CheckCircleIcon className="active-tab fill-primary text-xl" />
            )}
          </Button>
        </li>
        <li className="ml-7">
          <Button
            className={`block ${
              state.tabdata === "rail"
                ? "border-primary text-primay bg-white"
                : ""
            }`}
            color={`${state.tabdata === "rail" ? "default" : "secondary"}`}
            onClick={tabChange("rail")}
            variant="contained"
          >
            <TrainIcon
              className={`text-5xl ${
                state.tabdata === "rail" ? "fill-primary" : ""
              }`}
            />
            <Typography
              component="p"
              className={`${state.tabdata === "rail" ? "font-f-bold" : ""}`}
            >
              Rail
            </Typography>
            {state.tabdata === "rail" && (
              <CheckCircleIcon className="active-tab fill-primary text-xl" />
            )}
          </Button>
        </li>
      </ul>
      {state.choose && 
      <span className="block text-red-500 text-center mt-5">Choose One</span>
      }
      
      <Box className="text-center mt-7">
        <Button
          variant="contained"
          className="capitalize ml-7 xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm"
          onClick={onSubmit}
          color="primary"
        >
          Retrieve Booking <ArrowRightAltIcon className="mt-1 ml-2" />
        </Button>
      </Box>
    </>
  );
}
