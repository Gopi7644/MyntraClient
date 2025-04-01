import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { category, subcategory } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Category: {category}</h1>
      {subcategory && <h2 className="text-xl mt-2">Subcategory: {subcategory}</h2>}
    </div>
  );
};

export default CategoryPage;
