import React from 'react'
import about1 from './images/about1.jpg'
// import about from './images/'
import bg_product_1 from './images/bg-product-1.png'
import bg_product_2 from './images/bg-product-2.png'
import blog_2 from './images/blog-2.jpg'
import blog_3 from './images/blog-3.jpg'
import carousel_1 from './images/carousel-1.jpg'
import carousel_2 from './images/carousel-2.jpg'
import feature from './images/feature.png'
import footer from './images/footer.png'
import fruit from './images/fruit.png'
import product_1 from './images/product-1.png'
import product_2 from './images/product-2.png'
import team_1 from './images/team-1.jpg'
import team_2 from './images/team-2.jpg'
import team_3 from './images/team-3.jpg'
import testimonial from './images/testimonial.jpg'
import vegetable from './images/vegetable.png'
import { BsBucket, BsGeoAlt, BsPhoneVibrate, BsTelephone, BsTwitter } from 'react-icons/bs';
import VisibilitySensor from 'react-visibility-sensor';


import './CSS/style.css'
import { FaAward, FaCheck, FaFacebook, FaLinkedin, FaMapMarked, FaMapMarker, FaMapMarkerAlt, FaMugHot, FaPhoneAlt, FaSeedling, FaStar, FaTractor, FaTwitter, FaUsers, FaYoutube } from 'react-icons/fa'
import { BiArrowFromRight, BiArrowToRight, BiEnvelope, BiEnvelopeOpen, BiLeaf } from 'react-icons/bi'
import { FaA, FaCow, FaUserDoctor } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import CountUp from 'react-countup'
import { LuBeef, LuMilk } from 'react-icons/lu'
import { GiChicken, GiFarmer, GiGoat, GiRoastChicken, GiRooster, GiSteak } from 'react-icons/gi'
import { TbMilk } from 'react-icons/tb'
import { PiPhone } from 'react-icons/pi'

const Home = () => {

    const navigator = useNavigate()

    return (
        <div>
            <div className="container-fluid px-5 d-none d-lg-block">
                <div className="row gx-5 py-3 align-items-center">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center justify-content-start">
                            <BsPhoneVibrate className='text-success2 fs-1 me-2' />
                            <h2 className="mb-0">+01710-951097 </h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex align-items-center justify-content-center">
                            <a href="index.html" className="navbar-brand ms-lg-5">
                                <h3 className="m-0 display-5 text-success2"><span className="text-secondary">Tania VermiCompost</span> <br /> Organic
                                    Fertilizer Center.</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2">

                        <div className="d-flex align-items-center justify-content-end">
                            <a className="btn btn-success2 btn-square rounded-circle me-2" href="https://freewebsitecode.com/"><FaTwitter /></a>
                            <a className="btn btn-success2 btn-square rounded-circle me-2" href="https://facebook.com/freewebsitecode/"><FaFacebook /></a>
                            <a className="btn btn-success2 btn-square rounded-circle me-2" href="https://freewebsitecode.com/"><FaLinkedin /></a>
                            <a className="btn btn-success2 btn-square rounded-circle" href="https://youtube.com/freewebsitecode/"><FaYoutube /></a>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand-lg bg-success2 navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
                <a href="index.html" className="navbar-brand d-flex d-lg-none">
                    <h1 className="m-0 display-4 text-secondary"><span className="text-white">Farm</span>Fresh</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <a href="#" className="nav-item nav-link active">Home</a>
                        <a href="#about" className="nav-item nav-link">About</a>
                        <a href="#" className="nav-item nav-link">Service</a>
                        <a href="#" className="nav-item nav-link">Product</a>
                        {/* <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                                <a href="detail.html" className="dropdown-item">Blog Detail</a>
                                <a href="feature.html" className="dropdown-item">Features</a>
                                <a href="team.html" className="dropdown-item">The Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div> */}
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div onClick={() => {
                        navigator('/login')
                    }} className='mx-3'>
                        <h4 className='bg-login'>Login</h4>
                    </div>
                    <div onClick={() => {
                        navigator('/register')
                    }}>
                        <h4 className='bg-register'>Sign Up</h4>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}


            {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={carousel_1} alt="Image" />
                            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                                <div className="text-start p-5" style={{ maxWidth: '900px' }}>
                                    <h3 className="text-white">Dairy Farm</h3>
                                    <h1 style={{ fontSize: '72px' }} className="display-1 text-white mb-md-4">Smart System For <br />Farm Management</h1>
                                    <a href="" className="btn btn-success2 text-white py-md-3 px-md-5 me-3">Explore</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5">Contact</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={carousel_2} alt="Image" />
                            <div className="carousel-caption top-0 bottom-0 start-0 end-0 d-flex flex-column align-items-center justify-content-center">
                                <div className="text-start p-5" style={{ maxWidth: '900px' }}>
                                    <h3 className="text-white">Dairy Farm</h3>
                                    <h1 className="display-1 text-white mb-md-4">Organic Fruits For Better Health</h1>
                                    <a href="" className="btn btn-success2  py-md-3 px-md-5 me-3">Explore</a>
                                    <a href="" className="btn btn-secondary py-md-3 px-md-5">Contact</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}


            {/* <!-- Banner Start --> */}
            <div className="container-fluid banner mb-5">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-md-6">
                            <div className="bg-success2 bg-vegetable d-flex flex-column justify-content-center p-5" style={{ height: '300px' }}>
                                <h3 className="text-white mb-3">Organic VermiCompost</h3>
                                <p className="text-white"> Vermicompost is a high-quality organic fertilizer produced by earthworms feeding on organic waste. 
                                    It's a nutrient-rich soil amendment that improves soil structure, water retention, and overall plant health. </p>
                                <a className="text-white fw-bold" href="">Read More<BiArrowToRight className='ms-2' /></a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-secondary bg-fruit d-flex flex-column justify-content-center p-5" style={{ height: '300px' }}>
                                <h3 className="text-white mb-3">Healthy Plants</h3>
                                <p className="text-white">Nurturing Healthy Plants with Organic Vermicompost
                                Vermicompost, a natural, nutrient-rich fertilizer, is a game-changer for gardeners and plant enthusiasts. 
                                Produced by earthworms feeding on organic waste, it offers a myriad of benefits for your plants.</p>
                                <a className="text-white fw-bold" href="">Read More<BiArrowFromRight className='ms-2' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner Start --> */}


            {/* <!-- About Start --> */}
            <div id='about' className="container-fluid about p-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="d-flex h-100  border-success2 pt-0">
                                <img className="img-fluid mt-auto mx-auto" src={about1} />
                            </div>
                        </div>
                        <div className="col-lg-6 pb-5">
                            <div className="mb-3 pb-2">
                                <h3 className="text-success2 text-uppercase">About Us</h3>
                                <h3 className="display-5">We Produce Organic Vermicompost.</h3>
                            </div>
                            <p className="mb-4">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet magna</p>
                            <div className="row gx-5 gy-4">
                                <div className="col-sm-6">
                                    {/* <i className="fa fa-seedling display-1 text-secondary"></i> */}
                                    <svg width="0" height="0">
                                    <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="green" offset="10%" />
                                        <stop stopColor="yellow" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <FaSeedling size={60} className='mb-4 ' style={{ fill: 'url(#green-gradient)' }} />
                                    <h4>100% Organic</h4>
                                    <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                                </div>
                                <div className="col-sm-6">
                                    {/* <i className="fa fa-award display-1 text-secondary"></i> */}
                                    <svg width="0" height="0">
                                    <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="green" offset="10%" />
                                        <stop stopColor="yellow" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <FaAward size={60} className='mb-4 ' style={{ fill: 'url(#green-gradient)' }} />
                                    <h4>Award Winning</h4>
                                    <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Facts Start --> */}
            <div className="container-fluid bg-success2 facts py-5 mb-5">
                <div className="container py-5">
                    <div className="row gx-5 gy-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-yellow rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    {/* <i className="fa fa-star fs-4 text-white"></i> */}
                                    <FaStar className='fs-4 text-white' />
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Our Experience</h5>
                                    <CountUp end={12345} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} className='display-5 text-white mb-0' />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-yellow rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    {/* <i className="fa fa-users fs-4 text-white"></i> */}
                                    <FaUsers className='fs-4 text-white' />
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Farm Specialist</h5>
                                    {/* <h1 className="display-5 text-white mb-0" data-toggle="counter-up">12345</h1> */}
                                    <CountUp end={12345} redraw={false}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} className='display-5 text-white mb-0' />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-yellow rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    {/* <i className="fa fa-check fs-4 text-white"></i> */}
                                    <FaCheck className='fs-4 text-white' />
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Complete Project</h5>
                                    <CountUp end={12345} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} className='display-5 text-white mb-0' />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex">
                                <div className="bg-yellow rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    {/* <i className="fa fa-mug-hot fs-4 text-white"></i> */}
                                    <FaMugHot className='fs-4 text-white' />
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white">Happy Clients</h5>
                                    <CountUp end={12345} redraw={true}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} className='display-5 text-white mb-0' />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Facts End --> */}


            {/* <!-- Services Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">

                        <div className="col-lg-4 col-md-6">
                            <div className="mb-3">
                                <h1 className=" text-success2 text-uppercase fw-bold">Services</h1>
                               
                            </div>
                            <p className="mb-4">Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et tempor sit.</p>
                            <a href="" className="btn btn-success2 py-md-3 px-md-5 text-white">Contact Us</a>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item text-center p-5">
                                {/* <i className="fa-solid fa-cow"></i> */}
                                <svg width="0" height="0">
                                    <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="green" offset="10%" />
                                        <stop stopColor="yellow" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <FaSeedling size={60} className='mb-4 ' style={{ fill: 'url(#green-gradient)' }} />
                                <h4>VermiCompost</h4>
                                <p className="mb-0 text-justify" >This Section provides VermiCompost management related modules like Earthworm purchase, expenses, production, vermicompost selling and feeding realted information.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item text-center p-5">
                                {/* <i className="fa-solid fa-cow"></i> */}
                                <svg width="0" height="0">
                                    <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="green" offset="10%" />
                                        <stop stopColor="yellow" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <FaCow size={60} className='mb-4 ' style={{ fill: 'url(#green-gradient)' }} />
                                <h4>Breeding</h4>
                                <p className="mb-0">This Section provides Cow management related modules like cow purchase, delivary, expenses, treatment, healthcare and cow selling and feeding realted information</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item text-center p-5">
                                {/* <i className="fa-solid fa-cow"></i> */}
                                <svg width="0" height="0">
                                    <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="green" offset="10%" />
                                        <stop stopColor="yellow" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <GiSteak size={60} className='mb-4 ' style={{ fill: 'url(#green-gradient)' }} />
                                <h4>Beef Fattening</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item text-center p-5">
                                {/* <i className="fa-solid fa-cow mb-3"></i> */}
                                <svg width="0" height="0">
                                    <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="green" offset="10%" />
                                        <stop stopColor="yellow" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <BsBucket size={60} className='mb-4 ' style={{ fill: 'url(#green-gradient)' }} />
                                <h4>Dairy</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service-item text-center p-5">
                                {/* <i className="fa-solid fa-cow mb-3"></i> */}
                                <svg width="0" height="0">
                                    <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="green" offset="10%" />
                                        <stop stopColor="yellow" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <GiGoat size={60} className='mb-4 ' style={{ fill: 'url(#green-gradient)' }} />
                                <h4>Goat</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item text-center p-5">
                                {/* <i className="fa-solid fa-cow mb-3"></i> */}
                                <svg width="0" height="0">
                                    <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="green" offset="10%" />
                                        <stop stopColor="yellow" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <GiRooster size={60} className='mb-4 ' style={{ fill: 'url(#green-gradient)' }} />
                                <h4>Chicken</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item text-center p-5">
                                {/* <i className="fa-solid fa-cow mb-3"></i> */}
                                <svg width="0" height="0">
                                    <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="green" offset="10%" />
                                        <stop stopColor="yellow" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <GiFarmer size={60} className='mb-4 ' style={{ fill: 'url(#green-gradient)' }} />
                                <h4>Farming Plans</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="service-item  text-center p-5">
                                {/* <i className="fa-solid fa-cow mb-3"></i> */}
                                <svg width="0" height="0">
                                    <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                        <stop stopColor="green" offset="10%" />
                                        <stop stopColor="yellow" offset="100%" />
                                    </linearGradient>
                                </svg>
                                <FaUserDoctor size={60} className='mb-4 ' style={{ fill: 'url(#green-gradient)' }} />
                                <h4>Doctor</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- Services End --> */}


            {/* <!-- Features Start --> */}
            <div className="container-fluid bg-success2 feature py-5 pb-lg-0 my-5">
                <div className="container py-2 pb-lg-0">
                    <div className="mx-auto text-center mb-3 pb-2" style={{ maxWidth: '500px' }}>
                        <h3 className="text-uppercase text-white mb-3 fw-bold">Features</h3>
                        <h2 className="display-5 text-white">Why Choose Us!!!</h2>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3">
                            <div className="text-white mb-5">
                                <div className="bg-yellow rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    {/* <i className="fa fa-seedling fs-4 text-white"></i> */}
                                    <FaSeedling className='text-white fs-4' />
                                </div>
                                <h4 className="text-white">100% Organic</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                            </div>
                            <div className="text-white">
                                <div className="bg-yellow rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    {/* <i className="fa fa-award fs-4 text-white"></i> */}
                                    <FaAward className='fs-4 text-white' />
                                </div>
                                <h4 className="text-white">Award Winning</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="d-block bg-white h-100 text-center p-5 pb-lg-0">
                                <p>At et justo elitr amet sea at. Magna et sit vero at ipsum sit et dolores rebum. Magna sea eos sit dolor, ipsum amet no tempor ipsum eirmod lorem eirmod diam tempor dolor eos diam et et diam dolor ea. Clita est rebum amet dolore sit. Dolor stet dolor duo clita, vero dolor ipsum amet dolore magna lorem erat stet sed vero dolor</p>
                                <img className="img-fluid" src={feature} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="text-white mb-5">
                                <div className="bg-yellow rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    {/* <i className="fa fa-tractor fs-4 text-white"></i> */}
                                    <FaTractor className='fs-4 text-white' />
                                </div>
                                <h4 className="text-white">Modern Farming</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                            </div>
                            <div className="text-white">
                                <div className="bg-yellow rounded-pill d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                    {/* <i className="fa fa-phone-alt fs-4 text-white"></i> */}
                                    <FaPhoneAlt className='fs-4 text-white' />
                                </div>
                                <h4 className="text-white">24/7 Support</h4>
                                <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Features Start --> */}


            {/* <!-- Testimonial Start --> */}
            {/* <div className="container-fluid bg-testimonial py-5 my-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="owl-carousel testimonial-carousel p-5">
                                <div className="testimonial-item text-center text-white">
                                    <img className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4" src="img/testimonial-2.jpg" alt="" />
                                    <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                                    <hr className="mx-auto w-25" />
                                    <h4 className="text-white mb-0">Client Name</h4>
                                </div>
                                <div className="testimonial-item text-center text-white">
                                    <img className="img-fluid mx-auto p-2 border border-5 border-secondary rounded-circle mb-4" src="img/testimonial-2.jpg" alt="" />
                                    <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                                    <hr className="mx-auto w-25" />
                                    <h4 className="text-white mb-0">Client Name</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Testimonial End --> */}


            {/* <!-- Contact Start --> */}
            <section class="contact">
    <div class="content">
        <h2>Contact Us</h2>
    </div>

    <div class="container1">
        <div class="contactInfo">
            <div class="box">
                <div class="icon">
                    <FaMapMarkerAlt />
                </div>
                    <div class="text">
                        <h3>Location</h3>
                        <p>Khaja Super Market, 2nd to 7th Floor, <br/> Kallyanpur Bus Stop, Mirpur Road, Dhaka-1207.</p>
                    </div>
                </div>

                <div class="box">
                    <div class="icon"> 
                        <BiEnvelope />
                    </div>
                        <div class="text">
                            <h3>Email</h3>
                            <p>info@e-laeltd.com</p>
                        </div>
                </div>

                <div class="box">
                    <div class="icon"> <BsTelephone /></div>
                    <div class="text">
                        <h3>Telephone</h3>
                        <p>+88 02-58054685</p>
                    </div>
                </div>
                 
                <div class="box">
                    <div class="icon"><PiPhone /></div> 
                        <div class="text">
                            <h3>Phone</h3>
                            <p>+88 01550-666900</p>
                        </div>
                </div>
            </div>
                
                {/* <!-- Contact form --> */}
                <div class="contactForm">
                    <form>
                        <h2>Send Message</h2>
                        <div class="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Full Name</span>
                        </div>

                        <div class="inputBox">
                            <input type="email" name="" required="required" />
                            <span>Email</span>
                        </div>
                        
                        <div class="inputBox">
                            <textarea required="required"></textarea>
                            <span>Type your Message..</span>
                        </div>

                        <div class="inputBox">
                            <input type="submit" name="" value="Send" />
                        </div>
                    </form>
                </div>

            
        </div>
</section>
            {/* <!-- Contact End --> */}


            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-footer bg-success2 text-white mt-5">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-lg-8 col-md-6">
                            <div className="row gx-5">
                                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                                    <h4 className="text-white mb-4">Get In Touch</h4>
                                    <div className="d-flex mb-2">
                                        {/* <i className="bi bi-geo-alt text-white me-2"></i> */}
                                        <BsGeoAlt className='text-white me-2' />
                                        <p className="text-white mb-0">Khaja IT Park, 2nd to 7th Floor, Kallyanpur Bus Stop, Mirpur Road, Dhaka-1207.</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        {/* <i className="bi bi-envelope-open text-white me-2"></i> */}
                                        <BiEnvelopeOpen className='text-white me-2' />
                                        <p className="text-white mb-0">promiseinfotech2@gmail.com</p>
                                    </div>
                                    <div className="d-flex mb-2">
                                        {/* <i className="bi bi-telephone text-white me-2"></i> */}
                                        <BsTelephone className='text-white me-2' />
                                        <p className="text-white mb-0">+880 1958-063310</p>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <a className="btn btn-secondary btn-square rounded-circle me-2" href="https://freewebsitecode.com/"><FaTwitter className='text-white' /></a>
                                        <a className="btn btn-secondary btn-square rounded-circle me-2" href="https://facebook.com/freewebsitecode/"><FaFacebook className='text-white' /></a>
                                        <a className="btn btn-secondary btn-square rounded-circle me-2" href="https://freewebsitecode.com/"><FaLinkedin className='text-white' /></a>
                                        <a className="btn btn-secondary btn-square rounded-circle" href="https://youtube.com/freewebsitecode/"><FaYoutube className='text-white'/></a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 className="text-white mb-4">Quick Links</h4>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white mb-2" href="#"><BiArrowFromRight className='text-white me-2' />Home</a>
                                        <a className="text-white mb-2" href="#"><BiArrowFromRight className='text-white me-2' />About Us</a>
                                        <a className="text-white mb-2" href="#"><BiArrowFromRight className='text-white me-2' />Our Services</a>
                                        <a className="text-white mb-2" href="#"><BiArrowFromRight className='text-white me-2' />Meet The Team</a>
                                        <a className="text-white mb-2" href="#"><BiArrowFromRight className='text-white me-2' />Latest Blog</a>
                                        <a className="text-white" href="#"><BiArrowFromRight className='text-white me-2' />Contact Us</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <h4 className="text-white mb-4">Popular Links</h4>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white mb-2" href="#"><BiArrowFromRight className='text-white me-2' />Home</a>
                                        <a className="text-white mb-2" href="#"><BiArrowFromRight className='text-white me-2' />About Us</a>
                                        <a className="text-white mb-2" href="#"><BiArrowFromRight className='text-white me-2' />Our Services</a>
                                        <a className="text-white mb-2" href="#"><BiArrowFromRight className='text-white me-2' />Meet The Team</a>
                                        <a className="text-white mb-2" href="#"><BiArrowFromRight className='text-white me-2' />Latest Blog</a>
                                        <a className="text-white" href="#"><BiArrowFromRight className='text-white me-2' />Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-n5">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-secondary p-5">
                                <h4 className="text-white">Newsletter</h4>
                                <h6 className="text-white">Subscribe Our Newsletter</h6>
                                <p>Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                                        <button className="btn btn-success2">Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white py-4">
                <div className="container text-center">
                    <p className="mb-0">&copy; <a className="text-secondary fw-bold" href="#"> Copyright Promise IT Solution</a>. All Rights Reserved.</p>
                </div>
            </div>

        </div>
    )
}

export default Home