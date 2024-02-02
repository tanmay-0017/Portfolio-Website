// import logo from './logo.svg';
// import './App.css';
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro";
import About from "./components/About/about";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/skills";
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
