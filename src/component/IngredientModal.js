

function IngredientModal({dish,onClose}) {
    if(!dish) return null;

    return(
        <div className="modal-cont">
            <div className="modal-content">
                <h2>{dish.name}</h2>
                <p>{dish.description}</p>
                <img src={dish.image} className="modal-img"/>
                <ul>
                    {dish.ingredients.map((item,index) => (
                        <li key={index} className="modal-items">{item.name} - {item.quantity}</li>
                    ))}
                </ul>
                <button onClick={onClose} className="close-btn">Close</button>
            </div>
        </div>
    )
    
}
export default IngredientModal