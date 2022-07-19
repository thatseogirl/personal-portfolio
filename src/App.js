/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Body from './components/Body/Body';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Project from "./components/Body/Project";
import Footer from './components/Footer/Footer';
import ProjectContents from './components/Body/ProjectContents';

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