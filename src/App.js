import React from 'react';
import './App.module.css';
import Header from './Header/Header';
import MainSection from './MainSection/MainSection';
import FinalSection from './FinalSection/FinalSection';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route exact path="/" component={Header} />

        <MainSection />
        <FinalSection />

      </BrowserRouter>

    </div>
  );
}

export default App;
