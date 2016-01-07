import React, {PropTypes} from 'react';
import Row from './Row';

let Board = (props) => {
  let rows = props.gameState.board
    .map((row, i) => {
      return <Row rowIndex={i} row={row} {...props} key={i} />;
    });
  return (
    <div className={'board'}>
      {rows}
    </div>
  );
};

Board.propTypes = {
  actions: PropTypes.object.isRequired,
  gameState: PropTypes.object.isRequired
};

export default Board;
