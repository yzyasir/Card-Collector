import './App.css';
import "nes.css/css/nes.min.css"; //for the nes styles (Just google nes.css)
import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap


import CardForm from './components/CardForm'; // Need to import CardForm from components
import Card from './components/Card';
import {useState} from 'react';
{/*  */}

function App() {

  const [cardList, setCardList] = useState([]); //this state is for the cards that we submitted to be displayed
  // we could enter in the brackets [1,2,3,4,5] and it will show us five of the cards, but we want to show however mant were submitted, not just a set number

  return (
    <div className="App">
      <h1 className="jumbotron"> <i class="nes-ash"></i> Gotta Catch 'Em All <i class="nes-pokeball"></i> </h1> {/* Jumbotron is from bootstrap makes a gray backgeound for  */}
      <div className="row">
        <div className="col-sm-1 side-color"></div> {/* This is based off of the grid system */}
        <div className="col-sm-3"><h4>Add a card</h4><CardForm/></div> {/* Added CardForm component here */}
        <div className="col-sm-8"><h4>Cards You Have</h4>
        {// here we enter our mapping function, we use mapping through in react instead of for looping, item will be object and i is the index
          cardList.map((item, i) => <Card/>) //basically everytime we cycle through, we create a card comeponent 
        }
        </div>
      </div>
    </div>
  );
}

export default App;

// 1) npx create-react-app application-name-app, and to start the app its "npm start"
// 2) Then you can use node package manager to install whatever you need "npm i then anything you want"

