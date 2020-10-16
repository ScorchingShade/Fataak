import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>  
      <LandingPage></LandingPage>
      
    </div>
  );
}

export default App;
