import React from 'react';
import solversImage from '../assets/img/Solvers_CO.png';
import Navbar from './navbar/Navbar';

const Home = () => (
  <div className="container-xxl py-2 bg-primary hero-header mb-5">
    <Navbar />
    <div className="container my-5 py-5 px-lg-5">
      <div className="row g-5 py-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="text-white mb-4 animated zoomIn tituloInicial">Solvers Co.</h1>
          <p className="text-white pb-3 animated zoomIn">Uma empresa inovadora dedicada ao desenvolvimento de soluções de tecnologia sob medida para atender às suas necessidades específicas.</p>
        </div>
        <div className="col-lg-5 text-center text-lg-start">
          <img className="img-fluid" style={{ width: '350px' }} src={solversImage} alt="Solvers Co." />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
