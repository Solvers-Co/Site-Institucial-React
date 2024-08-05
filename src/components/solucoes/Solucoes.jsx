import React from 'react';
import learnLink from '../../assets/img/Learn_Link.png';
import './Solucoes.module.css'

const Solucoes = () => (
  <div className="container-xxl py-5" id="solucoes">
    <div className="container px-lg-5">
      <div className="row g-5">
        <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="section-title position-relative mb-4 pb-2">
            <h6 className="position-relative text-primary ps-4">SOLUÇÕES</h6>
            <h2 className="mt-2">Learn Link</h2>
          </div>
          <p className="mb-4">
            É uma plataforma de ensino, em que alunos podem compartilhar os seus conhecimentos, além de poderem sanar as suas dúvidas. Desse modo, evitando a evasão escolar, visando a melhoria da educação pública, contribuindo com a educação de fácil acesso, além de diminuir a desigualdade social.
          </p>
        </div>
        <div className="col-lg-5 d-flex justify-content-end">
          <div style={{ marginLeft: '200px' }}>
            <img className="img-fluid" src={learnLink} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Solucoes;
