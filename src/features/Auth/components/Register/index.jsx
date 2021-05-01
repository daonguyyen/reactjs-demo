import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { register } from '../../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar()

    const handleSubmit = async (values) => {
        try {
            //auto set user name = email
            values.username = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);

            //close dialog
            const {closeDialog} = props;  // kiem tra cha co truyen xuong ko
            if(closeDialog){ // neu co thi goi ham
                closeDialog()
            }

            //do something here on register successfully

            console.log('New user:', user); 
            enqueueSnackbar('Register successfully', {variant: 'success'});
        } catch (error) {
            // console.log('Failed to register:', error)
            enqueueSnackbar(error.message, {variant: 'error'});
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;