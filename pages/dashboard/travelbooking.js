import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Travel from '../../layouts/dashboard layouts/travelbooking/travel';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
}));
export default function Index() {
  const classes = useStyles();
  return (
    <>
          
                <Travel />
  
    </>
  );
}
