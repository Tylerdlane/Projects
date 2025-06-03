import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../App.css';
import pie1 from '../assets/pie1.jpg'
import pie2 from '../assets/pie2.jpg';
import pie3 from '../assets/pie3.jpg';
import pie4 from '../assets/pie4.jpg';
import pie5 from '../assets/pie5.jpg';
import TayTex from '../assets/TaylorTexan.jpg'
import HutTex from '../assets/HuttoTexan.jpg'

function App() {
  return (
    <>
      <div className="col-12 container">

        {/* Pie Images Section */}
        <div className="imgcontainer">
          <img src={pie1} alt="Pie 1" className="img-fluid rounded" style={{ maxWidth: '300px' }} />
          <img src={pie2} alt="Pie 2" className="img-fluid rounded" style={{ maxWidth: '300px' }} />
          <img src={pie3} alt="Pie 3" className="img-fluid rounded" style={{ maxWidth: '300px' }} />
          <img src={pie4} alt="Pie 4" className="img-fluid rounded" style={{ maxWidth: '300px' }} />
          <img src={pie5} alt="Pie 5" className="img-fluid rounded" style={{ maxWidth: '300px' }} />
        </div>
      </div>

        {/* Locations Section */}
        <div className="container col-6 mb-5">
          <h3>Locations</h3>
          <div className="locationImg gap-4">
            <img src={HutTex} alt="Hutto"></img>
            <img src={TayTex} alt="Taylor"></img>
          </div>
        </div>

        {/* Get to Know Us Section */}
        <div className="container col-6 mb-5">
          <h3>Get to Know Us!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa impedit, fugiat id repellendus inventore
            sapiente numquam, tempore ex officia facilis ut adipisci. Cumque laudantium aperiam ea rem, omnis ut! Error.
          </p>
        </div>
    </>
  );
}

export default App;
