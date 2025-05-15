import {createContext} form 'react';
import {products} from "../assets/frontend_assets"

export const ShopContext = createContext();

const ShopContextProvider = ()=>{
    const currency = '$';
    const delivery_fee = 10;
    
    const value = {
        products,currency,delivery_fee
    }
    return (
        <ShopContext.Provider>
        {props.children}
        </ShopContext.Provider>
    )
}
export default SHopCOntextProvider;