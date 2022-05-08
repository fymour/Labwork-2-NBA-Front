import './white.css'
import linesvg from '../Assets/Line7.png'
export default function White ({
    playersEast,
    playersWest,
}) {
    return(
        <div className="main">
            <div className="titles">
                <div className="first">
                    <h3>EVERY TEAM</h3>
                </div>
                <div className="second">
                    <h1 className="one">ONE</h1>
                    <h1>STORE</h1>
                </div>
                <div className="third">
                    <h1 className="every">EVERY</h1>
                    <h1>TEAM</h1>
                </div>
                <div className="fourth">
                    <h3>SELECT YOUR FAVOURITE TEAM </h3>
                    <h3>TO VIEW IT'S JERSYS</h3>
                </div>
                <div className="fifth">
                    <h2 className='east'>EAST</h2>
                    <h2 className='west'>WEST</h2>
                </div>
            </div>
            <div className="teams">
                <div className="east-team">
                    {playersEast.map((item, o)=> {
                        return(
                        <div key={o} className='eastteam-img'>
                            <img src={item.img} alt='2332'/>
                        </div>
                        )
                    })}
                </div>
                <div className="west-team">
                    {playersWest.map((item, o)=>{
                        return(
                            <div key={o} className="westteam-img">
                                <img src={item.img} alt="22" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="footer">
                <span>About Team</span>
                <img src={linesvg} alt='223'/>
            </div>
        </div>
    )
}