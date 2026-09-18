import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Project from './Components/Project';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}