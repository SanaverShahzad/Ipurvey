import React from 'react';
import {Typography, Table, TableHead, TableRow, TableCell, TableBody, Grid, Button, Box} from '@material-ui/core'


const tableData = [
    {date:"21/01/21",from:"05:00 PM",type:"-",status:"192.16.100.204"},
    {date:"19/01/21",from:"05:00 PM",type:"-",status:"192.16.100.204"},
    {date:"15/01/21",from:"05:00 PM",type:"Password Changed",status:"192.16.100.204"},
    {date:"12/01/21",from:"05:00 PM",type:"Password Changed",status:"192.16.100.204"},
    {date:"08/01/21",from:"05:00 PM",type:"Password Changed",status:"192.16.100.204"},
    {date:"21/01/21",from:"05:00 PM",type:"-",status:"192.16.100.204"},
    {date:"19/01/21",from:"05:00 PM",type:"-",status:"192.16.100.204"},
]
export default function Activity({data}) {
    return (
        <div className="activity-main">
            <Typography className="typo">ACCOUNT ACTIVITY</Typography>
            <Grid container spacing={4}>
                <Grid item lg={data ? 7 : 6} md={12} sm={12} xs={12} >
                <Box borderRadius="10px" bgcolor="#fff" p={2} boxShadow='0px 3px 6px 6px rgba(0,0,0,0.16)' className="table-responsive">
                    <Table className="table-root">
                            <TableHead>
                                <TableRow className="rounded">
                                    <TableCell align="center">TRAVEL DATE</TableCell>
                                    <TableCell align="center">TIME</TableCell>
                                    <TableCell align="center">ACTIVITY TYPE</TableCell>
                                    <TableCell align="center">IP ADRESS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((value) => (
                                    <>
                                    <div className="my-4"></div>
                                    <TableRow key={value.date} className="cursor-pointer">
                                    <TableCell align="center" className="first-child">{value.date}</TableCell>
                                    <TableCell align="center">{value.from}</TableCell>
                                    <TableCell align="center">{value.type}</TableCell>
                                    <TableCell align="center" className="last-child">{value.status}</TableCell>
                                    </TableRow>
                                    </>
                                ))}
                                
                            </TableBody>
                        </Table>
                    </Box>
                </Grid>
                <Grid item lg={data ? 5 : 4} md={12} sm={12} xs={12}>
                    <Box px={4} py={4} borderRadius="10px"  boxShadow='0px 3px 6px 6px rgba(0,0,0,0.16)' bgcolor="#fff">
                        <Typography className="pt-0 typo-main">ACTIVITY DETAILS</Typography>
                        <div className="grid grid-cols-2">
                            <div><Typography  className="para">12/20/2021</Typography></div>
                            <div><Typography className="para float-right">05:00 PM</Typography></div>
                        </div>
                        <Typography className="typo">PASSWORD CHANGE</Typography>
                        <Typography className="para">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor
                        </Typography>
                        <Button className="btn" fullWidth>Report Acitivity</Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
