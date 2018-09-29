import React from 'react';
import Cube from '../components/Cube';
import { BOGGLE_CUBES_US_LETTER_DISTRIBUTION } from '../constants/boggleCubesUsLetterDistribution';

const tableStyle = {
    tableLayout: "fixed",
    width: "300px"
};

class CubeTray extends React.Component {

    constructor(props) {
        super(props);
        this.generateGame();
    }

    validateWord = (e) => {

        console.log(e);
        // todo call api

    };


	generateGame = () => {

        let cubes = [];
        let game = new Array();
        let cubeIndex = 0;

        for (let i=0; i < BOGGLE_CUBES_US_LETTER_DISTRIBUTION.length / 4; i++) {
              game[i] = new Array();
              for (let j=0; j < BOGGLE_CUBES_US_LETTER_DISTRIBUTION.length / 4; j++) {

                const randomInt = this.getRandomInt(BOGGLE_CUBES_US_LETTER_DISTRIBUTION[0].length);
                const letter = BOGGLE_CUBES_US_LETTER_DISTRIBUTION[cubeIndex][randomInt];

                cubes.push(
                  <span key={cubeIndex}>
                    <Cube letter={letter}/>
                  </span>
                );

                game[i][j] = letter;
                cubeIndex++;
              }
          }


        this.props.updateGameBoard(cubes);
    };

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

	render() {


        let cubes = this.props.gameBoard;

    return (
    <div>
        <button type="button" onClick={() => this.generateGame()}> generate new game </button>

        <table style={tableStyle}>
            <tbody>
                <tr>
                    <td>
                        {cubes.slice(0,4)}
                    </td>
                </tr>
                <tr>
                    <td>
                        {cubes.slice(4,8)}
                    </td>
                </tr>
                <tr>
                    <td>
                        {cubes.slice(8,12)}
                    </td>
                </tr>
                <tr>
                    <td>
                        {cubes.slice(12,16)}
                    </td>
                </tr>
            </tbody>
        </table>


        <label htmlFor="name">
        Word:
        </label>
        <input
        id="name"
        type="text"
        value={this.props.word}
        onChange={(e) => this.props.updateWord(e.target.value)} />
        <button type="button" onClick={(e) => this.validateWord(e)}>validate word</button>
    </div>

    );
  }
}

export default CubeTray;