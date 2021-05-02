import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Experiences from './Components/Experiences';
import Education from './Components/Education';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Loader from './Components/Loader';


function App() {
  return (
    <div>
        <Loader/>
        <NavBar/>
        <Home/>
        <About/>
        <Service/>
        <Experiences/>
        <Education/>
        <Contact/>
        
    </div>
    
  );
}

export default App;
