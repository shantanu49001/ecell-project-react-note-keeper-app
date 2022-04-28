//import React from "react";
import React,{useState} from "react";
function CreateArea(props) {
//1.
  const [note,setNote]=useState({
 title:"",
 content:""
  });
  function handleChange(event){//form se event
  const {name,value}=event.target;
  setNote(prevNote=>{
    return {
    ...prevNote,//spread operator
    [name]:value
    };
  });
  }
  function submitNote(event){
    props.onAdd(note);
    setNote({
    title:"",
    content:""
    });
    event.preventDefault();//screen refresh karne pr sab clear nhi hoa

  }
  return (
    <div>
      <form>
        <input name="title" 
        onChange={handleChange} 
        value={note.title} 
         placeholder="Title"
          />
        <textarea name="content" 
        onChange={handleChange} 
        value={note.content} 
         placeholder="Take a note..." 
         rows="3" 
           
         />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
