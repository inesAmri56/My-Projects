
 const noteContainer = document.getElementById('app');
 const addNoteButton = noteContainer.querySelector(".add-note");
getNotes().forEach( note =>{
    const noteElement = createNotesElement(note.id, note.content);
    noteContainer.insertBefore(noteElement,addNoteButton)
});
addNoteButton.addEventListener("click", () => addNote());
 function getNotes(){
return JSON.parse(localStorage.getItem("stikynotes-notes") || "[]");
}
function saveNotes(){

    localStorage.setItem("stikynotes-notes",JSON.stringify(notes))
}
function createNotesElement(id,content){

    const element= document.createElement("textarea");
  element.classList.add("note");
    element.value= content;
    element.placeholder="add quote";
    element.addEventListener("change",()=>{
        updateNote(id,element.value);
    });
    element.addEventListener("dblclick", ()=>{
        const doDelete = confirm("do you need to delete")
    if (doDelete){
        deleteNote(id,element)

    }
 });
    return element;


}
function addNote(){
    const existingNotes = getNotes();
    const noteObject= {
        id: Math.floor(Math.random() * 100000),
        content: ""
    };
const noteElement = createNotesElement(noteObject.id, noteObject.content);
noteContainer.insertBefore(noteElement,addNoteButton)
notes.push(noteObject);
saveNotes(notes)
}

function updateNote(){
console.log("updating notes..");
console.log(id,newContent)
const notes= getNotes();
const targetNote = notes.filter(note => note.id ==id)[0];
targetNote.content = newContent;
saveNotes(notes);}


function deleteNote( id,element){
const notes= getNotes().filter(note=>note.id !=id);
saveNotes(notes);
noteContainer.removeChild(element)

}