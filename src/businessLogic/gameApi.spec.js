import chai from 'chai';
import gameApi from './gameApi';
import {initialState} from '../constants/GameConfig';
import chaiAsPromised from 'chai-as-promised';

chai.should();
chai.use(chaiAsPromised);

describe('Game API', () => {
  describe('move', () => {
    it('allows a player to move in an empty space', () => {
      //arrange
      //The 7 numbers specify the year, month, day, hour, minute, second, and millisecond, in that order
      let newState = gameApi.move({
        rowIndex: 0,
        colIndex: 2,
        gameState: initialState
      });

      //assert
      return newState.should.eventually.include({
        board: [
          [0, 0, 1],
          [0, 0, 0],
          [0, 0, 0]
        ]
      });
    });

    it('rejects a move in an occupied space', () => {
      //arrange
      //The 7 numbers specify the year, month, day, hour, minute, second, and millisecond, in that order
      // let date = new Date(99,0,24,11,33,30,0);

      //assert
      // DateHelper.getFormattedDateTime(date).should.equal('1/24 11:33:30');
    });


  });
});
