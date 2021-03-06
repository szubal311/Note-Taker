const notesInfo = require("..data/notesInfo");

module.exports = (app) => {
    
    app.get("/api/notes", (req, res) => {
        return res.json(notesInfo)
    });

    app.post("/api/notes", (req, res) => {
        res.json("saved");
    });

    app.delete("/api/notes/index:", (req, res) => {
        let del = parseInt(req.params.index);
        let tempNotes = [];

        for (let i=0; i< notesInfo.length; i++) {
            if(i !== del) {
                tempNotes.push(notesInfo[i])
            }
        }
        notesInfo = tempNotes;
    });
    
    res.json("delete finished")

};


