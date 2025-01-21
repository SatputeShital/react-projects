// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import HomeContainer from './HomeContainer/HomeContainer';

function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <HomeContainer />
      <div className="navbar-logo">
        
      </div>
    </div>
  );
}

export default App;
