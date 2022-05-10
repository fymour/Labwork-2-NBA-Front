import '../HallofFame/hall.css'
import yearline from '../../Assets/Slider.png'
import lineview from '../../Assets/Line7.png'

export default function Hall() {
    return (
        <div className='bone-two'>
            <div className="titles">
                <div className="first">
                    <h3>HALL OF FAME</h3>
                </div>
                <div className="second">
                    <h1 className="one">BASKETBALL</h1>
                </div>
                <div className="third">
                    <h1 className="every">HALL OF FAME</h1>
                </div>
                <div className="fourth">
                   <span>THE NAISHMITH MEMORIAL BASKETBALL HALL OF FAME IS HOME TO MORE THAN FOUR HUNDRED IDUCTEES AND MORE THAN 40 000 SQUARE FEET OF BASKETBALL HISTORY.</span>
                </div>
                <div className="fifth">
                    <span>2005</span>
                    <span>2006</span>
                    <span>2007</span>
                    <span>2008</span>
                    <p>2009</p>
                    <span>2010</span>
                    <span>2011</span>
                    <span>2012</span>
                </div>
                <div className="sixth">
                    <img src={yearline}/>
                </div>
                <div className="seventh">
                    <h1>MICHAEL</h1>
                    <h1 className="michael">JORDAN</h1>
                    <span>View</span>
                    <img src={lineview}/>
                </div>
                <div className="eighth">
                    <h1 className="david">DAVID</h1>
                    <h1>ROBINSON</h1>
                    <span>View</span>
                    <img src={lineview}/>

                </div>
                <div className="nineth">
                    <h1 className="one">JOHN STOCKTON</h1>
                    <span>View</span>
                    <img src={lineview}/>

                </div>
                <div className="footer">
                    <span>Official site</span>
                    <img src={lineview}/>
                </div>
                
            </div>
        </div>
            )
}