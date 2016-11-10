
import React from 'react';
import { Link } from 'react-router';
import MovieIndexItem from '../movie_index_item/movie_index_item_container';
import SearchPage from '../search/search';
var Carousel = require('nuka-carousel');


class MovieIndex extends React.Component{
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.search = this.search.bind(this);
      this.state = {filter: '', images: false}
      this.setState = this.setState.bind(this);
    }

    componentDidUpdate() {
      let that = this;
      this.redirectIfLoggedOut();

  	}

    componentWillMount(){
      this.props.fetchMovies();
    }

    componentDidMount(){
      let that = this;
      sync(function* (){
          yield sleep(1000);
          that.forceUpdate()
      });

      console.log('HEYO IM MR MESEEKS LOOK AT ME');
    }

    redirectIfLoggedOut() {
      if (!this.props.loggedIn){
        this.props.router.replace("/");
      }
  	}

    handleClick(url){
      return e => this.props.router.push(url)
    }


    search(parameters){
      let string = `${parameters.target.value}`;
      this.setState({filter: string});
    }

    render () {

      let sample1= this.props.movies[(Math.floor(Math.random() *50) + 1)]
      if (this.state.filter != ''){
        return(
          <div>
            <nav><button className="logout header-bar" onClick={this.props.logout}>Log Out</button>
            <p>Search:</p><input className='search header-bar' type='text' onChange={this.search} value={this.state.filter} />
              <Link to="/" className="header-bar">
                  <h1 className= 'logo'>FAKEFLIX</h1>
              </Link></nav>
        <SearchPage movies={this.props.movies} search={this.state.filter}/>
          </div>
      )}
      if (sample1){

        let movies =[];
        let comedy =[];
        let action =[];
        let sciFi = [];

        for (let key in this.props.movies) {

          if (movies.length < 50){
            movies.push(<MovieIndexItem searched= {false} key={this.props.movies[key].title} movie={this.props.movies[key]}/>)
          }
          if(this.props.movies[key].genre.includes('Comedy')){
            comedy.push(<MovieIndexItem searched= {false}  key={this.props.movies[key].title} movie={this.props.movies[key]}/>)
          }
          if(this.props.movies[key].genre.includes('Action')){
            action.push(<MovieIndexItem searched= {false}  key={this.props.movies[key].title} movie={this.props.movies[key]}/>)
          }
          if(this.props.movies[key].genre.includes('Sci-Fi') || this.props.movies[key].genre.includes('Fantasy')){
            sciFi.push(<MovieIndexItem searched= {false} key={this.props.movies[key].title} movie={this.props.movies[key]}/>)
          }
        }

        return (<div>
          <div className='main-header'>
            <nav><button className="logout header-bar" onClick={this.props.logout}>Log Out</button>
            <p>Search:</p><input className='search header-bar' type='text' onChange={this.search} />
              <Link to="/" className="header-bar">
                  <h1 className= 'logo'>FAKEFLIX</h1>
              </Link></nav>

              <div className= 'content-holder'>
                <div className='main-content-splash'>
                <input className='button header-bar' id='unique'
                  type='submit'
                  onClick={this.handleClick(`/movie/${sample1.id}`)}
                  value='Go to movie'/>
                  <h1 className='main-content-splash'>{sample1.title}</h1>
                  <p className='main-content-splash main-description'>Description: {sample1.description}</p>
                  <p className='main-content-splash'>Year: {sample1.year}</p>
                  <p className='main-content-splash'>Genre(s): {sample1.genre}</p>
                  <p className='main-content-splash'>Actor(s): {sample1.actors}</p>


                </div>
                <img className='main-content-splash' id='splash-poster' src={sample1.image_url} onClick={this.handleClick(`/movie/${sample1.id}`)}/>
              </div>
          </div>
          <div className='main-div'>
            <h3 className= 'label IMDB-50'>IMDB Top 50</h3>
            <Carousel className= 'carousel IMDB-50' slidesToShow={5} slidesToScroll={2} dragging={true} slideWidth={0.75} initialSlideHeight ={200}>
              {movies}
            </Carousel>
            <h3 className= 'label'>Action</h3>
            <Carousel className= 'carousel' slidesToShow={5} slidesToScroll={2} dragging={true} slideWidth={0.75}>
              {action}
            </Carousel>
            <h3 className= 'label'>Comedies</h3>
            <Carousel className= 'carousel' slidesToShow={5} slidesToScroll={2} dragging={true} slideWidth={0.75} >
              {comedy}
            </Carousel>
            <h3 className= 'label'>Sci-Fi and Fantasy</h3>
            <Carousel className= 'carousel' slidesToShow={5} slidesToScroll={2} dragging={true} slideWidth={0.75} >
              {sciFi}
            </Carousel>
          </div>
          </div>
          )
      }else {
        return (<div>LOADING!</div>)
      }


    }

};

function sync(generator){
    var _generator = generator();

    function done(){
        var result = _generator.next().value;
        if(result instanceof Promise){
            result.then(done);
        }
    }

    done();
}


function sleep(ms){
    return new Promise(function(res, rej){
        setTimeout(res, ms);
    });
}



export default MovieIndex;
