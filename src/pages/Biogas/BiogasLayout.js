import React from 'react'
import './Biogas.css'
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

const BioGasLayout = ({children}) => {
    const sidebarElements = [
        {
          name: 'Expenses',
          pathname: '/biogas/expenses',
          icon: BiMoney,
          submenu: [
            {
              name: 'Labour',
              // pathname: '/calf/labour'
            },
            {
              name: 'Labour Payment',
              // pathname: '/calf/labour_payment'
            },
            {
              name: 'Others Expenses',
              // pathname: '/calf/others'
            },
            {
              name: 'Others Payment',
              // pathname: '/calf/others_payment'
            },
          ]
        },
        
        {
          name: 'Selling',
          // pathname: '/calf/selling',
          icon: BiMoney,
          submenu: []
        },
        {
          name: 'Customer',
          // pathname: '/calf/customer',
          icon: BsPeople,
          submenu: []
        },
        {
          name: 'Report',
          // pathname: '/calf/report',
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

export default BioGasLayout