import React from 'react';
import { Link, withRouter } from 'react-router';


class ActorDetail extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(url){
    return e => this.props.router.push(url)
  }



  componentDidMount(){
    let actor = this.props.params.actorId.split(' ')
    if (actor[0] == ''){
      actor.splice(0, 1)
    }
    actor = actor.join('%20')
    this.props.fetchActor(actor)
  }

  render(){
    // console.log(this.props);
    if (this.props.searched){
      return(
          <p onClick={this.handleClick(`/actor/${this.props.actor}`)}>
            {this.props.actor}
          </p>)
    }
    else{
      let films= []
      let ordered= []
      for(let film in this.props.filmography){
        film = this.props.filmography[film]
        if (film.title){
          ordered.push(film.title)
        }
        ordered.sort()
        for (let film in ordered){
          film = ordered[film]
          films.push( <li key={film} onClick={this.handleClick(`/trailer/${film}`)}>{film}</li>)
        }

      }

      return(<div key={this.props.params.actorId}>

        <h1 className='Actor Name'>{this.props.params.actorId}</h1>
        <ul>
          {films}
        </ul>
      </div>
      )
    }


}};

export default withRouter(ActorDetail);
