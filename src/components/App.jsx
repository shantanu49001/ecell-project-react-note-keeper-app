import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
//isme bhi import =inh
function App() {
  const [notes,setNotes]=useState([]);
  function addNote(newNote){//adding the note
 setNotes(prevNotes=>{
  return [...prevNotes,newNote];//new notes array
 });
  }
  function deleteNote(id){//to delete a note
  setNotes(prevNotes=>{
  return  prevNotes.filter((noteItem,index)=>{//map function
    return index!=id;//array that conatins all other than idex matches id
    });
  });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}  />
      {  notes.map((noteItem,index)=>{
        return( <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      );
        })}
      <Footer />
    </div>
  );
}

export default App;
