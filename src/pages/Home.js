import About from "./components/About";
import Startscreen from "./components/Startscreen";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Impress from "./components/Impress";

function Home() {
  return (
    <div >
      <Startscreen className="overflow-x-hidden"/> 
      <About className="overflow-x-hidden"/>
      <Projects className="overflow-x-hidden"></Projects>  
      <Contact className="overflow-x-hidden"></Contact>
      <Impress className="overflow-x-hidden"></Impress>
    </div>
  );
}

export default Home;
