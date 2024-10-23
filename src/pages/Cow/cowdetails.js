import React, { useEffect, useState } from 'react'
import './cowdetails.css'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
import Cowlayout from './Cowlayout';
import axios from 'axios';

export const Cowdetails = () => {
  const [shed_id, setShed_id] = useState('')
  const [seat_id, setSeat_id] = useState('')
  const [cow_id, setCow_id] = useState('')
  const [purchase_date, setPurchase_date] = useState('')
  const [pregnant, setPregnant] = useState('')
  const [price, setPrice] = useState('')
  const [weight, setWeight] = useState('')
  const [pregnantMonth, setPregnantMonth] = useState('')
  const [supposed_delivery_date, setSupposed_delivery_date] = useState('')
  
  const [edit_id, setEdit_id] = useState('') 
  const [edit_shed_id, setEdit_shed_id] = useState('')
  const [edit_seat_id, setEdit_seat_id] = useState('')
  const [edit_cow_id, setEdit_cow_id] = useState('')
  const [edit_purchase_date, setEdit_purchase_date] = useState('')
  const [edit_pregnant, setEdit_pregnant] = useState('')
  const [edit_price, setEdit_price] = useState('')
  const [edit_weight, setEdit_weight] = useState('')
  const [edit_pregnant_month, setEdit_pregnant_month] = useState('')
  const [edit_supposed_delivery_date, setEdit_supposed_delivery_date] = useState('')

  const [sheds, setSheds] = useState([])
  const [seats, setSeats] = useState([])
  const [pregnants, setPregnants] = useState([
    {
      name: 'Yes',
      value: '1', 
    }, 
    {
      name: 'No',
      value: '0'
    }
  ])
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://68.178.163.174:5010/breeding/sheds`).then(res => {
      setSheds(res.data)
    })

    getData()
  })

  const getSeats = (shed_id) => {
    axios.get(`http://68.178.163.174:5010/breeding/seats?shed_id=${shed_id}`)
    .then(res => {
      setSeats(res.data)
    })
  }

  const getData = () => {
    axios.get('http://68.178.163.174:5010/breeding/cows')
    .then(res => {
      setData(res.data)
    })
  }

  const addData = () => {
    axios.post('http://68.178.163.174:5010/breeding/cow_purchase', {
      shed_id,
      seat_id,
      cow_id,
      purchase_date,
      
    })
  }

  
  return (
    <Cowlayout>

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
                                <h1 className="m-2 display-4 text-success2"><span className="text-success2">Cow</span> Purchase</h1>
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
<input className='input' type='date' />


<button className='button'>Submit</button>

</form>


</div>
</Cowlayout>

  )
}
