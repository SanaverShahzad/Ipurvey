import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import clsx from 'clsx';
import { Container, Box, Typography, Grid, Button, Paper, IconButton,FormControl, TextField, FormControlLabel,FormGroup, Switch } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(240,244,252,1)",
    
  },
  btnsetting:{
      backgroundColor:'white',
      color:'black',
      textTransform:'capitalize',
      fontSize:18,
      fontFamily:'Poppins-Medium',
  },
  textbtn:{
      backgroundColor:'white!important',
     
  },
  textbtn:{
    marginTop:'20px',
    backgroundColor:'white',
    '& .MuiOutlinedInput-input':{
      color:'#2E58A6',
    },
  },
  swtich:{
    '& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track':{
      backgroundColor:'#25D632',
    },
    color:'#25D632!important',
    '& .MuiSwitch-colorPrimary.Mui-checked':{
      color: "#25D632!important",
  },

  },
  paper:{
    '& .MuiDropzoneArea-text':{
      display:"none",
    },
    '& .MuiDropzoneArea-root':{
      border:"none",
      padding:"50px",
      minHeight: '0px',
    },
    '& .MuiGrid-spacing-xs-8':{
      margin:"-56px",
    },
    '& .MuiDropzonePreviewList-removeButton':{
      top:"72px",
      right:"-55px"
    },
  },
  
}));

export default function login() {
  const classes = useStyles();
  const [state, setstate] = React.useState({
    files: [],
    edit:false
  });
  const handleChange = (files) => {
    setstate({ files: files });
    console.log(state);
  };
console.log(state.edit)
  return (
    <div className={classes.root}>
      <Container className='pt-10' fixed>
      <Grid container spacing={2}>
        <Grid item xl={6} lg={6} md={12} xs={12}>
        <Typography className="text-secondary text-xl font-f-bold pb-5" variant="h6" >
        YOUR ACCOUNT INFORMATION<span className="float-right">
        <Button
        variant="contained"
        size="Medium"
        className={classes.btnsetting}
        onClick={()=>{setstate({...state,edit:true})}}
        startIcon={<EditIcon />}
      >
        Edit
      </Button>
        </span>
    </Typography>
    <Grid container spacing={2}>
        <Grid item xs={4} xl={4} lg={5} xs={12}>
          <Paper className={clsx(classes.paper,'rounded-l-lg text-center')}>
          <DropzoneArea
                acceptedFiles={["image/*"]}
                onChange={handleChange.bind(this)}
                showFileNames
                showAlerts={false}
                filesLimit={1}
                Icon={PhotoCamera}
              />
          </Paper>
        </Grid>
        <Grid item xs={0} md={0} xl={0} lg={0}>
          
        </Grid>
      </Grid> 
      <Grid container spacing={2}>
      <Grid item md={6} xs={12} xl={6} lg={6}>
      <TextField className={classes.textbtn} disabled={!state.edit} autoFocus={!state.edit} id="outlined-basic" placeholder="First Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item md={6} xs={12} xl={6} lg={6}>
      <TextField className={classes.textbtn} disabled={!state.edit} id="outlined-basic" placeholder="Surname" variant="outlined" fullWidth />
      </Grid>
      </Grid>
      <TextField className={classes.textbtn} disabled={!state.edit} id="outlined-basic" placeholder="Email Address" variant="outlined" fullWidth />
      <TextField className={classes.textbtn} disabled={!state.edit} id="outlined-basic" placeholder="Mobile Number" variant="outlined" fullWidth />
      <TextField className={classes.textbtn} disabled={!state.edit} id="outlined-basic" placeholder="Postal Code" variant="outlined" fullWidth />
      <TextField className={classes.textbtn} disabled={!state.edit} id="outlined-basic" placeholder="Address" variant="outlined" fullWidth />
      <Box textAlign='center' py={5}>
      <Button className="text-lg font-f-regular capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm " variant="contained" color="primary" disabled={!state.edit} fullWidth>
      Save
</Button>
      </Box>
        </Grid>
        <Grid item xl={6} lg={6} md={12} xs={12}>
          <Box className='xl:pl-10 lg:pl-10 md:pl-0 sm:pl-0 xs:pl-0'>
        <Typography className="text-secondary text-xl font-f-bold " variant="h6" >
        Payment Details
        </Typography>
        <TextField className={classes.textbtn} disabled={!state.edit} id="outlined-basic" placeholder="Sort Code" variant="outlined" fullWidth />
        <TextField className={classes.textbtn} disabled={!state.edit} id="outlined-basic" placeholder="Account Number" variant="outlined" fullWidth />
        <TextField className={classes.textbtn} disabled={!state.edit} id="outlined-basic" placeholder="Alternative Compensation Method" variant="outlined" fullWidth />
        <Typography className="pt-10 text-secondary text-xl font-f-bold " variant="h6" >
        Account Settings
        </Typography>
      <Box className="px-10">
        <Typography className="text-primary text-lg font-f-regular pt-5" >
        Notifications<span className="float-right">
        <FormControl component="fieldset">
      <FormGroup   aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Switch color="primary" className={classes.swtich} />}
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
        </span>
    </Typography>
    </Box>
    
        </Box>
        <Box className="px-10">
        <Typography className="text-lg font-f-regular text-primary xl:pl-10 lg:pl-10 md:pl-0 sm:pl-0 xs:pl-0   pt-5" >
    Newsletter <span className="float-right">
        <FormControl component="fieldset">
      <FormGroup  aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Switch color="primary" className={classes.swtich}  />}
         
          labelPlacement="top"
        />
      </FormGroup>
    </FormControl>
        </span>
    </Typography>
    </Box>
        </Grid>
        
      </Grid>
      </Container>
    </div>
  );
}
