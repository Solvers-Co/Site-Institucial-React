import React from 'react';
import "./Navbar.module.css"

const Navbar = () => (
  <div className="container-xxl position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href="/" className="navbar-brand p-0">
        <h1 className="m-0" style={{ fontSize: '25px' }}>Solvers Co.</h1>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="#home" className="nav-item nav-link active">Home</a>
          <a href="#quemSomos" className="nav-item nav-link">Quem somos</a>
          <a href="#nossaEquipe" className="nav-item nav-link">Equipe</a>
          <a href="#solucoes" className="nav-item nav-link">Soluções</a>
          <a href="#contato" className="nav-item nav-link">Contato</a>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
