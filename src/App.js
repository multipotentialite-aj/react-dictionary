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
      <h4>What word do you want to look up?</h4>
        <Dictionary defaultKeyword="synesthesia" />
      </main>
      <footer className="App-footer"><small>Coded by Annie Jong •
      <a href="mailto:annie@bluesy-owl.design" target="_blank" className="m-1" rel="noreferrer"><i class="fas fa-at"></i></a> 
      <a href="https://www.linkedin.com/in/aj1016/" target="_blank" className="m-1" rel="noreferrer"><i class="fab fa-linkedin"></i></a> 
      <a href="https://github.com/multipotentialite-aj/react-dictionary" target="_blank" className="m-1" rel="noreferrer"><i class="fab fa-github-square"></i></a></small></footer>
      </div>
    </div>
  );
}

export default App;
