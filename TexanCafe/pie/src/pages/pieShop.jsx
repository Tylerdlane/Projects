import React from 'react'
import Navbar from '../components/navBar'

const pieShop = () => {
  return (
    <>
    <Navbar />
    <div>pieShop</div>
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