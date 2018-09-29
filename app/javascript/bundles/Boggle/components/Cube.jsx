import React from 'react';
import * as actions from '../actions/boggleActionCreators';
import { connect } from 'react-redux';

class Cube extends React.Component {

    state = { backgroundColor: 'black' };

	toggleActive = () => {

	    var updatedWord = this.props.word + this.props.letter;
        console.log(updatedWord);
        this.props.dispatch(actions.updateWord(updatedWord));
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
        <button style={buttonStyle} onClick={() => this.toggleActive()}>{this.props.letter}</button>
    );
  }
}


// returning an object with course property means that you will be able to access that courses property above
// by calling this.props.course. The state param represents the state that's within the redux store.
// what is ownProps?
function mapStateToProps(state, ownProps){
    return {
        word: state.word
    };
}

export default connect(mapStateToProps)(Cube);