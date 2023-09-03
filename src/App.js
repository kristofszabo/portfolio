import './App.css';

import About from './components/about';

import React from 'react';
import { Container } from '@mui/material';


import './App.css';
import Experience from './components/experience';

function App() {
  return (
    <Container className="container" maxWidth="md">
      <About></About>
      <Experience></Experience>
    </Container>

  );
}
export default App

//https://razvanvancea.ro/#about