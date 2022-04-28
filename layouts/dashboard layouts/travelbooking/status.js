import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography,Box } from '@material-ui/core';
import StopIcon from '@material-ui/icons/Stop'; 


const useStyles = makeStyles({

    checkboxsetting:{
      
      color:"white",
        '& svg':{
            height:"20px",
            width:"20px",
            position:"relative",
            left: "-7px",
            top: "-8px",

        },
    },
  });


const GreenCheckbox = withStyles({
 
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
    const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
      <>
     
    <FormGroup >
     <Box mt={2}>
      <FormControlLabel
      
        control={ <Paper elevation={0} className="rounded-md  w-6 h-6">
          <Checkbox
          checkedIcon={<StopIcon />}
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
            size="medium"
            className={classes.checkboxsetting}
          />
          </Paper>
        }
        label={<Typography className="text-base font-f-regular pl-2" >All</Typography> }
      />
  </Box>
  <Box mt={2}>
      <FormControlLabel
      
        control={ <Paper elevation={0} className="rounded-md  w-6 h-6">
          <Checkbox
          checkedIcon={<StopIcon />}
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
            size="medium"
            className={classes.checkboxsetting}
          />
          </Paper>
        }
        label={<Typography className="text-base font-f-regular pl-2" >New</Typography> }
      />
  </Box>
  <Box mt={2}>
      <FormControlLabel
      
        control={ <Paper elevation={0} className="rounded-md  w-6 h-6">
          <Checkbox
          checkedIcon={<StopIcon />}
            checked={state.checkedF}
            onChange={handleChange}
            name="checkedF"
            color="primary"
            size="medium"
            className={classes.checkboxsetting}
          />
          </Paper>
        }
        label={<Typography className="text-base font-f-regular pl-2" >Info Required</Typography> }
      />
  </Box>
  <Box mt={2}>
      <FormControlLabel
      
        control={ <Paper elevation={0} className="rounded-md  w-6 h-6">
          <Checkbox
          checkedIcon={<StopIcon />}
            checked={state.checkedG}
            onChange={handleChange}
            name="checkedG"
            color="primary"
            size="medium"
            className={classes.checkboxsetting}
          />
          </Paper>
        }
        label={<Typography className="text-base font-f-regular pl-2" >Claim Requested</Typography> }
      />
  </Box>
    
      
    </FormGroup>
   

    <FormGroup >
     <Box mt={2}>
      <FormControlLabel
      
        control={ <Paper elevation={0} className="rounded-md  w-6 h-6">
          <Checkbox
          checkedIcon={<StopIcon />}
            checked={state.checkedH}
            onChange={handleChange}
            name="checkedH"
            color="primary"
            size="medium"
            className={classes.checkboxsetting}
          />
          </Paper>
        }
        label={<Typography className="text-base font-f-regular pl-2" >Expired</Typography> }
      />
  </Box>
  <Box mt={2}>
      <FormControlLabel
      
        control={ <Paper elevation={0} className="rounded-md  w-6 h-6">
          <Checkbox
          checkedIcon={<StopIcon />}
            checked={state.checkedI}
            onChange={handleChange}
            name="checkedI"
            color="primary"
            size="medium"
            className={classes.checkboxsetting}
          />
          </Paper>
        }
        label={<Typography className="text-base font-f-regular pl-2" >Closed</Typography> }
      />
  </Box>

    
      
    </FormGroup>
    </>
  );
}
