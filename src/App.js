import logo from './logo.svg';
import './App.css';
import PrintCounterNo from './components/PrintCounterNo';
import IncrementButtonBy1 from './components/IncrementButtonBy1';
import IncrementButtonBy2 from './components/IncrementButtonBy2';
import IncrementButtonBy3 from './components/IncrementButtonBy3';
function App() {
  return (
    <div className="App">
    <PrintCounterNo/>
    <IncrementButtonBy1/>
    <IncrementButtonBy2/>
     <IncrementButtonBy3/>
    
   
    </div>
  );
}

export default App;
