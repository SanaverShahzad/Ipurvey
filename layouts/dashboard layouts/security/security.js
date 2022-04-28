import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Box, Typography, Grid, Button, TextField, Link } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(240,244,252,1)",
    
  },
  textbtn:{
      backgroundColor:'white!important',
     
  },
  textbtn:{
    marginTop:'10px',
    backgroundColor:'white',
    '& .MuiOutlinedInput-input':{
      color:'#2E58A6',
    },
  },

  
}));

export default function login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className='pt-10' fixed>
      <Grid container spacing={2}>
        <Grid item xl={5} lg={9} md={9} sm={12}>
        <Typography className="text-secondary text-xl font-f-medium pb-5" variant="h6" >
        Security Settings
    </Typography>
      <TextField className={classes.textbtn}  id="outlined-basic" placeholder="Old Password" variant="outlined" fullWidth />
      <TextField className={classes.textbtn}  id="outlined-basic" placeholder="New Password" variant="outlined" fullWidth />
      <TextField className={classes.textbtn}  id="outlined-basic" placeholder="Confirm New Password" variant="outlined" fullWidth />
      
      <Box textAlign='center' pt={3}>
      <Button variant="contained" color="primary"  className="text-lg font-f-regular capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm ">
      Change Password
</Button>
      </Box>
      <Box pb={10}/>
      <Typography className="text-xl text-secondary font-f-medium pb-5" variant="h6" >
        Security Settings
    </Typography>
    <Typography className="font-f-regular text-lg" color="primary" >
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores 
    </Typography>
      
      <Box textAlign='center' py={3}>
        <Link href="/dashboard/whyleaving">
      <Button className="text-xg bg-red-600 text-white hover:text-xg  hover:bg-red-600  hover:text-white  font-f-regular capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm" variant="contained">
      Delete Accounrt
</Button>
</Link>
      </Box>
        </Grid>
        <Grid item xs={5}>
          
        </Grid>
        
      </Grid>
      </Container>
    </div>
  );
}
