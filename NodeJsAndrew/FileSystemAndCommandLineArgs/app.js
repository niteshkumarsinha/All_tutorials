const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');
// const command = process.argv[2];

// process.argv.forEach(element => {
//   console.log(chalk.inverse.red(element));  
// });

// if (command === 'add'){
//     console.log('Adding Note');
// }

yargs.version('1.1.0')

//console.log(process.argv);

//Add Notes
//Create Add Command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    // console.log('Title: ' + argv.title);
    // console.log('Body: ' + argv.body);
    notes.addNote(argv.title, argv.body);
  } 
})



//Create a remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'remove title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.removeNote(argv.title);
  }
})

//Create a list command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler: function(){
    console.log(chalk.blue.inverse('Listing notes'));
    console.log("-------------");
    
    const allnotes = notes.listNotes();
      allnotes.forEach(element => {
      console.log(`\nTitle: ${chalk.green(element.title)}`);
    });
  }
})

//Create the read command
yargs.command({ 
  command: 'read',
  describe: 'read notes',
  builder: {
    title: {
      describe: 'reads a note by title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    const note = notes.readNote(argv.title);
    if (!note){
        console.log(chalk.red.inverse('Note with the given title not found'));
    }else{
        console.log(`Title: ${chalk.blue.inverse(note.body)}`);
    }
  }
}) 

yargs.parse()

//console.log(yargs.argv); 
// node app.js  => { _: [], '$0': 'app.js' }
// node .\app.js add --title="Nitesh Kumar"  =>  { _: [ 'add' ], title: 'Nitesh Kumar', '$0': 'app.js' }
