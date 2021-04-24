import react, { useState, useEffect } from "react"
import classes from "../Catalog/Catalog.module.css"
import {projectfirestore} from '../../firebase/Config'

const Catalog = () => {
     const [docs, setDocs] = useState([])
     useEffect(() => {
          projectfirestore.collection('upload')
               .orderBy('createdAt', 'desc')
               .onSnapshot((snap) => {
                    let documents = [];
                    snap.forEach(doc => {
                         documents.push({ ...doc.data(), id: doc.id });
                    });
                    setDocs(documents)
               });
         

     },['upload'])


/*just for checkinf delete later on */
console.log(docs)
     var a = 1;
     
     return (
          <div className={classes.majorContainer}>
               <div className={classes.imgWrap1}>
               {docs && docs.map(doc => (
                    (a++%2 === 0)?
                         <img src={doc.url} alt="uploaded pic"/> :
                         null    
               ))}
               </div> 
               <div className={classes.imgWrap2}>
               {docs && docs.map(doc => (
                    (docs.length % 2 === 0)?
                         ((a++%2 === 0)?
                         null :
                         <img src={doc.url} alt="uploaded pic"/>) :
                         ((a++%2 === 0)?
                         <img src={doc.url} alt="uploaded pic"/> :
                         null)
               ))}
               </div>                
          </div>
     )
}
export default Catalog