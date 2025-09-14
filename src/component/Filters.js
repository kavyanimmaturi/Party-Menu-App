
function Filters({activeCategory, onCategoryChange, searchDish,onSearchChange,vegOnly,onVegOnlyChange}) {
    const categories = ["STARTER", "MAIN COURSES", 'DESSERTS', 'SIDES'];

    return (
        <div className="filters-cont">
            <input 
            type="text"
            placeholder="Search party menu here..."
            value={searchDish} 
            onChange={(e) => onSearchChange(e.target.value)}
            className="input-box"
            />
            <div className="categories-cont">
            {categories.map((category) => (
                <button 
                key={category}
                className={activeCategory === category ? "active" : ""}
                onClick={() => onCategoryChange(category)}
            
                >
                    {category}
                </button>
            ))}
            </div>
        </div>
    )
}

export default Filters