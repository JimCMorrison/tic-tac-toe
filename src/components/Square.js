import React from 'react';
import Game from '../components/Game';
import Board from '../components/Board';

export default class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
