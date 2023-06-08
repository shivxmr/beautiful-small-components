// https://codepen.io/andrewhawkes/pen/RwwOJrO
import React from 'react';
import './GameCard.css';

const GameCard = () => {
    return (
        <div className="l-container">
            <div className="b-game-card">
                <div className="b-game-card__cover" style={{ backgroundImage: 'url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_1.jpg)' }}></div>
            </div>
            <div className="b-game-card">
                <div className="b-game-card__cover" style={{ backgroundImage: 'url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_2.jpg)' }}></div>
            </div>
            <div className="b-game-card">
                <div className="b-game-card__cover" style={{ backgroundImage: 'url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg)' }}></div>
            </div>
            <div className="b-game-card">
                <div className="b-game-card__cover" style={{ backgroundImage: 'url(https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_4.jpg)' }}></div>
            </div>
        </div>
    );
};

export default GameCard;
