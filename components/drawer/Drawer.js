import React from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useRouter } from 'next/router'
import Link from 'next/link'
const data =[
  {item:"Home",href:"/"},
  {item:'Services',href:"/termofservices"},
  {item:'Pricing',href:"/pricing"},
  {item:'Developers',href:"/developers"},
  {item:'Blogs',href:"/blogs"},
  {item:'Contact',href:"/question"}]
export default function MobileDrawer() {
  let location = useRouter();
  const [state, setState] = React.useState({
    left: false,
    open:false,
    menu:''
  
  });
  // open clsoe Drawer

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, left: open });
  };
  const handleClick = ()=> {
    setState({...state,left:!state.left})
  };
  // list inside Drawer
  
  const list = () => (
    <div
      role="presentation"
     
      className="list"
    >
          <List
      component="nav"
    >
     {data.map((menu,i) => 
     <Link href={menu.href}  key={menu.item}>
      <ListItem button  onClick={handleClick}>
      <ListItemText primary={menu.item} />
     </ListItem>
      </Link>
        )}
      {!['dashboard'].includes(location.pathname.split('/')[1]) ?
      <> 
      <ListItem button  onClick={handleClick}>
      <ListItemText >
        <Link href="/dashboard">
         My Account
        </Link>
      </ListItemText>
     </ListItem>
     <ListItem button  onClick={handleClick}>
      <ListItemText >
        <Link href="/login">
         Sign in
        </Link>
      </ListItemText>
     </ListItem>
     </>
     :''
}
    </List>
    </div>
  );

  return (
    <>
     <IconButton
              edge="start"
              className="menu-button"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(!state.left)}
            >
             
              <MenuIcon />
            </IconButton>
            <Drawer anchor={'left'} open={state.left} onClose={toggleDrawer(!state.left)} className="mobile-menu">
            {list('left')} 
          </Drawer>
    </>
  );
}
