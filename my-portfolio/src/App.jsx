import './index.css';
import './App.css'
import { LoadingScreen } from './Components/LoadingScreen'
import { useState } from 'react';
import { Navbar } from './Components/Sections/Navbar';
import { MobileMenu } from './Components/Sections/MobileMenu';
import { Home } from './Components/Sections/Home';
import { About } from './Components/Sections/About';
import { Projects } from './Components/Sections/Project';
import { Contact } from './Components/Sections/Contact';
import { EducationExperience } from './Components/Sections/EducationExperience';

function App() {

  const [isloaded, setIsLoaded]=useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {!isloaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}
     <div className={`min-h-screen transition-opacity duration-700 ${isloaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <EducationExperience/>
        <Projects/>
        <Contact/>
        
     </div>
    </>
  )
}

export default App
