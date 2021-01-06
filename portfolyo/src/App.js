import "bootstrap/dist/css/bootstrap.min.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import './App.css';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
    <div className="App">
   
    </div>
    </I18nextProvider>
  );
}

export default App;
