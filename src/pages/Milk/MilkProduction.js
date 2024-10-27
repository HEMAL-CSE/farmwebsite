import React, { useEffect, useState } from 'react'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaLessThanEqual } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import  Modal  from 'react-modal';
import moment from 'moment';
import { Milklayout } from './milklayout';
const MilkProduction = () => {
    const [shed_id, setShed_id] = useState('')
    const [seat_id, setSeat_id] = useState('')
    const [cow_id, setCow_id] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')
    const[isOpen, setIsOpen] = useState(false)
  
    const [edit_id, setEdit_id] = useState('')
    const [edit_shed_id, setEdit_shed_id] = useState('')
    const [edit_seat_id, setEdit_seat_id] = useState('')
    const [edit_cow_id, setEdit_cow_id] = useState('')
    const [edit_date, setEdit_date] = useState('')
    const [edit_amount, setEdit_amount] = useState('')

    const [sheds, setSheds] = useState([])
    const [seats, setSeats] = useState([])
    const [cows, setCows] = useState([])

    const [data, setData] = useState([])
  
    useEffect(() => {
      axios.get(`http://68.178.163.174:5010/breeding/sheds`).then(res => {
        setSheds(res.data)
      })
  
      getData()
    }, [])
  
    const getSeats = (shed_id) => {
      axios.get(`http://68.178.163.174:5010/breeding/seats?shed_id=${shed_id}`)
        .then(res => {
          setSeats(res.data)
        })
    }

    const getCows = (id) => {
        axios.get(`http://68.178.163.174:5010/dairy/dairy_cows?seat_id=${id}`)
          .then(res => {
            setCows(res.data)
          })
      }
  
    const getData = () => {
      axios.get('http://68.178.163.174:5010/dairy/production')
        .then(res => {
          setData(res.data)
        })
    }
  
    const addData = (e) => {
      e.preventDefault()
      axios.post('http://68.178.163.174:5010/dairy/production/add', {
        shed_id,
        seat_id,
        cow_id,
        date,
        amount

      }).then(res => {
        toast('Submitted')
        getData()
      })
    }
  
    const editData = (e) => {
      e.preventDefault()
  
      axios.put(`http://68.178.163.174:5010/dairy/production/edit?id=${edit_id}`, {
        shed_id: edit_shed_id,
        seat_id: edit_seat_id,
        cow_id: edit_cow_id,
        date: edit_date,
        amount: edit_amount
  
      })
        .then(res => {
          toast('Updated')
          getData()
  
        })
    }
  
    const deleteData = (e, id) => {
      e.preventDefault()
  
      axios.delete(`http://68.178.163.174:5010/dairy/production/delete?id=${id}`)
        .then(res => {
          toast('Deleted')
        })
    }
  
  
    return (
      <Milklayout>
  
        <div className='details d-flex flex-column justify-content-center align-items-center'>
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
                    <h1 className="m-2 display-4 text-success2"><span className="text-success2">Milk</span> Production</h1>
                  </a>
                </div>
              </div>
   
            </div>
          </div>
  
          <form onSubmit={addData} className='w-50'>
  
            <label>Select Shed ID:</label>
            <select value={shed_id} onChange={e => {
              setShed_id(e.target.value)
              getSeats(e.target.value)
            }} className='select' >
              <option >Select</option>
              {
                sheds.map(shed => (
  
                  <option value={shed.id}>{shed.name}</option>
                ))
              }
            </select>
  
            <label>Select Seat ID:</label>
            <select value={seat_id} onChange={e => {
              setSeat_id(e.target.value)
              getCows(e.target.value)
            }} className='select' >
              <option >Select</option>
              {
                seats.map(shed => (
  
                  <option value={shed.id}>{shed.name}</option>
                ))
              }
            </select>
  
            <label>Select Cow ID:</label>
            <select value={cow_id} onChange={e => {
              setCow_id(e.target.value)
            }} className='select' >
              <option >Select</option>
              {
                cows.map(shed => (
  
                  <option value={shed.id}>{shed.cow_id}</option>
                ))
              }
            </select>
            <label>Select  Date:</label>
            <input className='input' type='date' onChange={e => {
              setDate(e.target.value)
            }} />
  
            <label>Milk Amount</label>
            <input className='input' value={amount} onChange={e => setAmount(e.target.value)} />
  
           
        
  
            <button type='submit' className='button'>Submit</button>
  
          </form>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Cow ID</th>
                <th scope='col'> Shed ID</th>
                <th scope='col'>Seat ID</th>
                <th scope='col'> Date</th>
                <th scope='col'>Amount</th>
    
                <th scope='col'>Edit/Delete</th>
  
              </tr>
            </thead>
            <tbody>
              {
                data.map(cow => (
                  <tr>
                    <td>{cow.cow_id}</td>
                    <td>{cow.shed_id}</td>
                    <td>{cow.seat_id}</td>
                    <td>{moment(cow.date).format('DD/MM/yyyy')}</td>
                    <td>{cow.amount}</td>
                
                    <td>
                      <button onClick={() => {
                        setEdit_shed_id(cow.shed_id)
                        setEdit_seat_id(cow.seat_id)
                        setEdit_id(cow.id)
                        setEdit_cow_id(cow.cow_id)
                        setEdit_date(cow.date)
                        getSeats(cow.shed_id)
                        getCows(cow.seat_id)
                        setEdit_amount(cow.amount)
                         setIsOpen(true)
                      }} className='btn btn-secondary mx-2'>
                        <BiEdit />
                      </button>
                      <button onClick={e => deleteData(e, cow.id)} className='btn btn-danger'>
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
  
          <Modal
            style={{
              content: {
                width: "80%",
                height: "80%",
                top: "5%",
                left: "10%",
                right: "10%",
                bottom: "5%",
                overflow: "auto",
                WebkitBoxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
                MozBoxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
                borderRadius: "5px",
                border: "1px solid #ccc",
              },
              overlay: {zIndex: 10000}
            }}
            isOpen={isOpen}
            onRequestClose={() => {
              setIsOpen(false)
            }}
          >
            <form className='details'>
  
            <label>Select Shed ID:</label>
            <select value={edit_shed_id} onChange={e => {
              setEdit_shed_id(e.target.value)
              getSeats(e.target.value)
            }} className='select' >
              <option >Select</option>
              {
                sheds.map(shed => (
  
                  <option value={shed.id}>{shed.name}</option>
                ))
              }
            </select>
  
            <label>Select Seat ID:</label>
            <select value={edit_seat_id} onChange={e => {
              setEdit_seat_id(e.target.value)
            }} className='select' >
              <option >Select</option>
              {
                seats.map(shed => (
  
                  <option value={shed.id}>{shed.name}</option>
                ))
              }
            </select>
  
            <label>Select Cow ID:</label>
            <select value={edit_cow_id} onChange={e => {
              setEdit_cow_id(e.target.value)
            }} className='select' >
              <option >Select</option>
              {
                cows.map(shed => (
  
                  <option value={shed.id}>{shed.cow_id}</option>
                ))
              }
            </select>
            <label>Select Date:</label>
            <input className='input' type='date' onChange={e => {
              setEdit_date(e.target.value)
            }} />
  
            <label>Milk Amount</label>
            <input className='input' value={edit_amount} onChange={e => setEdit_amount(e.target.value)} />
  
        
              <button onClick={e => editData(e, edit_id)} className='button'>Submit</button>
  
            </form>
          </Modal>
  
        </div>
      </Milklayout>
  
    )
}

export default MilkProduction