
import AlbumFeature from './features/Album';
import ColorBox from './features/ColorBox';
import PostFeature from './features/Post';
import TodoFeature from './features/Todo';
import TodoForm from './features/Todo/components/TodoForm';

function App() {
  return (
    <div className="App">
      <PostFeature />
      {/* <TodoFeature />
      <AlbumFeature />
      <ColorBox /> */}
    </div>
  );
}

export default App;
