
import React from 'react';
import { Link, withRouter } from 'react-router';
import MovieIndexItem from '../movie_index_item/movie_index_item_container';
import SearchPage from '../search/search';
import Carousel from '../carousel/carousel'


class MovieIndex extends React.Component{
    constructor(props){
      super(props);
      this.search = this.search.bind(this);
      this.state = {filter: '', images: false}
      this.sample1 = false
      this.setState = this.setState.bind(this);
      this.handleClick= this.handleClick.bind(this);

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
      });
    }

    handleClick(url){

      return e => this.props.router.push(url)
    }

    redirectIfLoggedOut() {
      if (!this.props.loggedIn){
        this.props.router.replace("/");
      }
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
            <nav className='header'>
              <Link to="/" className="header-bar">
                  <h1 className= 'logo'>FAKEFLIX</h1>
              </Link>
            <div className='search header-bar'>
              <input className='search header-bar' type='text' onChange={this.search} value={this.state.filter} autoFocus/>
            </div>
            <div className='logout header-bar'>
              <button className="logout header-bar" onClick={this.props.logout}>Log Out</button>
            </div>
          </nav>
        <SearchPage movies={this.props.movies} search={this.state.filter}/>
          <nav className= 'footer'>
            <div className='legal'>
            <p className="copyright">© 2016 Fakeflix. All rights reserved.</p>
            </div>
            <div className="contact-info">
              <div className='linkedin-div'>
                <a href="https://www.linkedin.com/profile/guided?trk=uno-choose-ge-no-intent&dl=no" className="linkedin ">
                  LinkedIn</a>
              </div>
              <div className= 'github-div' >
                <a href="https://github.com/Monnorcurphy/fullstack" className="github">
                  Github</a>
              </div>
            </div>
        </nav>
        </div>
      )}
      if (this.sample1){
        if (typeof this.sample1.actors.join === 'function')
          this.sample1.actors = this.sample1.actors.join(',')
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
            <nav className='header'>
              <Link to="/" className="header-bar">
                  <h1 className= 'logo'>FAKEFLIX</h1>
              </Link>
            <div className='search header-bar'>
              <input className='search header-bar' type='text' onChange={this.search} autoFocus/>
            </div>
            <div className='logout header-bar'>
              <button className="logout header-bar" onClick={this.props.logout}>Log Out</button>
            </div>
            </nav>

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
                </div>
                <img className='main-content-splash' id='splash-poster' src={this.sample1.image_url} onClick={this.handleClick(`/movie/${this.sample1.id}`)}/>
                  <img className = 'splash-play-button'src='http://res.cloudinary.com/dqiuefax1/image/upload/v1491698763/play_oxkc6l.png'

                  onClick={this.handleClick(`/movie/${this.sample1.id}`)}/>
              </div>
          </div>

          <h2>IMDB Top 50</h2>
          <div className= 'movies'>
            <Carousel movies={movies}/>
          </div>
          <h2>Action</h2>
          <div className= 'action'>
            <Carousel movies={action}/>
          </div>
          <h2>Sci-Fi</h2>
          <div className= 'action'>
            <Carousel movies={sciFi}/>
          </div>
          <h2>Comedy</h2>
          <div className= 'action'>
            <Carousel movies={comedy}/>
          </div>

          <nav className= 'footer'>
            <div className='legal'>
            <p className="copyright">© 2016 Fakeflix. All rights reserved.</p>
            </div>
            <div className="contact-info">
              <div className='linkedin-div'>
                <a href="https://www.linkedin.com/profile/guided?trk=uno-choose-ge-no-intent&dl=no" className="linkedin ">
                  LinkedIn</a>
              </div>
              <div className= 'github-div' >
                <a href="https://github.com/Monnorcurphy/fullstack" className="github">
                  Github</a>
              </div>
            </div>
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
