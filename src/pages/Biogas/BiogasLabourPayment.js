import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BioGasLayout from './BiogasLayout'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import Modal from 'react-modal'
import { toast } from 'react-toastify'

const BiogasLabourPayment = () => {
  const [labour_id, setLabour_id] = useState('')
  const [payment, setPayment] = useState('')



  const [edit_labour_id, setEdit_labour_id] = useState('')
  const [edit_payment, setEdit_payment] = useState('')
  const [edit_id, setEdit_id] = useState('')

  const [isOpen, setIsOpen] = useState(false)


  const [labours, setLabours] = useState([])

  const [data, setData] = useState([])

  const getData = () => {
    axios.get('http://68.178.163.174:5010/biogas/labour_payment').then(res => {
      setData(res.data)
    })
  }

  useEffect(() => {

    getData()
    getLabours()

  }, [])

  const getLabours = () => {
    axios.get(`http://68.178.163.174:5010/biogas/labour`)
      .then(res => {
        setLabours(res.data)
      })
  }


  const addData = (e) => {
    e.preventDefault()

    axios.post('http://68.178.163.174:5010/biogas/labour_payment/add', {
      labour_id,
      payment
    }).then(res => {
      toast('Submitted')
      getData()
    })

  }

  const editData = (e, id) => {
    e.preventDefault()

    axios.put(`http://68.178.163.174:5010/biogas/labour_payment/edit?id=${id}`, {
      labour_id: edit_labour_id,
      payment: edit_payment
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
      axios.delete(`http://68.178.163.174:5010/biogas/labour_payment/delete?id=${id}`)
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
                <h1 className="m-2 display-4 text-success2"><span className="text-success2">Biogas</span> Labour Payment</h1>
              </a>
            </div>
          </div>

        </div>
      </div>

      <form>


        <label>Select Labour ID:</label>
        <select value={labour_id} onChange={e => {
          setLabour_id(e.target.value)

        }} className='select' >
          <option >Select</option>
          {
            labours.map(shed => (

              <option value={shed.id}>{shed.name}</option>
            ))
          }
        </select>






        <label>Payment:</label>
        <input value={payment} onChange={e => setPayment(e.target.value)} className='input' type='text'

        />



        <button onClick={addData} className='button'>Submit</button>

      </form>


      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Labour ID</th>
            <th scope='col'> Payment</th>
            <th scope='col'>Edit/Delete</th>

          </tr>
        </thead>
        <tbody>
          {
            data.map(calf => (
              <tr>
                <td>{calf.labour_id}</td>
                <td>{calf.payment}</td>

                <td>
                  <button onClick={() => {

                    setEdit_id(calf.id)
                    setEdit_labour_id(calf.labour_id)
                    setEdit_payment(calf.payment)
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
          overlay: { zIndex: 10000 }
        }}
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false)
        }}
      >
        <form className='details'>


          <label>Select Labour ID:</label>
          <select value={edit_labour_id} onChange={e => {
            setEdit_labour_id(e.target.value)
          }} className='select' >
            <option >Select</option>
            {
              labours.map(shed => (

                <option value={shed.id}>{shed.name}</option>
              ))
            }
          </select>






          <label>Payment:</label>
          <input value={edit_payment} onChange={e => setEdit_payment(e.target.value)} className='input' type='text'

          />



          <button onClick={e => editData(e, edit_id)} className='button'>Submit</button>

        </form>
      </Modal>

    </div>
  )
}

export default BiogasLabourPayment