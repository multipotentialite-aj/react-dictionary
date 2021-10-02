import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Compendium of Lexicons</h1>
      </header>
      <main>
      <h4>What word would you like to look up?</h4>
        <Dictionary defaultKeyword="synesthesia" />
      </main>
      <footer className="App-footer"><small>Coded by Annie Jong on <a href="https://github.com/multipotentialite-aj/react-dictionary">GitHub</a> • Email LinkedIn GitHub</small></footer>
      </div>
    </div>
  );
}

export default App;
