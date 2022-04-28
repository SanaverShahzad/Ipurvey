import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Typography ,Button,Grid,InputAdornment,IconButton,FormControl,OutlinedInput,InputLabel, Collapse } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
    appbarbg:{
        backgroundColor:"#F0F4FC",
        padding:"20px 0",
        marginTop:"100px",
    },
    [theme.breakpoints.only('xl')]: {
      appbarbg:{
        marginTop:"190px",
      
    },
    },
    [theme.breakpoints.only('lg')]: {
      appbarbg:{
        padding:"0px 0",
    },
    searchfiled:{
      background:"white",
      ' & .MuiOutlinedInput-input':{
        padding: "12.5px 14px"
    },
    ' & .MuiInputLabel-outlined':{
    display:"none",
    },
    },
    },
    [theme.breakpoints.only('md')]: {
      appbarbg:{
        padding:"0px 0",
    },
    searchfiled:{
      background:"white",
      ' & .MuiOutlinedInput-input':{
        padding: "12.5px 14px"
    },
    ' & .MuiInputLabel-outlined':{
    display:"none",
    },
    },
    },
    [theme.breakpoints.only('sm')]: {
      appbarbg:{
        padding:"0px 0",
    },
    searchfiled:{
      background:"white",
      ' & .MuiOutlinedInput-input':{
        padding: "8px 14px"
    },
    ' & .MuiInputLabel-outlined':{
    display:"none",
    },
    },
    },
   
  
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
    
      searchfiled:{
        background:"white",
       
      },
    
    
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState("")

  const handleClick = index => {
    if (selectedIndex === index) {
      setSelectedIndex("")
    } else {
      setSelectedIndex(index)
    }
  }


  const Data=[
    { btnname:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
     paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        },
        { btnname:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
     paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        },
        { btnname:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
        paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
           },
           { btnname:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
        paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
           },
           { btnname:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
           paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
              },
              { btnname:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
              paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                 },
                 { btnname:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod?",
              paragraph:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                 },
]


  return (
    <>
      <AppBar position="static" className={classes.appbarbg}>
        <Toolbar>
        <Container>
            <Grid container spacing={2}>
                <Grid item lg={8} md={8} sm={8} xs={12}>
                <Button className="capitalize">
            <Typography className="  font-f-bold text-secondary  xl:text-4xl lg:text-xl md:text-xl xs:text-lg ">Frequently Asked Questions</Typography>
            </Button>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                <FormControl className={clsx(classes.margin, classes.textField,classes.searchfiled)} variant="outlined" fullWidth >
          <InputLabel htmlFor="outlined-adornment-password">search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type= 'text' 
      
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
           
                  edge="end"
                >
                  <SearchIcon/>
                </IconButton>
              </InputAdornment>
            }
            labelWidth={60}
          />
        </FormControl>
                </Grid>
            </Grid>
        </Container>
        </Toolbar>
        </AppBar>
        <Container>
            <div className=" xl:mt-16 lg:my-16  md:my-8 sm:my-8 xs-my-2">
        <Grid container justify="center">
                <Grid item xl={10} lg={12} md={12} sm={12} xs={12} >
                    {/* tab colapse started */}
                    {Data.map((paradata, index)=>{
                        return <>
                        <div key={index}>
                        <Paper className="py-5 mt-9">
                    <Button className="capitalize pr-4 " fullWidth   onClick={() => {
                handleClick(index)
              }}>
                    <Typography className="  font-f-regular text-secondary pl-10  xl:text-lg md:text-base sm:text-sm xs:text-xs " >{paradata.btnname}</Typography>
                    {index === selectedIndex ? <ExpandLess fontSize="large" className="ml-auto mr-4" /> : <ExpandMore fontSize="large" className="ml-auto mr-4" />}
                    
                    </Button>
                </Paper>
                <Collapse in={index === selectedIndex}  timeout="auto" unmountOnExit>
                <Typography  color="primary"  className=" font-f-regular  xl:text-lg md:text-base sm:text-sm xs:text-xs  mt-10">{paradata.paragraph}</Typography>
                </Collapse>
                </div>
                        </>

                    })}
                
                  {/* tab colapse started */}
               
               
                 
                    </Grid>
                    </Grid>
                    </div>
                </Container>
        </>
  );
}




