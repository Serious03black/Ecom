import React,{useContext,useEffect,useState} from 'react'
import Title from "./Title";
import {ShopContext} from '../context/ShopContext'
import ProductItem from '../components/ProductItem';


const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setbestSeller] = useState([])
    useEffect(() => {
      const bestProduct = products.filter((item)=>(item.bestseller));
      setbestSeller(bestProduct.slice(0,5))
    }, [])
    
  return (
    <div className='my-10'>
          <div className='text-center py-8 text-3xl'>
            <Title Text1={'BEST'} Text2={'SELLER'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur id fugit maxime, blanditiis aliquid voluptate sit minus at eaque eos corporis quaerat 
            </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {
              bestSeller.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
              ))
            }
            </div>
          </div>
    </div>
  )
}

export default BestSeller