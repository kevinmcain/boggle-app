import React from 'react';
import Cube from '../components/Cube';
import { BOGGLE_CUBES_US_LETTER_DISTRIBUTION } from '../constants/boggleCubesUsLetterDistribution';

const tableStyle = {
    tableLayout: "fixed",
    width: "300px"
};

class CubeContainer extends React.Component {

    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

	render() {

      let cubes = [];

      for (let i=0; i < BOGGLE_CUBES_US_LETTER_DISTRIBUTION.length; i++) {

        const randomInt = this.getRandomInt(BOGGLE_CUBES_US_LETTER_DISTRIBUTION[0].length);
        const letter = BOGGLE_CUBES_US_LETTER_DISTRIBUTION[i][randomInt];

        cubes.push(
          <span key={i}>
            <Cube letter={letter}/>
          </span>
        );
      }

    return (
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
    );
  }
}

export default CubeContainer;