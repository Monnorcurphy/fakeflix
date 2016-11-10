import React from 'react';
import { Link, withRouter } from 'react-router';


class MoviePlay extends React.Component{

  constructor(props){
    super(props);
    this.rateMovie = this.rateMovie.bind(this);
    this.rateMovie = this.rateMovie.bind(this);
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
    this.props.rateMovie(value, this.props.movie.id)
    this.props.movie.avg_rating = value;
    this.setState({rating: true})
  }


  render(){
    console.log(this.props);
    if (this.props.movie && this.state.rating === 0){

      return(
        <div className='movie-play'>
          <button className="logout movie-play" onClick={this.props.logout}>Log Out</button>
          <Link to="/" className="movie-play-header">
              <h1 className= 'logo'>FAKEFLIX</h1>
            </Link>
        <div className='hide-these' id='hide-these'>
            <h1 className='title'>{this.props.movie.title}</h1>
            <p className='description'>Description: {this.props.movie.description}</p>
            <p className='year'>Year: {this.props.movie.year}</p>
            <p className='genre'>Genre(s): {this.props.movie.genre}</p>
            <p className='actors'>Actor(s): {this.props.movie.actors}</p>
            <fieldset  className ='rating' class="rating">
      <input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"onClick={this.rateMovie.bind(null, 5)} ></label>
      <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars" onClick={this.rateMovie.bind(null, 4)}></label>
      <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars" onClick={this.rateMovie.bind(null, 3)}></label>
      <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars" onClick={this.rateMovie.bind(null, 2)} ></label>
      <input type="radio" id="star1" name="rating" value="1"/><label class = "full" for="star1" title="Bad - 1 star"  onClick={this.rateMovie.bind(null, 1)}></label>

  </fieldset>
          </div>
        <div className='movie-playing'>
          <iframe className='movie-player' src={`https://www.youtube.com/embed/${this.props.movie.url}?autoplay=1&modestbranding=1&iv_load_policy=3&showinfo=0&iv_load_policy=3}`} frameBorder="0" allowFullScreen/>

          </div>

        </div>


      )
    }
    else if(this.props.movie) {
      console.log('you are here!');
      console.log(this.props.movie);
      return(
        <div className='movie-play'>
          <button className="logout movie-play" onClick={this.props.logout}>Log Out</button>
          <Link to="/" className="movie-play-header">
              <h1 className= 'logo'>FAKEFLIX</h1>
            </Link>
        <div className='hide-these' id='hide-these'>
            <h1 className='title'>{this.props.movie.title}</h1>
            <p className='description'>Description: {this.props.movie.description}</p>
            <p className='year'>Year: {this.props.movie.year}</p>
            <p className='genre'>Genre(s): {this.props.movie.genre}</p>
            <p className='actors'>Actor(s): {this.props.movie.actors}</p>
            <fieldset  className ='rating' class="rating">
      <input type="radio" id="star5" name="rating" value="5" checked={this.props.movie.avg_rating === 5 ? 'checked' : false} /><label class = "full" for="star5" title="Awesome - 5 stars" onClick={this.rateMovie.bind(null, 5)}></label>
      <input type="radio" id="star4" name="rating" value="4"  checked={this.props.movie.avg_rating === 4 ? 'checked' : false} /><label class = "full" for="star4" title="Pretty good - 4 stars" onClick={this.rateMovie.bind(null, 4)}></label>
      <input type="radio" id="star3" name="rating" value="3" checked={this.props.movie.avg_rating === 3 ? 'checked' : false} /><label class = "full" for="star3" title="Meh - 3 stars" onClick={this.rateMovie.bind(null, 3)}></label>
      <input type="radio" id="star2" name="rating" value="2"  checked={this.props.movie.avg_rating === 2 ? 'checked' : false}/><label class = "full" for="star2" title="Kinda bad - 2 stars" onClick={this.rateMovie.bind(null, 2)}></label>
      <input type="radio" id="star1" name="rating" value="1" checked={this.props.movie.avg_rating === 1 ? 'checked' : false} /><label class = "full" for="star1" title="Sucks big time - 1 star" onClick={this.rateMovie.bind(null, 1)}></label>

  </fieldset>
          </div>
        <div className='movie-playing'>
          <iframe className='movie-player' src={`https://www.youtube.com/embed/${this.props.movie.url}?autoplay=1&modestbranding=1&iv_load_policy=3&showinfo=0&iv_load_policy=3}`} frameBorder="0" allowFullScreen/>

          </div>

        </div>)
    }

    else{
      return(
        <h2>LOADING!!!!!</h2>
      )
    }

  }
};

export default withRouter(MoviePlay);
