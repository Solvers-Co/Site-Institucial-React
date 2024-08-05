import React from 'react';
import aboutImage from '../assets/img/about.png';

const Sobre = () => (
  <div className="container-xxl py-5" id="quemSomos">
    <div className="container px-lg-5">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="section-title position-relative mb-4 pb-2">
            <h6 className="position-relative text-primary ps-4">QUEM SOMOS</h6>
            <h2 className="mt-2">A empresa ideal para impulsionar o sucesso do seu negócio!</h2>
          </div>
          <p className="mb-4">
            Boas-vindas à Solvers Co., onde transformamos ideias em experiências digitais.
            Desde a nossa fundação, oferecemos soluções de desenvolvimento de sites e plataformas que
            unem criatividade, tecnologia e funcionalidade de ponta. Além de desenvolvermos nossos
            próprios projetos que colaboram com a comunidade externa.
          </p>
          <div className="row g-3">
            <div className="col-sm-7">
              <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Desenvolvimento de sites</h6>
              <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Integração de sistemas e APIs</h6>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>UX/UI</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={aboutImage} alt="About Us" />
        </div>
      </div>
    </div>
  </div>
);

export default Sobre;
