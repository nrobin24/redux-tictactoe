import React, { PropTypes } from 'react';

let TurnIndicator = (props) => {
  return (
    <div className={'turn-indicator'}>
      It's player {props.playerTurn}'s turn
    </div>
  );
};

TurnIndicator.propTypes = {
  playerTurn: PropTypes.number.isRequired
};

export default TurnIndicator;
