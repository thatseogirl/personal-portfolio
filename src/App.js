import React, {useEffect} from 'react';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Body from './components/Body/Body';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Project from "./components/Body/Project";
import Footer from './components/Footer/Footer';

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
            <Header/>
        </header>
        <Body />
        <Project />
        <Footer />
    </div>
  );
}

export default App;