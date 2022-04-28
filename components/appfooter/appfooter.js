import React from 'react'
import {Grid,Typography,InputBase,Button,IconButton,Box,Container} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '../../src/Link';
import InstagramIcon from '@material-ui/icons/Instagram';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from '@material-ui/lab/Rating';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


export default function Appfooter() {
  const [state, setstate] = React.useState({
    experince:2,
    support:0,
    account:0,
    showfeedback:false,
    feedback:'',
    errorfeedback:false,
    fields: {
      fullName: "",
      email: "",
      message:"",
     
    },
    errors: {
      fullName: "",
      email: "",
      message: "",
    
    }
  });
  const onSubmit = ()=>{
    if(!state.feedback){
    setstate({...state,errorfeedback:true})
    return ''
    }

   
    }
  const validate = (name, value) => {
    switch (name) {
      case "fullName":
        if (!value || value.trim() === "") {
          return "Name is Required";
        } else {
          return "";
        }
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
      case "message":
        if (!value || value.trim() === "") {
          return "Please filled";
        } else {
          return "";
        }
        case "feedback":
          if (!value || value.trim() === "") {
            return "Please filled";
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
  
const {fields,errors} = state;

    return (
        <footer className="pt-12">
            <Container>
            <Grid container justify="center" spacing={4}>
            <Grid  item xs={12} md={8}>
             <div className="grid grid-cols-3 gap-4 md:w-3/4 xs:w-full">
             <List>
              <Typography component="h5" className="font-f-samibold xl:text-xl lg:text-lg xs:text-base mb-4">
                   iPurvey
                  </Typography> 
                    {[{title:'Your Account',href:'/dashboard'},{title:'Media Center',href:'/getintouch'},{title:'Blogs',href:'/blogs'},{title:'Partners',href:'/partaners'}].map(value => 
                    <ListItem button className="p-0" key={value.title}>
                    <Link href={value.href}>
                     <ListItemText className="text-primary font-f-thin">
                      <Typography className="xl:text-base lg:text-sm xs:text-xs">
                     {value.title}
                     </Typography>
                    </ListItemText>
                    </Link> 
                    </ListItem> 
                    )} 
                
               </List>
               <List>
              <Typography component="h5" className="font-f-samibold xl:text-xl lg:text-lg xs:text-base mb-4">
                   Support
                  </Typography> 
                    {[ {title:'About Us',href:'/aboutipurvey'}, {title:'Contact Us',href:'/getintouch'}, {title:'Help Center',href:'/question'}, ].map(value => 
                    <ListItem button className="p-0" key={value.title}>
                    <Link href={value.href}>
                     <ListItemText className="text-primary font-f-thin">
                     <Typography className="xl:text-base lg:text-sm xs:text-xs">
                     {value.title}
                     </Typography>
                    </ListItemText>
                    </Link> 
                    </ListItem> 
                    )} 
                
               </List>
               <List>
              <Typography component="h5" className="font-f-samibold xl:text-xl lg:text-lg xs:text-base mb-4">
                   Legal
                  </Typography> 
                    {  [{title:'Privacy Policy',href:'/privacy'}, {title:'Terms of Service',href:'/termofservices'}, {title:'Data Policy',href:'/privacy'},].map(value => 
                    <ListItem button className="p-0" key={value.title}>
                    <Link href={value.href}>
                     <ListItemText className="text-primary font-f-thin">
                     <Typography className="xl:text-base lg:text-sm xs:text-xs">
                     {value.title}
                     </Typography>
                    </ListItemText>
                    </Link> 
                    </ListItem> 
                    )} 
                
               </List>
            </div>   
            <Typography component="p" className="text-secondary xl:text-base md:text-sm xs:text-xs mt-10">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br></br>
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            </Typography>
            </Grid>
            <Grid  item xs={12} md={4}>
            <Typography component="h4" className="xl:text-3xl lg:text-2xl xs:text-xl font-f-bold mb-4">
            Get in touch!
            </Typography>
            <form>
            <InputBase
          placeholder="Full Name"
          className="custom-input"
          name='fullName'
          onChange={handleUserInput}
          />
           <span className="text-red-500">{errors.fullName}</span>
          <InputBase
          placeholder="Email Address"
          className="custom-input mt-6"
          name ="email"
          onChange={handleUserInput}
          />
          <span className="text-red-500">{errors.email}</span>
          <textarea className="mt-6" rows="4"  onChange={handleUserInput} cols="50" name="message" placeholder="Message"></textarea>
          <span className="text-red-500">{errors.message}</span>
          <div className="text-center mt-6">
            <Button
          variant="contained"
          className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm"
          color="primary"
          onClick={handleSubmit}
        >
          Send
        </Button>
        </div>
            </form>
            
            </Grid>
        </Grid>
       
            </Container>
            <div className="sub-footer py-5 mt-8">
            <Container>
             <div className="grid lg:grid-cols-3 xs:grid-cols-1 gap-4 px-8">
            <div className="lg:text-left xs:text-center">
            <Typography component="p" className="text-white xl:text-lg md:text-base xs:text-sm font-f-medium text-underline mb-5">
            Connect with us!
            </Typography>
            <Link href="/">
            <IconButton  className="bg-white rounded-md hover:bg-white p-1">
             <img src ="/images/facebook.png"/>
            </IconButton>
            </Link>
            <Link href="/" className="xl:ml-5 xs:ml-3">
            <IconButton color="primary" className="bg-white rounded-md hover:bg-white p-1">
             <InstagramIcon className="xl:text-2xl xs:text-base"/>
            </IconButton>
            </Link>
            <Link href="/" className="xl:ml-5 xs:ml-3">
            <IconButton color="primary" className="bg-white rounded-md hover:bg-white p-1">
             <PlayArrowRoundedIcon className="xl:text-2xl xs:text-base"/>
            </IconButton>
            </Link>
            <Link href="/" className="xl:ml-5 xs:ml-3">
            <IconButton color="primary" className="bg-white rounded-md hover:bg-white p-1">
             <img src="/images/linkedin.png" />
            </IconButton>
            </Link>
            <Link href="/" className="xl:ml-5 xs:ml-3">
            <IconButton color="primary" className="bg-white rounded-md hover:bg-white p-1">
             <TwitterIcon className="xl:text-2xl xs:text-base"/>
            </IconButton>
            </Link>
            </div>  
            <div className="text-center lg:self-end">
                <Typography component="p" className="text-white xl:text-xl md:text-base xs:text-sm">
                 Copyright &#169; {new Date().getFullYear()} iPurvey.
                </Typography>
            </div>  
            <div className="text-white xl:text-xl md:text-base xs:text-sm font-f-medium lg:text-right xs:text-center self-center">
                <Link href="/privacy" className="text-white mr-2">
                Privacy policy  
                </Link> | <Link href="/termofservices" className="text-white ml-2">
                Terms of Use
                </Link>
            </div> 
            </div>           
            </Container>
            </div>
            <Box className={`feedback p-7 ${state.showfeedback ? 'active':''}`}>
            <Typography component="h5" className="xl:text-xl md:text-base xs:text-sm text-center font-f-samibold text-secondary mb-3">
            Leave a Feedback!
            </Typography>
            <Typography component="p" className="text-center xl:text-base md:text-sm xs:text-xs">
            Lorem ipsum dolor sit amet,
            </Typography>
            <Typography  component="h5" className="text-center xl:my-3 xs:my-1 text-secondary xl:text-xl md:text-base xs:text-sm font-f-medium">
            How was the experience?
            </Typography>
            <Box className="text-center">
            <Rating
            className="text-green-600"
            name="experience"
            icon={<StarRoundedIcon fontSize="large" />}
            value={state.experince}
            onChange={(event, newValue) => {
            setstate({...state,experince:newValue});
          }}
        />
        
        </Box>
        <Typography  component="p" className="text-center xl:my-3 xs:my-1 text-secondary xl:text-base md:text-sm xs:text-xs font-f-medium">
        Are you satisfied with our customer support?
            </Typography>
            <Box className="text-center">
            <Rating
            className="text-green-600"
            size="large"
            name="support"
            icon={<StarRoundedIcon fontSize="large" />}
            value={state.support}
            onChange={(event, newValue) => {
            setstate({...state,support:newValue});
          }}
        />
        
        </Box>
        <Typography  component="p" className="text-center xl:my-3 xs:my-1 text-secondary xl:text-base md:text-sm xs:text-xs font-f-medium">
        Did you have any trouble managing your account?
            </Typography>
            <Box className="text-center">
            <Rating
            className="text-green-600"
            size="large"
            name="account"
            icon={<StarRoundedIcon fontSize="large" />}
            value={state.account}
            onChange={(event, newValue) => {
            setstate({...state,account:newValue});
          }}
        />
        
        </Box>
        <form>
        <Typography  component="p" className="text-center mt-3 mb-1 text-secondary xl:text-base md:text-sm xs:text-xs font-f-medium">
        Write us a feedback (Optional)
            </Typography>
        <textarea className="mt-3 bg-default" rows="4" cols="50" name="feedback" onChange={(e)=> setstate({...state,errorfeedback:false,feedback:e.target.value})}  placeholder="Message"></textarea>
        {state.errorfeedback && 
          <span className="text-red-500">Please Filled</span>
        }
 
          <div className="text-center mt-6">
            <Button
          variant="contained"
          className="capitalize xl:py-4 md:py-2 xl:px-20 lg:px-12 xs:px-8 xl:text-base md:text-sm"
          color="primary"
          onClick={onSubmit}
         
        >
          Send
        </Button>
        </div>
        </form>
            <Button onClick={()=> setstate({...state,showfeedback:!state.showfeedback})} startIcon={state.showfeedback ? <ExpandLessIcon />:<ExpandMoreIcon />} color="primary" variant="contained" className="btn-feedback xl:text-base md:text-sm capitalize font-f-medium xl:py-4 xl:px-8">
              Feedback 
            </Button>
            </Box>
           
        </footer>
    )
}
