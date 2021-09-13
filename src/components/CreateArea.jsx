import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [notesArea, setNotesArea] = useState(false);
  function handleClick(){
    setNotesArea((prevState)=>{
      return !prevState;
    })
  }

  return (
    <div>
      <form className="create-note">
        <input
          onClick={handleClick}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          autoComplete="off"
        />
        {notesArea===true&&<textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          autoComplete="off"
          rows={notesArea===true?3:1}
        />}
        <Zoom in={true} ><Fab in={true} onClick={submitNote}> <AddIcon /> </Fab></Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
