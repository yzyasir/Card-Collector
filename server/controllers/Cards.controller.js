// Step 3 of the backend folders, step four of all the backend steps 

const Card = require("../models/Cards.model"); // Need to import the models into the controllers file

// Here we can make our module.export library 
module.exports.createCard = (req, res) => {
    Card.create(req.body)
        .then(newCard => res.json({message: "Success, you submitted a card", results: newCard}))
        .catch(err => res.json({message: "Hey, something went wrong", error: err}))
}

module.exports.findAllCards = (req, res) => {
    Card.find()
    .then(allCard => res.json({message: "Success, we found all cards", results: allCard}))
    .catch(err => res.json({message: "Hey, something went wrong", error: err}))
}

module.exports.destroy = (req, res) => {
    Card.remove({_id: req.params.id})
    .then(res.json({message: "Success, you deleted a card"}))
    .catch(err => res.json({message: "Hey, something went wrong", error: err}))
}
// ________________________________________________________________________________________________

// Adding these because they may prove useful after updating this project
module.exports.findOneCard = (req, res) => {
    Card.findOne({_id: req.params.id})
    .then(oneCard => res.json({message: "Success, you found one card", results: oneCard}))
    .catch(err => res.json({message: "Hey something went wrong", error: err}))
}

module.exports.updateCard = (req, res) => {
    Card.findOneAndUpdate({_id: req.params.id}, {
        $set: {
            name: req.body.name,
            url: req.body.url
        }
    }, {runValidators: true})
        .then(updatedCard => res.json({results: updatedCard}))
        .catch(err => res.json({message: "Hey the update failed", error: err}))
}

// Can also write like this: (All in one object)

// module.exports = {
// index: (req,res) => {
// 
// },
// show: (req,res) => {
// 
// },
// update:(req,res) => {
// 
// }
// }