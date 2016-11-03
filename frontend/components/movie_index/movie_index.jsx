import React from 'react';
import { Link } from 'react-router';
import MovieIndexItem from '../movie_index_item/movie_index_item_container';

class MovieIndex extends React.Component{
    constructor(props){
      super(props);
    }

    componentDidUpdate() {
      this.redirectIfLoggedOut();
  	}

    componentWillMount(){

      // this.store.dispatch(fetchMovies());

    }
    redirectIfLoggedOut() {
  		if (!this.props.loggedIn){
        this.props.router.replace("/");
      }
  	}

    render () {
      return (<div>
        <div className='main-header'>
          <button className="logout" onClick={this.props.logout}>Log Out</button>
          <input className='search' type='text' value='Search'/>
          <input className='button' type='submit' value='Play'/>
        </div>
        <div className='main-div'>
          <span className='main-movies'>
              <MovieIndexItem/>
          </span>
        </div>

      </div>)
    }

};

export default MovieIndex;
