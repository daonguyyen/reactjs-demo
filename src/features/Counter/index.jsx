import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import styles from './styles.module.scss';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {

    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();

    const handleIncreaseClick = () => {
        const action = increase();
        dispatch(action)
    }

    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action)
    }

    return (
        <div className={styles.title}>
            Counter number: {counter}
            <div>
                <button className={styles.button} onClick={handleIncreaseClick}>Increase</button>
                <button className={styles.button} onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;