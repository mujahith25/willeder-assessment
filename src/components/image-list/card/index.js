import React from 'react'

import './card.scss';

const Card = ({ id, title, subTitle, description, image, }) => {
    return (
        <section className='card'>
            <img src={image} alt={title} />
            <div className='details'>
                <p className='id'>{id}</p>
                <p className='title'>{title}</p>
                <p className='title'>{subTitle}</p>
                <p className='description'>{description}</p>
            </div>
        </section>
    )
}

export default Card;