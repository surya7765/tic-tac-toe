import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Shuffle from './components/Shuffle';

const App = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Card Shuffling Game</h1>
      <Shuffle />
    </div>
  );
};

export default App;
