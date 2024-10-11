function Navbar({ showSection, handleLogout }) {
    return (
      <div className="navbar" id="main-navbar">
        <a href="#home" onClick={() => showSection('home')}>Home</a>
        <a href="#services" onClick={() => showSection('services')}>Services</a>
        <a href="#about" onClick={() => showSection('about')}>About</a>
        <a href="#contact" onClick={() => showSection('contact')}>Contact</a>
        <div className="navbar-right">
          <a href="#logout" onClick={handleLogout}>Log Out</a>
        </div>
      </div>
    );
  }
  
  export default Navbar;