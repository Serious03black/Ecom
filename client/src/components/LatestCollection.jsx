import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from '../components/ProductItem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext); // Destructure 'products' from ShopContext
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0,10));
  }, [])
  

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title Text1={'LATEST'} Text2={'COLLECTIONS'} />
        <p className="w-3/4 m-auto text-xs sm:text-base text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, ipsam?
        </p>
      </div>
      {/* Rendering Product */}
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 rounded-2xl">
        {
          latestProducts.map((item,index)=>(
            <ProductItem className='' key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  );
};

export default LatestCollection;