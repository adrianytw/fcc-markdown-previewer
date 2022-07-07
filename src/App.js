import './App.css';

import Editor from './components/editor';
import Previewer from './components/previewer';

const App = () => {
  return (
    <div className="App">
      {/* <h1>kek</h1>
      <img src='https://tndvjd.github.io/pop-cat/images/normal.png'
        alt='popcat pic'/> */}
      <header className="App-header">
        <Editor />
        <Previewer />
      </header>
    </div>
  );
}

export default App;
