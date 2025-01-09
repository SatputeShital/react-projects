// import logo from './logo.svg';
import './App.css';
import MahindraCard from './MahindraCard';
import ForceCard from './forceCard';
import TataCard from './TataCard';
import MotorsNavbar from './MotorsNavbar';
import MotorsFooter from './MotorsFooter';

function App() {
  return (
    <div className="App">
      <h2 style={{fontFamily:"Cambria", textAlign:"Center" }}> Indian Motoring Marvels</h2>
      <MotorsNavbar />
      <TataCard /><MahindraCard /><ForceCard/>
     <MotorsFooter />
      {/* <ImgCorousel /> */}
    </div>
  );
}

export default App;
