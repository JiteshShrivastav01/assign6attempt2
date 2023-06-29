import Modal from '../UI/Modal'
import AuthContext from '../Context/AuthContext'
import { useContext } from 'react'


const Cart=(props)=>{

    const ctx=useContext(AuthContext)
    const total=ctx.totalQuantity
    return(
        <>
         <Modal onClose={props.onClose}>
            <h1>You have buy {total} Candies.</h1>
            <button onClick={props.onClose}>Close</button>
         </Modal>
        </>
    )
}

export default Cart