import React from 'react';
import { Link, withRouter } from 'react-router';
import MovieIndexItem from '../movie_index_item/movie_index_item_container';
var Carousel = require('nuka-carousel');
var Masonry = require('react-masonry-component');

class SearchList extends React.Component{

  constructor(props){
    super(props);

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
    this.props.search
    let last = 0;
    let count = 0;
    let moviesArray = [];
    var match_actors = []
    let display = []
    if(this.props.movies){
      let searched = [];
        for (let key in this.props.movies){
          match_actors.push(this.props.movies[key].actors.join().split(','))
          function addToObject(array) {
            let object = {}
            let arrayed = array.toString().split(',')
            arrayed.forEach(function(el) {
              if (object.el !== true){
                object.el = true

              }
            })
            return object

          }
          match_actors = addToObject(match_actors)


          if (this.props.movies[key].title.toLowerCase().match(this.props.search.toLowerCase()))
          searched.push(<MovieIndexItem searched= {true}  key={this.props.movies[key].title} movie={this.props.movies[key]}/>)
        }
        
        debugger;
        match_actors.forEach((el) => {
          if(el.toLowerCase().match(this.props.search.toLowerCase()))
            display.push(el)
        })
        debugger;



      return(
        <div>
            <div className = 'search-results'>

              <Masonry className='searched-movies' elementType={'ul'} options={{fitWidth: true, columnWidth: 100 }}>
                {searched}
              </Masonry>

              </div>
            <div className = 'actor-search'>
              <p>Actors</p>
              <div>{display}</div>
            </div>
        </div>
      )
    }else{
      return(<div>No movies</div>)
    }
  }
};

export default withRouter(SearchList);
