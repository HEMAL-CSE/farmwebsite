import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsEye } from 'react-icons/bs'
import ReactModal from 'react-modal'
import { toast, ToastContainer } from 'react-toastify'


const DoctorCalf = () => {
    const [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [cowImages, setCowImages] = useState([])
    const [treatment, setTreatment] = useState('')

    const isVideo = ['.mpg', '.mp2', '.mpeg', '.mpe', '.mpv', '.mp4']

    useEffect(() => {
        let user_id = localStorage.getItem('user_id')

        axios.get(`http://68.178.163.174:5010/doctors/calf/doctor?user_id=${user_id}`).then(res => {
            // console.log(res.data);

            if (res.data.length > 0) {
                let results = res.data.reduce((obj, item) => {
                    let id = item.calf_id
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
    }, [])

    const checkVideo = (file) => {
        let isvideo = isVideo.includes(file)

        return isvideo
    }

    const handleSubmit = e => {
        e.preventDefault()

        let user_id = localStorage.getItem('user_id')

        axios.put(`http://68.178.163.174:5010/doctors/calf/treatment?doctor_id=${user_id}`, {
            treatment,
        }).then(res => {
            toast('Submitted')
            setIsOpen(false)
        })
    }


    return (
        <div className='container d-flex flex-column align-items-center'>
            <ToastContainer />
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
                                <h1 className="m-2 display-4 text-success2"><span className="text-success2">Doctor</span></h1>
                            </a>
                        </div>
                    </div>

                </div>
                <nav className="navbar navbar-expand-lg bg-success2 navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
                    <a href="index.html" className="navbar-brand d-flex d-lg-none">
                        <h1 className="m-0 display-4 text-secondary"><span className="text-white">Farm</span>Fresh</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto py-0">
                            <a href="/doctor" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Service</a>
                            <a href="product.html" className="nav-item nav-link">Product</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a href="feature.html" className="dropdown-item">Features</a>
                                    <a href="team.html" className="dropdown-item">The Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>


            <table className='table w-75'>
                <thead>
                    <tr>
                        <th scope='col'> Calf ID</th>
                        <th scope='col'>Disease Description</th>
                        <th scope='col'>Images</th>
                        <th scope='col'>View</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(calf => (
                            <tr>
                                <td>{Object.keys(calf)[0]}</td>
                                <td>{calf[Object.keys(calf)[0]][0].disease_desc}</td>
                                <td className=''>
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
                                        // setEdit_cow_id(calf[Object.keys(calf)[0]][0].cow_id)
                                        // setEdit_shed_id(calf[Object.keys(calf)[0]][0].shed_id)
                                        // setEdit_seat_id(calf[Object.keys(calf)[0]][0].seat_id)
                                        // setEdit_id(calf[Object.keys(calf)[0]][0].id)
                                        // getSeats(calf[Object.keys(calf)[0]][0].shed_id)
                                        // getCows(calf[Object.keys(calf)[0]][0].shed_id, calf[Object.keys(calf)[0]][0].seat_id)
                                        treatment == '' && setTreatment(calf[Object.keys(calf)[0]][0].treatment_desc)
                                        setCowImages(calf[Object.keys(calf)[0]])
                                        setIsOpen(true)
                                    }} className='btn btn-secondary mx-2'>
                                        <BsEye />
                                    </button>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <ReactModal
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

                <form onSubmit={handleSubmit} className=''>
                    <label className='fs-1 fw-bold d-block'>Treatment</label>
                    <textarea className='input w-50 p-2' placeholder='Treatment' value={treatment} onChange={e => setTreatment(e.target.value)} />
                    <button type='submit' className='btn btn-success mt-2 d-block'>Submit</button>
                </form>
            </ReactModal>
        </div>
    )
}

export default DoctorCalf