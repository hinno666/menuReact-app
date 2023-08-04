import { useState } from "react";


const MenuItem = ({ img, title, price, desc }) => {
    const [showDesc, setShowDesc] = useState(false);
    return (
        <article className='menu-item'>
            <img src={img} alt={title} className='img' />
            <div className='item-info'>
                <header>
                    <h5>{title}</h5>
                    <span className='item-price'>${price}</span>
                </header>
                <p className='item-text'>
                    {showDesc ? desc : `${desc.substring(0, 60)}... `}
                    <button className="info-btn" onClick={() => setShowDesc(!showDesc)}>
                        {showDesc ? 'hide' : 'read more'}
                    </button>
                </p>
            </div>
        </article>
    )
}

export default MenuItem;