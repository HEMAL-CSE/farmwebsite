import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

export const BiogasMonitoring = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://api.thingspeak.com/channels/2483425/feeds.json?api_key=5HIBMTTPWFIY1YCA`)
            .then(res => {
                setData(res.data.feeds)
            })
    }, [])
    return (
        <div className='details'>
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
                                <h1 className="m-2 display-4 text-success2"><span className="text-success2"> Biogas</span> Monitoring</h1>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Pressure</th>
                        <th scope='col'> Temperature</th>
                        <th scope='col'>Methene</th>
                        <th scope='col'>Created At</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => (
                            <tr>
                                <td>{item.field1}</td>
                                <td>{item.field2}</td>
                                <td>{item.field3}</td>
                                <td>{moment(item.created_at).format('DD/MM/yyyy')}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}
