// const btnel=document.getElementById("btn")
// const appel=document.getElementById("app")

// getnote().forEach((note)=>{
//     const noteel=createnoteel(note.id,note.content)
//     appel.insertBefore(noteel,btnel)
// })

// function createnoteel(id,content)
// {
//     // console.log(id,content);
//     const element=document.createElement("textarea")
//     element.classList.add("note")
//     element.placeholder="empty-note"
//     element.value=content

//     element.addEventListener("dbclick",()=>{
//      const warning=confirm("Do you want to delete this note?")
//      if(warning)
//      {
//         deletenote(id,element)
//      }
//     })
//     element.addEventListener("input",()=>{
//         updatenote(id,element.value)
//     })
//     return element;
// }

// function deletenote(id, element){
//      const notes=getnote().filter((note)=>note.id!=id)
//      savenote(notes)
//      appel.removeChild(element)

// }


// function updatenote(id,content){
//      const notes =getnote()
//      const target=notes.filter((note)=>note.id==id)
//      target.content=content
//      savenote(notes)
// }


// function addnote(){
//     const notes=getnote()
//     const noteobj={
//         id:Math.floor(Math.random()*100000),
//         content:""

//     }
//     // console.log(noteobj);
//     const noteel=createnoteel(noteobj.id,noteobj.content);
//     appel.insertBefore(noteel,btnel)

//     notes.push(noteobj)

//     savenote(notes)
// }

// function savenote(){
//     localStorage.setItem("note-app",JSON.stringify(notes))
// }
// function getnote()
// {
//    return JSON.parse(localStorage.getItem("note-app") || "[]")
// }

// btnel.addEventListener("click",addnote)
const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");

getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  appEl.insertBefore(noteEl, btnEl);
});

function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;

  element.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });

  return element;
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note)=>note.id != id)
    saveNote(notes)
    appEl.removeChild(element)
}

function updateNote(id, content) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNote(notes);
}

function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  appEl.insertBefore(noteEl, btnEl);

  notes.push(noteObj);

  saveNote(notes);
}

function saveNote(notes) {
  localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
  return JSON.parse(localStorage.getItem("note-app") || "[]");
}

btnEl.addEventListener("click", addNote);