import './App.css';
import Home from './Home';
import Navbar from './Navbar';



function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />
    <div className="content">
      <h1>App Component</h1>
    </div>
    </div>
  );
}

export default App;
