import React from 'react';

import './image-list.scss';
import GridImage1 from '../../assets/grid-image1.png';
import GridImage2 from '../../assets/grid-image2.png';
import GridImage3 from '../../assets/grid-image3.png';
import Card from './card';

const ImageListItems = [
    {
        id: '01',
        title: 'Lorem ipsum',
        subTitle: 'dolor sit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: GridImage3
    },
    {
        id: '02',
        title: 'Lorem ipsum',
        subTitle: 'dolor sit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: GridImage2
    },
    {
        id: '03',
        title: 'Lorem ipsum',
        subTitle: 'dolor sit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        image: GridImage1
    }
]

const ImageList = () => {
    return (
        <section className='image-list'>
            <div className='heading'>
                <p className='title'>Lorem</p>
                <p className='subtitle'>subtitle</p>
            </div>
            <section className='image-list-item'>
                {ImageListItems.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </section>
        </section>
    )
}

export default ImageList