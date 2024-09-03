import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';

function Nav() {
  const [products] = useContext(ProductContext);  

  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []); 
  distinct_category = [...new Set(distinct_category)];


  const color = () => {
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
  }
  
  return (
    <nav className='w-[18%] h-full bg-zinc-100 flex flex-col items-center pt-5'>
        <a className='py-2 px-5 border rounded border-blue-400 text-blue-500' href="/create">Add New Product</a>
        <hr className='w-[80%] my-3' />
        <h1 className='text-2xl w-[80%] mb-3 font-semibold'>Category Filter</h1>
        <div className='w-[80%]'>
        {distinct_category.map((cat, ind)=>(<Link key={ind} to={`/?category=${cat}`} className='mb-3 flex items-center'><span style={{backgroundColor: color()}} className='w-[15px] mr-2 h-[15px] bg-blue-300 rounded-full'></span>{cat}</Link>))}
          
         
        </div>
      </nav>
  )
}

export default Nav