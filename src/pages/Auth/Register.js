import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import divisionsdata from '../../assets/divisions.json'
import districtsdata from '../../assets/districts.json'
import upazilasdata from '../../assets/upazilas.json'
import axios from 'axios';
import { toast } from 'react-toastify';


const Register = () => {

    const navigator = useNavigate()

    const [user_type_id, setUser_type_id] = useState('')

    const user_types = [
        {
            id: 3,
            name: 'Doctor'
        },

        {
            id: 6,
            name: 'Farm Owner'
        },
    ];

    const [farm_name, setFarm_name] = useState('')

    const [divisions, setDivisions] = useState([])

    const [division, setDivision] = useState('')

    const [districts, setDistricts] = useState([])

    const [district, setDistrict] = useState('')

    const [upazilas, setUpazilas] = useState([])

    const [upazila, setUpazila] = useState('')
    const [village, setVillage] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [passward, setPassword] = useState('')

    const [types, setTypes] = useState([
        {
            id: 1,
            name: 'Vermi Compost',
            isChecked: false,
        },
        {
            id: 2,
            name: 'Breeding',
            isChecked: false,
        },
        {
            id: 3,
            name: 'Beef Fattening',
            isChecked: false,
        },
        {
            id: 4,
            name: 'Dairy',
            isChecked: false,
        },
        {
            id: 5,
            name: 'Goat',
            isChecked: false,
        },
        {
            id: 6,
            name: 'Duck',
            isChecked: false,
        },
        {
            id: 7,
            name: 'Fish',
            isChecked: false,
        },
        {
            id: 8,
            name: 'Chicken',
            isChecked: false,
        },
    ]);

    useEffect(() => {
        setDivisions(divisionsdata)
    }, [])

    const handleFarmSubmit = e => {
        e.preventDefault()

        axios.post(`http://68.178.163.174:5010/users/register`, {
            name: farm_name,
            mobile,
            email,
            user_type_id,
            passward
        }).then(res => {

            axios.post('http://68.178.163.174:5010/farm/add', {
                farm_name,
                division,
                district,
                upazila,
                village,
                owner_id: res.data.user_id,
                types: JSON.stringify({types: types})
            }).then(res => {
                toast('Registration Successful, You will be notified soon.')
                navigator('/login')
            })
        })

    }

    const handleDoctorSubmit = e => {
        e.preventDefault()
        axios.post('http://68.178.163.174:5010/users/register', {
            name,
            mobile,
            email,
            user_type_id,
            passward
        }).then(res => {
            axios.post('http://68.178.163.174:5010/doctors/add', {
                user_id: res.data.user_id,
                address
            }).then(res => {
                toast('Registration Successful, You will be notified soon.')
                navigator('/login')
            })
        })
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className="container-fluid px-5 d-none d-lg-block h-100">
                <div className="row gx-5 py-3 ">
                    <div className="col-lg-3">
                        {/* <div className="d-flex align-items-center justify-content-start">
                            <BsPhoneVibrate className='text-success2 fs-1 me-2' />
                            <h2 className="mb-0">+012 345 6789</h2>
                        </div> */}
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-center">
                            <a href="index.html" className="navbar-brand ms-lg-5">
                                <h1 className="m-0 display-4 text-success2"><span className="text-secondary">Farmar</span>Dashboard</h1>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-success2 w-100 navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
                <a href="index.html" className="navbar-brand d-flex d-lg-none">
                    <h1 className="m-0 display-4 text-secondary"><span className="text-white">Farm</span>Fresh</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <a href="product.html" className="nav-item nav-link">Product</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                <a href="detail.html" className="dropdown-item">Blog Detail</a>
                                <a href="feature.html" className="dropdown-item">Features</a>
                                <a href="team.html" className="dropdown-item">The Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>

            <div style={{ padding: '20px' }}></div>

            <div className='col-lg-4 py-5 mt-5 d-flex flex-column justify-content-center align-items-center border border-2 '>

                <h3 className='text-success'>Sign Up</h3>

                <form onSubmit={user_type_id == 6 ? handleFarmSubmit: user_type_id == 3 ? handleDoctorSubmit : () => {}} className='d-flex flex-column align-items-center'>
                    <div className='mb-4 w-75'>
                        <label>Select User Type</label>
                        <select className='form-select' value={user_type_id} onChange={e => setUser_type_id(e.target.value)}>
                            <option>Select</option>
                            {user_types.map(doc => (
                                <option value={doc.id}>{doc.name}</option>
                            ))}
                        </select>
                    </div>
                    {user_type_id == 6 && (
                        <>
                            <div className='mb-4'>
                                <label>Farm Name</label>
                                <input value={farm_name} onChange={e => setFarm_name(e.target.value)} className='form-control' size={22} placeholder='Farm Name' />
                            </div>
                            <div className='mb-4 w-75'>
                                <label>Select Division</label>
                                <select className='form-select' value={division} onChange={e => {
                                    setDivision(e.target.value)
                                    let districtsx = districtsdata.filter(x => x.division_id == e.target.value)
                                    console.log(districtsx);

                                    setDistricts(districtsx)
                                }}>
                                    <option>Select</option>
                                    {divisions.map(doc => (
                                        <option value={doc.id}>{doc.bn_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-4 w-75'>
                                <label>Select District</label>
                                <select className='form-select' value={district} onChange={e => {
                                    setDistrict(e.target.value)
                                    let upazialasx = upazilasdata.filter(x => x.district_id == e.target.value)
                                    setUpazilas(upazialasx)
                                }}>
                                    <option>Select</option>
                                    {districts.map(doc => (
                                        <option value={doc.id}>{doc.bn_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-4 w-75'>
                                <label>Select Upazila</label>
                                <select className='form-select' value={upazila} onChange={e => {
                                    setUpazila(e.target.value)

                                }}>
                                    <option>Select</option>
                                    {upazilas.map(doc => (
                                        <option value={doc.id}>{doc.bn_name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-4'>
                                <label>Village</label>
                                <input value={village} onChange={e => setVillage(e.target.value)} className='form-control' size={22} placeholder='Village' />
                            </div>
                            <div className='mb-4'>
                                <label>Mobile</label>
                                <input value={mobile} onChange={e => setMobile(e.target.value)} className='form-control' size={22} placeholder='Mobile Number' />
                            </div>
                            <div className='mb-4'>
                                <label>Email</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} className='form-control' size={22} placeholder='Email' />
                            </div>
                            <div className='mb-4'>
                                <label>Password</label>
                                <input value={passward} onChange={e => setPassword(e.target.value)} className='form-control' size={22} placeholder='Password' />
                            </div>
                            <div>
                                {
                                    types.map(x => (
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <p>{x.name}</p>
                                            <input className='mx-4' value={x.isChecked} onChange={e => {
                                                let y = types;
                                                let index = types.indexOf(x)
                                                y[index].isChecked = !x.isChecked
                                                setTypes(y)
                                                console.log(types);
                                                
                                            }}  type='checkbox' size={20} />
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    )}

                    {user_type_id == 3 && (
                        <>
                           <div className='mb-4'>
                                <label>Name</label>
                                <input value={name} onChange={e => setName(e.target.value)} className='form-control' size={22} placeholder='Name' />
                            </div>
                            <div className='mb-4'>
                                <label>Address</label>
                                <input value={address} onChange={e => setAddress(e.target.value)} className='form-control' size={22} placeholder='Address' />
                            </div>
                            <div className='mb-4'>
                                <label>Mobile</label>
                                <input value={mobile} onChange={e => setMobile(e.target.value)} className='form-control' size={22} placeholder='Mobile Number' />
                            </div>
                            <div className='mb-4'>
                                <label>Email</label>
                                <input value={email} onChange={e => setEmail(e.target.value)} className='form-control' size={22} placeholder='Email' />
                            </div>
                            <div className='mb-4'>
                                <label>Password</label>
                                <input value={passward} onChange={e => setPassword(e.target.value)} className='form-control' size={22} placeholder='Password' />
                            </div>
                            <div></div> 
                        </>
                    )}

                    <button type='submit' className='btn btn-success mt-2'>
                        Sign Up
                    </button>
                    <p className='text-secondary'>If you already have an account, <span onClick={() => {
                        navigator('/login')
                    }} role='button' className='text-primary'>Login here</span></p>
                </form>

            </div>
        </div>
    )
}

export default Register