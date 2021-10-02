import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1 className="Header">Compendium of Lexicons</h1>
      </header>
      <main>
      <h4>What word would you like to look up?</h4>
        <Dictionary defaultKeyword="synesthesia" />
      </main>
      <footer className="App-footer"><small>Coded by Annie Jong •
      <a href  target="_blank" className="m-1"><i class="fas fa-at"></i></a> 
      <a href  target="_blank" className="m-1"><i class="fab fa-linkedin"></i></a> 
      <a href="https://github.com/multipotentialite-aj/react-dictionary" target="_blank" className="m-1"><i class="fab fa-github-square"></i></a></small></footer>
      </div>
    </div>
  );
}

export default App;
