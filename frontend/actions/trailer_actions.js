export const FETCH_TRAILER = "FETCH_TRAILER";
export const RECEIVE_TRAILER = "RECEIVE_TRAILER";


export const fetchTrailer = name =>({
	type: FETCH_TRAILER,
  name
});

export const receiveTrailer = results => ({
  type: RECEIVE_TRAILER,
  results
});
