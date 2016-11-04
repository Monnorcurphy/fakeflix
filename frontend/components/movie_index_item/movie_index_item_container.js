import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MovieIndexItem from './movie_index_item';


const mapStateToProps = (state, ownProps) => {
  return ({ownProps})
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieIndexItem);
