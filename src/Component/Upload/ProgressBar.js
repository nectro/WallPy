import React from 'react'
/*problem korche ei hook ta*/
import classes from '../Upload/ProgressBar.module.css'

const ProgressBar = (props) => {
     return (
          <div className={classes.ProgressBar}
               style={{ width: "80%",backgroundColor:"white",height:"20px"}}>
               <div className={classes.status} style={{width:props.progress+"%",}}></div>
          </div>
     )
}
export default ProgressBar