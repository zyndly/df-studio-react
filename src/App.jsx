import { useState } from 'react';
import Navbar from './components/Navbar';
import ExploreButton from './components/ExploreButton';
import AuthForms from './components/AuthForms';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('explore');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentSection('home');
  };

  const handleRegister = () => {
    setIsLoggedIn(true);
    setCurrentSection('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentSection('explore');
  };

  const showSection = (sectionId) => {
    setCurrentSection(sectionId);
  };

  return (
    <div className="App">
      {isLoggedIn && <Navbar showSection={showSection} handleLogout={handleLogout} />}
      {currentSection === 'explore' && <ExploreButton showAuthForms={() => setCurrentSection('auth')} />}
      {currentSection === 'auth' && <AuthForms handleLogin={handleLogin} handleRegister={handleRegister} />}
      {currentSection === 'home' && <Home />}
      {currentSection === 'services' && <Services />}
      {currentSection === 'about' && <About />}
      {currentSection === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}

export default App;