import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { errorToast } from '../../components/Toast'

function User() {

  const [products,setProducts] = useState([])

  useEffect(()=>{
    fetchUsers()
  },[])

  const fetchUsers=async()=>{
    try {
      const response = await axios.get("http://localhost:3000/api/users")
    setProducts(response.data.users)      
    } catch (error) {
      errorToast(error.message || 'error')
    }
  }
  return (
    <div className=''>
      
      {/* login cheytha usersne view cheyyaan */}
    {
      products.map((item)=>{
        return( 
        <Fragment>
          <p className='text-white'>{item.lname}</p>
          <p className='text-white'>{item.fname}</p>
          <p className='text-white'>{item.email}</p><br/>
        </Fragment>
        )
      })
    }
    </div>


  )
}

export default User
