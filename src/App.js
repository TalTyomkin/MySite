import React from 'react';
import './App.css';
import StoreProvider from "./Components/StoreProvider/StoreProvider.js"
import HomePage from './Components/HomePage/HomePage.js';

function App() {
  
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
}

export default App;
