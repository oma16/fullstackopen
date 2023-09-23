import './App.css';
import Mermaid from './Mermaid';
import { data } from './newNote/newNote';
import { data1 } from './singlePageApp/spa';
import { data2 } from './newNoteSinglePage/newNoteSpa';


function App() {
  return (
    <div className="App">
      <h1>New note diagram</h1>
      <Mermaid chart={data} />

      <div>
      <h1>Single page app diagram</h1>
      <Mermaid chart={data1} />
      </div>
      <div>
      <h1>New note in Single page app diagram</h1>
      <Mermaid chart={data2} />
      </div>
    </div>
  );
}

export default App;
