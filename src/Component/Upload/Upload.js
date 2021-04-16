import react, { useState, useCallback } from "react"
import ProgressBar from '../Upload/ProgressBar'
import { projectStorage, firebaseApp } from "../firebase/Config"
import classes from "../Upload/upload.module.css";
import {useDropzone} from 'react-dropzone'

const Upload = () => {

     const [progress, setProgress] = useState(0);
     const [file, setFile] = useState(null);
     const [error, setError] = useState(null);
     const [url, setUrl] = useState(null);


     const types = ["image/jpeg", "image/png", "image/jpg"];
     
     const upload = (e)=>{
          e.preventDefault();
          var storageRef = firebaseApp.storage().ref();

          // Create a reference to 'mountains.jpg'
          var mountainsRef = storageRef.child(file.name);

          // Create a reference to 'images/mountains.jpg'
          var mountainImagesRef = storageRef.child("images/+`${file}`");

          mountainsRef.put(file).on('state_changed', (snap) => {
               let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
               setProgress(percentage)
             });
     }

     const onDrop = acceptedFiles => {
          var selected = acceptedFiles[0];
          console.log(selected.type)
          if (selected  && types.includes(selected.type))
          {
               console.log(URL.createObjectURL(selected))
               setFile(selected);
               setError("");
          }
          else
          {
               setFile(null);
               setError("please enter a valid file(png,jpeg");
               }
        }
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
      

     return (
          <div className={classes.majorContainer}>
               <form>
                    <div {...getRootProps()} style={{outline:"none",}}>
                         <input {...getInputProps()} />
                         {
                              (file == null)?
                              (isDragActive ?
                              <p>Drop the files here ...</p> :
                              <p>Drag 'n' drop some files here, or click to select files</p>) :
                              (file && <p>{file.name}</p>) 
                         }
                         {
                              (file == null)? error && <div className="error">{error}</div> : <center>{file && <ProgressBar progress={progress} />}</center>
                         }
                    </div>
                    <button onClick={upload}>upload</button>
               </form>
               
          </div>
          
     )
}
export default Upload