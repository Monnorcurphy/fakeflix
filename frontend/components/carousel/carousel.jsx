import React from 'react';
import { Link, withRouter } from 'react-router';
import MovieIndexItem from '../movie_index_item/movie_index_item_container';
import SearchPage from '../search/search';
let left= '<';


class Carousel extends React.Component{
    constructor(props){
      super(props);
      this.state = {idx1: 0, idx2: 5, length: props.movies.length + 3}
      this.nextMovies = this.nextMovies.bind(this)
      this.prevMovies = this.prevMovies.bind(this)
      this.handleClick= this.handleClick.bind(this);
    }

    nextMovies(){

      let idx1  = this.state.idx1;
      let idx2  = this.state.idx2;

      if (idx2 + 3 <= this.state.length){
        this.setState({idx1: this.state.idx1 + 3});
        this.setState({idx2: this.state.idx2 + 3});
      }
      else if ((idx2 + 3 < this.state.length) && (idx2 != this.state.length)){
        let diff = this.state.length - this.state.idx2;
        this.setState({idx1: idx1 + diff});
        this.setState({idx2: idx2 + diff});
      }
    }

    prevMovies(){

      let idx1  = this.state.idx1;
      let idx2  = this.state.idx2;

      if (idx1 - 3 >= 0){
        this.setState({idx1: this.state.idx1 - 3});
        this.setState({idx2: this.state.idx2 - 3});
      }
      else if ((idx1 - 3 < 0) && (idx1 != 0)){
        let diff = 0 - this.state.idx1;
        this.setState({idx1: idx1 - diff});
        this.setState({idx2: idx2 - diff});
      }
    }

    handleClick(url){

      return e => this.props.router.push(url)
    }



    render () {
        return (<div className='index-page'>
        {}
        <div className= 'carousel-outer'>
          <div className='carousel'>
            <div className= 'images'>{

                  this.props.movies.slice(this.state.idx1, this.state.idx2).map((film,idx) =>
                  <span key={idx}><img className = 'Movie-poster' src={film.props.movie.image_url} onClick={this.handleClick(`/movie/${film.props.movie.id}`)}/>
                    <img className = 'play-button'src='http://res.cloudinary.com/dqiuefax1/image/upload/v1491698763/play_oxkc6l.png'

                    onClick={this.handleClick(`/movie/${film.props.movie.id}`)}/>

                    </span>)}

            </div>
          </div>

          <button className='arrow left' onClick={this.prevMovies}></button>
          <button className='arrow right' onClick={this.nextMovies}></button>


      </div>
    </div>
)}};
export default withRouter(Carousel)
