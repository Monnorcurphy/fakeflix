import React from 'react';
import { Link, withRouter } from 'react-router';
var Masonry = require('react-masonry-component');
import SearchPage from '../search/search';

class ActorDetail extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)

  }

  handleClick(url){
    return e => this.props.router.push(url)
  }

  componentWillMount(){
    if(this.props.ownProps.params){
      let actor = this.props.ownProps.params.actorId.split(' ')
      actor = actor.join('%20')
      this.props.fetchActor(actor)
    }
  }

  componentDidMount(){
    if(this.props.ownProps.params){
      let actor = this.props.ownProps.params.actorId.split(' ')
      actor = actor.join('%20')
      this.props.fetchActor(actor)
    }
  }

  capitalize(name){

    name = name.split(' ');
    let actor = '';
    for (let i = 0; i < name.length; i ++) {
      if ((name[i] === '') || (name[i]=== ' ')){
        continue
      }else{
        actor += name[i][0].toUpperCase() + name[i].slice(0 + 1) +' '
      }
    }
    return actor
  }




  render(){

    if (this.props.searched){

      return(
          <p className='Search-display' onClick={this.handleClick(`/actor/${this.props.ownProps.actor}`)}>
            {this.props.ownProps.actor}
          </p>)
    }
    else if(!(this.props.filmography)){

      return (<div className='loading'><div id="loader">
        <div id="box"></div>
        <div id="hill"></div>
    </div></div>)
    }
    else{
      let films= []
      let ordered= []
      for(let film in this.props.filmography){
        film = this.props.filmography[film]

        films.push(<div>
          <img className='movie-searched-poster'
            src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
            onClick={this.handleClick(`/trailer/${film.title}`)}/>
        </div>)
        }



      return(<div key={this.props.params.actorId}>
        <div>
          <nav className='header'>
            <Link to="/" className="header-bar">
                <h1 className= 'logo'>FAKEFLIX</h1>
            </Link>
          <div className='search header-bar'>
            <Link to= '/'><button>Back to Main</button></Link>
          </div>
          <div className='logout header-bar'>
            <button className="logout header-bar" onClick={this.props.logout}>Log Out</button>
          </div>
        </nav>
        <div className ='Actor-Details'>
          <img className='Actor-Image' src={`https://image.tmdb.org/t/p/original/${this.props.actor.profile_path}`} />
        <h1 className='Actor-Name'>{this.capitalize(this.props.params.actorId)}</h1>
        </div>
        <div>
          <Masonry className='searched-movies' elementType={'ul'} options={{fitWidth: true, columnWidth: 100 }}>
            {films}
          </Masonry>

      </div>
    </div>
  </div>

      )
    }


}};

export default withRouter(ActorDetail);
