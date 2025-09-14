import { useState } from 'react';
import './App.css';
import DishList from './component/DishList';
import Filters from './component/Filters';
import IngredientModal from './component/IngredientModal';
import { dishes } from './data/mockDishesData';

function App() {
   
   const[selectedCategory, setSelectedCategory] = useState("");
   const[searchDish, setSearchDish] = useState("");
   const[vegOnly, setVegOnly] = useState(false);
   const[selectedDishes, setSelectedDishes] = useState([]);
   const[presentDish, setPresentDish] = useState(null);

   /* Filter Logic */

   const filteringDishes = dishes.filter((dish) =>{
      return(
         (selectedCategory ? dish.mealType === selectedCategory : true) && 
         (vegOnly ? dish.type === "VEG" : true) && 
         dish.name.toLowerCase().includes(searchDish.toLowerCase())
      );
   })

   /* Add and Remove Dishes */ 

   const onHandleAddDish = (id) => {
     if (!selectedDishes.includes(id)){
        setSelectedDishes([...selectedDishes,id]);
     }
   }

   const onHandleRemoveDish = (id) => {
       setSelectedDishes(selectedDishes.filter((dishId) => dishId !== id));
   }

   const onHandleViewIngredients = (dish) => {
       setPresentDish(dish)
   }

  const onHandleCloseModal = () => {
      setPresentDish(null);
  } 

  return (
    <div className="app-container">
      <h1 className='app-title'>Party Menu Selection</h1>

      <Filters
            activeCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchDish={searchDish}
            onSearchChange={setSearchDish}
            vegOnly={vegOnly}
            onVegOnlyChange={setVegOnly}
      />

      <DishList
        dishes={filteringDishes}
        onAddDish={onHandleAddDish}
        onRemoveDish={onHandleRemoveDish}
        selectedDishes={selectedDishes}
        onViewIngredients={onHandleViewIngredients}
      />

      <div className='selected-dishes-cont'>
         <h1 className='selected-dish'>Selected Dishes ({selectedDishes.length})</h1>
         <ul  className='selected-items'>
          {selectedDishes.map((id) => {
            const dish = dishes.find((d) => d.id === id);
            return <li key={id} className='items'>{dish.name}</li>;
          })}
         </ul>
      </div>

      <IngredientModal dish={presentDish} onClose={onHandleCloseModal}/>
    </div>
  );
}

export default App;
