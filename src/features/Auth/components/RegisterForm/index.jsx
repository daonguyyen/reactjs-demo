import React from 'react';
import PropTypes from 'prop-types'; 
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import InputField from '../../../../components/form-controls/InputField';
import { Avatar, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const schema = yup.object().shape({
        title : yup.string().required('Please enter title').min(5, 'Title is too short'),
    });
    const form = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            retypePassword: ''

        },
        resolver: yupResolver(schema),
    })
    const handleSubmit = (values) => {
        const {onSubmit} = props ;
        if(onSubmit) {
            onSubmit(values)
        }

        form.reset();
    }
    return (
        <div>
            <Avatar>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography component="h3" variant="h5">
                Create an Account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullname" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <InputField name="password" label="Password" form={form} />
                <InputField name="retypePassword" label="Retype Password" form={form} />
            </form>
        </div>
    );
}

export default RegisterForm;