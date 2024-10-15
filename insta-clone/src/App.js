import logo from './logo.svg';
import './App.css';
import LeftSide from './Components/leftSide';
import MiddleSide from './Components/middleSide';
import RightSide from './Components/rightSide';

function App() {
  return (
    <div className="App">
      <div className="leftSide">
    <LeftSide />
      </div>
    <div className="middleSide">
      <MiddleSide />
      
    </div>
    <div className="rightSide">
      <RightSide />
    </div>
    </div>
  );
}

export default App;
