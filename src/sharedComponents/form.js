import React from 'react';

const FormField = function (props) {
    const {
        id,
        value,
        name,
        className,
        type,
        onChange,
        defaultValue,
        placeholder,
        labelTitle,
        maxLength,
        cols,
        rows,
        style
    } = props;

    if (type === 'select') {
        return (
            <div>
                <div>
                    <label>{labelTitle}</label>
                </div>
                <select
                    className={className}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    <option value="">{`Select ${labelTitle}`}</option>
                </select>
            </div>
        );
    } else if (type === "textarea") {
        return (
            <div>
                <div>
                    <label>{labelTitle}</label>
                </div>
                <textarea
                    maxLength={maxLength}
                    cols={cols}
                    rows={rows}
                    style={style}
                    className={className}
                    name={name}
                    value={value}
                    onChange={onChange}
                    defaultValue={defaultValue}
                />
            </div>
        )
    }

    return (
        <div>
            <div>
                <label>{labelTitle}</label>
            </div>
            <input
                id={id}
                value={value}
                name={name}
                className={className}
                type={type || 'text'}
                onChange={onChange}
                placeholder={placeholder}
                defaultValue={defaultValue}
            />
        </div>
    )
}

export default FormField;