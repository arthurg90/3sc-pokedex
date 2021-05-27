import './App.css';
import Header from "./components/Header";
import DataComponent from './components/DataComponent';

function App() {
  return (
    <div className="App">
      <Header text="Pokedex" />
      <DataComponent />
    </div>
  );
}

export default App;
