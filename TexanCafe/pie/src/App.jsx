import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import pie1 from './assets/pie1.jpg';
import pie2 from './assets/pie2.jpg';
import pie3 from './assets/pie3.jpg';
import pie4 from './assets/pie4.jpg';
import pie5 from './assets/pie5.jpg';
import Navbar from './components/navBar'



function App() {

  return (
    <>
    <Navbar />
    <div className="container">
      <div className="imgcontainer">
        <img src={pie1} alt="Pie 1" />
        <img src={pie2} alt="Pie 2" />
        <img src={pie3} alt="Pie 3" />
        <img src={pie4} alt="Pie 4" />
        <img src={pie5} alt="Pie 5" />
      </div>
      <div>Locations</div>
      <div>Get to Know Us!</div>
    </div>
      
    
    </>
  )
}

export default App
