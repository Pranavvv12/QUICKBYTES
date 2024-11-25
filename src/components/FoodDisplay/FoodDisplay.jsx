// import React, { useState } from 'react';
// import './FoodDisplay.css';
// import FoodItem from '../FoodItem/FoodItem'; 
// import { food_list } from './FoodList';

// const FoodDisplay = () => {
//     const [category, setCategory] = useState("All");

//     return (
//         <div className='food-display' id='food-display'>
//             <h2>Top dishes near you</h2>
//             <div className="food-display-list">
//                 {food_list.map((item, index) => {
//                     if (category === "All" || category === item.category) {
//                         return (
//                             <FoodItem
//                                 key={index}
//                                 id={item._id}
//                                 name={item.name}
//                                 description={item.description}
//                                 price={item.price}
//                                 image={item.image}
//                             />
//                         );
//                     }
//                     return null; 
//                 })}
//             </div>
//         </div>
//     );
// };

// export default FoodDisplay;
import React, { useState } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem'; 
import { food_list } from './FoodList';

const FoodDisplay = () => {
    const [category, setCategory] = useState("All");
    const [showAll, setShowAll] = useState(false); 

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const itemsToShow = showAll ? food_list : food_list.slice(0, 8);

    return (
        <div className='food-display' id='food-display'>
            <div className="header-container">
                <h2>Top dishes near you</h2>
                <span
                    onClick={toggleShowAll}
                    role="button"
                    tabIndex="0"
                    className="show-more-span"
                >
                    {showAll ? "Hide" : "Show More"}
                </span>
            </div>
            <div className="food-display-list">
                {itemsToShow.map((item, index) => {
                    if (category === "All" || category === item.category) {
                        return (
                            <FoodItem
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                            />
                        );
                    }
                    return null; 
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;


