import react, { useState, useEffect } from "react"
import classes from "../Catalog/Catalog.module.css"
import {projectfirestore} from '../../firebase/Config'

const Catalog = (props) => {
     const [docs, setDocs] = useState([])
     const { search, setsearch } = props
     const [filter, setFilter] = useState([""])
     useEffect(() => {
          filter[0] !== ""?
               projectfirestore.collection('upload')
               .where('tag', 'array-contains-any',filter)
               .onSnapshot((snap) => {
                    let documents = [];
                    snap.forEach(doc => {
                         documents.push({ ...doc.data(), id: doc.id });
                    });
                    setDocs(documents)
               }) :
               projectfirestore.collection('upload')
               .orderBy("createdAt","desc")
               .onSnapshot((snap) => {
                    let documents = [];
                    snap.forEach(doc => {
                         documents.push({ ...doc.data(), id: doc.id });
                    });
                    setDocs(documents)
               })              
         

     },[filter])
     useEffect(() => {
          
     setFilter(search.toLowerCase().trim().split(" "))
     },[search])

/*just for checkinf delete later on */
     console.log(docs)
     const cl1 = docs.slice(0,docs.length/2);
     const cl2 = docs.slice(docs.length/2 ,docs.length);
     
     var a = 1;
     
     return (
          <div className={classes.majorContainer}>
               <div className={classes.imgWrap1}>
               {cl1 && cl1.map(doc => (
                         <img src={doc.url} alt="uploaded pic"/> 
               ))}
               </div> 
               <div className={classes.imgWrap2}>
               {cl2 && cl2.map(doc => (
                         <img src={doc.url} alt="uploaded pic"/>)
                         
               )}
               </div>                
          </div>
     )
}
export default Catalog