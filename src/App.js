import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useState, useEffect } from 'react';
import { createContext, useContext } from 'react';

import Home from './pages/Home';
import Impressum from "./pages/Impressum";
import Datenschutz from './pages/Datenschutz';
import Projekte from './pages/Projekte';

export const indexContext = createContext();
function App() {

const [globalIndex, setGlobalIndex] = useState(0);

const routePathList =["Bearzooka", "Alraunen Simulator", "Camera Project", "Moodium", "Pull the Trigger"]


  return (
    <indexContext.Provider value={{
      globalIndex,
      loadValue: currentValue => {
        setGlobalIndex(currentValue)
      },
    }}>
      <ParallaxProvider> 
          <Router>
              <Routes>
                <Route path='/' element={<Home
                                            />} 
                                          />
                <Route path='/impressum' element={<Impressum />} />
                <Route path='/datenschutz' element={<Datenschutz />} />


                {
                
                routePathList.map((item, index) => {
                              return (
                                      <Route 
                                        path= {"/"+item} 
                                        element={<Projekte 
                                        />}
                                      />
                              );
                          })
                        } 
            </Routes>
        </Router>
      </ParallaxProvider>
    </indexContext.Provider>

    
  );
}

export default App;
