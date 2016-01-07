import React, {PropTypes} from 'react';
import Board from './Board';
import TurnIndicator from './TurnIndicator';
import NotificationBar from './NotificationBar';

let TictactoeApp = (props) => {
  return (
    <div className={'app-container'}>
      <Board rows={props.gameState.rows} {...props}/>
      <TurnIndicator playerTurn={props.gameState.playerTurn} />
      <NotificationBar notification={props.notificationState} />
    </div>

  );
};

TictactoeApp.propTypes = {
  actions: PropTypes.object.isRequired,
  gameState: PropTypes.object.isRequired,
  notificationState: PropTypes.string.isRequired
};


export default TictactoeApp;
