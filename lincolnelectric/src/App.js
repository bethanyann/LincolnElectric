import { GlobalStyle } from './GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Routes
} from "react-router-dom";

//pages
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
    </Router>
  );
}

export default App;
