import React, { useState } from 'react'

function Create() {
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    const addProductHandler = (e)=>{
        e.preventDefault()
        const product = {
            title, image, category, price, description
        }
        console.log(product)
    }
  return (
    <form onSubmit={addProductHandler} className='p-[5%] flex flex-col items-center w-screen h-screen'>
        <h1 className='w-1/2 mb-5 text-3xl font-semibold'>Add New Product</h1>
        <input onChange={(e)=>setImage(e.target.value)} value={image} type="url" placeholder='image link' className='text-xl bg-zinc-200 p-2 w-1/2 rounded-md mb-3' />
        <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='title' className='text-xl bg-zinc-200 p-2 w-1/2 rounded-md mb-3' />
        <div className='w-1/2 flex justify-between'>
        <input onChange={(e)=>setCategory(e.target.value)} value={category} type="text" placeholder='category' className='text-xl bg-zinc-200 p-2 w-[48%] rounded-md mb-3' />
        <input onChange={(e)=>setPrice(e.target.value)} value={price} type="number" placeholder='price' className='text-xl bg-zinc-200 p-2 w-[48%] rounded-md mb-3' />

        </div>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='text-xl bg-zinc-200 p-2 w-1/2 rounded-md mb-3' rows="10" placeholder='enter product description here...'></textarea>
        <div className='w-1/2'>
        <button className='py-2 px-5 border rounded border-blue-400 text-blue-500'>Add New Product</button>

        </div>
    </form>
  )
}

export default Create