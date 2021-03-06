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

    getCsrfToken = () => {
        return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    };

    validateWord = (e) => {

        const token = this.getCsrfToken();

        const url = 'http://' + window.location.host + '/games/' + this.props.gameId + '/words';
        const data = {
            name: this.props.word.toUpperCase()
        };

        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json',
            'X-CSRF-Token': token
          }
        }).then(response => {
            if (response.ok || response.status === 409) {
                alert('Good word!')
            }
            if (response.status === 400) {
                alert('Word is not found')
            }
            return response;

        }).catch(function(error) {
          console.log(error);
        });

    };

    postGame = (gameMatrix) => {

        const gameHash = [].concat.apply([], gameMatrix).join('');

        const token = this.getCsrfToken();

        const url = 'http://' + window.location.host + '/games';

        const data = {
            game_hash: gameHash,
            json_data: JSON.stringify(gameMatrix)
        };

        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json',
            'X-CSRF-Token': token
          }
        }).then(response => {
            if (response.ok || response.status === 409) {

                response.json().then(data => {
                        console.log(JSON.stringify(data));
                        this.props.updateGameId(data.id);
                    });
            }
            return response;

        }).catch(function(error) {
            console.log(error);
        });
    }

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

        this.postGame(gameMatrix);
    };

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

	render() {

        let gameMatrix = this.props.gameMatrix;

    return (
    <div className="container">
        <div className="jumbotron col-md-4">
            <button type="button" className="btn btn-dark" onClick={() => this.generateGame()}> new game </button>
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
            <br />
            <div className="input-group">
                <input
                className="form-control"
                id="name"
                type="text"
                style={ { textTransform: "uppercase" } }
                pattern="[A-Z]{16}"
                value={this.props.word}
                onChange={(e) => this.props.updateWord(e.target.value)} />
                   <span className="input-group-btn">
                        <button type="button" className="btn btn-dark" onClick={(e) => this.validateWord(e)}>check word</button>
                   </span>
            </div>
        </div>
    </div>
    );
  }
}

export default CubeTray;