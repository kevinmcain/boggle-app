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

        // todo this may not be the best choice for browser support
        var url = 'http://localhost:3000/input';
        var data = {
            word: this.props.word,
            gameMatrix: this.props.gameMatrix
        };

        fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));

    };

	generateGame = () => {

        let cubes = [];
        let gameMatrix = new Array();

        for (let i=0; i < BOGGLE_CUBES_US_LETTER_DISTRIBUTION.length / 4; i++) {
              gameMatrix[i] = new Array();
              for (let j=0; j < BOGGLE_CUBES_US_LETTER_DISTRIBUTION.length / 4; j++) {

                const cubeIndex = (i*(BOGGLE_CUBES_US_LETTER_DISTRIBUTION.length / 4))+j;
                const randomInt = this.getRandomInt(BOGGLE_CUBES_US_LETTER_DISTRIBUTION[0].length);
                const letter = BOGGLE_CUBES_US_LETTER_DISTRIBUTION[cubeIndex][randomInt];

                gameMatrix[i][j] = letter;
              }
          }

        this.props.updateGameMatrix(gameMatrix);
    };

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

	render() {

        let gameMatrix = this.props.gameMatrix;

    return (
        <div>
            <button type="button" onClick={() => this.generateGame()}> generate new game </button>

            <table style={tableStyle}>
                <tbody>
                    {
                        gameMatrix.map( function( row, i ) {

                            const rows = row.map( function( letter, j ) {

                                return (

                                        <td key={j}>
                                            <span key={(i*row.length)+j}>
                                                <Cube letter={letter}/>
                                            </span>
                                        </td>
                                )
                            } );


                            return (
                                <tr key={i}>
                                    {rows}
                                </tr>

                            )

                        } )
                    }
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