import './App.css';
import Home from './components/pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Templates from './components/pages/Templates';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Login from './components/reuse/Login';
import LoginState from './context/Login/LoginState';

function App() {
  return (
    <div className="App">
      <LoginState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/templates" element={<Templates/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
        <Login/>
      </Router>
      </LoginState>
    </div>
  );
}

export default App;
