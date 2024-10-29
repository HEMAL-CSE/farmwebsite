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
import BeefFatteningLayout from './beeffatteninglayout';
const BeefPurchasse = () => {
    const [shed_id, setShed_id] = useState('')
    const [seat_id, setSeat_id] = useState('')
    const [cattle_id, setCattle_id] = useState('')
    const [purchase_date, setPurchase_date] = useState('')
    const [price, setPrice] = useState('')
    const [weight, setWeight] = useState('')
    const[isOpen, setIsOpen] = useState(false)
  
    const [edit_id, setEdit_id] = useState('')
    const [edit_shed_id, setEdit_shed_id] = useState('')
    const [edit_seat_id, setEdit_seat_id] = useState('')
    const [edit_cattle_id, setEdit_cattle_id] = useState('')
    const [edit_purchase_date, setEdit_purchase_date] = useState('')
    const [edit_price, setEdit_price] = useState('')
    const [edit_weight, setEdit_weight] = useState('')

    const [sheds, setSheds] = useState([])
    const [seats, setSeats] = useState([])

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
  
    const getData = () => {
      axios.get('http://68.178.163.174:5010/cattles')
        .then(res => {
          setData(res.data)
        })
    }
  
    const addData = (e) => {
      e.preventDefault()
      axios.post('http://68.178.163.174:5010/cattles/add', {
        shed_id,
        seat_id,
        cattle_id,
        purchase_date,
        purchase_price: price,
        weight,

      }).then(res => {
        toast('Submitted')
        getData()
      })
    }
  
    const editData = (e) => {
      e.preventDefault()
  
      axios.put(`http://68.178.163.174:5010/cattles/update?id=${edit_id}`, {
        shed_id: edit_shed_id,
        seat_id: edit_seat_id,
        cattle_id: edit_cattle_id,
        purchase_date: edit_purchase_date,
        purchase_price: edit_price,
        weight: edit_weight,
  
      })
        .then(res => {
          toast('Updated')
          getData()
  
        })
    }
  
    const deleteData = (e, id) => {
      e.preventDefault()
  
      axios.delete(`http://68.178.163.174:5010/cattles/delete?id=${id}`)
        .then(res => {
          toast('Deleted')
        })
    }
  
  
    return (
      <BeefFatteningLayout>
  
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
                    <h1 className="m-2 display-4 text-success2"><span className="text-success2">Beef</span> Purchase</h1>
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
            }} className='select' >
              <option >Select</option>
              {
                seats.map(shed => (
  
                  <option value={shed.id}>{shed.name}</option>
                ))
              }
            </select>
  
            <label>Cattle ID</label>
            <input className='input' value={cattle_id} onChange={e => setCattle_id(e.target.value)} />
  
            <label>Select Purchse Date:</label>
            <input className='input' type='date' onChange={e => {
              setPurchase_date(e.target.value)
            }} />
  
            <label>Cattle Price</label>
            <input className='input' value={price} onChange={e => setPrice(e.target.value)} />
  
            <label>Cattle Weight</label>
            <input className='input' value={weight} onChange={e => setWeight(e.target.value)} />
  
        
  
            <button type='submit' className='button'>Submit</button>
  
          </form>
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Cattle ID</th>
                <th scope='col'> Shed ID</th>
                <th scope='col'>Seat ID</th>
                <th scope='col'>Purchase Date</th>
                <th scope='col'>Weight</th>
    
                <th scope='col'>Edit/Delete</th>
  
              </tr>
            </thead>
            <tbody>
              {
                data.map(cow => (
                  <tr>
                    <td>{cow.cattle_id}</td>
                    <td>{cow.shed_id}</td>
                    <td>{cow.seat_id}</td>
                    <td>{moment(cow.purchase_date).format('DD/MM/yyyy')}</td>
                    <td>{cow.weight}</td>
                
                    <td>
                      <button onClick={() => {
                        setEdit_shed_id(cow.shed_id)
                        setEdit_seat_id(cow.seat_id)
                        setEdit_id(cow.id)
                        setEdit_cattle_id(cow.cattle_id)
                        setEdit_purchase_date(cow.purchase_date)
                        setEdit_price(cow.price)
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
  
            <label>Cattle  ID</label>
            <input className='input' value={edit_cattle_id} onChange={e => setEdit_cattle_id(e.target.value)} />
  
            <label>Select Purchse Date:</label>
            <input className='input' type='date' onChange={e => {
              setEdit_purchase_date(e.target.value)
            }} />
  
            <label>Cow Price</label>
            <input className='input' value={price} onChange={e => setPrice(e.target.value)} />
  
            <label>Cow Weight</label>
            <input className='input' value={weight} onChange={e => setWeight(e.target.value)} />
  
        
              <button onClick={e => editData(e, edit_id)} className='button'>Submit</button>
  
            </form>
          </Modal>
  
        </div>
      </BeefFatteningLayout>
  
    )
}

export default BeefPurchasse