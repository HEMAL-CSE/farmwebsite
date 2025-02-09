import React, { useEffect, useState } from 'react'
// import './calf.css'
import './vermicompost.css'
import { BsPeople, BsSpeedometer } from 'react-icons/bs'
import { BiArrowFromBottom, BiArrowToBottom, BiChart, BiLogOut, BiMoney, BiSolidArrowToBottom } from 'react-icons/bi'
import { FaCow, FaUserDoctor } from 'react-icons/fa6'
import { GiBottomRight3dArrow, GiDoctorFace, GiEarthWorm } from 'react-icons/gi'
import { MdReport } from 'react-icons/md'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import { CgArrowBottomLeft } from 'react-icons/cg'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'
import { SiMarketo } from 'react-icons/si'
import axios from 'axios'

const Vermicompost = ({children}) => {
    const [sidebarElements, setSidebarElements] = useState([
        {
          name: 'Expenses',
          pathname: '/vermicompost/expenses',
          icon: BiMoney,
          submenu: [
            {
              name: 'Cowdung Seller',
              pathname: '/vermicompost/cowdung_seller'
            },
            {
              name: 'Cowdung buyer',
              pathname: '/vermicompost/cowdung_buyer'
            },
            {
              name: 'Labour',
              pathname: '/vermicompost/labour'
            },
            {
              name: 'Labour Payment',
              pathname: '/vermicompost/labour_payment'
            },
            {
              name: 'Others',
              pathname: '/vermicompost/others'
            },
            {
              name: 'Others Payment',
              pathname: '/vermicompost/others_payment'
            },
          ]
        },
        {
          name: 'Earthworm',
          pathname: '/vermicompost/earthworm',
          icon: GiEarthWorm, 
          submenu: [
            {
              name: 'Production',
              pathname: '/vermicompost/earthworm_prod'
            },
            {
              name: 'Selling',
              pathname: '/vermicompost/earthworm_selling'
            },
            {
              name: 'Earthworm Sellers',
              pathname: '/vermicompost/earthworm_seller'
            },
            {
              name: 'Earthworm Purchase',
              pathname: '/vermicompost/earthworm_purchase'
            },
            {
              name: 'Earthworm Labour',
              pathname: '/vermicompost/earthworm_labour'
            },
            {
              name: 'Earthworm Labour Payment',
              pathname: '/vermicompost/earthworm_labour_payment'
            },
            {
              name: 'Earthworm Others',
              pathname: '/vermicompost/earthworm_others'
            },
            {
              name: 'Earthworm Others Payment',
              pathname: '/vermicompost/earthworm_others_payment'
            },
            {
              name: 'Environment',
              pathname: '/vermicompost/earthworm_environment'
            }
          ]
        },
        {
          name: 'Production',
          pathname: '/vermicompost/prod',
          icon: SiMarketo,
          submenu: []
        },
        {
          name: 'Selling',
          pathname: '/vermicompost/selling',
          icon: BiMoney,
          submenu: [
            {
              name: 'Customers',
              pathname: '/vermicompost/customers'
            },
            {
              name: 'Selling Info',
              pathname: '/vermicompost/selling_info'
            }
          ]
        },
        {
          name: 'Environment',
          pathname: '/vermicompost/environment',
          icon: BsPeople,
          submenu: []
        },
        {
          name: 'Report',
          pathname: '/vermicompost/report',
          icon: MdReport,
          submenu: []
        },
        {
          name: 'Log Out',
          pathname: '/login',
          icon: BiLogOut,
          submenu: []
      },
        
      ])

      useEffect(() => {
        axios.get('http://68.178.163.174:5010/vermi_compost/sheds')
        .then(res => {
          let x = sidebarElements
          let y = res.data.map(e => {return {...e, pathname: `/vermicompost/prod/${e.id}`}})
          let index = x.findIndex(e => e.name == 'Production')
          x[index].submenu = y
          setSidebarElements(x)
        })
      }, [])
      
      return (
        <div className='layout d-flex'>
          
          <Sidebar className='calf' elements={sidebarElements} name={'Vermicompost'} />
          <div className='ms-4 vw-100 d-flex justify-content-center'>
            {children}
          </div>
        </div>
      )
}

export default Vermicompost