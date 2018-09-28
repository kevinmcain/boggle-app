import PropTypes from 'prop-types';
import React from 'react';
import CubeContainer from '../components/CubeContainer';

const Boggle = ({ name, updateName }) => (

      <div className="container">
        <br />
        <h2>Boggle</h2>
        <CubeContainer />
      </div>
);

Boggle.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
};

export default Boggle;