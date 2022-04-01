// import logo from './logo.svg';
import './App.css';
// import Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
