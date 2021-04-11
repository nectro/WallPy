import react from "react"
const Upload = () => {

     const changehandler = (events)=>
     {
          var selected = events.target.files[0];
          console.log(selected)
     }
     return (
          <div>
               <form>
                    <input type="file" onChange={changehandler}/>
               </form>
          </div>
     )
}
export default Upload