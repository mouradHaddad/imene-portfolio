// import { Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import { About } from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Slider from './components/Slider';
import { BrowserRouter } from 'react-router-dom';

import Fas from './components/Fas';


function App() {
  return (
    <BrowserRouter>
    <div className='container'>
    <Header></Header>
    <About></About>
    <Projects></Projects>
    <Slider className='marquee'></Slider>
    <Contact></Contact>
    <Fas></Fas>
    <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
