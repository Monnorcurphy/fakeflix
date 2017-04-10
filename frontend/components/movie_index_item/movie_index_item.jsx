import React from 'react';
import { Link, withRouter } from 'react-router';


class MovieIndexItem extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(url){
    return e => this.props.router.push(url)
  }

  handleRating(movie,value){
    this.props.rateMovie(movie,value)
  }

  render(){
    if(this.props.movie){
      if(this.props.searched){
        return(
            <div>
              <img className='movie-searched-poster'
                src={this.props.movie.image_url}
                onClick={this.handleClick(`/movie/${this.props.movie.id}`)}/>
            </div>
          )
      }else{
        return(
            <div>
              <img className='movie-poster'
                src={this.props.movie.image_url}
                onClick={this.handleClick(`/movie/${this.props.movie.id}`)}></img>

            </div>
          )
      }

    }
    else{
      return(<div>LOADING</div>)
    }
  }
};

export default withRouter(MovieIndexItem);
