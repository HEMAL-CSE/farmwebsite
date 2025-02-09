import React from 'react'
import { BsPeople, BsSpeedometer } from 'react-icons/bs'
import { BiArrowFromBottom, BiArrowToBottom, BiChart, BiHealth, BiLogOut, BiMoney, BiPlus, BiSolidArrowToBottom } from 'react-icons/bi'
import { FaCow, FaSeedling, FaUserDoctor } from 'react-icons/fa6'
import { GiBottomRight3dArrow, GiDoctorFace } from 'react-icons/gi'
import { MdReport } from 'react-icons/md'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import { CgArrowBottomLeft } from 'react-icons/cg'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'
export const Milklayout = ({children}) => {
  const sidebarElements = [
    {
        name: 'Purchase',
        pathname: '/milk/purchase',
        icon: BiPlus,
        submenu: []
    },
    
    {
        name: 'Production',
        pathname: '/milk/production',
        icon: FaCow,
        submenu: []
    },
    {
        name: 'Expenses',
        pathname: '',
        icon: BiMoney,
        submenu: [
            {
                name: 'Feed',
                pathname: '/milk/feed'
            },

            {
                name: 'Labour',
                pathname: '/milk/labour'
            },

            {
                name: 'Labour Payment',
                pathname: '/milk/labour_payment'
            },
            {
                name: 'Others',
                pathname: '/milk/others'
            },
            {
                name: 'Others Payment',
                pathname: '/milk/others_payment'
            }
        ]
    },

    {
        name: 'Treatment',
        pathname: '',
        icon: FaUserDoctor,
        submenu: [
            {
                name: 'Doctors',
                pathname: '/milk/doctors'
            },
            {
                name: 'Treatment',
                pathname: '/milk/treatment'
            }
        ]
    },

    {
        name: 'Customer List',
        pathname: '/milk/customers',
        icon: BiMoney,
        submenu: []
    },

    {
        name: 'Healthcare',
        pathname: '',
        icon: BiHealth,
        submenu: [
            {
                name: 'Vaccines',
                pathname: '/milk/vaccines'
            },
            {
                name: 'Medicine',
                pathname: '/milk/medicines'
            }
        ]
    },
    {
        name: 'Feeding',
        pathname: '/milk/feeding',
        icon: FaSeedling,
        submenu: []
    },
    {
        name: 'Report',
        pathname: '/milk/report',
        icon: MdReport,
        submenu: []
    },
    {
        name: 'Log Out',
        pathname: '/login',
        icon: BiLogOut,
        submenu: []
    },
    
  ]
  
  return (
    <div className='layout d-flex'>
      <Sidebar className='calf' elements={sidebarElements} name={'Dairy'} />
      <div className='ms-4 vw-100 d-flex justify-content-center'>
        {children}
      </div>
      
    </div>
  )
}
