import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import BioGasLayout from './BiogasLayout'
import { toast } from 'react-toastify'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

const BiogasSelling = () => {
    const [customer_id, setCustomer_id] = useState('')
    const [income, setIncome] = useState('')
  
  
    
      const [edit_customer_id, setEdit_customer_id] = useState('')
      const [edit_income, setEdit_income] = useState('')
      const [edit_id, setEdit_id] = useState('')
  
      const [isOpen, setIsOpen] = useState(false)
    
  
      const [customers, setCustomers] = useState([])
    
      const [data, setData] = useState([])
    
      const getData = () => {
        axios.get('http://68.178.163.174:5008/biogas/income').then(res => {
          setData(res.data)
        })
      }
    
      useEffect(() => {
    
        getData()
        getCustomers()
        
      }, [])
  
      const getCustomers = () => {
        axios.get(`http://68.178.163.174:5008/biogas/customer`)
        .then(res => {
          setCustomers(res.data)
        })
      }
  
    
      const addData = (e) => {
        e.preventDefault()
    
        axios.post('http://68.178.163.174:5008/biogas/income/add', {
          customer_id,
          income
        }).then(res => {
          toast('Submitted')
          getData()
        })
        
      }
    
      const editData = (e, id) => {
        e.preventDefault()
    
        axios.put(`http://68.178.163.174:5008/biogas/income/edit?id=${id}`, {
          customer_id: edit_customer_id,
          income: edit_income
        })
          .then(res => {
              getData()
  
            toast('Updated')
            setIsOpen(false)
          })
    
      }
    
      const deleteData = (e,id) => {
        e.preventDefault()
    
        if(window.confirm('Do you want to delete this?')){
          axios.delete(`http://68.178.163.174:5008/biogas/income/delete?id=${id}`)
          .then(res => {
            toast('Deleted')
            getData()
  
          })
        }
    
    
        
      }
    
      return (
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
                      <h1 className="m-2 display-4 text-success2"><span className="text-success2">Biogas</span> Income</h1>
                    </a>
                  </div>
                </div>
    
              </div>
            </div>
    
            <form>

  
              <label>Select Customer ID:</label>
              <select value={customer_id} onChange={e => {
                setCustomer_id(e.target.value)
               
              }} className='select' >
                <option >Select</option>
                {
                  customers.map(shed => (
    
                    <option value={shed.id}>{shed.name}</option>
                  ))
                }
              </select>
    
              
  
  
          
    
              <label>Income:</label>
              <input value={income} onChange={e => setIncome(e.target.value)} className='input' type='text'
    
              />
    
    
    
              <button onClick={addData} className='button'>Submit</button>
    
            </form>
    
    
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col'>Customer ID</th>
                  <th scope='col'> Income</th>
                  <th scope='col'>Edit/Delete</th>
    
                </tr>
              </thead>
              <tbody>
                {
                  data.map(calf => (
                    <tr>
                      <td>{calf.customer_id}</td>
                      <td>{calf.income}</td>
              
                      <td>
                        <button onClick={() => {
               
                          setEdit_id(calf.id)
                          setEdit_customer_id(calf.labour_id)
                          setEdit_income(calf.payment)
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
                overlay: {zIndex: 10000}
              }}
              isOpen={isOpen}
              onRequestClose={() => {
                setIsOpen(false)
              }}
            >
              <form className='details'>
   
  
              <label>Select Customer ID:</label>
              <select value={edit_customer_id} onChange={e => {
                setEdit_customer_id(e.target.value)
              }} className='select' >
                <option >Select</option>
                {
                  customers.map(shed => (
    
                    <option value={shed.id}>{shed.name}</option>
                  ))
                }
              </select>
    
              
  
  
          
    
              <label>Income:</label>
              <input value={edit_income} onChange={e => setEdit_income(e.target.value)} className='input' type='text'
    
              />
    
    
    
                <button onClick={e => editData(e, edit_id)} className='button'>Submit</button>
    
              </form>
            </Modal>
    
          </div>
      )
}

export default BiogasSelling