import { useState } from "react";
import AuthContext from "./AuthContext";


const ContextProvider=(props)=>{
    const [Stocks,setStocks]=useState([
        {CandyName:'Eclair' , CandyDescription : 'Chocolate' , CandyPrice:2 , CandyQuantity : 100},
        {CandyName:'Pulse' , CandyDescription : 'KachhaMango' , CandyPrice:1 , CandyQuantity : 50}
    ])
    const [totalQuantity,setTotalQuantity]=useState(0)
    const [Cart,setCart]=useState([])

    const CartItem=(Item)=>{
        setCart([...Cart,Item])
        setTotalQuantity(totalQuantity+ Item.CandyQuantity)
    }

    const StockItem=(Item)=>{
        const isExisting=Stocks.some(obj=>obj.CandyName===Item.CandyName)
        if(isExisting){
            setStocks((prevStocks) =>
            prevStocks.map((stock) => {
                if (stock.CandyName === Item.CandyName) {
                    return {
                       ...stock,
                       CandyQuantity: parseInt(stock.CandyQuantity) + parseInt(Item.CandyQuantity),
                       CandyPrice: Item.CandyPrice
                    };
                }
               return stock;
            })
        )}
        else{
            setStocks([...Stocks,Item])
        }
    }
    
    const value={
        stock:Stocks,
        onStock:StockItem,
        cart:Cart,
        onCart:CartItem,
        totalQuantity:totalQuantity
    }

    return(
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default ContextProvider