// This is step 2 of the backend folders after we do the config folder, step 3 of everything in total

const mongoose = require("mongoose"); //Importing mongoose here

const CardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Must add your cards name before submission"],
    },
    url: {
        type: String,
        required: [true, "Must add the card image before submission"]
    },
    favoriteMove: {
        type: String,
        required: [true, "Must add your favorite move"]
    }
}, 
{
    timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"},
}
);

const Card = mongoose.model("Card", CardSchema); //These is where we are registering our schema
module.exports = Card; //Here we are exporting 

