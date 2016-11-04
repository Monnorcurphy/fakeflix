import { connect } from 'react-redux';
import {fetchMovie} from '../../actions/movie_actions';
import MoviePlay from './movie_play';


const mapStateToProps = (state, ownProps) => {
  return ({movie: state.movies[ownProps.params.movieId]})
};

const mapDispatchToProps = (dispatch) => (
  {fetchMovie: id => dispatch(fetchMovie(id))}
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePlay);
