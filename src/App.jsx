
import './App.css';
import PokeCard from '../src/components/PokeCard/PokeCard';

function App() {
  return (
    <div className="App">
      <header className='Nav'>
        <p>NAv</p>
        <input type="text" placeholder='Digite o nome do Pokemon' />
      </header>
      <PokeCard/>
      <footer className='Foot'>
        <p>foot</p>
      </footer>
    </div>
  );
}

export default App;
