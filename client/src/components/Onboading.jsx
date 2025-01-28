import { livechat } from "../assets";

function Onboading() {
  return (
    <div className="flex flex-col  h-[calc(100vh-80px)]   w-full items-center justify-center">
      <div className="p-8 bg-zinc-800 rounded-2xl shadow-lg flex flex-col items-center space-y-6">
        <div>
          <img src={livechat} alt="img" width={300} height={50} />
        </div>

        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">
            Create
          </button>
          <button className="px-6 py-3 bg-gray-200 text-black rounded-lg font-semibold hover:bg-gray-300 transition">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboading;
