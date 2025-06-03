import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Home from './pages/home';
import PieShop from './pages/pieShop'; 
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pieshop" element={<PieShop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
