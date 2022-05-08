import grouptwo from '../Assets/Group2.png'
export default function ItemsforKobe({
    title,
    colortitle,
    collection,
    subtitle,
    products,

}) {

    return (
        <div className="pagemain">
            <div className="bone">
                <div className="item-container">
                    <div className="text-title">
                        <div className="title-text">
                            <span>Jerseys {title}</span>
                        </div>
                        <div className="red">
                            <span>{colortitle}</span>
                        </div>
                        <div className="white">
                            <span className="white">{collection}</span>
                        </div>
                        <div className='last-text'>
                            <span>{subtitle}</span>
                        </div>
                    </div>
                </div>

                <div className="product">

                    {products.map((item,) => {
                        return (
                            <div  className="nbakit">
                                <img width={307} height={373} src={item.image} alt="" />
                                <div className="nbakit__name">{item.name}</div>
                                <div className="nbakit__description">{item.description}</div>
                                <div className="nbakit__price">{item.price}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="footer">
                    <span>View all</span>
                    <img src={grouptwo} alt="" />
                </div>
            </div>
        </div>

    )
}