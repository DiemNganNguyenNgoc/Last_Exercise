

function CategoryButtons({ setSelectedCategory }) {
  const categories = ['Animal', 'Flower', 'Mingyu'];

  return (
    <div className="category-buttons">
      <button onClick={() => setSelectedCategory('')}>All</button>
      {categories.map(category => (
        <button key={category} onClick={() => setSelectedCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;
