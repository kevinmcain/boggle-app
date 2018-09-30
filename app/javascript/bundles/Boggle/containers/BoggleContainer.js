// Simple example of a React "smart" component

import { connect } from 'react-redux';
import CubeTray from '../components/CubeTray';
import * as actions from '../actions/boggleActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = (state) => ({
                                        word: state.word,
                                        gameMatrix: state.gameMatrix,
                                        gameId: state.gameId
                                    });

// Don't forget to actually use connect!
// Note that we don't export Boggle, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, actions)(CubeTray);