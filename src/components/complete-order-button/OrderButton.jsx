// https://codepen.io/Nik-p520/pen/RweEZvJ

import React from 'react';
import './OrderButton.css';

class OrderButton extends React.Component {
    handleClick = () => {
        const button = document.querySelector('.order');

        if (!button.classList.contains('animate')) {
            button.classList.add('animate');
            setTimeout(() => {
                button.classList.remove('animate');
            }, 10000);
        }
    };

    render() {
        return (
            <button className="order" onClick={this.handleClick}>
                <span className="default">Complete Order</span>
                <span className="success">
                    Order Placed
                    <svg viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
                <div className="box"></div>
                <div className="truck">
                    <div className="back"></div>
                    <div className="front">
                        <div className="window"></div>
                    </div>
                    <div className="light top"></div>
                    <div className="light bottom"></div>
                </div>
                <div className="lines"></div>
            </button>
        );
    }
}

export default OrderButton;