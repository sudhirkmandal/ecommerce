import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import Loading from './Loading'

function Details() {
  const [products, setproducts] = useState(null)
  const {id} = useParams()  
  const getsingleproduct = async () => {
    try {
      const {data} = await axios.get(`/products/${id}`)
      setproducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getsingleproduct()
  }, [])
  return ( products ?
    <div className='w-[90%] flex h-full items-center gap-10 m-auto py-[8%] px-[3%]'>
        <img className='h-[90%] w-[45%] object-contain' src={products.image} alt="" />
        <div className="content w-[65%]">
            <h1 className='text-3xl font-[500]'>{products.title}</h1>
            <h2 className='text-zinc-600 my-4'>{products.category}</h2>
            <h2 className='text-red-600 mb-3'>$ {products.price}</h2>
            <p className='mb-[5%]'>{products.description}</p>
            <Link className='py-2 mr-5 px-5 border rounded border-blue-500 text-blue-500'>Edit</Link>
            <Link className='py-2 px-5 border rounded border-red-600 text-red-600'>Delete</Link>
        </div>
    </div> : <Loading/>
  )
}

export default Details