import logo from './logo.png';
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer"><small>Coded by Annie on <a href="https://github.com/multipotentialite-aj/react-dictionary">GitHub</a></small></footer>
      </div>
    </div>
  );
}

export default App;
