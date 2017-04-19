import React from 'react';
import { Link, withRouter } from 'react-router';


class TrailerPlay extends React.Component{

  constructor(props){
    super(props);

  }

  componentDidMount(){
    let trailer = this.props.params.trailerId.split(' ')
    
    if (trailer[0] == ''){
      trailer.splice(0, 1)
    }

    trailer= trailer.join('+')
    this.props.fetchTrailer(trailer)
  }

  componentDidUpdate() {
    this.redirectIfLoggedOut();
  }

  redirectIfLoggedOut() {
    if (!this.props.loggedIn){
      this.props.router.replace("/");
    }
  }

  render(){
    if (this.props.trailer.etag){

      let trailer= String(this.props.trailer.items[0].id.videoId).split('').join('')

      this.props.trailer.etag= trailer

    }
    if (this.props.trailer){
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
          <div className='movie-playing'>
            <iframe className='movie-player' src={`https://www.youtube.com/embed/${this.props.trailer.etag}?modestbranding=1&iv_load_policy=3&showinfo=0&iv_load_policy=3}`} frameBorder="0" allowFullScreen/>

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


    else{
      return(<div>
        <h1>Loading!</h1>
    </div>
      )
    }

  }
};

export default withRouter(TrailerPlay);
