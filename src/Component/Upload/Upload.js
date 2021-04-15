import react, { useState } from "react"
import ProgressBar from '../Upload/ProgressBar'
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
     return (
          <div>
               <form>
                    <input type="file" onChange={changehandler} />
                    <div className="output">
                         {error && <div className="error">{error}</div>}
                         {file && <div className="file">{file.name}</div>}
                         {file && <ProgressBar file={file} setFile={setFile}/>}
                    </div>
               </form>
               
          </div>
          
     )
}
export default Upload