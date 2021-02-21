// 1-4: (For BackEnd) - Must make server.js file, then make all the server folders
// Make sure to install express, cors and mongoose after or before doing so

const express = require("express"),
    app = express(), 
    port = 8000,
    cors = require('cors'),
    server = app.listen(port, ()=>console.log(`Developer is listening in on port : ${port}`));
// Here I am syntactically saying these are all consts through the comma
// ______________________________________________________________

app.use(cors());
app.use(express.json());
// Here (in lines 1-14) I did some things different than Nichole

require("./server/config/mongoose.config"); // This is needed, after doing config you can use this to check if mongo db is connected
// NOTE: Before turning on the server, go to package.json and change node to nodemon in scripts section
// I didnt do it for this project but check it out for the next one
// After all that, do nodemon server.js in another terminal to start the backend, need it on to test apis through postman

// NEXT: After all of this what we do next is import our config and routes
