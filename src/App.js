import Header from '../src/Components/Header/Header';
import Candy from './Components/Candy/Candy';
import ContextProvider from './Components/Context/ContextProvider';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';


const App=()=>{
  const [showCart,setShowCart]=useState(false)
  const showCartOnScreen=()=>{
    setShowCart(true)
  }
  const hideCartFromScreen=()=>{
    setShowCart(false)
  }

  return(
    <ContextProvider>
     {showCart && <Cart onClose={hideCartFromScreen}/>}
     <Header onShow={showCartOnScreen}/>
     <Candy />
    </ContextProvider>
  )
}

export default App;
