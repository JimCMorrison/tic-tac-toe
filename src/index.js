import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

//import Components
import Board from './components/Board';
import Game from './components/Game';
import Square from './components/Square';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
