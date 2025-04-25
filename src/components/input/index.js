import React from 'react';
import "./style.scss";

function FormInput({name, placeholder, icon, getInputData, required, invalidMessage}) {
    return (
        <div className="form__group">
            <div className="form__group--input">
                <input required={required} onChange={(e) => getInputData(e.target.value)} className="form__group--text" type="text" name={name} placeholder={placeholder} id="" />
                <img src={icon} alt="Loading" className="form__icon" />
            </div>
            {invalidMessage && <span className="invalid-message">{invalidMessage}</span>}
        </div>
    );
}

export default FormInput;