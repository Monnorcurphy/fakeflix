import React from 'react';
import { Link, withRouter } from 'react-router';


class MoviePlay extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
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
        <div className='hide-these' id='hide-these'>
            <h1 className='title'>{this.props.movie.title}</h1>
            <p className='description'>Description: {this.props.movie.description}</p>
            <p className='year'>Year: {this.props.movie.year}</p>
            <p className='genre'>Genre(s): {this.props.movie.genre}</p>
            <p className='actors'>Actor(s): {this.props.movie.actors}</p>
          </div>
        <div className='movie-playing'>
          <iframe className='movie-player' src={`https://www.youtube.com/embed/${this.props.movie.url}`} frameBorder="0" allowFullScreen/>

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
