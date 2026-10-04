import { useParams, Link } from "react-router-dom";

const allRecipes = [
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
  {
    id: 5,
    title: "Tiramisu",
    description: "Classic Italian coffee-flavored dessert",
    category: "desserts",
  },
];

const CategoryRecipes = () => {
  const { categoryId } = useParams();

  // Filter recipes by category
  const recipes = allRecipes.filter((recipe) => recipe.category === categoryId);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-3xl font-bold mb-6 capitalize">
        {categoryId} Recipes
      </h2>

      {recipes.length > 0 ? (
        <div className="grid gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipes/${recipe.id}`}
              className="block p-4 border rounded-lg hover:border-rose-500 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No recipes found in this category.</p>
      )}
    </div>
  );
};

export default CategoryRecipes;
