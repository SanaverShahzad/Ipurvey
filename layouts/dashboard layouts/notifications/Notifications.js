import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Table, TableHead, TableRow, TableCell, TableBody, Grid, Button, Box} from '@material-ui/core'

const notificationsData = [
    {title:"MESSAGE TITLE",message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"},
    {title:"MESSAGE TITLE",message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"},
    {title:"MESSAGE TITLE",message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"},
    {title:"MESSAGE TITLE",message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"},
    {title:"MESSAGE TITLE",message:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam"},
]

export default function Notifications({data}) {
    return (
        <div className="notifications-main">
            <Typography className="typo-main">NOTIFICATIONS</Typography>
            <Grid container spacing={4}>
                <Grid item lg={data ? 7 : 6} md={12} sm={12} xs={12} >
                    {notificationsData.map((value) => (
                        <Box px={3} py={3} mb={3} borderRadius="10px"  boxShadow='0px 3px 6px 6px rgba(0,0,0,0.16)' bgcolor="#fff" className="bg-box cursor-pointer">
                        <Typography className="title">{value.title}</Typography>
                        <Typography className="para">{value.message}</Typography>
                         </Box>
                    ))}
                </Grid>
                <Grid item lg={data ? 5 : 4}  md={12} sm={12} xs={12}>
                <Box px={4} py={4} borderRadius="10px"  boxShadow='0px 3px 6px 6px rgba(0,0,0,0.16)' bgcolor="#fff">
                        <Typography className="pt-0 title">MESSAGE TITLE</Typography>
                        <div className="grid grid-cols-2">
                            <div><Typography  className="para">12/20/2021</Typography></div>
                            <div><Typography className="para float-right">05:00 PM</Typography></div>
                        </div>
                        <Typography className="para my-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor
                        </Typography>
                        <Typography className="para mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
