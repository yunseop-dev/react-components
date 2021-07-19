import React from 'react';
import "./neumorphismCard.css"

const NeumorphismCard: React.FC = () => {
    return (
        <div className="card">
            <div className="box">
                <div className="content">
                    <h2>01</h2>
                    <h3>Card One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias velit est soluta cum, ex ea, a maxime ullam unde natus hic nostrum. Debitis et cupiditate ut esse voluptatem nobis facilis!</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(NeumorphismCard);
