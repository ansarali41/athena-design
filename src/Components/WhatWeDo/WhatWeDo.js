import React from 'react';
import card1 from '../../image-icon/card (1).png'
import card2 from '../../image-icon/card (2).png'
import card3 from '../../image-icon/card (3).png'
import card4 from '../../image-icon/card (4).png'
import OurCard from '../OurCard/OurCard';
import './WhatWeDo.css'


const WhatWeDo = () => {
    const cardData = [
        {
            img: card1,
            title: "Experience Design",
            text: "The point of using Lorem Ipsum is that it has a more-orless normal."
        },
        {
            img: card2,
            title: "Interface Design",
            text: "The point of using Lorem Ipsum is that it has a more-orless normal."
        },
        {
            img: card3,
            title: "Prototyping",
            text: "The point of using Lorem Ipsum is that it has a more-orless normal."
        },
        {
            img: card4,
            title: "Illustration",
            text: "The point of using Lorem Ipsum is that it has a more-orless normal."
        }
    ]

    return (
        <section id='what-we-do' className='text-center my-5 py-5'>
            <div className="container">
                <h1 className='mt-3'>What We Do</h1>
                <p className='wwd-p'>Our main focus is to make the User Experience very simple and easy. Simplicity is our Strength.</p>
                <div className="row mt-5">
                    {
                        cardData.map(card => <OurCard card={card} key={card.title} />)
                    }
                </div>

            </div>
        </section>
    );
};

export default WhatWeDo;