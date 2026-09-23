const Header = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Welcome back, Student!
          </h1>
          <p className="text-gray-500">
            Here's what's happening with your courses today.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
            <button className="p-2 text-gray-400 hover:text-gray-500">
              🔔
            </button>
          </div>
          <div className="h-10 w-10 rounded-full bg-linear-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-semibold">
            S
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
