import React, { useEffect } from 'react';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Body, Navigation, Header, Project, Footer } from './components'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <header className='header' id="home">
        <Navigation />
        <Header />
      </header>
      <Body />
      <Project />
      <Footer />
    </div>
  );
}

export default App;