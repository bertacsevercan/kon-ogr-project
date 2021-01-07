import "bootstrap/dist/css/bootstrap.min.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Projects from "./containers/Projects";
import NavBar from "./components/NavBar";
import Comments from "./containers/Comments";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <div className="content-wrapper">
          <NavBar />
          <About />
          <Projects />
          <Comments />
          <Contact />
          <Footer />
        </div>
      </div>
    </I18nextProvider>
  );
}

export default App;
