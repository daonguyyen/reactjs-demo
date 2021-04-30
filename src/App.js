

import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import BetterClock from './components/BetterClock';
import Clock from './components/Clock';
import Header from './components/Header';
import MagicBox from './components/MagicBox';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import ColorBox from './features/ColorBox';
import CounterFeature from './features/Counter';
import PostFeature from './features/Post';
import TodoFeature from './features/Todo';

function App() {

  const [showClock, setShowClock] = useState(true)

  return (
    <div className="App">
      <Header />

      {/* Menu Link : link neu muon di chuyen trang nao do, navlink lam menu de co class active */}
      

      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide clock</button>

      <Switch>
        <Redirect from='/home' to='/#' />
        <Redirect from='/post' to='/' exact />

        {/* <Route path='/' component={Clock} exact /> */}
        <Route path='/' component={CounterFeature} exact />
        <Route path='/better-clock' component={BetterClock} />
        <Route path='/magic-box' component={MagicBox} />
        <Route path='/post' component={PostFeature} />
        <Route path='/todos' component={TodoFeature} />
        <Route path='/albums' component={AlbumFeature} />
        <Route path='/color-box' component={ColorBox} />

        <Route component={NotFound} />
      </Switch>
      {/* Footer */}
    </div>
  );
}

export default App;
