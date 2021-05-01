import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { register } from '../../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

Register.propTypes = {
    
};

function Register(props) {
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        try {
            //auto set user name = email
            values.username = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            //do something here on register successfully

            console.log('New user:', user); 
        } catch (error) {
            console.log('Failed to register:', error)
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;