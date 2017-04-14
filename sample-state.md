```js
{
  currentUser: {
    id: 1,
    username: "guest",
    email: "guest@guest.com",
    favorite_ids: [1, 3]

  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
  },
  movies: {
    1: {
      title: "Movie Title",
      description: "It has a beginning, middle, and end!",
      year: 1977,
      avg_rating: 3.5,
      genre_id: 1,
      imdb_id: 1
        }
      }
    }
  },
  genres: {
    1: {
      name: 'action'
    }
  },
  ratings: {
    1: {
      user_id: 1,
      rating: 4,
    }
  },
  castings:{
    1: {
      movie_id: 1
    }
  },
  actors: {
    1: {
      name: "Actor McActington",
      movie_id: 1,
      castings_id: 30
    }
  }

}
```
