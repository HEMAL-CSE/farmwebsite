import React from 'react'
import './Sidebar.css'
import { BsPeople, BsSpeedometer } from 'react-icons/bs'
import { BiArrowFromBottom, BiArrowToBottom, BiChart, BiMoney, BiSolidArrowToBottom } from 'react-icons/bi'
import { FaCow, FaUserDoctor } from 'react-icons/fa6'
import { GiBottomRight3dArrow, GiDoctorFace } from 'react-icons/gi'
import { MdReport } from 'react-icons/md'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import { CgArrowBottomLeft } from 'react-icons/cg'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = ({ elements, name }) => {
    const location = useLocation();
    const { hash, pathname, search } = location;
    const navigator = useNavigate();
    return (
        <div className='w-25'>
            <div className='row'>
                <div className='w-100 bg-dark col-md-2 col-auto min-vh-100'>
                    <a className='text-decoration-none text-white d-none d-sm-inline d-flex align-items-center'>
                        <span className='ms-1 fs-4'>{name}</span>
                    </a>
                    <hr className='text-secondary' />
                    <ul className='nav nav-pills flex-column' id='parentM'>
                        {
                            elements.map(element => (
                                <li  onClick={ () => {
                                    if(element.submenu.length == 0){
                                        navigator(element.pathname)
                                    }
                                   
                                }} className='nav-item text-white fs-4 my-1'>
                                    <a href={element.submenu.length >0 && `#submenu`} className={`${pathname == `${element.pathname}` ? 'nav-link-chosen' : 'nav-link'} text-white`}  data-bs-toggle={element.submenu.length >0 &&`collapse`}>
                                        <element.icon />
                                        <span className='ms-2 d-none d-sm-inline'>{element.name}</span>
                                        {element.submenu.length >0 && <BiArrowToBottom className='mx-2' />}
                                    </a>
                                    <ul className='nav collapse ms-1 flex-column' id='submenu' data-bs-parent='#parentM'>
                                        {element.submenu.length >0 &&
                                            element.submenu.map(sub => (
                                                <li onClick={() => {
                                                    navigator(sub.pathname)
                                                }} className='nav-item text-white ms-4'>
                                                    <a className={`${pathname == `${sub.pathname}` ? 'nav-link-chosen' : 'nav-link'} text-white`}>{sub.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar