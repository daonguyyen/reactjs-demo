import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function randomColor(currentColor) {
    const COLOR_LIST = [
        'red', 'black', 'yellow'
    ]
    // random 0 -> 2 
    const currentIndex = COLOR_LIST.indexOf(currentColor)
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 3);

    }
    console.log(COLOR_LIST[newIndex])
    return COLOR_LIST[newIndex];
}

function useMagicColor() {

    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent')

    //change color every 1 second
    useEffect(() => {
        const colorInteval = setInterval(() => {
            console.log('First color:', color)
            console.log('Change color:', colorRef.current)
            const newColor = randomColor();
            setColor(newColor);

            colorRef.current = newColor;
        }, 1000)

        return () => {
            clearInterval(colorInteval);
        }
    }, [])

    return color
}

export default useMagicColor;