import About from "./components/About";
import Startscreen from "./components/Startscreen";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Impress from "./components/Impress";

function App() {
  return (
    <div>
      <Startscreen/> 
      <About/>
      <Projects></Projects>  
      <Contact></Contact>
      <Impress></Impress>
    </div>
  );
}

export default App;
