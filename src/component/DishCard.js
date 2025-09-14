import "../App.css";

function DishCard({dish,onAddDish, onRemoveDish,isSelected,onViewIngredients}) {
    return(
        <div className="dish-card">
             <img src={dish.image} alt="food"/>
            <h1 className="dish-name">{dish.name}</h1>
            <p className="dish-des">{dish.description}</p>
            <div className="card-buttons">
                {isSelected ? (
                    <button onClick={() => onRemoveDish(dish.id)} className="remove-btn">Remove</button>
                ) : (
                     <button onClick={() => onAddDish(dish.id)} className="add-btn">Add</button>
                )}
                 <button onClick={() => onViewIngredients(dish)} className="view-btn">Ingredients</button>
            </div>
        </div>
    )
}

export default DishCard