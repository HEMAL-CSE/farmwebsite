import React from 'react'
// import './calf.css'
import './vermicompost.css'
import { BsPeople, BsSpeedometer } from 'react-icons/bs'
import { BiArrowFromBottom, BiArrowToBottom, BiChart, BiMoney, BiSolidArrowToBottom } from 'react-icons/bi'
import { FaCow, FaUserDoctor } from 'react-icons/fa6'
import { GiBottomRight3dArrow, GiDoctorFace } from 'react-icons/gi'
import { MdReport } from 'react-icons/md'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import { CgArrowBottomLeft } from 'react-icons/cg'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'

const Vermicompost = ({children}) => {
    const sidebarElements = [
        {
          name: 'Expenses',
          pathname: '/calf/expenses',
          icon: BiMoney,
          submenu: [
            {
              name: 'Feed',
              pathname: '/calf/feed'
            },
            {
              name: 'Labour',
              pathname: '/calf/labour'
            },
            {
              name: 'Labour Payment',
              pathname: '/calf/labour_payment'
            },
            {
              name: 'Others',
              pathname: '/calf/others'
            },
            {
              name: 'Others Payment',
              pathname: '/calf/others_payment'
            },
          ]
        },
        {
          name: 'Birth Info',
          pathname: '/calf/birth_info',
          icon: FaCow,
          submenu: []
        },
        {
          name: 'Treatment',
          pathname: '/calf/treatment',
          icon: FaUserDoctor,
          submenu: [
            {
              name: 'Doctors',
              pathname: '/calf/doctors'
            },
            {
              name: 'Treatment',
              pathname: '/calf/treatment'
            }
          ]
        },
        {
          name: 'Selling',
          pathname: '/calf/selling',
          icon: BiMoney,
          submenu: []
        },
        {
          name: 'Customer',
          pathname: '/calf/customer',
          icon: BsPeople,
          submenu: []
        },
        {
          name: 'Report',
          pathname: '/calf/report',
          icon: MdReport,
          submenu: []
        },
        
      ]
      
      return (
        <div className='layout d-flex'>
          <Sidebar className='calf' elements={sidebarElements} name={'Calf'} />
          <div className='ms-4 vw-100 d-flex justify-content-center'>
            {children}
          </div>
          
        </div>
      )
}

export default Vermicompost