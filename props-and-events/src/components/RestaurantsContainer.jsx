import Restaurant from "./Restaurant.jsx";
import { restaurants } from "../data/data.js";

// for each restaurant in data array, create Restuarant component with props from restuarant
function RestaurantsContainer() {
  return (
    <div className="restaurantContainer">
      {
        restaurants.map((restaurant) => ( <Restaurant name={restaurant.name} 
        address={restaurant.address} phone={restaurant.phone} cuisine={restaurant.cuisine}
        rating={restaurant.rating} image={restaurant.image} hours={restaurant.hours} 
        menu={restaurant.menu} />))
      }
    </div>
  );
}

export default RestaurantsContainer;
