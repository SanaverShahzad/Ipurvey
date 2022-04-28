import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Home from '../../layouts/dashboard layouts/home/Home';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  
}));
export default function Index({data}) {
  const classes = useStyles();
  return (
    <div className={classes.bgcolor}>
    <Home data ={data} />
    </div>
  );
}
