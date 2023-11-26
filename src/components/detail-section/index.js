import React from "react";

import "./detail-section.scss";
import GridImage from "../../assets/detail-image.png";
import Arrow from "../../assets/arrow-linear.svg";

const DetailSection = () => {
    return (
        <section className="detail-section">
            <div className="mob-heading">
                <h3>Lorem ipsum</h3>
                <div className="horizontal-line"></div>
            </div>
            <div className="image-container">
                <img src={GridImage} alt="detail" />
            </div>
            <div className="detail-container">
                <div className="desktop-heading">
                    <h3>Lorem ipsum</h3>
                    <div className="horizontal-line"></div>
                </div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam id
                    laborum laudantium reprehenderit iste fuga similique voluptatem
                    eveniet distinctio ea libero a atque minima, ut dignissimos autem nam
                    sint voluptate.
                </p>
                <div className="more-section">
                    <span>Lorem ipsum</span>
                    <img src={Arrow} alt="arrow" />
                </div>
            </div>
        </section>
    );
};

export default DetailSection;
