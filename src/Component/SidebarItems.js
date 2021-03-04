import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';



export const SidebarItems =[
    {
        title:'home',
        path:'/',
        icon:<AiIcons.AiOutlineHome size={20}/>,
        cName:'nav-text'
    },
   
    {
        title:'Contact',
        path:'/contact',
        icon:<BsIcons.BsPerson size={20}/>,
        cName:'nav-text'
    },
    {
        title:'Alarm',
        path:'/alarm',
        icon:<FaIcons.FaUserEdit size={20}/>,
        cName:'nav-text'
    },
    {
        title:'Datebase',
        path:'/datebase',
        icon:<FiIcons.FiDatabase size={20}/>,
        cName:'nav-text'
    },
    {
        title:'Setting',
        path:'/setting',
        icon:<FiIcons.FiSettings size={20}/>,
        cName:'nav-text'
    },
];



