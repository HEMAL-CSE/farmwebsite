import React, { useDebugValue, useEffect, useState } from 'react'
import { BsEye, BsPeople, BsSpeedometer } from 'react-icons/bs'
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
const CowTreatment = () => {
    const [shed_id, setShed_id] = useState('')
    const [seat_id, setSeat_id] = useState('')
    const [cow_id, setCow_id] = useState('')
    const [farm_id, setFarm_id] = useState('')
    const [diseases_description, setDiseases_description] = useState('')
    const [treatment, setTreatment] = useState('')
    const [cost, setCost] = useState('')
    const [remarks, setRemarks] = useState('')


    const [edit_shed_id, setEdit_shed_id] = useState('')
    const [edit_seat_id, setEdit_seat_id] = useState('')
    const [edit_cow_id, setEdit_cow_id] = useState('')
    const [edit_id, setEdit_id] = useState('')
    const [edit_farm_id, setEdit_farm_id] = useState('')
    const [edit_diseases_description, setEdit_diseases_description] = useState('')
    const [edit_treatment, setEdit_treatment] = useState('')
    const [edit_cost, setEdit_cost] = useState('')
    const [edit_remarks, setEdit_remarks] = useState('')

    const [isOpen, setIsOpen] = useState(false)
    const [isDoctorsOpen, setIsDoctorsOpen] = useState(false)


    const [sheds, setSheds] = useState([])
    const [seats, setSeats] = useState([])
    const [cows, setCows] = useState([])
    const [doctors, setDoctors] = useState([])
    const [selectedDoctors, setSelectedDoctors] = useState([])
    const [imageFiles, setImageFiles] = useState([])

    const [cowImages, setCowImages] = useState([])
    const [treatment_desc, setTreatment_desc] = useState('')

    const [data, setData] = useState([])

    const isVideo = ['.mpg', '.mp2', '.mpeg', '.mpe', '.mpv', '.mp4']

    const getData = () => {

        let farm_id = localStorage.getItem('farm_id')

        axios.get(`http://68.178.163.174:5010/doctors/breeding?farm_id=${farm_id}`).then(res => {
            // console.log(res.data);

            if (res.data.length > 0) {
                let results = res.data.reduce((obj, item) => {
                    let id = item.doctor_id
                    if (!obj.hasOwnProperty(id)) {
                        obj[id] = []
                    }
                    obj[id].push(item)

                    return obj
                }, {})
                var x = Object.entries(results).map(([key, value]) => {
                    var data = {}
                    data[key] = value;
                    return data

                })

                console.log(x);


                setData(x)
            }
        })
    }



    useEffect(() => {

        let owner_id = localStorage.getItem('user_id')


        axios.get(`http://68.178.163.174:5010/breeding/sheds`).then(res => {
            setSheds(res.data)
        })
        axios.get('http://68.178.163.174:5010/breeding/doctors').then(res => {
            var results = res.data.map(item => {
                item.selected = false;
                return item;
            })

            setDoctors(results)
        })

        axios.get(`http://68.178.163.174:5010/farm/info?owner_id=${owner_id}`).then(res => {

            setFarm_id(res.data[0].id)
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


        for (var i in doctors) {


            if (doctors[i].selected == true) {


                let formData = new FormData()

                for (var j in imageFiles) {
                    console.log(imageFiles[j]);

                    formData.append('files', imageFiles[j])
                }
                formData.append('shed_id', shed_id)
                formData.append('seat_id', seat_id)
                formData.append('cow_id', cow_id)
                formData.append('disease_desc', diseases_description)
                formData.append('farm_id', farm_id)
                formData.append('doctor_id', doctors[i].doctor_id)
                axios.post('http://68.178.163.174:5010/breeding/treatment', formData).then(res => {
                    // console.log(res);
                    getData()

                    toast('Submitted')
                })
            }
        }


    }



    const deleteData = (e, cow_id, doctor_id) => {
        e.preventDefault()

        if (window.confirm('Do you want to delete this?')) {
            axios.delete(`http://68.178.163.174:5010/breeding/treatment/delete?cow_id=${cow_id}&doctor_id=${doctor_id}`)
                .then(res => {
                    toast('Deleted')
                    getData()

                })
        }
    }

    const checkVideo = (file) => {
        let isvideo = isVideo.includes(file)

        return isvideo
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
                                    <h1 className="m-2 display-4 text-success2"><span className="text-success2">Cow</span> Treatment</h1>
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


                    <label>Select Calf ID:</label>
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

                    <label>Disease Description:</label>
                    <input placeholder='Disease Description' value={diseases_description} onChange={e => setDiseases_description(e.target.value)} className='input' type='text'

                    />

                    <label>Images:</label>
                    <input onChange={e => setImageFiles(prev => [...prev, ...e.target.files])} className='input' multiple type='file'

                    />
                    <div className='d-flex flex-wrap'>
                        {
                            imageFiles.map(image => (

                                <img className='m-2' width={100} src={URL.createObjectURL(image)} />
                            ))
                        }
                    </div>

                    <div>

                    </div>

                    <button onClick={(e) => {
                        e.preventDefault()
                        setIsDoctorsOpen(true)
                    }} className='button'>Send to doctors</button>

                </form>


                <Modal
                    style={{
                        content: {
                            width: "50%",
                            height: "50%",
                            top: "20%",
                            left: "30%",
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
                    isOpen={isDoctorsOpen}
                    onRequestClose={() => {
                        setIsDoctorsOpen(false)
                    }}
                >
                    <div>
                        {
                            doctors.map(doctor => (
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p>{doctor.doctor_name}</p>
                                    <input className='mx-4' value={doctor.selected} onChange={e => {
                                        let y = doctors;
                                        let index = doctors.indexOf(doctor)
                                        y[index].selected = !doctor.selected
                                        setDoctors(y)
                                        console.log(doctors);

                                    }} type='checkbox' size={20} />
                                </div>
                            ))
                        }

                        <div className='details'>
                            <button onClick={addData} className='button'>Submit</button>

                        </div>


                    </div>
                </Modal>

                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Cow ID</th>
                            <th scope='col'> Doctor ID</th>
                            <th scope='col'>Disease Description</th>
                            <th scope='col'>Images</th>
                            <th scope='col'>Edit/Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(calf => (
                                <tr>
                                    <td>{calf[Object.keys(calf)[0]][0].cow_id}</td>
                                    <td>{Object.keys(calf)[0]}</td>
                                    <td>{calf[Object.keys(calf)[0]][0].disease_desc}</td>
                                    <td className='w-100'>
                                        <div className='d-flex flex-wrap'>
                                            {
                                                calf[Object.keys(calf)[0]][0].image_url != null && calf[Object.keys(calf)[0]][0].image_url != ''
                                                    ? calf[Object.keys(calf)[0]].map((el) => {
                                                        if (checkVideo(el.image_url) == false) {
                                                            return <img className='m-2' width={100} src={el.image_url} />

                                                        } else {
                                                            return <div></div>
                                                        }
                                                    }) : <div></div>
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <button onClick={() => {
                                            setEdit_cow_id(calf[Object.keys(calf)[0]][0].cow_id)
                                            setEdit_shed_id(calf[Object.keys(calf)[0]][0].shed_id)
                                            setEdit_seat_id(calf[Object.keys(calf)[0]][0].seat_id)
                                            setEdit_id(calf[Object.keys(calf)[0]][0].id)
                                            getSeats(calf[Object.keys(calf)[0]][0].shed_id)
                                            getCows(calf[Object.keys(calf)[0]][0].shed_id, calf[Object.keys(calf)[0]][0].seat_id)
                                            setTreatment_desc(calf[Object.keys(calf)[0]][0].treatment_desc)
                                            setCowImages(calf[Object.keys(calf)[0]])
                                            setIsOpen(true)
                                        }} className='btn btn-secondary mx-2'>
                                            <BsEye />
                                        </button>
                                        <button onClick={e => deleteData(e, calf[Object.keys(calf)[0]][0].calf_id, Object.keys(calf)[0])} className='btn btn-danger'>
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
                    <div className='d-flex flex-wrap'>
                        {
                            cowImages.length > 0 &&
                            cowImages.map((el) => {
                                if (checkVideo(el.image_url) == false) {
                                    return <img className='m-2' width={300} src={el.image_url} />

                                } else {
                                    return <div></div>
                                }
                            })
                        }
                    </div>

                    <div>
                        <h3>{treatment_desc}</h3>
                    </div>
                </Modal>

            </div>
        </Cowlayout>
    )
}

export default CowTreatment