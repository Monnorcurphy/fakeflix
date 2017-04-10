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
    this.props.fetchActor(this.props.params.actorId)
  }

  render(){

    if (this.props.searched){
      return(
          <p onClick={this.handleClick(`/actor/${this.props.actor}`)}>
            {this.props.actor}
          </p>)
    }
    else{
      console.log(this.props);
      return(
        <h1 className='Actor Name'>{this.props.params.actorId}</h1>
      )
    }


}};

export default withRouter(ActorDetail);
