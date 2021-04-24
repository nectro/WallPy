import react from "react"
import { auth, projectStorage, firebaseApp, projectfirestore, timestamp, increments } from "../../firebase/Config"
import Search from "../../../Assets/search.svg"
import classes from '../SearchBar/SearchBar.module.css';
const SearchBar =() => {
     return (
          <div className={classes.searchBar}>          
                    <input type="text" className={classes.inputText}/>
                    <button className={classes.button}>
                         <img src={Search} />
                    </button>
               </div>
     )
}
export default SearchBar