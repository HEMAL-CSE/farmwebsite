import React from 'react'
import './Biogas.css'
import { BsPeople, BsSpeedometer } from 'react-icons/bs'
import { BiArrowFromBottom, BiArrowToBottom, BiChart, BiMoney, BiSolidArrowToBottom } from 'react-icons/bi'
import { FaCow, FaUserDoctor } from 'react-icons/fa6'
import { GiBottomRight3dArrow, GiDoctorFace } from 'react-icons/gi'
import { MdMonitor, MdReport } from 'react-icons/md'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import { CgArrowBottomLeft } from 'react-icons/cg'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'

const BioGasLayout = ({children}) => {
    const sidebarElements = [
        {
          name: 'Expenses',
          pathname: '',
          icon: BiMoney,
          submenu: [
            {
              name: 'Labour',
              pathname: '/biogas/labour'
            },
            {
              name: 'Labour Payment',
              pathname: '/biogas/labour_payment'
            },
            {
              name: 'Others Expenses',
              pathname: '/biogas/others'
            },
            {
              name: 'Others Payment',
              pathname: '/biogas/others_payment'
            },
          ]
        },
        {
          name: 'Customer',
          pathname: '/biogas/biogas_customer',
          icon: BsPeople,
          submenu: []
        },
        
        {
          name: 'Income',
          pathname: '/biogas/income',
          icon: BiMoney,
          submenu: []
        },
        {
          name: 'Environmental Info',
          pathname: '/biogas/environmental_info',
          icon: BsPeople,
          submenu: []
        },
        {
          name: 'Biogas Monitoring',
          pathname: '/biogas/biogas_monitoring',
          icon: MdMonitor,
          submenu: []
        },
        
        {
          name: 'Report',
          pathname: '/biogas/report',
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
          <Sidebar className='calf' elements={sidebarElements} name={'Biogas'} />
          <div className='ms-4 vw-100 d-flex justify-content-center'>
            <Outlet />
          </div>
          
        </div>
      )
}

export default BioGasLayout