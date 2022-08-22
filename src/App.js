/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Body, Navigation, Header, Project, Footer, ProjectContents } from './components'


function App() {
  const [data, setData] = useState(ProjectContents)

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
      <Project data={data} />
      <Footer />
    </div>
  );
}

export default App;