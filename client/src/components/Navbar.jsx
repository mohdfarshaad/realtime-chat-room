function Navbar() {
  return (
    <div className="p-4 flex justify-between text-white">
      <ul className="flex">
        <li className="px-6 py-3 text-white rounded-lg font-semibold hover:text-green-400 transition">
          Chat Room
        </li>
      </ul>
      <ul className="flex space-x-4">
        <li className="px-6 py-3 text-white rounded-lg font-semibold hover:text-green-400 transition">
          Sign In
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
