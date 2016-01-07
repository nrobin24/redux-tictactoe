// This file bootstraps the app with the boilerplate necessary
// to support hot reloading in Redux
import React, {PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TictactoeActions from '../actions/tictactoeActions';
import TictactoeApp from '../components/TictactoeApp';

class App extends React.Component {
  render() {
    const { gameState, actions } = this.props;

    return (
        <TictactoeApp gameState={gameState} actions={actions} />
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  gameState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    gameState: state.gameState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TictactoeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
