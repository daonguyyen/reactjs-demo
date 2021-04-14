import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'yellow', 'red', 'black', 'blue']
    const randomColorIndex = Math.trunc(Math.random() * 5)
    return COLOR_LIST[randomColorIndex]
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deeppink'
        console.log(initColor)
        return initColor
    })

    function handleBoxClick() {
        const newColor = getRandomColor()
        setColor(newColor)
        localStorage.setItem('box-color', newColor)
    }
    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            COLOR BOX
        </div>
    );
}

export default ColorBox;