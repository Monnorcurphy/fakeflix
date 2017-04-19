import React from 'react';
import { Link, withRouter } from 'react-router';
import MovieIndexItem from '../movie_index_item/movie_index_item_container';
import ActorDetail from '../actor_detail/actor_detail_container'
var Masonry = require('react-masonry-component');


class SearchList extends React.Component{

  constructor(props){
    super(props);
      this.handleClick = this.handleClick.bind(this)

  }

  handleClick(url){
    return e => this.props.router.push(url)
  }

  capitalize(name){
    name = name.split(' ');
    let actor = '';
    for (let i = 0; i < name.length; i ++) {
      if ((name[i] === '') || (name[i]=== ' ')){
        continue
      }else{
        actor += name[i][0].toUpperCase() + name[i].slice(0 + 1) + ' ';
      }
    }
    return actor
  }

  componentDidUpdate(){
    this.focusSearch()
  }
  componentDidMount(){
    this.focusSearch()
  }

  focusSearch(){
    $('.search')[0].focus()
  }


  render(){
    let moviesArray = [];
    var match_actors = [];
    if(this.props.movies){
      let searched = [];
      let actors = {};
      let detail= [];

        for (let key in this.props.movies){

          if (this.props.movies[key].title.toLowerCase().match(this.props.search.toLowerCase())){
          searched.push(<MovieIndexItem searched= {true}  key={this.props.movies[key].title} movie={this.props.movies[key]}/>)
        }
        for (let actor in this.props.movies[key].actors){
          actor = this.capitalize(this.props.movies[key].actors[actor])

          if(actor.toLowerCase().match(this.props.search.toLowerCase()) && (Object.keys(actors).length < 20) && (!(actor in actors))){
            actors[actor] = true
            detail.push(<span className='actor-name' key={actor} onClick= {this.handleClick(`/actor/${actor}`)}><ActorDetail  searched={true} actor={actor}/></span>)
          }

          }
      }

      return(
        <div>
            <div className = 'search-results'>
              <Masonry className='searched-movies' elementType={'ul'} options={{fitWidth: true, columnWidth: 100 }}>
                {searched}
              </Masonry>
              <button className= 'Movie-Search' onClick={this.handleClick(`/trailer/${this.props.search}`)}>Search movies for: {this.props.search}</button>
              </div>
              <div className = 'Actor-list'>
                <h1 className='Actor-list-heading'>Actors</h1>
                {detail}
                <button className='Actor-Search' onClick={this.handleClick(`/actor/${this.props.search}`)}>Search: {this.props.search}</button>
              </div>
        </div>
      )
    }else{

      return(<div>No movies</div>)
    }
  }
};

export default withRouter(SearchList);
