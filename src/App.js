import './App.css';

import Editor from './components/editor';
import Previewer from './components/previewer';

const App = () => {
  return (
    <div className="App">
      <div className="editorWrap">
        <Editor />
      </div>
      <div className="previewWrap">
        <Previewer />
      </div>
    </div>
  );
}

export default App;

      // <h1>kek</h1>
      // <img src='https://tndvjd.github.io/pop-cat/images/normal.png'
      //   alt='popcat pic'/> */}
      // <header className="App-header">
      // </header>