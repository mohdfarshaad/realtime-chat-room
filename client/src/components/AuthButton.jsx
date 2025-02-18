import PropTypes from "prop-types";

function AuthButton({ title, onClick }) {
  return (
    <button
      className="p-3 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 text-white font-semibold "
      onClick={onClick}
    >
      {title}
    </button>
  );
}

AuthButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AuthButton;
