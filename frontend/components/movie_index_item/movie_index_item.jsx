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

  render(){
    if(this.props.movie){
      return(
        <div>
          <img className='movie-poster'
            src={this.props.movie.image_url}
            onClick={this.handleClick(`/movie/${this.props.movie.id}`)}/>
        </div>
      )
    }
    else{
      return(<div>LOADING</div>)
    }
  }
};

export default withRouter(MovieIndexItem);
