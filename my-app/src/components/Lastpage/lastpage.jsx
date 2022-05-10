import '../Lastpage/lastpage.css'
import photolast from '../Assets/picturel.png'
import linevieww from '../Assets/Line7.png'

export default function Lastpage() {
    return (
        <div className="skeletone">
            <div className="titles">
                <div className="first">
                    <h3>The APPLICATION</h3>
                </div>
                <div className="second">
                    <h1 className="one">THE NIKE</h1>
                </div>
                <div className="third">
                    <h1 className="every">APP</h1>
                </div>
                <div className="fourth">
                    <span>HERE YOU CAN FIND MANY INTERESTING AND USEFUL FROM NIKE.</span>
                    <br />
                    <span>DOWNLOAD THE APPLICATION FROM NIKE.</span>
                </div>
            </div>
            <div className="photo">
                <img src={photolast} />
            </div>
            <div className="descr">
                <span className='spec'>Nike Traning Club</span>
                <p>Home workouts & fitness plans</p>
            </div>
            <div className="footer">
                <span className='vieww'>View all</span>
                <img src={linevieww}  />
            </div>
        </div>
    )
}