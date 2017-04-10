import React from 'react';
import { Link, withRouter } from 'react-router';


class MoviePlay extends React.Component{

  constructor(props){
    super(props);
    this.rateMovie = this.rateMovie.bind(this);
    this.rateMovie = this.rateMovie.bind(this);
    this.state={rating: false}
  }

  componentDidMount(){
    if(!this.props.movie){
      this.props.fetchMovie(this.props.params.movieId)
    }
  }

  componentDidUpdate() {
    this.redirectIfLoggedOut();

  }

  redirectIfLoggedOut() {
    if (!this.props.loggedIn){
      this.props.router.replace("/");
    }
  }

  rateMovie(value){
    this.props.rateMovie(this.props.movie.id, value)
    this.props.movie.avg_rating = value;
    this.setState({rating: true})
  }


  render(){

    if (this.props.movie &&  typeof this.props.movie.actors != String)
        this.props.movie.actors = this.props.movie.actors
    if (this.props.movie && this.props.movie.avg_rating === 0){
      
      return(
        <div className='movie-play'>
          <nav className='header'>
          <Link to="/" className="movie-play-header">
              <h1 className= 'exit'>X</h1>
            </Link>
          <Link to="/" className="movie-play-header">
              <h1 className= 'logo'>Fakeflix</h1>
            </Link>
          </nav>

        <div className='hide-these' id='hide-these'>
            <div>
              <h1 className='title'>{this.props.movie.title}</h1>
            </div>
              <p className='description'>Description: {this.props.movie.description}</p>
            <div>
              <p className='year'>Year: {this.props.movie.year}</p>
            </div>
              <p className='genre'>Genre(s): {this.props.movie.genre}</p>
            <div>
              <p className='actors'>Actor(s): {this.props.movie.actors}</p>
            </div>
            <div>
              <fieldset  className ='rating'>
              <input type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"onClick={this.rateMovie.bind(null, 5)} ></label>
              <input type="radio" id="star4" name="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars" onClick={this.rateMovie.bind(null, 4)}></label>
              <input type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars" onClick={this.rateMovie.bind(null, 3)}></label>
              <input type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars" onClick={this.rateMovie.bind(null, 2)} ></label>
              <input type="radio" id="star1" name="rating" value="1"/><label className = "full" htmlFor="star1" title="Bad - 1 star"  onClick={this.rateMovie.bind(null, 1)}></label>
              </fieldset>
            </div>
          </div>
        <div className='movie-playing'>
          <iframe className='movie-player' src={`https://www.youtube.com/embed/${this.props.movie.url}?modestbranding=1&iv_load_policy=3&showinfo=0&iv_load_policy=3}`} frameBorder="0" allowFullScreen/>

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
    }
    else if(this.props.movie) {

      return(
        <div className='movie-play'>
          <nav className='header'>
          <Link to="/" className="movie-play-header">
              <h1 className= 'exit'>X</h1>
            </Link>
          <Link to="/" className="movie-play-header">
              <h1 className= 'logo'>Fakeflix</h1>
            </Link>
          </nav>
        <div className='hide-these' id='hide-these'>
            <h1 className='title'>{this.props.movie.title}</h1>
            <p className='description'>Description: {this.props.movie.description}</p>
            <p className='year'>Year: {this.props.movie.year}</p>
            <p className='genre'>Genre(s): {this.props.movie.genre}</p>
            <p className='actors'>Actor(s): {this.props.movie.actors}</p>
            <fieldset  className ='rating'>
      <input type="radio" id="star5" name="rating" value="5" checked={this.props.movie.avg_rating === 5 ? 'checked' : false} /><label className = "full" htmlFor="star5" title="Awesome - 5 stars" onClick={this.rateMovie.bind(null, 5)}></label>
      <input type="radio" id="star4" name="rating" value="4"  checked={this.props.movie.avg_rating === 4 ? 'checked' : false} /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars" onClick={this.rateMovie.bind(null, 4)}></label>
      <input type="radio" id="star3" name="rating" value="3" checked={this.props.movie.avg_rating === 3 ? 'checked' : false} /><label className = "full" htmlFor="star3" title="Meh - 3 stars" onClick={this.rateMovie.bind(null, 3)}></label>
      <input type="radio" id="star2" name="rating" value="2"  checked={this.props.movie.avg_rating === 2 ? 'checked' : false}/><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars" onClick={this.rateMovie.bind(null, 2)}></label>
      <input type="radio" id="star1" name="rating" value="1" checked={this.props.movie.avg_rating === 1 ? 'checked' : false} /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star" onClick={this.rateMovie.bind(null, 1)}></label>

  </fieldset>
          </div>
        <div className='movie-playing'>
          <iframe className='movie-player' src={`https://www.youtube.com/embed/${this.props.movie.url}?modestbranding=1&iv_load_policy=3&showinfo=0&iv_load_policy=3}`} frameBorder="0" allowFullScreen/>

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
        </div>)
    }

    else{
      return(<div className='loading'><div id="loader">
        <div id="box"></div>
        <div id="hill"></div>
    </div></div>
      )
    }

  }
};

export default withRouter(MoviePlay);
