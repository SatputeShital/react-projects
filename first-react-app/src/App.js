// import logo from './logo.svg';
import './App.css';
import MahindraCard from './MahindraCard';
import ForceCard from './forceCard';
import TataCard from './TataCard';
import MotorsNavbar from './MotorsNavbar';
import MotorsFooter from './MotorsFooter';
import AshokCard from './AshokCard';
import MarutiCard from './MarutiCard';
import TopClick from './TopClick';

function App() {
  return (
    <div className="App" style={{backgroundColor:"rgb(207, 224, 227)"}}>
      {/* <h2 style={{fontFamily:"Cambria", textAlign:"Center" }}> Indian Motoring Marvels</h2> */}
      <MotorsNavbar />
      <TataCard /><MahindraCard /><MarutiCard/><AshokCard/><ForceCard/>
      <TopClick />
     <MotorsFooter />
     {/* <button id='top' onClick={MotorsNavbar}>Home</button> */}
      {/* <ImgCorousel /> */}
    </div>
  );
}

export default App;
