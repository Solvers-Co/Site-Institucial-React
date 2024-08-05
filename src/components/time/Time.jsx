import React from 'react';
import teamData from './DadosTime';
import './Time.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Time = () => (
  <div className="container-fluid py-5 mb-5 team" id="nossaEquipe">
    <div className="container">
      <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '700px' }}>
        <h3>Conheça os desenvolvedores da nossa equipe!</h3>
      </div>
      <div className="owl-carousel team-carousel wow fadeIn d-flex" data-wow-delay=".5s">
        {teamData.map((member, index) => (
          <div key={index} className="rounded team-item w-25">
            <div className="team-content">
              <div className="team-img-icon">
                <div className="team-img rounded-circle">
                  <img src={member.img} className="img-fluid w-100 rounded-circle" alt={member.name} />
                </div>
                <div className="team-name text-center py-3">
                  <h4>{member.name}</h4>
                </div>
                <div className="team-icon d-flex justify-content-center pb-4">
                  <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href={member.linkedin}>
                  <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Time;
