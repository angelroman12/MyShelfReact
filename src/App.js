import Home from './components/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
       
      </header>
     <div className="content">
     <Home />
     </div>
     
    </div>
  );
}

export default App;
