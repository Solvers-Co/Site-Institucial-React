import React from 'react';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Time from './components/time/Time';
import Solucoes from './components/solucoes/Solucoes';
import Contato from './components/Contato';
import Footer from './components/Footer';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/bootstrap.min.css'

function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <Home />
      <Sobre />
      <Time />
      <Solucoes />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
