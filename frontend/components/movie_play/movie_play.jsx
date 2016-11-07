import React from 'react';
import { Link, withRouter } from 'react-router';


class MoviePlay extends React.Component{

  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(!this.props.movie){
      let movie = this.props.fetchMovie(this.props.params.movieId)
    }
  }


  render(){
    if (this.props.movie){
      
      return(
        <div className='movie-play'>
          <button className="logout movie-play" onClick={this.props.logout}>Log Out</button>
          <Link to="/" className="movie-play-header">
              <h1 className= 'logo'>FAKEFLIX</h1>
            </Link>
            <input className='button play movie-play' type='submit' value='Play'/>
        <div className='hide-these'>
            <h1 className='title'>{this.props.movie.title}</h1>
            <p className='description'>Description: {this.props.movie.description}</p>
            <p className='year'>Year: {this.props.movie.year}</p>
            <p className='genre'>Genre(s): {this.props.movie.genre}</p>
            <p className='actors'>Actor(s): {this.props.movie.actors}</p>
          </div>
        <div className='movie-playing'>
            <img className='movie' src={this.props.movie.image_url}/>
          </div>

        </div>
      )
    }
    else{
      return(
        <h2>LOADING!!!!!</h2>
      )
    }

  }
};

export default withRouter(MoviePlay);
