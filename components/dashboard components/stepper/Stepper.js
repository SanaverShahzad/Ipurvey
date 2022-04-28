import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& .MuiStepIcon-root.MuiStepIcon-active':{
      color:"#50C900"
    },
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  heading:{
      fontFamily:"Poppins-Semibold",
      fontSize:"16px",
      [theme.breakpoints.down('lg')]: {
        fontSize:"12px",
    },
  },
  typo:{
      fontFamily:"Poppins",
      fontSize:"14px",
      color:"#707070",
      [theme.breakpoints.down('lg')]: {
        fontSize:"10px",
    },
  },
  

}));

function getSteps() {
  const classes = useStyles();
  return [<><span className="float-right text-gray-400 lg:text-xs">12/20/21  |  23:00</span><Typography className={classes.heading}>New</Typography></>, <Typography className={classes.heading}>Claim Requested</Typography>,<Typography className={classes.heading}>Closed</Typography>];
}

function getStepContent(step) {
    const classes = useStyles();
  switch (step) {
    case 0:
      return <><Typography className={classes.typo}>A contract record has been created for your travel booking and being monitored for qualifying travel disruption.</Typography></>;
    case 1:
      return <><Typography className={classes.typo}>Your claim has been automatically requested with the transport operator.</Typography></>;
    case 2:
      return <><Typography className={classes.typo}>Your contract has closed.</Typography></>;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical" className='xs:px-0 lg:px-7'>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              
            </StepContent>
          </Step>
        ))}
      </Stepper>
     
    </div>
  );
}
