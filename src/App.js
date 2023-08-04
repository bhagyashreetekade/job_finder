import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import Search from './Components/SearchDiv/Search.js';
import Jobs from './Components/JobDiv/Jobs.js';
import Value from './Components/ValueDiv/Value.js';
import Footer from './Components/FooterDiv/Footer.js';
function App() {
  return (
    <div className="App ">
     <NavBar/>
     <Search/>
     <Jobs/>
     <Value/>
     <Footer/>
    </div>
  );
}

export default App;
