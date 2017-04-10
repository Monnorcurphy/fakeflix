export const FETCH_ACTOR = "REQUEST_ACTOR";
export const RECEIVE_ACTOR = "RECEIVE_ACTOR";


export const fetchActor = name =>({
	type: FETCH_ACTOR,
  name
});

export const receiveActor = results => ({
  type: RECEIVE_ACTOR,
  results
});
