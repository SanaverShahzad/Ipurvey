import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Leaving from '../../layouts/dashboard layouts/leaving/leaving';
import Layouts from '../../layouts/dashboard layouts/layout'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
}));
export default function Index() {
  const classes = useStyles();
  return (
    <>

    <Leaving />

    </>
  );
}
