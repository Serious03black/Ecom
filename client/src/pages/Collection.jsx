import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets.js";
import Title from "../components/Title";
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, showFilter, setShowFilter,search,showSearch} = useContext(ShopContext);
  const [filterProduct, setFilterProduct] = useState([]); 
  const [category, setCategory] = useState([]); // Fixed spelling
  const [subCategory, setSubCategory] = useState([]); // Fixed spelling
  const [sortType,setSortType] = useState([])

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };

  const toggleSubcategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value) 
        : [...prev, value]
    );
  };

  const applyFilters = () => {
   
    if (!products) return; 
    let productCopy = [...products];
     if (showSearch && search) {
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))      
     }
    // Apply category filter
    if (category.length > 0) {
      productCopy = productCopy.filter(item => 
        item.category && category.includes(item.category)
      );
    }
    
    // Apply subcategory filter
    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => 
      subCategory.includes(item.subCategory)
      );
    }
    
    setFilterProduct(productCopy);
  };

  useEffect(() => {
    if (products) {
      setFilterProduct(products);
    }
  }, [products]);

  useEffect(() => {
    applyFilters();
  }, [category, subCategory,search,showSearch]);
  
  const sort = () => {
      let fpCopy = filterProduct.slice();
      switch (sortType){
        case 'low-High': setFilterProduct(fpCopy.sort((a,b)=>(a.price - b.price)))
        break;
        case 'high-low':setFilterProduct(fpCopy.sort((a,b)=>( b.price - a.price)))
        break;
        default:
          applyFilters()
          break
      }
  }
  useEffect(() => {
    sort();
  
  }, [sortType])
  
  
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light">
            <label className="flex gap-2 items-center">
              <input 
                type="checkbox" 
                className="w-3" 
                value={"Men"} 
                onChange={toggleCategory}
              /> 
              Men
            </label>
            <label className="flex gap-2 items-center">
              <input 
                type="checkbox" 
                className="w-3" 
                value={"Women"} 
                onChange={toggleCategory}
              /> 
              Women
            </label>
            <label className="flex gap-2 items-center">
              <input 
                type="checkbox" 
                className="w-3" 
                value={"Kids"} 
                onChange={toggleCategory}
              /> 
              Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light">
            <label className="flex gap-2 items-center">
              <input 
                type="checkbox" 
                className="w-3" 
                value={"Topwear"} 
              onChange={toggleSubcategory}
              />
              TopWear
            </label>
            <label className="flex gap-2 items-center">
              <input 
                type="checkbox" 
                className="w-3" 
                value={"Bottomwear"} 
             onChange={toggleSubcategory}
              />
              BottomWear
            </label>
            <label className="flex gap-2 items-center">
              <input 
                type="checkbox" 
                className="w-3" 
                value={"Winterwear"} 
                  onChange={toggleSubcategory}
              />
              WinterWear
            </label>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-2">
          <Title Text1={"ALL"} Text2={"COLLECTION"} />
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => {
             setSortType(e.target.value)
            }}
          >
            <option value="Relevent">Sort By: Relevant</option>
            <option value="low-High">Sort By: Low To High</option>
            <option value="high-low">Sort By: High To Low</option>
          </select>
        </div>
        
        {/* Product Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProduct.map((item, index) => (
            <ProductItem 
              key={item._id || index} 
              id={item._id} 
              image={item.image} 
              name={item.name} 
              price={item.price} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;