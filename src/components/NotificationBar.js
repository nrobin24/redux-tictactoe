import React, {PropTypes} from 'react';

let NotificationBar = (props) => {
  return (<div className={'notification-bar'}>
    {props.notification}
  </div>);
};

NotificationBar.propTypes = {
  notification: PropTypes.string.isRequired
};

export default NotificationBar;
