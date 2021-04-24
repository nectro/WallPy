import react, { useState, useEffect } from "react"
import ProgressBar from '../Upload/ProgressBar'
import { auth, projectStorage, firebaseApp ,projectfirestore,timestamp,increments} from "../firebase/Config"
import classes from "../Upload/upload.module.css";
import { useDropzone } from 'react-dropzone'



/*firebase logic start*/
const Upload = (props) => {

     const [progress, setProgress] = useState(0);
     const [file, setFile] = useState(null);
     const [error, setError] = useState(null);
     const [url, setUrl] = useState(null);
     const [firebaseurl, setfirebaseUrl] = useState(null);
     const [upstyle,setUpStyle] = useState({display:"block"});
     const [progstyle,setProgStyle] = useState({display:"none"});
     const {setModal}=props;
    
   
     const types = ["image/jpeg", "image/png", "image/jpg"];
     
     const upload = (e)=>{
          e.preventDefault();
          setUpStyle({display:"none"});
          setProgStyle({display:"block"});
          
          var docRef = projectfirestore.collection('users').doc(auth.X);
          docRef.get().then((doc)=>{
              if(doc.exists){
                   var storageRef = firebaseApp.storage().ref();
                   const uploadRef = projectfirestore.collection('upload');
                   var mountainImagesRef = storageRef.child(`images/${auth.X}${doc.data().totalupload}`);
                   mountainImagesRef .put(file).on('state_changed', (snap) => {
                        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
                        setProgress(percentage)
         
                   },
                        (err) => {
                             setError(err);
                        }, async () => {
                             const Url = await mountainImagesRef.getDownloadURL();
                             const createdAt = timestamp();
                             uploadRef.doc(auth.X+""+doc.data().totalupload).set({
                                  url: Url,
                                  createdAt: createdAt
                             })
                             var c = doc.data().totalupload;
                             projectfirestore.collection('users').doc(auth.X).update({
                                  totalupload: increments,
                             })
                             projectfirestore.collection('users').doc(auth.X).collection('photos').doc("pic"+doc.data().totalupload).set({
                                  url:Url,
                             })
                             setfirebaseUrl(Url)
                        })
              }else{
                  console.log("doesn't exists")
              }
          })
    
        
     }
    
  
     
  
     const onDrop = acceptedFiles => {
          var selected = acceptedFiles[0];
         
          if (selected  && types.includes(selected.type))
          {
               
               setFile(selected);
               setError(null);
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
          // Make sure to revoke the data url to avoid memory leaks
          URL.revokeObjectURL(url)
        }, [file]);

        useEffect(()=>{
             if(progress === 100){
                  setTimeout(()=>{
                       setFile(null);
                       setModal(false);  
                  },1000)
                  setTimeout(()=>{
                    setUpStyle({display:"block"});
                    setProgStyle({display:"none"});
                    setProgress(0); 
                  }, 2000)
             }

        }, [progress])
      

     return (
          <div className={classes.majorContainer}>
               <div className={classes.heading}>
                    <p>Upload Your Walpapers</p>
               </div>
          
               <div {...getRootProps()} className={classes.dropZone} style={upstyle}>
                    <input {...getInputProps()} />
                    {
                         (file === null)?
                         (isDragActive ?
                         <p>Drop the files here ...</p> :
                         (error? <p style={{color:"#df6464",}}>{error}</p> :
                         <p>Drag 'n' drop some files here, or click to select files</p>)) :
                         (file && <img src={url} style={{height:"200px",}}/>) 
                    }
               </div>
               <div className={classes.uploadZone} style={progstyle}>
                    {(progress===100)? <p>Finished....</p>:<p>Uploading....</p>}
                    <center><ProgressBar progress={progress}/></center>
               </div>
               <div style={{width:"80%",}}>
                    <button onClick={upload} className={classes.button} disabled={file === null}>upload</button>
                    <button onClick={(e)=>{
                        setFile(null);
                        setProgress(0);
                        setUpStyle({display:"block"});
                        setProgStyle({display:"none"});
                        setModal(false);
                    }} className={classes.buttonC}>
                         Cancel
                    </button>
               </div>
          
               
          </div>
          
     )
}
export default Upload