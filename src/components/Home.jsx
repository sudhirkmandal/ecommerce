import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

function Home() {
  const [products] = useContext(ProductContext);  
  const {search} = useLocation()
  const quaryCategory = decodeURIComponent(search.split("=")[1])
  
  const [filteredproducts, setFilterproducts] = useState(null)
  
  const getproductscategory = async () => {
    try {
      const {data} = await axios.get(`/products/category/${quaryCategory}`)
      setFilterproducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(!filteredproducts || quaryCategory == "undefined") setFilterproducts(products)
    if(quaryCategory != "undefined") getproductscategory();
  }, [quaryCategory, products])



  return products ? (
    <>
      <Nav />
      <div className="w-[82%] p-7 pt-10 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredproducts && filteredproducts.map((item, index) => (
          <Link key={index}
            to={`/details/${item.id}`}
            className="card p-2 mr-5 mb-5 border shadow rounded w-[22.95%] h-[45vh] flex flex-col justify-center items-center"
          >
            <div
              className="mb-3 hover:scale-105 w-full h-[80%] bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-500">{item.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
