import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from "../src/Link";
import SearchIcon from "@material-ui/icons/Search";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Typography ,TextField,Button,Grid,ListItem,Box,IconButton,InputAdornment,List,ListItemText } from '@material-ui/core';
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
[theme.breakpoints.down('lg')]: {
  appbarbg:{
    padding:"0px 0",
},
},

[theme.breakpoints.down('xs')]: {
  appbarbg:{
    padding:"0px 0",
    marginTop:"68px",
},
},
appbarbg1:{
  
    backgroundColor:"#F0F4FC",
    padding:"20px 0",
    

},
    background:{
      backgroundColor:"#F0F4FC!important",
        marginTop:50,
        border: "1px solid #eee",
        boxShadow:
      "-webkit-box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);-moz-box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);box-shadow: 0px 7px 5px 0px rgba(238,238,238,1);!important",
      textAlign:'center',
      overflow:'hidden',
    },
    iconcolor:{
    color: "#2E58A6",
  },
  imgsetting:{
    width:'100%!important',
  },
  padding:{
    padding:0,
  },
  hover: {
    color:'black',
    "&:hover": {
      backgroundColor: '#2E58A6',
      color:'white',
    },
    "&.active": {
      backgroundColor: '#2E58A6',
      color:'white',
    },
  }
}));

const data =[{
  heading:'Lorem Ipsum',
  text:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
  `
},
{
  heading:'Lorem Ipsum 2',
  text:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
  `
},
{
  heading:'Lorem Ipsum 3',
  text:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
  `
},
{
  heading:'Lorem Ipsum 4',
  text:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
  `
},
{
  heading:'Lorem Ipsum 5',
  text:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
  `
},
{
  heading:'Lorem Ipsum 6',
  text:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
  `
},
{
  heading:'Lorem Ipsum 7',
  text:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
  `
},
{
  heading:'Lorem Ipsum 8',
  text:`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
  `
},
]
export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setstate] = React.useState({
    index:0,
  })

  

  
  return (
    <>
    <AppBar position="static" className={classes.appbarbg}>
        <Toolbar>
        <Container>
        <Button className="capitalize">
            <Typography className="  font-f-bold text-secondary   xl:text-4xl lg:text-2xl md:text-xl xs:text-xl ">API Documentation</Typography>
            </Button>
            <span className="float-right text-black font-medium xl:text-lg md:text-base sm:text-sm xs:text-xs pt-2">Help?</span>
        </Container>
        </Toolbar>
        </AppBar> 
        <Container fixed>
        <Box pt={2} pb={10}>
        <Grid container spacing={2}>
        <Grid item xl={3} lg={4} md={5} sm={12} xs={12}>
          <Box className={classes.background}>
          <Link href="/">
          <img
         src="/images/iPurveryLogo.png"
         alt="Logo"
         className="logo mx-auto my-10"
          />
          </Link>
          <Box p={1}>
          <TextField className="bg-white mr-10" id="outlined-basic" placeholder="Search" variant="outlined" fullWidth 
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon className={classes.iconcolor} />
              </InputAdornment>
            ),
          }}
        />
          
          </Box>
          <Box pt={2}/>
          <List>
        {['Molestias unde distinctio quia.', 'Culpa eaque qui nostrum', 'Nostrum perferendis quis vitae','Nemo eos dicta doloribus quo','Reiciendis occaecati est quia et','Aut perferendis et','Labore et temporibus.','Rerum corrupti deserunt'].map((text, i) => (
          <ListItem className={clsx(classes.hover,`${state.index === i ? 'active' : ''}`)} onClick={()=>setstate({...state,index:i})} button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
          <Box pb={2} />
          </Box>
        </Grid>
        <Grid item xl={5} lg={8} md={7} sm={12} xs={12}>
        <Box   className=" xl:pt-20 lg:pt-20  md:pt-20    sm:pt-5 xs:pt-5  xl:pl-7 lg:pl-7 md:pl-7  sm:pl-0 xs:pl-0  " >
        {data.map((v,i) => state.index === i && 
        <Box>
           <Typography component="h4"  className="font-f-bold text-secondary xl:text-2xl md:text-xl xs:text-lg">{v.heading}</Typography>
           <Typography component="p"  className="xl:text-lg md:text-base sm:text-sm xs:text-xs py-5 lg:pt-3 ">{v.text}</Typography>
           <Typography component="p"  className="xl:text-lg md:text-base sm:text-sm xs:text-xs">{v.text}</Typography>
        </Box>
        
        )}
        </Box>
        </Grid>
        <Grid item xl={4} lg={7} md={6} sm={12} xs={12}>
        <Box pt={5} pl={2} className="sm:ml-auto sm:mr-auto" >
        <AppBar position="static"  className={classes.appbarbg1}>
        <Toolbar className={classes.padding} >
        <Container>
        <Button className="capitalize">
            <Typography variant="h5"  className="font-f-bold text-secondary xl:text-2xl md:text-xl xs:text-lg ">Lorem Ipsum</Typography>
            </Button>
           <IconButton className="float-right"> <span className="float-right text-black font-medium text-xl"><FileCopyIcon /></span></IconButton>
        </Container>
        </Toolbar>
        </AppBar> 
        <img
        className={classes.imgsetting}
         src="/images/coding.png"
         alt="coding"
          />
        </Box>
        </Grid>
      </Grid>
        </Box>
        </Container>
                  
                            
        </>
  );
}




