import React from 'react'
import './beeffattening.css'
import { BsPeople, BsSpeedometer } from 'react-icons/bs'
import { BiArrowFromBottom, BiArrowToBottom, BiChart, BiHealth, BiMoney, BiPlus, BiSolidArrowToBottom } from 'react-icons/bi'
import { FaCow, FaSeedling, FaUserDoctor } from 'react-icons/fa6'
import { GiBottomRight3dArrow, GiDoctorFace } from 'react-icons/gi'
import { MdReport } from 'react-icons/md'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import { CgArrowBottomLeft } from 'react-icons/cg'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'

const BeefFatteningLayout = ({children}) => {
    const sidebarElements = [
        {
            name: 'Purchase',
            pathname: '/beef/purchase',
            icon: BiPlus,
            submenu: []
        },
        
        {
            name: 'Expenses',
            pathname: '',
            icon: BiMoney,
            submenu: [
                {
                    name: 'Feed',
                    pathname: '/beef/feed'
                },

                {
                    name: 'Labour',
                    pathname: '/beef/labour'
                },

                {
                    name: 'Labour Payment',
                    pathname: '/beef/labour_payment'
                },
                {
                    name: 'Others',
                    pathname: '/beef/others'
                },
                {
                    name: 'Others Payment',
                    pathname: '/beef/others_payment'
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
                    pathname: '/beef/doctors'
                },
                {
                    name: 'Treatment',
                    pathname: '/beef/treatment'
                }
            ]
        },

        {
            name: 'Slaughter',
            pathname: '/beef/slaughter',
            icon: BiMoney,
            submenu: []
        },

        {
            name: 'Customer',
            pathname: '/beef/customer',
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
                    pathname: '/beef/vaccines'
                },
                {
                    name: 'Medicine',
                    pathname: '/beef/medicine'
                }
            ]
        },
        {
            name: 'Feeding',
            pathname: '/beef/feeding',
            icon: FaSeedling,
            submenu: []
        },
        {
            name: 'Report',
            pathname: '/beef/report',
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
          <Sidebar className='calf' elements={sidebarElements} name={'Beef Fattening'} />
          <div className='ms-4 vw-100 d-flex justify-content-center'>
            {children}
          </div>
          
        </div>

      )
}

export default BeefFatteningLayout