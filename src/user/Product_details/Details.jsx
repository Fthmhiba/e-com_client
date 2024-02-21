import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Details() {


  const value = useLocation();
console.log(value,'value');

  return (
    <div className=''>
      <h1 className="text-4xl text-center text-amber-100 ">PRODUCT_DETAILS</h1>
      <div className="border w-48 p-4 m-8 bg-slate-200   rounded   ">
      <img style={{width:"80px",height:"80px",borderRadius:"50%"}} src={`http://localhost:3000/${value.state.products.profile}`}/> 
      <p>{value.state.products.name}</p>
      <p></p>
      <p></p>
      <Link to={'/place-order'} state={{
        product:value.state.products
      }}>
      <div className=" h-[10px] flex justify-center items-center w-[160px] rounded-md ms-7 mt-8 text-white px-10 py-7 bg-green-700">
        <button>Place order</button>
      </div>
      </Link>
    </div>
    </div>
  )
}

export default Details
