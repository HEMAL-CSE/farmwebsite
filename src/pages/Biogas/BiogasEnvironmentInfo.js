import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BioGasLayout from './BiogasLayout'
import { toast, ToastContainer } from 'react-toastify'
import Modal from 'react-modal'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

const BiogasEnvironmentInfo = () => {
    const [pressure, setPressure] = useState('')
    const [temperature, setTemperature] = useState('')
    const [combustible_material, setCombustible_material] = useState('')
  
  
  
    const [edit_id, setEdit_id] = useState('')
    const [edit_pressure, setEdit_pressure] = useState('')
    const [edit_temperature, setEdit_temperature] = useState('')
    const [edit_combustible_material, setEdit_combustible_material] = useState('')
  
    const [isOpen, setIsOpen] = useState(false)
  
  
    const [data, setData] = useState([])
  
    const getData = () => {
      axios.get('http://68.178.163.174:5008/biogas/environment').then(res => {
        setData(res.data)
      })
    }
  
    useEffect(() => {
  
      getData()
  
    }, [])
  
  
    const addData = (e) => {
      e.preventDefault()
  
      axios.post('http://68.178.163.174:5008/biogas/environment/add', {
        pressure,
        temperature,
        combustible_material
      }).then(res => {
        toast('Submitted')
        getData()
      })
    }
  
    const editData = (e, id) => {
      e.preventDefault()
  
      axios.put(`http://68.178.163.174:5008/biogas/environment/edit?id=${id}`, {
        pressure: edit_pressure,
        temperature: edit_temperature,
        combustible_material: edit_combustible_material
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
        axios.delete(`http://68.178.163.174:5008/biogas/environment/delete?id=${id}`)
          .then(res => {
            toast('Deleted')
            getData()
  
          })
      }
  
  
  
    }
  
    return (
        <div className='details'>
          <ToastContainer />
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
                    <h1 className="m-2 display-4 text-success2"><span className="text-success2">Biogas</span> Environmental Info</h1>
                  </a>
                </div>
              </div>
  
            </div>
          </div>
  
          <form>
  
  
  
  
  
  
  
            <label>Pressure:</label>
            <input value={pressure} onChange={e => setPressure(e.target.value)} className='input' type='text'
  
            />
            <label>Temperature:</label>
            <input value={temperature} onChange={e => setTemperature(e.target.value)} className='input' type='text'
  
            />
            <label>Combustible Material:</label>
            <input value={combustible_material} onChange={e => setCombustible_material(e.target.value)} className='input' type='text'
  
            />
  
  
            <button onClick={addData} className='button'>Submit</button>
  
          </form>
  
  
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>Pressure</th>
                <th scope='col'>Temperature</th>
                <th scope='col'>Combustible</th>
                <th scope='col'>Edit/Delete</th>
  
              </tr>
            </thead>
            <tbody>
              {
                data.map(calf => (
                  <tr>
                    <td>{calf.pressure}</td>
                    <td>{calf.temperature}</td>
                    <td>{calf.combustible_material}</td>
  
                    <td>
                      <button onClick={() => {
  
  
                        setEdit_id(calf.id)
                        setEdit_pressure(calf.pressure)
                        setEdit_temperature(calf.temperature)
                        setEdit_combustible_material(calf.combustible_material)
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
  
  
  
  
  
  
            <label>Pressure:</label>
            <input value={edit_pressure} onChange={e => setEdit_pressure(e.target.value)} className='input' type='text'
  
            />
            <label>Temperature:</label>
            <input value={edit_temperature} onChange={e => setEdit_temperature(e.target.value)} className='input' type='text'
  
            />
            <label>Combustible Material:</label>
            <input value={edit_combustible_material} onChange={e => setEdit_combustible_material(e.target.value)} className='input' type='text'
  
            />
  
  
  
              <button onClick={e => editData(e, edit_id)} className='button'>Submit</button>
  
            </form>
          </Modal>
  
        </div>
    )
}

export default BiogasEnvironmentInfo