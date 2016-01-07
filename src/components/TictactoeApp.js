import React, {PropTypes} from 'react';
import Board from './Board';

let TictactoeApp = (props) => {
  return (
    <Board rows={props.gameState.rows} className={'board'} {...props}/>
  );
};

TictactoeApp.propTypes = {
  actions: PropTypes.object.isRequired,
  gameState: PropTypes.object.isRequired
};


export default TictactoeApp;
