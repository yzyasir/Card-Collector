import './App.css';
import "nes.css/css/nes.min.css"; //for the nes styles (Just google nes.css)
import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap


import CardForm from './components/CardForm'; // Need to import CardForm from components
import Card from './components/Card';
import {useState} from 'react';
import axios from 'axios';

function App() {

  // const [cardList, setCardList] = useState([]); //this state is for the cards that we submitted to be displayed
  // // we could enter in the brackets [1,2,3,4,5] and it will show us five of the cards, but we want to show however mant were submitted, not just a set number
  // // what this state holds is basically what will be rendered
  // // NOTE: Now to update the card list we need to use setCardList (setState)

  // const createCardFunction = (newCard) => { //made this anon function to take in whatever gets passed along from card form, that data is basically a new card (so we name it that)
  //   setCardList([...cardList, newCard]) // to add the newCard to the existing card list we use the spread operator, this will add the new card to the list of set cards
  //   // remember we use setState to update
  //   // we pass the data throughout as an object, thats why we use it above as that, arrays are objects too?
  // }

  // _______________________________________________________________________________
  // Now I'm editing to add db

    // Need to pass in diff logic for create, update, delete, etc
    const [cardList, setCardList] = useState({
      name: "",
      url: "",
      favoriteMove: ""
    })

  const [error, setError] = useState({});

  const onChangeHandler = (e) => {
    e.preventDefault();
    setCardList({
      ...cardList,
      [e.target.name]: e.target.value //this needs to be e.target.name so that the component in the form updates
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/new/card", cardList)
      .then(res => {
        if(res.data.error){ //this is basically asking if res.data has any errors in it
          console.log(res.data.error.errors) //this will log the errors console
          setError(res.data.error.errors)
        } else {
          console.log("On submit worked") //otherwise if all is good, let this happen
          //TODO: Add navigate to back to home page
        }
      })
      .catch(console.log("Something went wrong, this is catch error"))
  }

  return (
    <div className="App">
      <h1 className="jumbotron"> <i class="nes-ash"></i> Gotta Catch 'Em All <i class="nes-pokeball"></i> </h1> {/* Jumbotron is from bootstrap makes a gray backgeound for  */}
      <div className="row">
        <div className="col-sm-1 side-color"></div> {/* This is based off of the grid system */}
        <div className="col-sm-3"><h4>Add a card</h4><CardForm makeCard={onSubmitHandler} onChangeHandler={onChangeHandler} error={error}/></div> {/* Added CardForm component here */}
        {/* props are used to pass data down to a component but we will be kind of be using it to pass it up using the prop makeCard (named that way because thats what it does) */}

        <div className="col-sm-8"><h4>Cards You Have</h4>
        {// here we enter our mapping function, we use mapping through in react instead of for looping, item will be object and i is the index
        // Add NOTES: 
          cardList.map((item, i) => <Card />) //basically everytime we cycle through, we create a card comeponent 
        
        } 
        </div>
      </div>
    </div>
  );
}

export default App;

// 1) npx create-react-app application-name-app, and to start the app its "npm start"
// 2) Then you can use node package manager to install whatever you need "npm i then anything you want"

// 3) To start the front end you have to do npm start

