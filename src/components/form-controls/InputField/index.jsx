import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const {form, name, label, disabled} = props;
    // const { errors, formState } = form;
    // const { formState, formState: { errors } } = useForm();
    // const hasError = formState.touchedFields[name] && errors[name];
    return (
        <Controller 
            name={name}
            control={form.control}
            render = {({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField 
                    fullWidth
                    label={label}
                    disabled={disabled}
                    variant="outlined"
                    value={value}
            onChange={onChange}
                    margin="normal"
                    error={!!error}
            helperText={error ? error.message : null}
                />
            )}
        >
        </Controller>
    );
}

export default InputField;