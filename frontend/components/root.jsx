import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import MovieIndexContainer from './movie_index/movie_index_container';
import MoviePlayContainer from './movie_play/movie_play_container';
import Splash from './splash/splash_container';
import ActorDetail from './actor_detail/actor_detail_container';
import TrailerPlay from './trailer_play/trailer_play_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/main');
    };
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRoute component={Splash} onEnter={_redirectIfLoggedIn} />
        </Route>
        <Route path="/main" component={MovieIndexContainer} onEnter={_ensureLoggedIn} />
        <Route path="/movie/:movieId" component={MoviePlayContainer} onEnter={_ensureLoggedIn}/>
        <Route path="/actor/:actorId" component={ActorDetail} onEnter={_ensureLoggedIn}/>
        <Route path="/trailer/:trailerId" component={TrailerPlay} onEnter={_ensureLoggedIn}/>


      </Router>
    </Provider>
  );
};


export default Root;
