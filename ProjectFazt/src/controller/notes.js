const notesController = {}

notesController.noteAdd = (req, res) => {
    res.render('./notes/new-note.hbs')
}

notesController.saveNote = (req, res) => {
    const {title, description} = req.body
    let errors = []
    if(!title) errors.push({text: "Please enter a name."});
    if(!description) errors.push({text: "Please enter a description."});
    if(errors.length > 0) {
        res.render('./notes/new-note.hbs', {
            errors,
            title,
            description
        });
        console.log(errors)
    } else {
        res.send('ok');
    }
   
}

notesController.getNotes = (req, res) => {
    res.send('Estas en Note...')
}


module.exports = notesController;