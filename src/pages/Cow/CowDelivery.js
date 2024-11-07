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
import Modal from 'react-modal';
import moment from 'moment';

const CowDelivery = () => {
    const [shed_id, setShed_id] = useState('')
    const [seat_id, setSeat_id] = useState('')
    const [cow_id, setCow_id] = useState('')
    const [delivery_date, setDelivery_date] = useState('')
    const [calf_sex, setCalf_sex] = useState('')
    const [calf_breed, setCalf_breed] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const [edit_id, setEdit_id] = useState('')
    const [edit_shed_id, setEdit_shed_id] = useState('')
    const [edit_seat_id, setEdit_seat_id] = useState('')
    const [edit_cow_id, setEdit_cow_id] = useState('')
    const [edit_delivery_date, setEdit_delivery_date] = useState('')
    const [edit_calf_sex, setEdit_calf_sex] = useState('')
    const [edit_calf_breed, setEdit_calf_breed] = useState('')

    const [sheds, setSheds] = useState([])
    const [seats, setSeats] = useState([])
    const [cows, setCows] = useState([])
    const [calf_genders, setCalf_gengers] = useState([
        {
            name: 'Male',
        },
        {
            name: 'Female',
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

    const getCows = (shed_id, seat_id) => {
        axios.get(`http://68.178.163.174:5010/breeding/cows?shed_id=${shed_id}&seat_id=${seat_id}`)
            .then(res => {
                setCows(res.data)
            })
    }

    const getData = () => {
        axios.get('http://68.178.163.174:5010/breeding/cows?has_calf=1')
            .then(res => {
                setData(res.data)
            })
    }

    const addData = (e) => {
        e.preventDefault()
        axios.put(`http://68.178.163.174:5010/breeding/delivery?shed_id=${shed_id}&seat_id=${seat_id}&cow_id=${cow_id}`, {
            delivery_date,
            calf_sex,
            calf_breed,
        }).then(res => {
            toast('Submitted')
            getData()
        })
    }

    const editData = (e) => {
        e.preventDefault()

        axios.put(`'http://68.178.163.174:5010/breeding/delivery?shed_id=${edit_shed_id}&seat_id=${edit_seat_id}&cow_id=${edit_cow_id}`, {
            delivery_date: edit_delivery_date,
            calf_sex: edit_calf_sex,
            calf_breed: edit_calf_breed

        })
            .then(res => {
                toast('Updated')
                getData()

            })
    }

    // const deleteData = (e, id) => {
    //   e.preventDefault()

    //   axios.delete(`http://68.178.163.174:5010/breeding/cow_purchase/delete?id=${id}`)
    //     .then(res => {
    //       toast('Deleted')
    //     })
    // }


    return (
        <Cowlayout>

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
                                    <h1 className="m-2 display-4 text-success2"><span className="text-success2">Cow</span> Delivery</h1>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <form onSubmit={addData} className='w-50'>



                    <label>Select Delivey Date:</label>
                    <input className='input' type='date' onChange={e => {
                        setDelivery_date(e.target.value)
                    }} />

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
                        getCows(shed_id, e.target.value)
                        setSeat_id(e.target.value)
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

                                <option value={shed.cow_id}>{shed.cow_id}</option>
                            ))
                        }
                    </select>


                    <label>Calf Gender:</label>
                    <select value={calf_sex} onChange={e => {
                        setCalf_sex(e.target.value)
                    }} className='select' >
                        <option >Select</option>
                        {
                            calf_genders.map(shed => (

                                <option value={shed.name}>{shed.name}</option>
                            ))
                        }
                    </select>

                    <label>Calf Breed</label>
                    <input className='input' value={calf_breed} onChange={e => setCalf_breed(e.target.value)} />


                    <button type='submit' className='button'>Submit</button>

                </form>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Cow ID</th>
                            <th scope='col'> Shed ID</th>
                            <th scope='col'>Seat ID</th>
                            <th scope='col'>Calf</th>
                            <th scope='col'>Breed</th>
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
                                    <td>{cow.calf_sex}</td>
                                    <td>{cow.calf_breed}</td>

                                    <td>
                                        <button onClick={() => {
                                            setEdit_shed_id(cow.shed_id)
                                            setEdit_seat_id(cow.seat_id)
                                            setEdit_id(cow.id)
                                            setEdit_cow_id(cow.cow_id)
                                            setEdit_delivery_date(cow.delivery_date)
                                            setEdit_calf_sex(cow.calf_sex)
                                            setEdit_calf_breed(cow.calf_breed)
                                            setIsOpen(true)
                                            getSeats(cow.shed_id)
                                            getCows(cow.shed_id, cow.seat_id)
                                        }} className='btn btn-secondary mx-2'>
                                            <BiEdit />
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

                    <label>Select Delivey Date:</label>
                    <input className='input' type='date' onChange={e => {
                        setEdit_delivery_date(e.target.value)
                    }} />

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
                        getCows(shed_id, e.target.value)
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

                                <option value={shed.cow_id}>{shed.cow_id}</option>
                            ))
                        }
                    </select>


                    <label>Calf Gender:</label>
                    <select value={edit_calf_sex} onChange={e => {
                        setEdit_calf_sex(e.target.value)
                    }} className='select' >
                        <option >Select</option>
                        {
                            calf_genders.map(shed => (

                                <option value={shed.name}>{shed.name}</option>
                            ))
                        }
                    </select>

                    <label>Calf Breed</label>
                    <input className='input' value={edit_calf_breed} onChange={e => setEdit_calf_breed(e.target.value)} />

                        <button onClick={e => editData(e, edit_id)} className='button'>Submit</button>

                    </form>
                </Modal>

            </div>
        </Cowlayout>

    )
}

export default CowDelivery