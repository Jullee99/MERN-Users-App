import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Registration from './components/Registration';
import DisplayUser from './components/DisplayUser';
import Delete from './components/Delete';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Registration" element={<Registration/>} />
          <Route path="/DisplayUser" element={<DisplayUser/>} />
          <Route path="/Delete" element={<Delete/>} />
        </Routes>
    </div>
    </Router> 
  );
}

export default App;
