import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  const displayCategories = categories.map(category => {
    const className = category === selectedCategory ? "selected" : null; // Fix typo 'slectedCategory' to 'selectedCategory'
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategories}
    </div>
  );
};

export default CategoryFilter;
