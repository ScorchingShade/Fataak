import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>  
      <LandingPage></LandingPage>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
