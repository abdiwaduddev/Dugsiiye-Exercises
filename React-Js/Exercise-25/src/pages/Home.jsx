import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Recipe Book</h1>
      <p className="text-xl text-gray-600 mb-8">
        Discover delicious recipes and start cooking today!
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Link
          to="/recipes"
          className="bg-rose-600 text-white p-6 rounded-lg shadow-md hover:bg-rose-700 transition-colors"
        >
          <h2 className="text-2xl font-bold mb-2">Browse Recipes</h2>
          <p>Explore our collection of delicious recipes</p>
        </Link>

        <Link
          to="/categories"
          className="bg-rose-600 text-white p-6 rounded-lg shadow-md hover:bg-rose-700 transition-colors"
        >
          <h2 className="text-2xl font-bold mb-2">Recipe Categories</h2>
          <p>Find recipes by category</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
