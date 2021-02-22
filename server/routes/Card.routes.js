// Step 4 of the folders, step 5 in backend

const CardController = require("../controllers/Cards.controller"); // Need to add the methods we will be using into the routes to implement them into the code

//Here I will be calling the functions from the file
module.exports = app => {
    app.post("/api/new/card/:id", Card.controller.createCard)
    app.get("/api/getAll/cards", CardController.findAllCard)
    app.delete("/api/deleteOne/card/:id", CardController.deleteOneCard)
    // _______________________________________________________
    app.put("/api/update/card/:id", CardController.updateCard)
    app.get("/api/findOne/card/:id", CardController.findOneCard)
}