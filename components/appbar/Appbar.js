import React from 'react';
import {AppBar,Toolbar,Button,IconButton,Typography,Box,Paper,Popper,MenuItem,MenuList,Grow,ClickAwayListener,ListItemIcon, Grid,Container,InputBase,Collapse } from '@material-ui/core';
import { useRouter} from 'next/router'
import Link from 'next/link'
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import isSmallScreen from '../../hooks/useSmallScreen'
import Drawer from '../drawer/Drawer'
import DashboardIcon from '@material-ui/icons/Dashboard';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import clsx from 'clsx';
const logindata = [
  {
    icon: <DashboardIcon color='primary' fontSize="small" />,
    text:'Your Dashboard'
  },
  {
    icon: <PersonIcon color='primary' fontSize="small" />,
    text:'Account Settings'
  },
  {
    icon: <TouchAppIcon color='primary' fontSize="small" />,
    text:'Subscriptions'
  },
  {
    icon: <NotificationsIcon color='primary' fontSize="small" />,
    text:'Messages'
  },
  {
    icon: <ExitToAppIcon color='primary' fontSize="small" />,
    text:'Logout'
  },
]
const notificationdata = [
  {
    heading:'MESSAGE TITLE',
    date:'12/20/2021',
    desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    time:'05:00 PM'
  },
  {
    heading:'MESSAGE TITLE',
    date:'12/20/2021',
    desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    time:'05:00 PM'
  },
  {
    heading:'MESSAGE TITLE',
    date:'12/20/2021',
    desc:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    time:'05:00 PM'
  },
]

export default function Navbar() {
  const [state, setstate] = React.useState({
    openlogindropdown:false,
    opennotificdropdown:false,
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
  
const {errors} = state;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const anchorRef = React.useRef(null);
  const mobileScreen  = isSmallScreen();
  let location = useRouter();
  const handleToggle = (props) => ()=> {
    props ==='notification' ? setstate({...state,opennotificdropdown:true}):
    setstate({...state,openlogindropdown:true})
  };

  const handleClose = (props)=> (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    props ==='notification' ? setstate({...state,opennotificdropdown:false}):
    setstate({...state,openlogindropdown:false})
  
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
    }
  }




  return (
    <div className="navbar relative">
      {!mobileScreen ? 
      <AppBar position="fixed" color="inherit">
      <Toolbar className="xl:px-20 lg:px-12">
        <Link href="/">
        <img
       src="/images/updatedlogo.png"
       alt="Logoasdsa"
       className="logo xl:mr-20 lg:mr-3 md:mr-0"
        />
        </Link>
    <ul className="flex main-menu">
      <li>
        <Link href="/">
        <Button color="inherit">Home</Button>
      </Link>
      </li>
      <li>
      <Link href="/termofservices">
      <Button color="inherit">Services</Button>
      </Link>
      </li>
      <li>
      <Link href="/pricing">
      <Button color="inherit">Pricing</Button>
      </Link>
      </li>
      <li>
      <Link href="/developers">
      <Button color="inherit">Developers</Button>
      </Link>
      </li>
      <li>
      <Link href="/blogs">
      <Button color="inherit">Blogs</Button>
      </Link>
      </li>
      <li>
      <Link href="/getintouch">
      <Button color="inherit">Contact</Button>
      </Link>
      </li>
    </ul>
    {!['dashboard'].includes(location.pathname.split('/')[1]) ? 
    <div className="account-buttons">
      <Link href="/dashboard">
    <Button color="inherit">My Account</Button>
    </Link>
    <Link href="/login">
    <Button  color="primary" variant ='contained' className="xl:ml-16 lg:ml-5 px-12">Sign in</Button>
    </Link>
    </div>:
    <div className="ml-auto login">
      <ul className="flex items-center">
        <li className="xl:mr-12 xl:pr-12 lg:pr-6 lg:mr-6 relative">
        <IconButton className="btn-notification" onClick={handleToggle('notification')}>
      <NotificationsIcon />
      <i className="not-italic">5</i>
      </IconButton>
      <Popper open={state.opennotificdropdown} anchorEl={anchorRef.current} role={undefined} transition disablePortal className="notifction-dropdown" style={{position:'absolute',top:'65px',right:"0",left:'unset'}}>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose('notification')}>
            <MenuList autoFocusItem={state.opennotificdropdown} id="menu-list-grow" onKeyDown={handleListKeyDown} >
           {notificationdata.map(value => 
            <MenuItem onClick={handleClose('notification')} className="border-r-0">
               <Box className="bg-blue-50" >
               <Typography className="xl:text-base md:text-sm xs:text-xs  text-black p-5" variant="h6" >
               {value.heading}<span className="text-base text-gray-500 float-right xl:text-base md:text-sm xs:text-xs">
               {value.date}
               </span>
               <div className='clear-both'></div>
              </Typography>
              <Typography component='p' className="text-gray-500 px-5 xl:text-base md:text-sm xs:text-xs" variant="p" >
               {value.desc}<span className=" py-3 float-right">
               {value.time}
               </span>
               <div className='clear-both'></div>
              </Typography>
               </Box>
          </MenuItem>
            )}
      </MenuList>
            </ClickAwayListener>
            <Box px={2.5} pb={2} fontSize='18px' textAlign='right' >
                 <a className="underline font-medium xl:text-base md:text-sm xs:text-xs" href='#'>View all</a>
               </Box>
          </Paper>
        </Grow>
      )}
    </Popper>
        </li>
        <li className="flex">
        <div className="text-right">
          <Typography component="h6" className="xl:text-xl font-f-medium">
          User Name
          </Typography>
          <Typography component="span" className="text-secondary xl:text-base lg:text-sm italic xs:hidden sm:block">
          useremail@gmail.com
          </Typography>
          <Typography component="p" className="text-gray-400 font-f-medium xl:text-base lg:text-xs xs:hidden sm:block">
          Frequent Rail Commuter Plan
          </Typography>
        </div>
        <div>
          <img src="/images/Rectangle 1113.png" className="ml-3" alt="fsdfsdf" />
        </div>
        </li>
        <li className="relative">
        <IconButton className="text-secondary p-1" onClick={handleToggle('login')}>
        <ExpandMoreIcon className="text-3xl" />
       </IconButton>
       <Popper open={state.openlogindropdown} anchorEl={anchorRef.current} role={undefined} transition disablePortal className="login-dropdown" style={{position:'absolute',top:'65px',right:"0",left:'unset'}}>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose('login')}>
            <MenuList autoFocusItem={state.openlogindropdown} id="menu-list-grow" onKeyDown={handleListKeyDown} >
            {logindata.map(value => 
           <MenuItem onClick={handleClose('login')} className={`border-r-0 ${value.text === 'Logout' ? 'mt-20' : ''}`}>
          <ListItemIcon>
           {value.icon}
          </ListItemIcon>
          <Typography className="font-medium" variant="inherit">{value.text}</Typography>
        </MenuItem> 
            )}
      </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
        </li>
      </ul>
      
    </div>
    }
     
      </Toolbar>
    </AppBar>
      :
      <AppBar position="fixed" color="inherit">

      <Toolbar className="xl:px-20 lg:px-12">
        <Drawer/>
       <img
       src="/images/updatedlogo.png"
       alt="Logo"
       width="50px"
       className={clsx(`${!['dashboard'].includes(location.pathname.split('/')[1]) ? 'mobile-logo':''}`,"md:mt-2 sm:mt-2 xs:mt-2")}
        />
      {['dashboard'].includes(location.pathname.split('/')[1]) && 
      <div className="ml-auto login">
      <ul className="flex items-center">
        <li>
        <IconButton className="btn-notification" onClick={handleToggle('notification')}>
      <NotificationsIcon />
      <i className="not-italic">5</i>
      </IconButton>
      <Popper open={state.opennotificdropdown} anchorEl={anchorRef.current} role={undefined} transition disablePortal className="notifction-dropdown" style={{position:'absolute',top:'65px',right:"0",left:'unset'}}>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose('notification')}>
            <MenuList autoFocusItem={state.opennotificdropdown} id="menu-list-grow" onKeyDown={handleListKeyDown} >
           {notificationdata.map(value => 
            <MenuItem onClick={handleClose('notification')} className="border-r-0">
               <Box className="bg-blue-50" >
               <Typography className="xl:text-base md:text-sm xs:text-xs text-secondary p-5" variant="h6" >
               {value.heading}<span className="text-base text-gray-500 float-right xl:text-base md:text-sm xs:text-xs">
               {value.date}
               </span>
               <div className='clear-both'></div>
              </Typography>
              <Typography component='p' className="text-gray-500 px-5 xl:text-base md:text-sm xs:text-xs" variant="p" >
               {value.desc}<span className=" py-3 float-right">
               {value.time}
               </span>
               <div className='clear-both'></div>
              </Typography>
               </Box>
               
          </MenuItem>
            
            )}
      </MenuList>
      
            </ClickAwayListener>
            <Box px={2.5} pb={2} fontSize='18px' textAlign='right' >
                 <a className="underline font-medium xl:text-base md:text-sm xs:text-xs" href='#'>View all</a>
               </Box>
          </Paper>
        </Grow>
      )}
    </Popper>
        </li>
        <li className="flex xs:items-center sm:items-start">
        <div className="text-right">
          <Typography component="h6" className="text-xs font-f-medium xs:ml-7 sm:ml-0">
          User Name
          </Typography>
          <Typography component="span" className="text-secondary text-xs italic xs:hidden sm:block">
          useremail@gmail.com
          </Typography>
          <Typography component="p" className="text-gray-400 text-xs xs:hidden sm:block">
          Frequent Rail Commuter Plan
          </Typography>
        </div>
        <div>
          <img src="/images/Rectangle 1113.png" width="50" className="ml-3" alt="fsdfsdf" />
        </div>
        </li>
        <li>
        <IconButton className="text-secondary p-1" onClick={handleToggle('login')}>
        <ExpandMoreIcon className="text-3xl" />
       </IconButton>
       <Popper open={state.openlogindropdown} anchorEl={anchorRef.current} role={undefined} transition disablePortal className="login-dropdown" style={{position:'absolute',top:'65px',right:"0",left:'unset'}}>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose('login')}>
            <MenuList autoFocusItem={state.openlogindropdown} id="menu-list-grow" onKeyDown={handleListKeyDown} >
            {logindata.map(value => 
           <MenuItem onClick={handleClose('login')} className={`border-r-0 ${value.text === 'Logout' ? 'mt-20' : ''}`}>
          <ListItemIcon>
           {value.icon}
          </ListItemIcon>
          <Typography className="font-medium" variant="inherit">{value.text}</Typography>
        </MenuItem> 
            )}
      </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
        </li>
      </ul>
      
    </div>
      }
      </Toolbar>

      </AppBar>
      }
       <Box className="chat-box">
       <Collapse in={open} timeout="auto" unmountOnExit className="absolute right-0 bottom-0 xs:-right-10 " >
       <Paper elevation={0} className=" xl:w-full lg:w-full md:w-full sm:w-full  xs:w-80" >
             <Box  className="xl:p-10 lg::p-10 md:p-10 sm:p-10 xs:p-3">
           <Typography component="h4" className="xl:text-3xl lg:text-2xl xs:text-xl font-f-bold mb-8 pt-4" color="primary">
            Ipurvey
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
          <textarea className="mt-6 chatmessage w-72" rows="4"  cols="50" name="message" placeholder="Message" onChange={handleUserInput}></textarea>
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
            </Box>
           </Paper>
           </Collapse>
              <Button color="primary"  onClick={handleClick} variant="contained" className="min-w-0 xl:p-4 md:p-3 xs:p-2 rounded-lg shadow-lg">
              <ForumIcon className="xl:text-5xl md:text-3xl xs xs:text-xl"/>
              </Button>
          
            </Box>
            
    </div>
  );
}