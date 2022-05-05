import './items.css'
import nbakits from '../Assets/picture.png'

export default function Items() {
    return (
        <div className="pagemain">
            <div className="bone">
                <div className="item-container">
                    <div className="text-title">
                        <div className="title-text">
                            <span>Jerseys bestsellers</span>
                        </div>
                        <div className="red">
                            <span>BESTSELLER</span>
                        </div>
                        <div className="white">
                            <span className="white">COLLECTION</span>
                        </div>
                        <div className='last-text'>
                            <span>THE JERSEYS OF THE BEST NBA PLAYERS OF THE REGULAR SEASONS.</span>
                        </div>
                    </div>
                </div>
                    <div className="kits">
                        <div className="nbakit-one">
                            <img src={nbakits} alt="" />
                            <span>LeBron James Lakers City Edition </span>
                            <p>Nike NBA Swingman Jersey</p>
                            <span className='price'>$290</span>

                        </div>
                        <div className="nba-kit-two">
                            <img src={nbakits} alt="" />
                            <span>LeBron James Lakers City Edition </span>
                            <p>Nike NBA Swingman Jersey</p>
                            <span className='price'>$290</span>


                        </div>
                        <div className="nbakit-three">
                            <img src={nbakits} alt="" />
                            <span>LeBron James Lakers City Edition </span>
                            <p>Nike NBA Swingman Jersey</p>
                            <span className='price'>$290</span>
                        </div>
                    </div>
            </div>
        </div>

    )
}