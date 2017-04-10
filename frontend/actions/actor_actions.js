export const FETCH_ACTOR = "REQUEST_ACTOR";
export const RECEIVE_ACTOR = "RECEIVE_ACTOR";
export const FETCH_ACTOR_MOVIES = "FETCH_ACTOR_MOVIES";
export const RECEIVE_ACTOR_MOVIES = "RECEIVE_ACTOR_MOVIES";

export const fetchActor = name =>({
	type: FETCH_ACTOR,
  name
});

export const receiveActor = id => ({
  type: RECEIVE_ACTOR,
  id
});

export const receiveActorMovies = movies => ({
  type: RECEIVE_ACTOR_MOVIES,
  movies
});
export const fetchActorMovies = id => ({
  type: FETCH_ACTOR_MOVIES,
	id
});
