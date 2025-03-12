
import React, { useState } from 'react'

function Card({id, image, info, price, name, removeTour}) {

    const[readmore, setreadmore]=useState(false);

    const description= readmore? info : `${info.substring(0, 200)}...`

    return (

    <div className='card'>

        <img src={image} className='image' alt='imagess'/>

        <div className='tour-info'>
            
            <div className='tour-details'>
                <h3 className='tour-price'>₹{price}</h3>
                <h4 className='tour-name'>{name}</h4>
            </div>

            <div className='description'>
                {description}
                <span className='read-more' onClick={(e)=>setreadmore(!readmore)}>{readmore? ' Show Less' : 'Read More'}</span>
            </div>
        
        </div>

        <button className='btn-red' onClick={()=>removeTour(id)}>Not Interested</button>

    </div>
  )
}

export default Card