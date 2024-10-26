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
import Cowlayout from './Cowlayout'

const CowSelling = () => {
    const [shed_id, setShed_id] = useState('')
    const [seat_id, setSeat_id] = useState('')
    const [cow_id, setCow_id] = useState('')
    const [selling_date, setSelling_date] = useState('')
    const [calf_price, setCalf_price] = useState('')
    const [cow_price, setCow_price] = useState('')


    const [edit_shed_id, setEdit_shed_id] = useState('')
    const [edit_seat_id, setEdit_seat_id] = useState('')
    const [edit_cow_id, setEdit_cow_id] = useState('')
    const [edit_selling_date, setEdit_selling_date] = useState('')
    const [edit_calf_price, setEdit_calf_price] = useState('')
    const [edit_id, setEdit_id] = useState('')
    const [edit_cow_price, setEdit_cow_price] = useState('')

    const [isOpen, setIsOpen] = useState(false)

    const [sheds, setSheds] = useState([])
    const [seats, setSeats] = useState([])
    const [cows, setCows] = useState([])

    const [data, setData] = useState([])

    const getData = () => {
        axios.get('http://68.178.163.174:5010/breeding/sold_cows').then(res => {
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
        axios.get(`http://68.178.163.174:5010/breeding/cows?shed_id=${shed_id}&&seat_id=${seat_id}`)
            .then(res => {
                setCows(res.data)
            })
    }

    const addData = (e) => {
        e.preventDefault()

        axios.put(`http://68.178.163.174:5010/breeding/selling?shed_id=${shed_id}&seat_id=${seat_id}&cow_id=${cow_id}`, {
            selling_date,
            calf_selling_price: calf_price,
            cow_selling_price: cow_price
        }).then(res => {
            getData()

            toast('Submitted')
        })
    }

    const editData = (e, id) => {
        e.preventDefault()

        axios.put(`http://68.178.163.174:5010/breeding/selling?shed_id=${edit_shed_id}&seat_id=${edit_seat_id}&cow_id=${edit_cow_id}`, {
            selling_date: edit_selling_date,
            calf_selling_price: edit_calf_price,
            cow_selling_price: edit_cow_price
        })
            .then(res => {
                getData()

                toast('Updated')
                setIsOpen(false)
            })

    }

    // const deleteData = (e,id) => {
    //   e.preventDefault()

    //   if(window.confirm('Do you want to delete this?')){
    //     axios.delete(`http://68.178.163.174:5010/breeding/breeding_feed/delete?id=${id}`)
    //     .then(res => {
    //       toast('Deleted')
    //       getData()

    //     })
    //   }



// }

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
                                <h1 className="m-2 display-4 text-success2"><span className="text-success2">Cow</span> Selling</h1>
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

                <label>Select Selling Date:</label>
                <input className='input' type='date' onChange={e => {
                    setSelling_date(e.target.value)
                }} />

                <label>Calf Price:</label>
                <input value={calf_price} onChange={e => setCalf_price(e.target.value)} className='input' type='text'

                />

                <label>Cow Price:</label>
                <input value={cow_price} onChange={e => setCow_price(e.target.value)} className='input' type='text'

                />



                <button onClick={addData} className='button'>Submit</button>

            </form>


            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Cow ID</th>
                        <th scope='col'> Shed ID</th>
                        <th scope='col'>Seat ID</th>
                        <th scope='col'>Cow Selling Price</th>
                        <th scope='col'>Edit/Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(calf => (
                            <tr>
                                <td>{calf.cow_id}</td>
                                <td>{calf.shed_id}</td>
                                <td>{calf.seat_id}</td>
                                <td>{calf.cow_selling_price}</td>
                                <td>
                                    <button onClick={() => {
                                        setEdit_cow_id(calf.calf_id)
                                        setEdit_shed_id(calf.shed_id)
                                        setEdit_seat_id(calf.seat_id)
                                        setEdit_id(calf.id)
                                        getSeats(calf.shed_id)
                                        getCows(calf.shed_id, calf.seat_id)
                                        setEdit_cow_price(calf.cow_selling_price)
                                        setEdit_calf_price(calf.calf_sellin_price)
                                        setEdit_selling_date(calf.selling_date)
                                        setIsOpen(true)
                                    }} className='btn btn-secondary mx-2'>
                                        <BiEdit />
                                    </button>
                                    {/* <button onClick={e => deleteData(e, calf.id)} className='btn btn-danger'>
                                        <MdDelete />
                                    </button> */}
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

                <label>Select Selling Date:</label>
                <input className='input' type='date' onChange={e => {
                    setSelling_date(e.target.value)
                }} />

                <label>Calf Price:</label>
                <input value={edit_calf_price} onChange={e => setEdit_calf_price(e.target.value)} className='input' type='text'

                />

                <label>Cow Price:</label>
                <input value={edit_cow_price} onChange={e => setEdit_cow_price(e.target.value)} className='input' type='text'

                />



                    <button onClick={e => editData(e, edit_id)} className='button'>Submit</button>

                </form>
            </Modal>

        </div>
    </Cowlayout>
)
}

export default CowSelling