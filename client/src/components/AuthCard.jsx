import PropTypes from "prop-types";

function AuthCard({ title, children }) {
  return (
    <div className="flex flex-col space-y-3  p-4  bg-zinc-300 shadow-lg rounded-lg">
      {/* Header */}
      <div className="mb-3 flex justify-center">
        <p className="text-2xl font-serif">{title}</p>
      </div>

      {/* body */}
      <div className="flex flex-col space-y-5">{children}</div>
    </div>
  );
}

AuthCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AuthCard;
