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
import Vermicompost from './vermicompost'
import moment from 'moment'

const VermicompostProduction = () => {
    const location = useLocation();
    const { hash, pathname, search } = location;
    const [kg, setKg] = useState('')
    const [date, setDate] = useState('')


    const [edit_id, setEdit_id] = useState('')
    const [edit_kg, setEdit_kg] = useState('')
    const [edit_date, setEdit_date] = useState('')

    const [isOpen, setIsOpen] = useState(false)


    const [data, setData] = useState([])

    const getData = () => {
        let x = pathname.slice(pathname.lastIndexOf("/") +1, pathname.length)
        console.log(x);
        
        axios.get(`http://68.178.163.174:5010/vermi_compost/vermicompost_prod?shed_id=${x}`).then(res => {
            console.log(res.data);
            
            
            let results = res.data.reduce((obj, item) => {
                let id = item.id
                if (!obj.hasOwnProperty(id)) {
                    obj[id] = []
                }
                obj[id].push(item)

                return obj
            }, {})
            var y = Object.entries(results).map(([key, value]) => {
                var data = {}
                data[key] = value;
                return data

            })

            console.log(y);


            setData(y)
        })
    }

    useEffect(() => {



        getData()

    }, [])


    const addData = (e) => {
        e.preventDefault()
        let x = pathname.slice(pathname.lastIndexOf("/")+1, pathname.length)

        axios.post('http://68.178.163.174:5010/vermi_compost/vermicompost_prod/add', {
            shed_id: x,
            amount: kg,
            date,


        }).then(res => {
            toast('Submitted')
            getData()
        })
    }

    const editData = (e, id) => {
        e.preventDefault()

        axios.put(`http://68.178.163.174:5010/vermi_compost/vermicompost_prod/edit?id=${id}`, {
            amount: edit_kg,
            date: edit_date,

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
            axios.delete(`http://68.178.163.174:5010/vermi_compost/vermicompost_prod/delete?id=${id}`)
                .then(res => {
                    toast('Deleted')
                    getData()

                })
        }



    }

    return (
        <Vermicompost>
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
                                    <h1 className="m-2 display-4 text-success2"><span className="text-success2">Shed</span> </h1>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <form>


                    <label>Date:</label>
                    <input value={date} onChange={e => setDate(e.target.value)} className='input' type='date'

                    />

                    <label>Amount:</label>
                    <input value={kg} onChange={e => setKg(e.target.value)} className='input' type='text'

                    />



                    <button onClick={addData} className='button'>Submit</button>

                </form>


                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Labours</th>

                            <th scope='col'>Edit/Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(calf => (
                                <tr>
                                    <td>{Object.keys(calf)[0]}</td>
                                    <td>{calf[Object.keys(calf)[0]][0].amount} kg</td>
                                    <td>
                                        {
                                            calf[Object.keys(calf)[0]].map(j => (
                                                <p>{j['labour_name']},</p>
                                            ))
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => {

                                            setEdit_id(Object.keys(calf)[0])
                                            setEdit_kg(calf[Object.keys(calf)[0]][0].amount)
                                            setEdit_date(calf[Object.keys(calf)[0]][0].date)
                                            setIsOpen(true)
                                        }} className='btn btn-secondary mx-2'>
                                            <BiEdit />
                                        </button>
                                        <button onClick={e => deleteData(e, Object.keys(calf)[0])} className='btn btn-danger'>
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
                            zIndex: 10,
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

                        <label>Date:</label>
                        <input value={edit_date} onChange={e => setEdit_date(e.target.value)} className='input' type='date'

                        />

                        <label>Amount:</label>
                        <input value={edit_kg} onChange={e => setEdit_kg(e.target.value)} className='input' type='text'

                        />





                        <button onClick={e => editData(e, edit_id)} className='button'>Submit</button>

                    </form>
                </Modal>

            </div>
        </Vermicompost>
    )
}

export default VermicompostProduction