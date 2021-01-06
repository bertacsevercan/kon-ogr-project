import "bootstrap/dist/css/bootstrap.min.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import Projects from "./containers/Projects";
import About from "./containers/About";
import Navbar from "./components/Navbar";
import Comments from "./containers/Comments";
import './App.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Comments />
      <Contact />
    </div>
    </I18nextProvider>
  );
}

export default App;
