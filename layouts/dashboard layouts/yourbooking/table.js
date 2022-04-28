import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography,Box } from '@material-ui/core';
import { ArrowForward, Info } from '@material-ui/icons';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  heading:{
    backgroundColor:"#748AA6",
  },
  rowmain:{
      '&:hover':{
          background:"#2E58A6",

      },
      
  },
 
});


const rows = [

{date:"16/11/20", formto:"Dubai (DUX) > Los Angleses (LA)" ,travemode:"Rail",transport:"Hawaiian Airlines", distruption:"-",delay:"-",status:"New" },
{date:"28/12/20", formto:"London UK (LUK) > Islamabad (ISB)" ,travemode:"Flight",transport:"Delta Air Lines", distruption:"-",delay:"-",status:"New" },
{date:"28/10/20", formto:"Dubai (DUX) > Los Angleses (LA)" ,travemode:"Flight",transport:"Delta Air Lines", distruption:"Cancelled",delay:"15 Mins",status:"Info Required" },
{date:"17/12/20", formto:"London UK (LUK) > Islamabad (ISB)" ,travemode:"Flight",transport:"Delta Air Lines", distruption:"Delayed",delay:"1 Day",status:"Expired" },
{date:"08/01/21", formto:"Dubai (DUX) > Los Angleses (LA)" ,travemode:"Rail",transport:"Delta Air Lines", distruption:"Delayed",delay:"30 Mins",status:"Claim Requested" },
{date:"11/12/20 ", formto:"London UK (LUK) > Islamabad (ISB)" ,travemode:"Flight",transport:"Delta Air Lines", distruption:"Cancelled",delay:"1 Hour",status:"Info Required" },
{date:"11/01/21 ", formto:"London UK (LUK) > Islamabad (ISB)" ,travemode:"Flight",transport:"JetBlue Airways", distruption:"Delayed",delay:"1 Hour",status:"Closed" },
{date:"24/10/20 ", formto:"Paris (FPX) > Melbourne (MAZ)" ,travemode:"Rail",transport:"JetBlue Airways", distruption:"Cancelled",delay:"1 Hour",status:"Claim Requested" },
{date:"24/10/20 ", formto:"London UK (LUK) > Islamabad (ISB)" ,travemode:"Rail",transport:"Alaska Airlines", distruption:"Cancelled",delay:"1 Day",status:"Claim Requested" },
{date:"14/11/20 ", formto:"Dubai (DUX) > Los Angleses (LA)" ,travemode:"Rail",transport:"Alaska Airlines", distruption:"Delayed",delay:"12 Hours",status:"Closed" },


];

export default function BasicTable() {
  const classes = useStyles();

  return (
      <>
      <div className="dashboard-home">
      <Box className="table-responsive">
    <Table className="table-root table-setting">
    <TableHead>
          <TableRow className="rounded">
            <TableCell><Typography className="text-base font-f-medium">TRAVEL DATE</Typography></TableCell>
            <TableCell align="center" ><Typography className="text-base font-f-medium"> FROM TO </Typography></TableCell>
            <TableCell align="center"> <Typography className="text-base font-f-medium"> TRAVEL MODE</Typography></TableCell>
            <TableCell align="center"><Typography className="text-base font-f-medium"> TRANSPORT OPERATOR</Typography> </TableCell>
            <TableCell align="center"> <Typography className="text-base font-f-medium">DISTRUPTION TYPE</Typography></TableCell>
            <TableCell align="center"> <Typography className="text-base font-f-medium">DELAY</Typography></TableCell>
            <TableCell align="center"> <Typography className="text-base font-f-medium">STATUS</Typography></TableCell>
          </TableRow>
        </TableHead>
                        <TableBody>
                            {rows.map((value) => (
                                <>
                                <div className="my-4"></div>
                                <TableRow key={value.date} className="cursor-pointer">
                                  <TableCell align="center" className="first-child" >{value.date}</TableCell>
                                  <TableCell align="center">{value.formto}</TableCell>
                                  <TableCell align="center">{value.travemode}</TableCell>
                                  <TableCell align="center">{value.transport}</TableCell>
                                  <TableCell align="center">{value.distruption}</TableCell>
                                  <TableCell align="center">{value.delay}</TableCell>
                                  <TableCell align="center" className="last-child">{value.status}</TableCell>
                                </TableRow>
                                </>
                            ))}
                            
                        </TableBody>
                    </Table>
                    </Box>
    </div>
  
    </>
  );
}
