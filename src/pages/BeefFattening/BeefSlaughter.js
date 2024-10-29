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
import moment from 'moment'
const BeefSlaughter = () => {
    const [shed_id, setShed_id] = useState('')
    const [seat_id, setSeat_id] = useState('')
    const [cattle_id, setCattle_id] = useState('')
    const [slaughtering_date, setSlaughtering_date] = useState('')
    const [cattle_body_weight, setCattle_body_weight] = useState('')
    const [beef_weight, setBeef_weight] = useState('')
    const [per_kg_cost, setPer_kg_cost] = useState('')
    const [others_income, setOthers_income] = useState('')
    const [expenses, setExpenses] = useState('')

    const [edit_shed_id, setEdit_shed_id] = useState('')
    const [edit_seat_id, setEdit_seat_id] = useState('')
    const [edit_cattle_id, setEdit_cattle_id] = useState('')
    const [edit_id, setEdit_id] = useState('')
    const [edit_slaughtering_date, setEdit_slaughtering_date] = useState('')
    const [edit_cattle_body_weight, setEdit_cattle_body_weight] = useState('')
    const [edit_beef_weight, setEdit_beef_weight] = useState('')
    const [edit_per_kg_cost, setEdit_per_kg_cost] = useState('')
    const [edit_others_income, setEdit_others_income] = useState('')
    const [edit_expenses, setEdit_expenses] = useState('')


    const [isOpen, setIsOpen] = useState(false)

    const [sheds, setSheds] = useState([])
    const [seats, setSeats] = useState([])
    const [cattles, setCattles] = useState([])

    const [data, setData] = useState([])

    const getData = () => {
        axios.get('http://68.178.163.174:5010/cattles/slaughter_info?slaughtered=1').then(res => {
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

        axios.post(`http://68.178.163.174:5010/cattles/slaughter/add?id=${cattle_id}`, {
            slaughtering_date,
            weight: cattle_body_weight,
            per_kg_cost,
            others_income,
            expenses
        }).then(res => {
            toast('Submitted')
        })
        getData()
    }

    const editData = (e, id) => {
        e.preventDefault()

        axios.put(`http://68.178.163.174:5010/cattles/slaughter/add?id=${id}`, {
            slaughtering_date: edit_slaughtering_date,
            weight: edit_cattle_body_weight,
            per_kg_cost: edit_per_kg_cost,
            others_income: edit_others_income,
            expenses: edit_expenses
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
            axios.delete(`http://68.178.163.174:5010/cattles/delete?id=${id}`)
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
                                    <h1 className="m-2 display-4 text-success2"><span className="text-success2">Cattle</span> Slaughtering</h1>
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
                            cattle_id.map(shed => (

                                <option value={shed.id}>{shed.cattle_id}</option>
                            ))
                        }
                    </select>

                    <label>Slaughtering Date:</label>
                    <input value={slaughtering_date} onChange={e => setSlaughtering_date(e.target.value)} className='input' type='date'

                    />

                    <label>Cattle Body Weight:</label>
                    <input value={cattle_body_weight} onChange={e => setCattle_body_weight(e.target.value)} className='input' type='text'

                    />

                    <label>Per Kg Cost:</label>
                    <input value={per_kg_cost} onChange={e => setPer_kg_cost(e.target.value)} className='input' type='text'

                    />

                    <label>Others Income:</label>
                    <input value={others_income} onChange={e => setOthers_income(e.target.value)} className='input' type='text'

                    />

                    <label>Expenses:</label>
                    <input value={expenses} onChange={e => setExpenses(e.target.value)} className='input' type='text'

                    />



                    <button onClick={addData} className='button'>Submit</button>

                </form>


                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Cattle ID</th>
                            <th scope='col'> Shed ID</th>
                            <th scope='col'>Seat ID</th>
                            <th scope='col'>Slaughtering Date</th>
                            <th scope='col'>Cattle Body Weight</th>
                            <th scope='col'>Per Kg Cost</th>
                            <th scope='col'>Others Income</th>
                            <th scope='col'>Expenses</th>
                            <th scope='col'>Net Profit</th>
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
                                    <td>{(moment(calf.slaughtering_date).format('DD/MM/yyyy'))}</td>
                                    <td>{calf.cattle_body_weight}</td>
                                    <td>{calf.per_kg_cost}</td>
                                    <td>{calf.others_income}</td>
                                    <td>{calf.expenses}</td>
                                    <td>{calf.net_profit}</td>

                                    <td>
                                        <button onClick={() => {
                                            setEdit_cattle_id(calf.cattle_id)
                                            setEdit_shed_id(calf.shed_id)
                                            setEdit_seat_id(calf.seat_id)
                                            setEdit_id(calf.id)
                                            getSeats(calf.shed_id)
                                            getCows(calf.shed_id, calf.seat_id)
                                            setSlaughtering_date(calf.slaughtering_date)
                                            setCattle_body_weight(calf.cattle_body_weight)
                                            setPer_kg_cost(calf.per_kg_cost)
                                            setOthers_income(calf.others_income)
                                            setExpenses(calf.expenses)
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

                        <label>Slaughtering Date:</label>
                        <input value={edit_slaughtering_date} onChange={e => setEdit_slaughtering_date(e.target.value)} className='input' type='date'

                        />

                        <label>Cattle Body Weight:</label>
                        <input value={edit_cattle_body_weight} onChange={e => setEdit_cattle_body_weight(e.target.value)} className='input' type='text'

                        />

                        <label>Per Kg Cost:</label>
                        <input value={edit_per_kg_cost} onChange={e => setEdit_per_kg_cost(e.target.value)} className='input' type='text'

                        />

                        <label>Others Income:</label>
                        <input value={edit_others_income} onChange={e => setEdit_others_income(e.target.value)} className='input' type='text'

                        />

                        <label>Expenses:</label>
                        <input value={edit_expenses} onChange={e => setEdit_expenses(e.target.value)} className='input' type='text'

                        />



                        <button onClick={e => editData(e, edit_id)} className='button'>Submit</button>

                    </form>
                </Modal>

            </div>
        </BeefFatteningLayout>
    )
}

export default BeefSlaughter