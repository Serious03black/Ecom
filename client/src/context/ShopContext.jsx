import { createContext } from 'react';
import { products } from '../assets/frontend_assets/assets.js'; // Uncomment if needed

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = '₹';
    const delivery_fee = 10;
    
    const value = {
        products, // Uncomment and import if needed
        currency,
        delivery_fee
    }
    
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;