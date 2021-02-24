// Step 1 of the folders, Step 2 for everything in the backend after server.js
// Do this after making and doing server.js

const mongoose = require("mongoose");

// const database = "cards_db" // see how these are not quotes but backticks for the ${}
mongoose.connect(`mongodb://localhost/cards_2`, { //must change the db name from project to project
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => console.log("It works bro!!!"))
  .catch(err => console.log(`Oh no, it didnt work brother ${err}`))