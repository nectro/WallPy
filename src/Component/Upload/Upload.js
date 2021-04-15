import react, { useState } from "react"
import ProgressBar from '../Upload/ProgressBar'
import { projectStorage, firebaseApp } from "../firebase/Config"
const Upload = () => {
     const [file, setFile] = useState(null);
     const [error, setError] = useState(null);
     const types = ["image/jpeg", "image/png","image/jpg"];
     const changehandler = (events)=>
     {
          var selected = events.target.files[0];
          console.log(selected.type)
          if (selected  && types.includes(selected.type))
          {
               setFile(selected);
               setError("");
          }
          else
          {
               setFile(null);
               setError("please enter a valid file(png,jpeg");
               }
     }
     const upload = (e)=>{
          e.preventDefault();
          console.log("yep!");
          var storageRef = firebaseApp.storage().ref();

          // Create a reference to 'mountains.jpg'
          var mountainsRef = storageRef.child(file.name);

          // Create a reference to 'images/mountains.jpg'
          var mountainImagesRef = storageRef.child("images/+`${file}`");

          mountainsRef.put(file).then((snapshot) => {
               console.log('Uploaded a blob or file!');
             });
     }
     return (
          <div>
               <form>
                    <input type="file" onChange={changehandler} />
                    <div className="output">
                         {error && <div className="error">{error}</div>}
                         {file && <div className="file">{file.name}</div>}
                         {file && <ProgressBar file={file} setFile={setFile}/>}
                    </div>
                    <button onClick={upload}>upload</button>
               </form>
               
          </div>
          
     )
}
export default Upload