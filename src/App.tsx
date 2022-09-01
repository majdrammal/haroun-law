import './App.css';
import React from 'react'
import LandingPage from './pages/LandingPage'
import Nav from './components/Nav'
import Footer from './components/Footer'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Industries from './pages/Industries'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route data-exact path="/" element={<LandingPage />}/>
          <Route path="/about" element={<About />}/>          
          <Route path="/industries" element={<Industries />}/>   
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
