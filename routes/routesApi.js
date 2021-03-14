const fs = require("fs");


module.exports = (app) => {

    let notesInfo = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
    
    
    app.get("/api/notes", (req, res) => {
        res.json(notesInfo)
    });

    app.post("/api/notes", (req, res) =>{
        let notes1 = req.body;
        notesInfo.push(notes1);
        updateTracker();
        return console.log("Added a New Note: "+notes1.title);
    });

    app.get("/api/notes/:id", (req, res) => {
        res.json(notes[req.params.id]);
    });

    app.delete("/api/notes", (req, res) => {
        notes.splice(req.params.id, 1);
        updateTracker();
        console.log("Deleted Note with id "+req.params.id);
    });

    updateTracker = () => {
        fs.writeFile("db/db.json", JSON.stringify(notesInfo,'\t'), err =>{
            if (err) throw err;
            return true;
        });
    };
};

    // app.post("/api/notes", (req, res) => {
    //     let notes1 = req.body
    //     let newDbVar = [...notesInfo, {...notes1, id:genId}]        
    //     fs.writeFileSync("./db/db.json", newDbVar )
    //     res.json(genId);
    // });

    // app.delete("/api/notes/id:", (req, res) => {
    //     let del = parseInt(req.params.id);
    //     let tempNotes = [];

    //     for (let i=0; i< notesInfo.length; i++) {
    //         if(notesInfo[i].id !== del) {
    //             tempNotes.push(notesInfo[i])
    //         }
    //     }
    //     notesInfo = tempNotes;
    //     res.json(tempNotes);
    // });   
    
    



// Need to have db & note:
// gen id
// db new array add new var new dbVar = [...notesInfo, {...notes1, id:genId}]

// .filter for the id 


