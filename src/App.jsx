import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Pages/Home';
import Company from './components/Pages/Company';
import Contato from './components/Pages/Contato';
import NewProject from './components/Pages/NewProject';
import Projects from './components/Pages/Projects';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Company" element={<Company />} />
          <Route exact path="/Contato" element={<Contato />} />
          <Route exact path="/NewProject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
