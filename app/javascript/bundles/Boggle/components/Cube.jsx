import React from 'react';

class Cube extends React.Component {

    state = { backgroundColor: 'black' };

	toggleActive = () => {
        this.setState((prevState) => ({
            backgroundColor: prevState.backgroundColor !== 'black' ? 'black' : 'blue'
        }));
  };

	render() {

    let buttonStyle =
        {
           backgroundColor: this.state.backgroundColor,
           height: '64px',
           width: '64px',
           border: 'none',
           color: 'white',
           padding: '20px',
           textAlign: 'center',
           textDecoration: 'none',
           display: 'inline-block',
           fontSize: '16px',
           margin: '4px 2px',
           borderRadius: '12px'
        };

    return (
        <button style={buttonStyle} onClick={this.toggleActive}>{this.props.letter}</button>
    );
  }
}

export default Cube;