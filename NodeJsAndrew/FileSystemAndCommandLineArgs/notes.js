const fs = require('fs');
const chalk = require('chalk');

const getNotes = function(){
    return 'Your Notes';
}

const addNote = function(title, body){
    const notes = loadNotes();

    debugger;
    const duplicateNotes = notes.filter(function(note){ 
       return note.title === title; 
    });

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        });
    
        saveNotes(notes);

        console.log(chalk.inverse.green('New Note Added'));
        
    }else{
        console.log(chalk.inverse.red('Note title taken'));
    }

}


const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
    
}

const removeNote = function(title){
    const notes = loadNotes();

    const length = notes.length;

    notes.filter(function(note, index, arr){
        if (note.title === title){
            notes.splice(index, 1);
            saveNotes(notes);
        }
    });

    if (length !== notes.length){
        console.log(chalk.green.inverse('Note Deleted'));
    }else{
        console.log(chalk.red.inverse('No matching note found'));
    }
}

const listNotes = function(){
    return loadNotes();
}

const readNote = function(title){
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);
    if (noteToRead) return noteToRead;
    return null
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};