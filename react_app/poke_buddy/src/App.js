import logo from './pokemonLogo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="pokemon_Logo" alt="pokemon Logo"/>
        <p>
          Welcome to PokeBuddy
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter
        </a>
      </header>
    </div>
  );
}

export default App;
