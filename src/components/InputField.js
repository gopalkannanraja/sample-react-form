import React from 'react';

var spanStyle = {
    color: 'red',
    float: 'right',
    'margin-top': '3px'
};


const InputField = ({ input, label, type, placeholder, meta: { touched, error } }) => (
    <div className="control-group error">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={type} className="form-control"/>
            {touched && error && <span style={spanStyle}>{error}</span>}
        </div>
    </div>
);

export default InputField;
