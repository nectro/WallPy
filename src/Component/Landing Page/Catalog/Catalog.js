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


     
     
     return (
          <div className={classes.majorContainer}>
               {docs && docs.map(doc => (
                    <div className={classes.imgWrap} key={doc.id}>
                         <img src={doc.url} alt="uploaded pic"/>
                    </div>
               ))}
          </div>
     )
}
export default Catalog