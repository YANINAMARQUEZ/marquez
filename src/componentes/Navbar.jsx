// src/components/Navbar.jsx
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Marquezlab</div>
      <ul className="menu">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#clientes">Clientes</a></li>
        <li><a href="#legal">Legalidad</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
