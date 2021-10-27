
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';







function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListContainer saludo="Greetings, soy una prop"/>
    
    </div>


  );
}

export default App;
