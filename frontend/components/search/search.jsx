import React from 'react';
import { Link, withRouter } from 'react-router';


class SearchList extends React.Component{

  constructor(props){
    super(props);

  }



  render(){
    if(this.props.searchMovies){
      return(
        <div>
          <h1>STUFF</h1>
        </div>
      )
    }
    else{
      return(<div>No movies</div>)
    }
  }
};

export default withRouter(SearchList);
