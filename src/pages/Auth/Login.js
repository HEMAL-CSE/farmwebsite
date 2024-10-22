import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
    const [mobileorusercode, setMobileorusercode] = useState('')
    const [password, setPassword] = useState('')
    const navigator = useNavigate()

    const goToLink = (user_type_id, user_id) => {
        switch (user_type_id){
            case 6:
                axios.get(`http://68.178.163.174:5010/farm/check_approved?owner_id=${user_id}`).then(
                    res => {
                        if(res.data.checked){
                            toast('Login Successful')
                            localStorage.setItem('farm_id', res.data.farm_id)
                            navigator('/farmar')
                        }else if(res.data.checked == false){
                            toast('Farm not approved')
                        }
                    }
                )
                break
        }
    }

    const login = e => {
        e.preventDefault()

        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if(mobileorusercode.match(emailRegex)){
            axios.post(`http://68.178.163.174:5010/users/login`, {
                mobile: mobileorusercode,
                password: password
            }).then(res => {
                localStorage.setItem('user_type_id', res.data.user_type_id)
                localStorage.setItem('user_id', res.data.user_id)
                goToLink(res.data.user_type_id, res.data.user_id)
            })
    
        }else{
            axios.post(`http://68.178.163.174:5010/users/login?email=0`, {
                mobile: mobileorusercode,
                password: password
            }).then(res => {
                localStorage.setItem('user_type_id', res.data.user_type_id)
                localStorage.setItem('user_id', res.data.user_id)
                goToLink(res.data.user_type_id, res.data.user_id)
            }) 
        }
        
        
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
                
                <h3 className='text-success'>Login</h3>
                
                <form onSubmit={login} className='d-flex flex-column align-items-center'>
                    <div className='mb-4'>
                        <label>Phone Number or User Code</label>
                        <input value={mobileorusercode} onChange={e => setMobileorusercode(e.target.value)} className='form-control' size={25} placeholder='Phone Number or User Code' />
                    </div>
                    <div>
                        <label>Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} className='form-control' size={25} placeholder='Password' />
                    </div>
                    <button type='submit' className='btn btn-success mt-2'>
                        Login
                    </button>
                    <p className='text-secondary'>If you don't have an account, <span onClick={() => {
                        navigator('/register')
                    }} role='button' className='text-primary'>Register here</span></p>
                </form>

            </div>
    </div>
  )
}

export default Login