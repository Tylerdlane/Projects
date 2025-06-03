import pie1 from '../assets/pie1.jpg'
import pie2 from '../assets/pie2.jpg'
import pie3 from '../assets/pie3.jpg'
import pie4 from '../assets/pie4.jpg'
import pie5 from '../assets/pie5.jpg'

const pieShop = () => {
  return (
    <>
    <h4>CHECK OUT THE PIE</h4>
    <div className='container'>
        <div id="pielist">
          <ul className="differentPies">
            <li className="pie"><img src={pie1} alt="Pie 1" /></li>
            <li className="pie"><img src={pie2} alt="Pie 2" /></li>
            <li className="pie"><img src={pie3} alt="Pie 3" /></li>
            <li className="pie"><img src={pie4} alt="Pie 4" /></li>
            <li className="pie"><img src={pie5} alt="Pie 5" /></li>
            {/* <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li>
            <li className="pie"></li> */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default pieShop