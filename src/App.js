
import { useState } from 'react';
import { Route } from 'react-router';
import BetterClock from './components/BetterClock';
import Clock from './components/Clock';
import MagicBox from './components/MagicBox';
import AlbumFeature from './features/Album';
import ColorBox from './features/ColorBox';
import PostFeature from './features/Post';
import TodoFeature from './features/Todo';
import TodoForm from './features/Todo/components/TodoForm';

function App() {

  const [showClock, setShowClock] = useState(true)

  return (
    <div className="App">
      Header
      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide clock</button>

      <Route path='/better-clock' component={BetterClock} />
      <Route path='/magic-box' component={MagicBox} />
      <Route path='/post' component={PostFeature} />
      <Route path='/todos' component={TodoFeature} />
      <Route path='/albums' component={AlbumFeature} />
      <Route path='/color-box' component={ColorBox} />
      Footer
    </div>
  );
}

export default App;
