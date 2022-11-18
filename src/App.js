import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';


import Home from './pages/Home';
import Impressum from "./pages/Impressum";
import Datenschutz from './pages/Datenschutz';
import Projekte from './pages/Projekte';



function App() {

  

const projectList = [
  {"description": "Bearzooka", "text": "Bearzooka ist ein Game, welches lokal mit bis zu vier Freunden spielbar ist. Das Ziel ist es, sich gegenseitig mit Bambuskugeln abzuschießen. Durch diverse Power-Ups und Rubberbanding ist der Spielspaß garantiert. Das Spiel wurde mit Unity entwickelt.", "link": "https://www.youtube.com/watch?v=ihV3084oR-U"},
  {"description": "Alraunen Simulator", "text": "Mithilfe des Alraunen Simulators kann der User die magische Welt von Harry Potter betreten. Dabei dreht sich alles um die Zucht einer Alraune. Der User kann direkt mit Game-Elementen interagieren und bekommt daraufhin ein Feedback. Der Simulator wurde mit Unity entwickelt.", "link": ""},
  {"description": "Camera Project", "text": "In diesem selbstentwickelten virtuellen Raum kann der User sich frei bewegen und mit verschiedenen Objekten interagieren. Dabei können eigene Fotos aufgenommen und angeschaut werden. Die Website wurde mithilfe von Three.JS entwickelt.", "link": ""},
  {"description": "Moodium", "text": "Mithilfe des Moodtrackers Moodium lassen sich seine täglichen Stimmungen eintragen und visualisieren. Außerdem lassen sich diese in einem monatlichen Kalender anschauen. Die Website wurde mit Node.js und express entwickelt.", "link": ""},
  {"description": "Pull the Trigger", "text": "Der Sticker mit dem Motto \"Pull the Trigger\" lässt sich ganz einfach mit der Handykamera einscannen. Daraufhin entwickelt sich der Sticker zu einer virtuellen Blumenwiese. Der Augmented Reality Effekt wurde in Unity entwickelt, die Blumen in Blender.", "link": "https://www.youtube.com/watch?v=oVX7QAkrWLw"},

]

  return (
    <ParallaxProvider> 
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/datenschutz' element={<Datenschutz />} />
          {projectList.map((item, index) => {
            let newPath = projectList[index].description; 
                        return (
                                <Route 
                                  path= {"/"+newPath} 
                                  element={<Projekte 
                                    description={item.description}
                                    text={item.text}

                                  />}
                                />
                        );
                    })} 
        </Routes>
      </Router>
    </ParallaxProvider>
    
  );
}

export default App;
