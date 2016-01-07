import React, {PropTypes} from 'react';

let Box = (props) => {
  let {rowIndex, colIndex, gameState} = props;
  let handleClick = () => {
    props.actions.moveRequest({rowIndex, colIndex, gameState});
  };
  let value = {0: '', 1: 'X', 2: 'O'}[props.value];
  return (
    <div className={'box'} onClick={handleClick}>
      {value}
    </div>
  );
};

Box.propTypes = {
  value: PropTypes.number.isRequired,
  gameState: PropTypes.object.isRequired
};

export default Box;
