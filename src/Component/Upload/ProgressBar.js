import React from 'react'
/*problem korche ei hook ta*/
import classes from '../Upload/ProgressBar.module.css'

const ProgressBar = (props) => {
     return (
          <div className={classes.ProgressBar}
               style={{ width: "700px",backgroundColor:"white",height:"20px"}}>
               <div style={{width:props.progress+"%",backgroundColor:"rgba(100, 223, 223, 0.582)",height:"20px"}}></div>
          </div>
     )
}
export default ProgressBar