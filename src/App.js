import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';


import Home from './pages/Home';
import Impressum from "./pages/Impressum";
import Datenschutz from './pages/Datenschutz';

function App() {
  return (
    <ParallaxProvider> 
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/datenschutz' element={<Datenschutz />} />
        </Routes>
      </Router>
    </ParallaxProvider>
    
  );
}

export default App;
