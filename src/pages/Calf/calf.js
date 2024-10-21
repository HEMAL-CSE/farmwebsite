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
import { useLocation } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'
import CalfLayout from './CalfLayout'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export const Calf = () => {

  return (
    <CalfLayout>
      <div className='details'>
        {/* <h2>Cow Purchase</h2> */}
        <div className="container-fluid px-5 d-none d-lg-block">
                <div className="row gx-5 py-3 align-items-center">
                    <div className="col-lg-3">
                        {/* <div className="d-flex align-items-center justify-content-start">
                            <BsPhoneVibrate className='text-success2 fs-1 me-2' />
                            <h2 className="mb-0">+012 345 6789</h2>
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-center">
                            <a href="index.html" className="navbar-brand ms-lg-5">
                                <h1 className="m-2 display-4 text-success2"><span className="text-success2">Calf</span> Purchase</h1>
                            </a>
                        </div>
                    </div>
                    
                </div>
          </div>

<form>

<label>Select Shed ID:</label>
<select className='select' >
    <option value={'shed1'}>Shed1</option>
    <option value={'shed2'}>Shed2</option>
    <option value={'shed3'}>Shed3</option>
</select>

<label>Select Shed ID:</label>
<input className='input' type='text'
required
/>

<label>Select Seat ID:</label>
<textarea
required
></textarea>
<label>Select Cow ID:</label>
<select className='select'>
    <option value={'cow1'}>Cow1</option>
    <option value={'cow2'}>Cow2</option>
    <option value={'cow3'}>Cow3</option>
</select>

<label>Select Date:</label>

<div style={{ textAlign: 'left',
      width: '100%', 
      // border: '1px solid #ccc',
      padding: '0px',
      marginTop: '6px',
      }}> {/* Aligns content to the left */}
      {/* <label>Select Date:</label> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          // value={value}
          // onChange={(newValue) => setValue(newValue)}
          // renderInput={(params) => <input {...params} />}
        />
      </LocalizationProvider>
    </div>

<button className='button'>Submit</button>

</form>


</div>
    </CalfLayout>
  )
}
