import React from 'react';
import './OurCard.css'

const OurCard = (props) => {
    const { title, img, text } = props.card
    return (
        <div className="col-md-6 col-lg-3">
            <div className="card our-card m-md-0 m-auto" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default OurCard;