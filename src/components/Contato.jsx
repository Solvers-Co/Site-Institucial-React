import React from 'react';

const Contact = () => (
  <div className="container-xxl py-5" id="contato">
    <div className="container px-lg-5">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="section-title position-relative mb-4 pb-2">
            <h6 className="position-relative text-primary ps-4">CONTATO</h6>
            <h2 className="mt-2">Entre em contato com a gente</h2>
          </div>
          <p className="mb-4">Estamos prontos para responder suas dúvidas e ajudar você a encontrar a melhor solução para o seu negócio.</p>
          <div className="d-flex align-items-center">
            <i className="fa fa-envelope-open text-primary me-3" style={{ fontSize: '2rem' }}></i>
            <div>
              <h5 className="mb-0">Email:</h5>
              <p className="mb-0">contato@solversco.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form className="wow fadeInUp" data-wow-delay="0.5s">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control" id="name" placeholder="Nome" />
                  <label htmlFor="name">Nome</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" placeholder="Email" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" className="form-control" id="subject" placeholder="Assunto" />
                  <label htmlFor="subject">Assunto</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Mensagem" id="message" style={{ height: '150px' }}></textarea>
                  <label htmlFor="message">Mensagem</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
