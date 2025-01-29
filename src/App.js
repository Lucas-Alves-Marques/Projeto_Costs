import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Pages/Home.js';
import Company from './Components/Pages/Company.js';
import Contact from './Components/Pages/Contact.js';
import NewProject from './Components/Pages/NewProject.js';

import Conteiner from "./Components/Layout/Conteiner.js";

function App() {
  return (
    <Router>
      <ul>
        <Link to={'/'}>Inicio</Link>
        <Link to={'/company'}>Empresa</Link>
        <Link to={'/contact'}>Contatos</Link>
        <Link to={'/newproject'}>Novos Projetos</Link>
      </ul>
      <Conteiner customClass='min-height'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Conteiner>
      <footer>Footer</footer>
    </Router>
  );
}

export default App;
