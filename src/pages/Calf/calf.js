import React from 'react'
import './calf.css'
import { BsPeople, BsSpeedometer } from 'react-icons/bs'
import { BiArrowFromBottom, BiArrowToBottom, BiChart, BiMoney, BiSolidArrowToBottom } from 'react-icons/bi'
import { FaCow, FaUserDoctor } from 'react-icons/fa6'
import { GiBottomRight3dArrow, GiDoctorFace } from 'react-icons/gi'
import { MdReport } from 'react-icons/md'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import { CgArrowBottomLeft } from 'react-icons/cg'

export const Calf = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
          <div className='bg-dark col-md-2 col-auto min-vh-100'>
            <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-items-center'>
              <span className='ms-1 fs-4'>Calf</span>
            </a>
            <hr className='text-secondary'/>
            <ul className='nav nav-pills flex-column' id='parentM'>
              <li className='nav-item text-white fs-4 my-1'>
                <a href='#submenu' className='nav-link text-white fs-5' data-bs-toggle='collapse'>
                  <BiChart />
                  <span className='ms-2 d-none d-sm-inline'>Expenses</span>
                  <BiArrowToBottom className='mx-2' />
                </a>
                <ul className='nav collapse ms-1 flex-column' id='submenu' data-bs-parent='#parentM'>
                  <li className='nav-item text-white ms-4'>
                    <a className='nav-link text-white'>Feed</a>
                  </li>
                  <li className='nav-item text-white ms-4'>
                    <a className='nav-link text-white'>Labour</a>
                  </li>
                  <li className='nav-item text-white ms-4'>
                    <a className='nav-link text-white'>Labour Payment</a>
                  </li>
                  <li className='nav-item text-white ms-4'>
                    <a className='nav-link text-white'>Others</a>
                  </li>
                  <li className='nav-item text-white ms-4'>
                    <a className='nav-link text-white'>Others Payment</a>
                  </li>
                </ul>
              </li>
              <li className='nav-item text-white fs-4 my-1'>
                <a className='nav-link text-white fs-5'>
                  <FaCow />
                  <span className='ms-2 d-none d-sm-inline'>Birth info</span>
                </a>
              </li>
              <li className='nav-item text-white fs-4 my-1'>
                <a className='nav-link text-white fs-5'>
                  <FaUserDoctor />
                  <span className='ms-2 d-none d-sm-inline'>Treatment</span>
                </a>
              </li>
              <li className='nav-item text-white fs-4 my-1'>
                <a className='nav-link text-white fs-5'>
                  <BsPeople />
                  <span className='ms-2 d-none d-sm-inline'>Sellers</span>
                </a>
              </li>
              <li className='nav-item text-white fs-4 my-1'>
                <a className='nav-link text-white fs-5'>
                  <BiMoney />
                  <span className='ms-2 d-none d-sm-inline'>Customers</span>
                </a>
              </li>
              <li className='nav-item text-white fs-4 my-1'>
                <a className='nav-link text-white fs-5'>
                  <MdReport />
                  <span className='ms-2 d-none d-sm-inline'>Report</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
