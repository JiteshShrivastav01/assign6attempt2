import Card from '../UI/Card'
import AuthContext from '../Context/AuthContext'
import { useContext } from 'react'
import classes from './CandyDashboard.module.css'


const CandyDashboard = () => {
    const ctx=useContext(AuthContext)
    const stock=ctx.stock

    const OneHandler=(e)=>{
        e.preventDefault()
        ctx.onCart({CandyQuantity:1})
    }
    const TwoHandler=(e)=>{
        e.preventDefault()
        ctx.onCart({CandyQuantity:2})
    }
    const ThreeHandler=(e)=>{
        e.preventDefault()
        ctx.onCart({CandyQuantity:3})
    }

    return(
        <>
         <Card>
            <table>
                <tr>
                    <th>Candy Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Buy</th>
                </tr>
                {
                    stock.map((candy)=>(
                        <tr>
                            <td>{candy.CandyName}</td>
                            <td>{candy.CandyDescription}</td>
                            <td>{candy.CandyPrice}</td>
                            <td>{candy.CandyQuantity}</td>
                            <td className={classes.Button}>
                               <button onClick={OneHandler} className={classes.btn}>Buy 1</button>
                               <button onClick={TwoHandler} className={classes.btn}>Buy 2</button>
                               <button onClick={ThreeHandler} className={classes.btn}>Buy 3</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
         </Card>
        </>
    )
}

export default CandyDashboard