import { useState,useContext } from 'react'
import Form from '../UI/Form'
import AuthContext from '../Context/AuthContext'



const CandyForm=()=>{
    const [CandyName,setCandyName]=useState('')
    const [CandyDescription,setCandyDescription]=useState('')
    const [CandyPrice,setCandyPrice]=useState('')
    const [CandyQuantity,setCandyQuantity]=useState('')
    const [isValid,setIsValid]=useState(false)
    const [showForm,setShowForm]=useState(false )
    const ctx=useContext(AuthContext)
    
    
    const FormManage=(e)=>{
        e.preventDefault()
        setShowForm(!showForm)
    }
    
    const CandyNameHandler=(e)=>{
        setCandyName(e.target.value)
        if(e.target.value.trim().length>0 && CandyDescription.trim().length>0 && CandyPrice>0 && CandyQuantity>=0){
            setIsValid(true)
        }
        else{
            setIsValid(false)
        }
    }

    const CandyDescriptionHandler=(e)=>{
        setCandyDescription(e.target.value)
        if(CandyName.trim().length>0 && e.target.value.trim().length>0 && CandyPrice>0 && CandyQuantity>=0){
            setIsValid(true)
        }
        else{
            setIsValid(false)
        }
    }

    const CandyPriceHandler=(e)=>{
        setCandyPrice(e.target.value)
        if(CandyName.trim().length>0 && CandyDescription.trim().length>0 && e.target.value>0 && CandyQuantity>=0){
            setIsValid(true)
        }
        else{
            setIsValid(false)
        }
    }

    const CandyQuantityHandler=(e)=>{
        setCandyQuantity(e.target.value)
        if(CandyName.trim().length>0 && CandyDescription.trim().length>0 && CandyPrice>0 && e.target.value>=0){
            setIsValid(true)
        }
        else{
            setIsValid(false)
        }
    }

    const SubmitHandler=(e)=>{
        e.preventDefault()
        const newCandy={CandyName:CandyName , CandyDescription : CandyDescription , CandyPrice:CandyPrice , CandyQuantity : CandyQuantity} 
        ctx.onStock(newCandy)
        setCandyDescription('')
        setCandyName('')
        setCandyPrice('')
        setCandyQuantity('')
        setIsValid(false)
    }

    return(
        <>
          <Form>
            <button onClick={FormManage}>
              Add Stock ...
            </button>
            {showForm && <form onSubmit={SubmitHandler}>
                <label htmlFor="CandyName">Candy Name </label>
                <input type="text" value={CandyName} onChange={CandyNameHandler}/>
                <label htmlFor="CandyDescription">Description</label>
                <input type="text" value={CandyDescription} onChange={CandyDescriptionHandler}/>
                <label htmlFor="Price">Price</label>
                <input type="number" value={CandyPrice} onChange={CandyPriceHandler} />
                <label htmlFor="Price">Quantity</label>
                <input type="number" value={CandyQuantity} onChange={CandyQuantityHandler} />

                <button type="submit" disabled={!isValid}>Add Stock</button>
                
            </form>}
          </Form>
        </>
    )
}

export default CandyForm