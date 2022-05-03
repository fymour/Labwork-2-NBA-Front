import './header.css'
import logo from '../Assets/Logo.png'
import icon1 from '../Assets/Vectorsearch.png'
import icon2 from '../Assets/Vector.png'
import icon3 from '../Assets/Vectorcart.png'

export default function Header() {
    return (
        <header className='header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
           <div className="navigation">
                <ul id="horizontal-list">
                    <li>Man</li>
                    <li>Women </li>
                    <li>Jersey</li>
                    <li>Teams</li>
                    <li>APP</li>
                </ul>
           </div>
           <div className="links">
               <div className="navimage">
               <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
               </div>
           </div>
        </header>
    )
}