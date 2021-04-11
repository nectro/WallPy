import React from "react"
import classes from "../Catalog/Catalog.module.css"
const catalog = () => {
     return (
          <div className={classes.majorContainer}>
               <div className={classes.Column1}>picture1</div>
               <div className={classes.Column2}>picture2</div>
               <div className={classes.Column3}>picture3</div>
          </div>
     )
}
export default catalog