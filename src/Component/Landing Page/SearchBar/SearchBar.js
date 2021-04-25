import react, { useEffect, useState } from "react"
import { auth, projectStorage, firebaseApp, projectfirestore, timestamp, increments } from "../../firebase/Config"
import Search from "../../../Assets/search.svg"
import classes from '../SearchBar/SearchBar.module.css';
const SearchBar = (props) => {
     const [searchvalue,setsearchvalue]=useState("")
     const { search, setsearch } = props
     

     const searchandle = (event) => {
     setsearchvalue(event.target.value)
     }

     const clickhandle = () => {
          
          setsearch(searchvalue)
     }
     return (
          <div className={classes.searchBar}>          
               <input type="text" className={classes.inputText} onChange={searchandle} value={searchvalue}/>
                    <button className={classes.button} onClick={clickhandle}>
                         <img src={Search} />
                    </button>
               </div>
     )
}
export default SearchBar