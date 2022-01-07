import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as DiIcons from 'react-icons/di'





export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Logger',
    path: '/reports',
    icon: <AiIcons.AiFillVideoCamera />,
    cName: 'nav-text'
  },
  {
    title: 'Television',
    path: '/products',
    icon: <DiIcons.DiHtml5Multimedia />,
    cName: 'nav-text'
  },
  {
    title: 'Radio',
    path: '/team',
    icon: <IoIcons.IoMdRadio />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Music',
    path: '/support',
    icon: <IoIcons.IoMdHeadset />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
