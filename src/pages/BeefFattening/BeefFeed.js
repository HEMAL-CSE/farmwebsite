import React, { useDebugValue, useEffect, useState } from 'react'
import { BsPeople, BsSpeedometer } from 'react-icons/bs'
import { BiArrowFromBottom, BiArrowToBottom, BiChart, BiEdit, BiMoney, BiSolidArrowToBottom } from 'react-icons/bi'
import { FaCow, FaUserDoctor } from 'react-icons/fa6'
import { GiBottomRight3dArrow, GiDoctorFace } from 'react-icons/gi'
import { MdDelete, MdReport } from 'react-icons/md'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import { CgArrowBottomLeft } from 'react-icons/cg'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import axios from 'axios'
import { toast } from 'react-toastify'
import { FiDelete } from 'react-icons/fi'
import Modal from 'react-modal'
import BeefFatteningLayout from './beeffatteninglayout'
const BeefFeed = () => {
  const [shed_id, setShed_id] = useState('')
  const [seat_id, setSeat_id] = useState('')
  const [cattle_id, setCattle_id] = useState('')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')


  const [edit_shed_id, setEdit_shed_id] = useState('')
  const [edit_seat_id, setEdit_seat_id] = useState('')
  const [edit_cattle_id, setEdit_cattle_id] = useState('')
  const [edit_id, setEdit_id] = useState('')
  const [edit_amount, setEdit_amount] = useState('')
  const [edit_price, setEdit_price] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  const [sheds, setSheds] = useState([])
  const [seats, setSeats] = useState([])
  const [cattles, setCattles] = useState([])

  const [data, setData] = useState([])

  const getData = () => {
    axios.get('http://68.178.163.174:5010/cattles/beef_feed').then(res => {
      setData(res.data)
    })
  }

  useEffect(() => {
    axios.get(`http://68.178.163.174:5010/breeding/sheds`).then(res => {
      setSheds(res.data)
    })
    getData()

  }, [])

  const getSeats = id => {
    axios.get(`http://68.178.163.174:5010/breeding/seats?shed_id=${id}`)
      .then(res => {
        setSeats(res.data)
      })
  }

  const getCows = (shed_id, seat_id) => {
    axios.get(`http://68.178.163.174:5010/cattles/?shed_id=${shed_id}&&seat_id=${seat_id}`)
      .then(res => {
        setCattles(res.data)
      })
  }

  const addData = (e) => {
    e.preventDefault()

    axios.post('http://68.178.163.174:5010/cattles/beef_feed/add', {
      shed_id,
      seat_id,
      cattle_id,
      amount,
      price
    }).then(res => {
      toast('Submitted')
    })
    getData()
  }

  const editData = (e, id) => {
    e.preventDefault()

    axios.put(`http://68.178.163.174:5010/cattles/beef_feed/edit?id=${id}`, {
      shed_id: edit_shed_id,
      seat_id: edit_seat_id,
      cattle_id: edit_cattle_id,
      amount: edit_amount,
      price: edit_price
    })
      .then(res => {
        getData()

        toast('Updated')
        setIsOpen(false)
      })

  }

  const deleteData = (e, id) => {
    e.preventDefault()

    if (window.confirm('Do you want to delete this?')) {
      axios.delete(`http://68.178.163.174:5010/cattles/beef_feed/delete?id=${id}`)
        .then(res => {
          toast('Deleted')
          getData()

        })
    }



  }

  return (

    <BeefFatteningLayout>
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
                  <h1 className="m-2 display-4 text-success2"><span className="text-success2">Cattle</span> Feed</h1>
                </a>
              </div>
            </div>

          </div>
        </div>

        <form>

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
            getCows(shed_id, e.target.value)
          }} className='select' >
            <option >Select</option>
            {
              seats.map(shed => (

                <option value={shed.id}>{shed.name}</option>
              ))
            }
          </select>


          <label>Select Cattle ID:</label>
          <select value={cattle_id} onChange={e => {
            setCattle_id(e.target.value)
          }} className='select' >
            <option >Select</option>
            {
              cattles.map(shed => (

                <option value={shed.id}>{shed.cattle_id}</option>
              ))
            }
          </select>

          <label>Amount:</label>
          <input value={amount} onChange={e => setAmount(e.target.value)} className='input' type='text'

          />

          <label>Price:</label>
          <input value={price} onChange={e => setPrice(e.target.value)} className='input' type='text'

          />



          <button onClick={addData} className='button'>Submit</button>

        </form>


        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Cattle ID</th>
              <th scope='col'> Shed ID</th>
              <th scope='col'>Seat ID</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Price</th>
              <th scope='col'>Edit/Delete</th>

            </tr>
          </thead>
          <tbody>
            {
              data.map(calf => (
                <tr>
                  <td>{calf.cattle_id}</td>
                  <td>{calf.shed_id}</td>
                  <td>{calf.seat_id}</td>
                  <td>{calf.weight}</td>
                  <td>{calf.amount}</td>
                  <td>
                    <button onClick={() => {
                      setEdit_cattle_id(calf.cattle_id)
                      setEdit_shed_id(calf.shed_id)
                      setEdit_seat_id(calf.seat_id)
                      setEdit_id(calf.id)
                      getSeats(calf.shed_id)
                      getCows(calf.shed_id, calf.seat_id)
                      setEdit_amount(calf.amount)
                      setEdit_price(calf.price)
                      setIsOpen(true)
                    }} className='btn btn-secondary mx-2'>
                      <BiEdit />
                    </button>
                    <button onClick={e => deleteData(e, calf.id)} className='btn btn-danger'>
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
            overlay: { zIndex: 10000 }
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
              getCows(edit_shed_id, e.target.value)
            }} className='select' >
              <option >Select</option>
              {
                seats.map(shed => (

                  <option value={shed.id}>{shed.name}</option>
                ))
              }
            </select>


            <label>Select Cattle ID:</label>
            <select value={edit_cattle_id} onChange={e => {
              setEdit_cattle_id(e.target.value)
            }} className='select' >
              <option >Select</option>
              {
                cattles.map(shed => (

                  <option value={shed.id}>{shed.cattle_id}</option>
                ))
              }
            </select>

            <label>Amount:</label>
            <input value={edit_amount} onChange={e => setEdit_amount(e.target.value)} className='input' type='text'

            />

            <label>Price:</label>
            <input value={edit_price} onChange={e => setEdit_price(e.target.value)} className='input' type='text'

            />



            <button onClick={e => editData(e, edit_id)} className='button'>Submit</button>

          </form>
        </Modal>

      </div>
    </BeefFatteningLayout>
  )
}

export default BeefFeed