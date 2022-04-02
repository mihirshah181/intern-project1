import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'Overview',
    path: '/overview',
    icon: <GrIcons.GrOverview/>,
    cName: 'nav-text'
  },
  {
    title: 'Patients List',
    path: '/paitentslist',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Calender',
    path: '/calender',
    icon: <AiIcons.AiFillCalendar/>,
    cName: 'nav-text'
  },
  {
    title: 'Payment Information',
    path: '/paymentinformation',
    icon: <AiIcons.AiOutlinePayCircle/>,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/setting',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
  }
];
