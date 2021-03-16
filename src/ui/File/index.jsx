import React from 'react';
import './File.css';

const File = ({option}) => {
    const {onChange, fileName} = option;

    return (
        <div className="form__item--small">
            <div className="option">
                <label className="button button--center">
                    {fileName}
                    <input
                        className="form__file"
                        type="file"
                        accept="image/*,image/jpeg,image/png"
                        onChange={(e) => onChange(e)} 
                    />
                </label>
            </div>
        </div>
    );
};

export default File;