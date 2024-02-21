import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Orders() {

    useEffect(() => {
        fetchorders()
    }, [])

    const [orders, setOrders] = useState([])

    const fetchorders = async () => {
        const response = await axios.get('http://localhost:3000/api/orders')

        setOrders(response.data.products)
    }

    return (
    <div className='text-center '>
    <h1 className='text-amber-100 '>Orders</h1>
        <div className='flex justify-center  gap-3 '>

            {
                orders.map((item) => {
                    return (

                        <div className="">
                            {/* <p>{item.fname} <span> {item.lname} </span> </p> */}
                            <p>{item.products.map((item) => {
                                return (
                                    <>
                                        <div className="card border-2 p-3 bg-slate-300 rounded text-center ">

                                            <img src={`http://localhost:3000/${item.profile}`} width="70px" alt="profile loading" />
                                            <p>{item.name}</p>
                                            <p> {item.price} </p>
                                        </div>
                                    </>
                                )
                            })}</p >
                            {/* {JSON.stringify(item)} */}
                        </div>
                    )
                })
            }

        </div >
        </div>)
}
