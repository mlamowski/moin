import About from "./components/About";
import Startscreen from "./components/Startscreen";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Impress from "./components/Impress";

function Home() {
  return (
    <div >
      <Startscreen className=""/> 
      <About className=""/>
      <Projects className=""></Projects>  
      <Contact className=""></Contact>
      <Impress className=""></Impress>
    </div>
  );
}

export default Home;
