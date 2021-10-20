import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const  TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
          type={type} 
          name={name}
          // you can add bootstrap is-invalid in class to make border red
          // classnames will take in two parameters, the first if the default className we want to add, the second is object thats gonna have the className we want 
          className={classnames("form-control form-control-lg", {
            "is-invalid": error
          })}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {/* invalid-feedback class will apear if the is-invalid class is present */}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

TextInputGroup.defaultProps = {
  type: 'text',
}

export default TextInputGroup