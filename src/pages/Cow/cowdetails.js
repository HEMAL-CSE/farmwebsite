import React, { useEffect, useState } from 'react'
import './cowdetails.css'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
import Cowlayout from './Cowlayout';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaLessThanEqual } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import  Modal  from 'react-modal';

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
  const[isOpen, setIsOpen] = useState(false)

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
  }, [])

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

  const addData = (e) => {
    e.preventDefault()
    axios.post('http://68.178.163.174:5010/breeding/cow_purchase', {
      shed_id,
      seat_id,
      cow_id,
      purchase_date,
      price,
      weight,
      pregnant,
      pregnant_month: pregnantMonth,
      supposed_delivery_date,
    }).then(res => {
      toast('Submitted')
      getData()
    })
  }

  const editData = (e) => {
    e.preventDefault()

    axios.put(`http://68.178.163.174:5010/breeding/cow_purchase/edit?id=${edit_id}`, {
      shed_id: edit_shed_id,
      seat_id: edit_seat_id,
      cow_id: edit_cow_id,
      purchase_date: edit_purchase_date,
      price: edit_price,
      weight: edit_weight,
      pregnant: edit_pregnant,
      pregnant_month: edit_pregnant_month,
      supposed_delivery_date: edit_supposed_delivery_date,

    })
      .then(res => {
        toast('Updated')
        getData()

      })
  }

  const deleteData = (e, id) => {
    e.preventDefault()

    axios.delete(`http://68.178.163.174:5010/breeding/cow_purchase/delete?id=${id}`)
      .then(res => {
        toast('Deleted')
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

        <form onSubmit={addData}>

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

          <label>Cow ID</label>
          <input className='input' value={cow_id} onChange={e => setCow_id(e.target.value)} />

          <label>Select Purchse Date:</label>
          <input className='input' type='date' onChange={e => {
            setPurchase_date(e.target.value)
          }} />

          <label>Cow Price</label>
          <input className='input' value={price} onChange={e => setPrice(e.target.value)} />

          <label>Cow Weight</label>
          <input className='input' value={weight} onChange={e => setWeight(e.target.value)} />

          <label>Pregnant Status:</label>
          <select value={pregnant} onChange={e => {
            setPregnant(e.target.value)
          }} className='select' >
            <option >Select</option>
            {
              pregnants.map(shed => (

                <option value={shed.value}>{shed.name}</option>
              ))
            }
          </select>

          {
            pregnant == '1' && (
              <>
                <label>Pregnant Month</label>
                <input className='input' value={pregnantMonth} onChange={e => setPregnantMonth(e.target.value)} />

                <label>Select Supposed Delivery Date:</label>
          <input className='input' type='date' onChange={e => {
            setSupposed_delivery_date(e.target.value)
          }} />

              </>
            )
          }

          <button type='submit' className='button'>Submit</button>

        </form>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Cow ID</th>
              <th scope='col'> Shed ID</th>
              <th scope='col'>Seat ID</th>
              <th scope='col'>Purchase Date</th>
              <th scope='col'>Weight</th>
              <th scope='col'>Pregnant</th>
              <th scope='col'>Pregnant Month</th>
              <th scope='col'>Supposed Delivery Date</th>
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
                  <td>{cow.purchase_date}</td>
                  <td>{cow.weight}</td>
                  <td>{cow.pregnant}</td>
                  <td>{cow.pregnant_month}</td>
                  <td>{cow.supposed_delivery_date}</td>

                  <td>
                    <button onClick={() => {
                      setEdit_shed_id(cow.shed_id)
                      setEdit_seat_id(cow.seat_id)
                      setEdit_id(cow.id)
                      setEdit_cow_id(cow.cow_id)
                      setEdit_purchase_date(cow.purchase_date)
                      setEdit_price(cow.price)
                      setEdit_pregnant(cow.pregnant)
                      setEdit_pregnant_month(cow.pregnant_month)
                      setEdit_supposed_delivery_date(cow.supposed_delivery_date)
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

          <label>Cow ID</label>
          <input className='input' value={cow_id} onChange={e => setCow_id(e.target.value)} />

          <label>Select Purchse Date:</label>
          <input className='input' type='date' onChange={e => {
            setEdit_purchase_date(e.target.value)
          }} />

          <label>Cow Price</label>
          <input className='input' value={price} onChange={e => setPrice(e.target.value)} />

          <label>Cow Weight</label>
          <input className='input' value={weight} onChange={e => setWeight(e.target.value)} />

          <label>Pregnant Status:</label>
          <select value={pregnant} onChange={e => {
            setPregnant(e.target.value)
          }} className='select' >
            <option >Select</option>
            {
              pregnants.map(shed => (

                <option value={shed.value}>{shed.name}</option>
              ))
            }
          </select>

          {
            pregnant == '1' && (
              <>
                <label>Pregnant Month</label>
                <input className='input' value={pregnantMonth} onChange={e => setPregnantMonth(e.target.value)} />

                <label>Select Supposed Delivery Date:</label>
          <input className='input' type='date' onChange={e => {
            setSupposed_delivery_date(e.target.value)
          }} />

              </>
            )
          }
            <button onClick={e => editData(e, edit_id)} className='button'>Submit</button>

          </form>
        </Modal>

      </div>
    </Cowlayout>

  )
}
