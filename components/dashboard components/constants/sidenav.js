import React from 'react'
import {AccountCircle, Dashboard, Edit, Lock, Notifications, Schedule, Search, ThumbUp, Visibility} from '@material-ui/icons'

export const SideItems = [
    {
        title: "YOUR TRAVEL BOOKINGS",
        icon:( <Search />),
        submenu: [],
        divider:false,
        href:"/dashboard/yourbooking"
    },
    {
        title: "MANAGE YOUR ACCOUNT",
        icon:( <AccountCircle />),
        submenu: [
            {
                title: "View account information",
                icon:( <Visibility />),
                submenu: [],
                divider:false,
                href:"/dashboard/accountinfo"
            },
            {
                title: "View Account Activity",
                icon:( <Schedule />),
                submenu: [],
                divider:false,
                href:"/dashboard/activity"
            },
            {
                title: "Change Password",
                icon:( <Lock />),
                submenu: [],
                divider:false,
                href:"/dashboard/securitysetting"
            },
            {
                title: "Manage Subscriptions",
                icon:( <ThumbUp />),
                submenu: [],
                divider:false,
                href:"/dashboard/subscriptions"
            },
        ],
        divider:false,
        href:""
    },
    {
        title: "NOTIFICATIONS",
        icon:( <Notifications />),
        submenu: [],
        divider:false,
        href:"/dashboard/notifications"
    },
   
]