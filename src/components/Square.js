import React from 'react';
import Game from '../components/Game';
import Board from '../components/Board';

export default class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
