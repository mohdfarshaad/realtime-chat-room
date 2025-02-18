import PropTypes from "prop-types";

function AuthField({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="  border-x-2 border-y-2 px-5 py-2 rounded-lg focus:outline-blue-200"
    />
  );
}

AuthField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AuthField;
