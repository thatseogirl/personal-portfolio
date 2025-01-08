import React, { useEffect } from 'react';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navigation, Header, Project, Footer } from './components'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <div className='header' id="home">
        <Navigation />
        <Header />
      </div>
      {/* <Body /> */}
      <Project />
      <Footer />
    </div>
  );
}

export default App;