import react, { useState, useEffect } from "react"
import ProgressBar from '../Upload/ProgressBar'
import { auth, projectStorage, firebaseApp ,projectfirestore,timestamp,increments,arrayadd} from "../firebase/Config"
import classes from "../Upload/upload.module.css";
import { useDropzone } from 'react-dropzone'



/*firebase logic start*/
const Upload = (props) => {

     const [progress, setProgress] = useState(0);
     const [file, setFile] = useState(null);
     const [error, setError] = useState(null);
     const [url, setUrl] = useState(null);
     
     const [upstyle,setUpStyle] = useState({display:"block"});
     const [progstyle,setProgStyle] = useState({display:"none"});
     const {setModal}=props;
     const [tags, setTags] = useState(["black","white","yellow","blue","red","cars","bmw","audi","maruti","lambo","sex","porn","ship","coffee","dani","mia","temple","god","chand","BJP"])
     const [tagImg, setTagImg] = useState([])
     const [search, setSearch] = useState("")
    
   
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
                                  createdAt: createdAt,
                                  name: file.name,
                                  tag:tagImg
                             })
                            
                             projectfirestore.collection('users').doc(auth.X).update({
                                  totalupload: increments,
                                  uploadsurl:arrayadd.arrayUnion(Url)
                             })                            
                           
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

        useEffect(()=>{
          console.log(tagImg)

        }, [tagImg])
      

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
               <div className={classes.heading} style={upstyle}>
                    <p>Setup tags</p>
               </div>
               <div className={classes.tags} style={upstyle}>
                    <div className={classes.searchbox}>
                         <input type="text" className={classes.box} placeholder="search for the tags...." onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} />
                         {
                              tagImg && tagImg.map(tag =>(
                                   <input type="submit" key={tag} value={tag} onClick={(e)=>{
                                        var item = tagImg;
                                        var index = item.indexOf(e.target.value);
                                        var p1 = item.slice(0,(index))
                                        var p2 = item.slice((index+1),item.length)
                                        setTagImg(p1.concat(p2))
                                   }} className={classes.selectedTags} />
                              ))
                         }
                    </div>
                    <div className={classes.tagList} style={upstyle}>
                         {
                              tags && tags.map(tag =>(
                                   tag.startsWith(search)?
                                   <input type="submit" key={tag} value={tag} onClick={(e)=>{
                                        tagImg.includes(e.target.value)?setTagImg([...tagImg]):setTagImg([...tagImg, e.target.value])
                                   }} className={classes.availableTags} disabled={tagImg.length >= 5}/>:null
                              ))
                         }
                    </div>

               </div>
               <div style={{width:"80%",}}>
                    <button onClick={upload} className={classes.button} disabled={file === null}>upload</button>
                    <button onClick={(e)=>{
                        setFile(null);
                        setProgress(0);
                        setUpStyle({display:"block"});
                        setProgStyle({display:"none"});
                        setModal(false);
                        setTagImg([]);
                    }} className={classes.buttonC}>
                         Cancel
                    </button>
               </div>
          
               
          </div>
          
     )
}
export default Upload