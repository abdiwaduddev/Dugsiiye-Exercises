import { Link } from "react-router-dom";

// Sample recipe data
const recipes = [
  {
    id: 1,
    title: "Classic Chocolate Cake",
    description: "Rich and moist chocolate cake perfect for any occasion",
    category: "desserts",
  },
  {
    id: 2,
    title: "Spaghetti Carbonara",
    description: "Traditional Italian pasta with creamy egg sauce",
    category: "dinner",
  },
  {
    id: 3,
    title: "Greek Salad",
    description: "Fresh Mediterranean salad with feta cheese",
    category: "lunch",
  },
  {
    id: 4,
    title: "Breakfast Smoothie Bowl",
    description: "Healthy and colorful breakfast bowl",
    category: "breakfast",
  },
];

const RecipeList = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">All Recipes</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <span className="inline-block bg-rose-100 text-rose-800 text-sm px-2 py-1 rounded">
                {recipe.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
