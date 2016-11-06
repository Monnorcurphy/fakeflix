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
          <div className='hide-these'>
            <h2 className = 'title'>{this.props.movie.title}</h2>
            <p className='description'>Description: {this.props.movie.description}</p>
            <p className='year'>Year: {this.props.movie.year}</p>
            <p className='genre'> Genre: {this.props.movie.genre} </p>
          </div>
        <div className='movie-playing'>
            <iframe width="426" height="240" src={this.props.movie.url} frameborder="0" allowFullScreen/>
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
