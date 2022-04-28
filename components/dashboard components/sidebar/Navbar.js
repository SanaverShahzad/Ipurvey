import React from 'react';
import clsx from 'clsx';
import {List, CssBaseline, Typography, Divider, IconButton, Collapse, ListItem, ListItemIcon,
ListItemText, Drawer } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { SideItems } from '../constants/Sidenav'
import { Dashboard, ExpandLess, ExpandMore } from '@material-ui/icons';
import Link from 'next/link';
import isSmallScreen from '../../../hooks/useSmallScreen';




const drawerWidth = 354;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop:"100px",
    [theme.breakpoints.down('lg')]: {
      marginTop:"0px",
  },
    '& .MuiList-padding':{
      paddingTop:"70px",
      [theme.breakpoints.down('lg')]: {
        paddingTop:"0px",
    },
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    [theme.breakpoints.down('lg')]: {
      width:"294px",
      },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 50,
    [theme.breakpoints.up('sm')]: {
      width: 50,
  },
},
  toolbar: {
    marginTop:"30px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor:"#F0F4FC",
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  nested: {
    '& .MuiListItemText-primary ':{
        fontFamily:"Poppins",
      },
    '&:hover':{
        color:theme.palette.primary.main,
        backgroundColor:"#F0F4FC",
        '& svg':{
          color:theme.palette.primary.main,
        },  
  },
},
activeItem:{
  '&:hover':{
    color:theme.palette.primary.main,
    '& svg':{
      color:theme.palette.primary.main,
    },
  },
  '&:focus':{
    color:theme.palette.primary.main,
    '& svg':{
      color:theme.palette.primary.main,
    },
  },
  
},
  AccountMenu:{
    '& .MuiPopover-paper':{
      top:'68px!important',
      width:200,
    }
  },
  ActiveMenu:{
    color:theme.palette.primary.main,
    '& svg':{
      color:theme.palette.primary.main,
    },
  },
  SideMenu:{
      '& .MuiListItemText-root':{
        fontFamily:"Poppins-Medium",
      },
    '&:hover':{
      color:theme.palette.primary.main,
      backgroundColor:"#F0F4FC",
      '& svg':{
        color:theme.palette.primary.main,
      },
    }
  },
  List:{
    '& .MuiListItemText-primary':{
        fontFamily:"Poppins-Medium",
        [theme.breakpoints.down('lg')]: {
        fontSize:"14px",
        },
      },
    '& svg':{
      width:20,
      [theme.breakpoints.down('lg')]: {
        fontSize:"16px",
        },
    },
  },
  span:{
    fontFamily:"Poppins-Medium",
    fontSize:"20px",
    [theme.breakpoints.down('lg')]: {
      fontSize:"16px",
      },
  },
}));

export default function MiniDrawer({children,main}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(null);
  const mobileScreen  = isSmallScreen();

  const handleClick = (value) => () => {
    if(value.title !== openMenu){
      setOpenMenu( value.title);
    }
    else{
      setOpenMenu(null);
    }
    
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    main(true)
  };
  const handleDrawerClose = () => {
    setOpen(false);
    main(false)
  };
  const onSubmenu=(val)=>()=>{
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Divider />
        <List className={classes.List}>
          {
            !mobileScreen ?
            <>
            <ListItem>
            <div className={classes.toolbar}>
              {open === true ? <><Typography className={classes.span}>YOUR ACCOUNT</Typography><IconButton onClick={handleDrawerClose} className="ml-36 lg:ml-28 md:ml-28 sm:ml-28"><img src="/images/Group 3398.png" height="17" width="16" /></IconButton></>:<><IconButton onClick={handleDrawerOpen}><img src="/images/Group 33981.png" height="17" width="16" /></IconButton></>}
            </div>
          </ListItem>
          {open === true ? <Typography className={clsx(classes.span,"ml-5")}>DASHBOARD</Typography>:""}
            </>:
            <div className="mt-10"></div>
          }
          <Link href="/dashboard">
          <ListItem button className={classes.activeItem}>
            <ListItemIcon><Dashboard /></ListItemIcon>
           
            <ListItemText>YOUR DASHBOARD</ListItemText>
           
          </ListItem>
          </Link>
          {open === true ? <Typography className={clsx(classes.span,"ml-5")}>ACCOUNT</Typography>:""}
          {SideItems.map((value, index) => (
            <div key={value.title}>
              <Link href={value.href}>
                <ListItem className={clsx(openMenu === value.title && classes.ActiveMenu,classes.SideMenu)} button onClick={handleClick(value)} key={value.title}>
                <ListItemIcon>{value.icon}</ListItemIcon>
                  <ListItemText>{value.title}</ListItemText>
                    {value.submenu.length > 0 ? openMenu === value.title ?<ExpandLess /> : <ExpandMore /> :""}
                </ListItem>
              </Link>
            <Collapse in={openMenu === value.title} timeout="auto" unmountOnExit>
            {value.submenu.map((subvalue, index) => (
              <List component="div" key={subvalue.title} disablePadding>
                <Link href={subvalue.href}>
                  <ListItem onClick={onSubmenu(subvalue)} button className={classes.nested}>
                    <ListItemIcon>
                      {subvalue.icon}
                    </ListItemIcon>
                    <ListItemText className="font-f-regular">{subvalue.title}</ListItemText>
                  </ListItem>
                </Link>
              </List>
            ))}
            </Collapse>
            { value.divider && <Box py={1}><Divider /></Box> }
            </div>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
       {children}
      </main>
    </div>
  );
}
