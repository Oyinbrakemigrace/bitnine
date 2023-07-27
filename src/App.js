import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './pages/Logo';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Logo />} />
      </Routes>
    </Router>
  );
}

export default App;
