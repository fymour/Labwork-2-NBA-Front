import './main.css'
import logo from '../Assets/Mainlogo.png'
import pict from '../Assets/Pict.png'
export default function Main(){
    return(
        <main>
            <div className="text-container">
                <ul id='horizontal-text'>
                    <li>•Jersey</li>
                    <li>•Nike & NBA Collaboration</li>
                </ul>
            </div>
            <div className="contain">
                <div className="titlecontain">
                    <span>JERSEY</span>
                    <img src={logo} alt="" />
                    <span>NBA</span>
                </div>
                <div className="bottomcontain">
                    <div className="textin">
                    <p>WHICHEVER <span className='nba'>NBA</span>  <span className="team">TEAM</span> YOUR SUPPORT, GET YOUR JERSEY HERE TODAY.</p>
                    </div>
                </div>
                <div className="image">
                        <img src={pict} alt="" />
                    </div>
            </div>
        </main>
    )
}