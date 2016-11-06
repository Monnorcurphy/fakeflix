import React from 'react';
import { Link } from 'react-router';
import MovieIndexItem from '../movie_index_item/movie_index_item_container';
var Carousel = require('nuka-carousel');

class MovieIndex extends React.Component{
    constructor(props){
      super(props);
    }

    componentDidUpdate() {
      // this.redirectIfLoggedOut();
  	}

    componentWillMount(){
      this.props.fetchMovies();
    }

    redirectIfLoggedOut() {
  		if (!this.props.loggedIn){
        this.props.router.replace("/");
      }
  	}

    search(){}

    render () {

      let sample1= this.props.movies[(Math.floor(Math.random() *50) + 1)]
      if (sample1){
        let movies =[];
        for (let key in this.props.movies) {
            movies.push(<MovieIndexItem key={this.props.movies[key].title} movie={this.props.movies[key]}/>)
            if (movies.length >= 50){
              break;
          }
        }
        console.log(this.props.movies);
        return (<div>
          <div className='main-header'>
            <button className="logout" onClick={this.props.logout}>Log Out</button>
              <div className= 'content-holder'>
                <div className='main-content-splash'>
                  <input className='search' type='text'/>
                  <input className='button play' type='submit' value='Play'/>
                  <h2 className='main-content-splash'>{sample1.title}</h2>
                  <p className='main-content-splash'>Description: {sample1.description}</p>
                  <p className='main-content-splash'>Year: {sample1.year}</p>
                  <p className='main-content-splash'>Genre(s): {sample1.genre}</p>
                </div>
                <img className='main-content-splash' src={sample1.image_url}/>
              </div>
          </div>
          <div className='main-div'>
            <Carousel slidesToShow={5} cellSpacing={1} dragging={true} dots={false} >
              {movies}
            </Carousel>
          </div>

        </div>)
      } else {
        return (<div>LOADING!</div>)
      }


    }

};

export default MovieIndex;
