import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Booking from '../../layouts/dashboard layouts/yourbooking/booking';
import Layouts from '../../layouts/dashboard layouts/layout'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  backgroundColor:"#F0F4FC"
}));
export default function Index() {
  
  const classes = useStyles();
  return (
    <div className={classes.bgcolor}>
    <Booking />
    </div>
  );
}
