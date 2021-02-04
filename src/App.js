import './App.css';
import "nes.css/css/nes.min.css"; //for the nes styles (Just google nes.css)
import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap
{/*  */}
function App() {
  return (
    <div className="App">
      <h1 className="jumbotron"> <i class="nes-ash"></i> Gotta Catch 'Em All <i class="nes-pokeball"></i> </h1> {/* Jumbotron is from bootstrap makes a gray backgeound for  */}
      <div className="row">
        <div className="col-sm-1 bg-info" style={{ height: '200px' }}></div> {/* This is based off of the grid system */}
        <div className="col-sm-3">Form Goes Here</div>
        <div className="col-sm-8">Cards go here</div>
      </div>
    </div>
  );
}

export default App;

// 1) npx create-react-app application-name-app, and to start the app its "npm start"
// 2) Then you can use node package manager to install whatever you need "npm i then anything you want"

