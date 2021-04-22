
import { useState } from 'react';
import BetterClock from './components/BetterClock';
import Clock from './components/Clock';
import AlbumFeature from './features/Album';
import ColorBox from './features/ColorBox';
import PostFeature from './features/Post';
import TodoFeature from './features/Todo';
import TodoForm from './features/Todo/components/TodoForm';

function App() {

  const [showClock, setShowClock] = useState(true)

  return (
    <div className="App">
      {showClock && <Clock />}
      <BetterClock />
      <button onClick={() => setShowClock(false)}>Hide clock</button>
      <PostFeature />
      {/* <TodoFeature />
      <AlbumFeature />
      <ColorBox /> */}
    </div>
  );
}

export default App;
