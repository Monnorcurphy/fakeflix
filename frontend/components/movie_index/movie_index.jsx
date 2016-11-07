import React from 'react';
import { Link } from 'react-router';
import MovieIndexItem from '../movie_index_item/movie_index_item_container';
var Carousel = require('nuka-carousel');

class MovieIndex extends React.Component{
    constructor(props){
      super(props);
    }

    componentDidUpdate() {
      debugger;
      this.redirectIfLoggedOut();

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
        let comedy =[];
        let action =[];

        for (let key in this.props.movies) {
            if (movies.length < 50){
              movies.push(<MovieIndexItem key={this.props.movies[key].title} movie={this.props.movies[key]}/>)
            }
            if((this.props.movies[key].genre) && (this.props.movies[key].genre.includes('Comedy'))){
              comedy.push(<MovieIndexItem key={this.props.movies[key].title} movie={this.props.movies[key]}/>)
            }
            if((this.props.movies[key].genre) && (this.props.movies[key].genre.includes('Action'))){
              action.push(<MovieIndexItem key={this.props.movies[key].title} movie={this.props.movies[key]}/>)
            }
          }

        return (<div>
          <div className='main-header'>
            <button className="logout" onClick={this.props.logout}>Log Out</button>
              <div className= 'content-holder'>
                <div className='main-content-splash'>
                  <Link to="/" className="header-link">
                    <h1 className= 'logo'>FAKEFLIX</h1>
                  </Link>
                  <input className='search' type='text'/>
                  <input className='button play' type='submit' value='Play'/>
                  <h1 className='main-content-splash'>{sample1.title}</h1>
                  <p className='main-content-splash'>Description: {sample1.description}</p>
                  <p className='main-content-splash'>Year: {sample1.year}</p>
                  <p className='main-content-splash'>Genre(s): {sample1.genre}</p>
                </div>
                <img className='main-content-splash' src={sample1.image_url}/>
              </div>
          </div>
          <div className='main-div'>
            <h3 className= 'label IMDB-50'>IMDB Top 50</h3>
            <Carousel className= 'carousel IMDB-50' slidesToShow={6} dragging={true} >
              {movies}
            </Carousel>
            <h3 className= 'label'>Action</h3>
            <Carousel className= 'carousel' slidesToShow={6} dragging={true} >
              {action}
            </Carousel>
            <h3 className= 'label'>Comedies</h3>
            <Carousel className= 'carousel' slidesToShow={6} dragging={true} >
              {comedy}
            </Carousel>
          </div>

        </div>)
      }else {
        return (<div>LOADING!</div>)
      }


    }

};

export default MovieIndex;
