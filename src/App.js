import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Pages/Home/Home.js';
import Company from './Components/Pages/Company/Company.js';
import Contact from './Components/Pages/Contact/Contact.js';
import NewProject from './Components/Pages/NewProject/NewProject.js';
import Conteiner from "./Components/Layout/Conteiner/Conteiner.js";
import NavBar from "./Components/Layout/Navbar/NavBar.js";
import Footer from "./Components/Layout/Footer/Footer.js";
import Projects from "./Components/Pages/Projects/Projects.js";


function App() {

  return (

    <Router>

      <NavBar />

      <Conteiner customClass='min-height'>

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />

        </Routes>

      </Conteiner>

      <Footer />

    </Router>

  );

}

export default App;
