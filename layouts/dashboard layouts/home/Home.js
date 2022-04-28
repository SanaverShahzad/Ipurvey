import React from 'react';
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import { ArrowForward, Info } from '@material-ui/icons';
import Stepper from '../../../components/dashboard components/stepper/Stepper';
import Chart from '../../../components/dashboard components/charts/Chart';
import Link from 'next/link';
import isSmallScreen from '../../../hooks/useSmallScreen'

const TableData = [
    {date:"21/01/21",from:"Dubai (DUX) > Los Angleses (LA)",type:"-",status:"New"},
    {date:"19/01/21",from:"London UK (LUK) > Islamabad (ISB)",type:"-",status:"Closed"},
    {date:"15/01/21",from:"Dubai (DUX) > Los Angleses (LA)",type:"Cancelled",status:"Info Required"},
    {date:"12/01/21",from:"London UK (LUK) > Islamabad (ISB)",type:"Delayed",status:"Expired"},
    {date:"08/01/21",from:"Dubai (DUX) > Los Angleses (LA)",type:"Delayed",status:"Claim Requested"},
];


export default function Home ({data}) {
    const mobileScreen  = isSmallScreen();
    return (
        <div className="grid lg:grid-cols-12 xs:grid-cols-1 gap-6 dashboard-home">
            <div className={`lg:col-span-${data ? "7":"6"} xs:col-auto`}>
                <Box borderRadius="10px" bgcolor="#fff" p={2} className="boxshadow" mt={6} overflow="hidden">
                    <Typography className="typo inline-block">YOUR TRAVEL BOOKINGS</Typography>
                    <Chart />
                </Box>
                <Box borderRadius="10px" bgcolor="#fff" p={2} className="boxshadow" mt={3}>
                    <Typography className="typo">YOUR RECENT TRAVEL BOOKINGS</Typography>
                    <Link href="/dashboard/yourbooking"><Button endIcon={<ArrowForward />} className="btnSee">View all</Button></Link>
                        <Box className="table-responsive">
                    <Table className="table-root">
                        <TableHead>
                            <TableRow className="rounded">
                                <TableCell align="center">TRAVEL DATE</TableCell>
                                <TableCell align="center">FROM {'>'} TO</TableCell>
                                <TableCell align="center">DISTRUPTION TYPE</TableCell>
                                <TableCell align="center">STATUS <Info fontSize="small" color="primary" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {TableData.map((value) => (
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
                </Box>
            </div>
            <div className={`lg:col-span-${data ? "5":"4"} xs:col-auto`}>
                <Link href="/"><Button variant="contained" color="primary" className="capitalize float-right">Submit New Travel Booking</Button></Link>
                <Box borderRadius="10px" bgcolor="#fff" p={2} className="boxshadow" mt={6}>
                    <Typography className="typo inline-block">TRAVEL BOOKING STATUS UPDATE</Typography>
                    <Box bgcolor="#F0F4FC" borderRadius="5px" mx={mobileScreen ? 0 : 4} my={2}>
                        <Typography className="font-family">BOOKING DETAILS</Typography>
                        <div className="grid grid-cols-2 px-4 py-2">
                            <div>
                                <Typography className="booking-typo">Booking Reference </Typography>
                                <Typography className="booking-typo">TRAVEL DATE</Typography>
                                <Typography className="booking-typo">DEPARTURE TIME</Typography>
                                <Typography className="booking-typo">DEPARTURE LOCATION</Typography>
                                <Typography className="booking-typo">TRANSPORT OPERATOR</Typography>
                                <Typography className="booking-typo">DISTRUPTION TYPE</Typography>
                                <Typography className="booking-typo">DELAY</Typography>
                            </div>
                            <div className="text-right	">
                                <Typography className="booking-typo">1564-584134</Typography>
                                <Typography className="booking-typo">08/01/2021</Typography>
                                <Typography className="booking-typo">05:00 AM GMT</Typography>
                                <Typography className="booking-typo">Dubai, UAE</Typography>
                                <Typography className="booking-typo">Qatar Airways</Typography>
                                <Typography className="booking-typo">Delayed</Typography>
                                <Typography className="booking-typo">30 Minutes</Typography>
                            </div>
                        </div>
                        <Stepper />
                    </Box>
                </Box>
            </div>
        </div>
    )
}
