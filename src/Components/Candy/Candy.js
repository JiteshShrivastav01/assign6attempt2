import CandyDashboard from "./CandyDashboard";
import CandyForm from "./CandyForm";
import classes from './Candy.module.css'


const Candy=()=>{
    

    return(
        <div className={classes.candy}>
          <div className={classes.form}>
           <CandyForm />
          </div>
          <div className={classes.data}>
            <CandyDashboard/>
          </div>
        </div>
    )
}

export default Candy