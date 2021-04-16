import react, { useState, useEffect } from "react"
import ProgressBar from '../Upload/ProgressBar'
import { projectStorage, firebaseApp } from "../firebase/Config"
import classes from "../Upload/upload.module.css";
import {useDropzone} from 'react-dropzone'

const Upload = () => {

     const [progress, setProgress] = useState(0);
     const [file, setFile] = useState(null);
     const [error, setError] = useState(null);
     const [url, setUrl] = useState(null);

     const [upstyle,setUpStyle] = useState({display:"block"});
     const [progstyle,setProgStyle] = useState({display:"none"});


     const types = ["image/jpeg", "image/png", "image/jpg"];
     
     const upload = (e)=>{
          e.preventDefault();
          setUpStyle({display:"none"});
          setProgStyle({display:"block"});

          var storageRef = firebaseApp.storage().ref();

          // Create a reference to 'mountains.jpg'
          var mountainsRef = storageRef.child(file.name);

          // Create a reference to 'images/mountains.jpg'
          var mountainImagesRef = storageRef.child("images/+`${file}`");
          setUrl(mountainImagesRef);

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
               setUrl(URL.createObjectURL(selected));
          }
          else
          {
               setFile(null);
               setError("please select a valid image file(png,jpeg)");
               }
        }
        const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

        useEffect(() => () => {
          // Make sure to revoke the data uris to avoid memory leaks
          URL.revokeObjectURL(url)
        }, [file]);

      

     return (
          <div className={classes.majorContainer}>
               <div className={classes.heading}>
                    <p>Upload Your Walpapers</p>
               </div>
          
               <div {...getRootProps()} className={classes.dropZone} style={upstyle}>
                    <input {...getInputProps()} />
                    {
                         (file == null)?
                         (isDragActive ?
                         <p>Drop the files here ...</p> :
                         <p>Drag 'n' drop some files here, or click to select files</p>) :
                         (file && <img src={url} style={{height:"200px",}}/>) 
                    }
               </div>
               <div className={classes.uploadZone} style={progstyle}>
                    {(progress===100)? <p>Finished....</p>:<p>Uploading....</p>}
                    <center><ProgressBar progress={progress}/></center>
               </div>
               <div style={{width:"80%",}}>
                    <button onClick={upload} className={classes.button}>upload</button>
                    <button onClick={(e)=>{
                        setFile(null);
                        setProgress(0);
                        setUpStyle({display:"block"});
                        setProgStyle({display:"none"});
                    }} className={classes.buttonC}>cancel</button>
               </div>
          
               
          </div>
          
     )
}
export default Upload