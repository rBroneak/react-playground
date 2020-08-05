import React from 'react';
import logo from './logo.svg';
import './App.scss';

import NavBar from "./components/NavBar";
import Parent from "./components/Parent";


function App() {
  return (
    <section>
    <NavBar/>
    <Parent/>
    </section>
  );
}

export default App;
