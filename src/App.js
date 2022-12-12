import "./App.css";
import About from "./components/About/About";
import Aim from "./components/Aim/Aim";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Aim />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
