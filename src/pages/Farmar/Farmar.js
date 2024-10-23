// import "./App.css";
// import { Card } from "./components/Card";

import { Card } from "../../Components/Card";
// import './Farmar/farmar1.css'
import calfImage from '../Home/images/FarmarDashboardImage/calf.webp';
import cowimage from '../Home/images/FarmarDashboardImage/cow.webp';
import beeffattening from '../Home/images/FarmarDashboardImage/beeffattening.jpg'
import dairy from '../Home/images/FarmarDashboardImage/dairy.jpg'
import vermicompost from '../Home/images/FarmarDashboardImage/vermicompost.jpg'
import report from '../Home/images/FarmarDashboardImage/report.png'
function Farmar() {
  return (
    
    <div className="app">

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
                                <h1 className="m-0 display-4 text-success2"><span className="text-secondary">Farmar</span>Dashboard</h1>
                            </a>
                        </div>
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
                        <a href="index.html" className="nav-item nav-link active">Home</a>
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

            <div style={{ padding: '20px' }}></div>

      <div className="row1">
        <Card
          imgSrc= {cowimage}
          imgAlt="Card Image 1"
          title="Cow"
          description="This Section provides Calf management related modules like birth info, expenses, treatment, seller, buyer and report realted information."
          buttonText="Click Here"
          link="cowdetails"
        />

       <Card
          imgSrc= {calfImage}
          imgAlt="Card Image 1"
          title="Calf"
          description="This Section provides Calf management related modules like birth info, expenses, treatment, seller, buyer and report realted information."
          buttonText="Click Here"
          link="calf/birth_info" 
        />

      <Card
          imgSrc= {beeffattening}
          imgAlt="Card Image 1"
          title="Beef Fattening"
          description="This Section provides Cow management related modules like cow purchase, delivary, expenses, treatment, healthcare and cow selling and feeding realted information"
          buttonText="Click Here"
          link="beeffatteninglayout"
        />

        
        <Card
          imgSrc= {dairy}
          imgAlt="Card Image 3"
          title="Milk"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Click Here"
          link="milk"
        />

      <Card
          imgSrc= {vermicompost}
          imgAlt="Card Image 1"
          title="VermiCompost"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Click Here"
          link="vermicompost"
        />

    <Card
          imgSrc= {report}
          imgAlt="Card Image 1"
          title="Report"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Click Here"
          link="report"
        />

      </div>
      </div>

  );
}

export default Farmar;