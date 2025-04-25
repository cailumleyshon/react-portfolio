import styles from "./App.module.css";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import ContactForm from "./components/contactform/ContactForm";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
