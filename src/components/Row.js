import React, {PropTypes} from 'react';
import Box from './Box';

let Row = (props) => {
  let boxes = props.row.map((value, i) => <Box colIndex={i} value={value} key={i} {...props}/>);
  // let boxes = <div>yoyoyo</div>;
  return (
    <div className={'row'}>
      {boxes}
    </div>
  );
};

Row.propTypes = {
  row: PropTypes.array.isRequired
};

export default Row;
