
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
      this.sample1 = false
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
        yield sleep(2500);
        that.forceUpdate()
        yield sleep(5000);
        that.forceUpdate()
        yield sleep(5000);
        that.forceUpdate()
      });
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
      if (!this.sample1){
        this.sample1= this.props.movies[(Math.floor(Math.random() *50) + 1)]
      }

      if (this.state.filter != ''){
        return(
          <div>
            <nav className='header'><button className="logout header-bar" onClick={this.props.logout}>Log Out</button>
            <input className='search header-bar' type='text' onChange={this.search} value={this.state.filter} autoFocus/>
              <Link to="/" className="header-bar">
                  <h1 className= 'logo'>FAKEFLIX</h1>
              </Link></nav>
        <SearchPage movies={this.props.movies} search={this.state.filter}/>
          <nav className= 'footer'>
            <p>© 2016 Fakeflix. All rights reserved.</p>
          <a href="https://www.linkedin.com/profile/guided?trk=uno-choose-ge-no-intent&dl=no" className="footer-bar">
                <p className= 'logo'>Linkedin</p>
            </a>
            <a href="https://github.com/Monnorcurphy/fakeflix" className="footer-bar">
                <p className= 'logo'>Github</p>
              </a>
                </nav>
        </div>
      )}
      if (this.sample1){

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

        return (<div className='index-page'>
          <div className='main-header'>
            <nav className='header'><button className="logout header-bar" onClick={this.props.logout}>Log Out</button>
            <input className='search header-bar' type='text' onChange={this.search} autoFocus/>
              <Link to="/" className="header-bar">
                  <h1 className= 'logo'>FAKEFLIX</h1>
              </Link></nav>

              <div className= 'content-holder'>
                <div className='main-content-splash'>
                  <div className='title-div'>
                  <h1 className='main-content-splash'>{this.sample1.title}</h1>
                  </div>
                  <div className='description-div'>
                  <p className='main-content-splash main-description'>Description: {this.sample1.description}</p>
                  </div>
                  <div className='year-div'>
                  <p className='main-content-splash'>Year: {this.sample1.year}</p>
                  </div>
                  <div className='genre-div'>
                  <p className='main-content-splash'>Genre(s): {this.sample1.genre}</p>
                  </div>
                  <div className='actors-div'>
                  <p className='main-content-splash'>Actor(s): {this.sample1.actors}</p>
                  </div>
                  <div className='movie-button-div'>
                  <input className='button header-bar' id='unique'
                    type='submit'
                    onClick={this.handleClick(`/movie/${this.sample1.id}`)}
                    value='Go to movie'/>
                </div>

                </div>
                <img className='main-content-splash' id='splash-poster' src={this.sample1.image_url} onClick={this.handleClick(`/movie/${this.sample1.id}`)}/>
              </div>
          </div>
          <div className='main-div'>
            <h3 className= 'label IMDB-50'>IMDB Top 50</h3>
            <Carousel className= 'carousel IMDB-50' slidesToShow={6} slidesToScroll={2} dragging={true} slideWidth={0.75} initialSlideHeight ={200}>
              {movies}
            </Carousel>
            <h3 className= 'label'>Action</h3>
            <Carousel className= 'carousel' slidesToShow={6} slidesToScroll={2} dragging={true} slideWidth={0.75}>
              {action}
            </Carousel>
            <h3 className= 'label'>Comedies</h3>
            <Carousel className= 'carousel' slidesToShow={6} slidesToScroll={2} dragging={true} slideWidth={0.75} >
              {comedy}
            </Carousel>
            <h3 className= 'label'>Sci-Fi and Fantasy</h3>
            <Carousel className= 'carousel' slidesToShow={6} slidesToScroll={2} dragging={true} slideWidth={0.75} >
              {sciFi}
            </Carousel>

          </div>

          <nav className= 'footer'>
            <p>© 2016 Fakeflix. All rights reserved.</p>
          <a href="https://www.linkedin.com/profile/guided?trk=uno-choose-ge-no-intent&dl=no" className="footer-bar">
                <p className= 'logo'>Linkedin</p>
            </a>
            <a href="https://github.com/Monnorcurphy/fakeflix" className="footer-bar">
                <p className= 'logo'>Github</p>
              </a>
                </nav>


        </div>
          )
      }else {

        return (<div className='loading'><div id="loader">
          <div id="box"></div>
          <div id="hill"></div>
      </div></div>)
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
