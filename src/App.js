import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from'../src/components/Header/Header';
import Course from './components/Course/Course';
import Footer from './components/Footer/Footer';


function App() {
  return (
        <div>
          <Header></Header>
          <Course></Course>
          <Footer></Footer>
      
        </div>
  );
}

export default App;
