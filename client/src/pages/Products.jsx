import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets.js";
import ReletedProduct  from "../components/ReletedProduct";

const Products = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null); // Initialize as null for clarity
  const [image, setImage] = useState("");
  const [size, setsize] = useState('')

  const fetchProductData = () => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]); // Add products as dependency to handle updates

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                key={index} // Add key for React list rendering
                src={item}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(item)} // Update main image on click
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Main product" className="w-full h-auto" />
          </div>
        </div>
        {/* ---------------Product Info -------------------- */}
        <div className="felx-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
         <div className='flex flex-col gap-4 my-8'>
          <p>Select Size</p>
          <div className='flex gap-2'>
            {
              productData.sizes.map((item,index)=>(
                <button onClick={()=>setsize(item)} className={`cursor-pointer rounded-3xl border py-2 px-4 bg-gray-300 ${item === size ? 'border-amber-400 bg-rose-400': ''}`} key={index}>
                    {item}
                </button>
              ))
            }
          </div>
          </div>
          <button className='bg-black cursor-pointer text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>      
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex felx-col gap-1'>
            <p>100% Original Product.</p> <br />
            <p>COD Available.</p><br />
            <p>7 Days return.</p>
          </div>
        </div>
      </div>
      {/* Descripation & Review */}
      <div className='mt-20'>
        <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b><br />
            <p className='border px-5 py-3 text-sm'>Review (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores minus qui autem fugit placeat sequi alias maxime cupiditate ipsam consectetur amet, unde cumque eos velit deserunt dolorem veniam atque. Quod?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet autem est suscipit, rerum animi maiores porro consequuntur laborum, eaque debitis, mollitia magni eum adipisci pariatur neque optio ad perferendis.</p>
        </div>
      </div>
      {/* Display Releted Product */}
      <ReletedProduct category={productData.category} subCategory={productData.subCategory}  />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
