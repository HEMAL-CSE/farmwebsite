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

const CowdungOthers = () => {
    const [name, setName] = useState('')


    const [edit_id, setEdit_id] = useState('')
    const [edit_name, setEdit_name] = useState('')
    const [edit_date, setEdit_date] = useState('')

    const [isOpen, setIsOpen] = useState(false)


    const [data, setData] = useState([])

    const getData = () => {
        axios.get('http://68.178.163.174:5010/vermi_compost/others_list').then(res => {
            setData(res.data)
        })
    }

    useEffect(() => {



        getData()

    }, [])


    const addData = (e) => {
        e.preventDefault()

        axios.post('http://68.178.163.174:5010/vermi_compost/others_list/add', {
            name,
         
        }).then(res => {
            toast('Submitted')
            getData()
        })
    }

    const editData = (e, id) => {
        e.preventDefault()

        axios.put(`http://68.178.163.174:5010/vermi_compost/others_list/edit?id=${id}`, {
            name: edit_name,

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
            axios.delete(`http://68.178.163.174:5010/vermi_compost/others_list/delete?id=${id}`)
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
                                    <h1 className="m-2 display-4 text-success2"><span className="text-success2">Others</span> List</h1>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <form>


                    <label>Name:</label>
                    <input value={name} onChange={e => setName(e.target.value)} className='input' type='text'

                    />
                    


                    <button onClick={addData} className='button'>Submit</button>

                </form>


                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                     
                            <th scope='col'>Edit/Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(calf => (
                                <tr>
                                    <td>{calf.name}</td>

                                    <td>
                                        <button onClick={() => {

                                            setEdit_id(calf.id)
                                            setEdit_name(calf.name)
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

                    <label>Name:</label>
                    <input value={edit_name} onChange={e => setEdit_name(e.target.value)} className='input' type='text'

                    />





                        <button onClick={e => editData(e, edit_id)} className='button'>Submit</button>

                    </form>
                </Modal>

            </div>
        </Vermicompost>
    )
}

export default CowdungOthers