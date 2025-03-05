import './index.css';
import './App.css'
import { LoadingScreen } from './Components/LoadingScreen'
import { useState } from 'react';
import { Navbar } from './Components/Sections/Navbar';

function App() {

  const [isloaded, setIsLoaded]=useState(false);
  
  return (
    <>
    {!isloaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}
     <div className={`min-h-screen transition-opacity duration-700 ${isloaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar/>
     </div>
    </>
  )
}

export default App
