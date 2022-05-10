import './header.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/Logo.png'
import icon1 from '../../Assets/Vectorsearch.png'
import icon2 from '../../Assets/Vector.png'
import icon3 from '../../Assets/Vectorcart.png'

export default function Header() {
    return (
        <header className='header'>
            <div className="logo">
                <Link to="/">
                    <img src={logo}/>
                </Link>
            </div>
            <div className="navigation">
                <ul id="horizontal-list">
                    <Link to="/"><li>Home</li>
                    </Link>
                    <Link to="/signup"><li>SignUp </li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <li>Teams</li>
                    <li>APP</li>
                </ul>
            </div>
            <div className="links">
                <div className="navimage">
                    <img src={icon1}/>
                    <img src={icon2}/>
                    <img src={icon3} />
                </div>
            </div>
        </header>
    )
}