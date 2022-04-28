import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container, Box, Typography, Grid, Button, Paper, IconButton,FormControl, TextField, FormControlLabel,FormGroup, Switch } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(240,244,252,1)",
 
  },

  
}));

export default function login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
  
     
      <Grid container spacing={2}>
        <Grid item xl={5} lg={8} md={10}  sm={12}>
        <Container fixed>
        <Typography className="text-xl font-f-semibold text-secondary p-10" variant="h6" >
        WHY ARE YOU LEAVING?
    </Typography>
        
            
    <img
    className="mx-auto py-5"
       src="/images/undraw.png"
       alt="Logoasdsa"
       
        />
        
        <Box pt={5} >
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="text-base font-f-medium">I want to temporarily delete my account</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-base font-f-medium">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className="text-base font-f-medium">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className="text-base font-f-medium">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Box>

        <Box textAlign='center' py={5} >
      <Button className="bg-red-600 text-white text-lg font-f-medium capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm" variant="contained" >
      Delete Accounrt
</Button>
      </Box>


        </Container>
        </Grid>
        
        <Grid item xl={7} lg={5} md={4}>
          
        </Grid>
        
      </Grid>
      
    </div>
  );
}
