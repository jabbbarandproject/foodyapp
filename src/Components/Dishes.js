import React from 'react';
import './Dishes.css'; // Import the CSS for styling

const Dishes = () => {
  const dishes = [
    {
      image: '/Images/thai.svg',
      title: 'Thai Basil Tofu Stir Fry',
      time: '20 minutes',
      mealType: 'meal Type',
      rating: 2
    },
    {
      image: '/Images/china.svg',
      title: 'Kung Pao Shrimp',
      time: '30 minutes',
      mealType: 'meal Type',
      rating: 3
    },
    {
      image: '/Images/mex.svg',
      title: 'Mexican Chicken',
      time: '40 minutes',
      mealType: 'meal Type',
      rating: 4
    },
    {
      image: '/Images/egg.svg',
      title: 'Egg White Bites',
  
      time: '10 minutes',
      mealType: 'meal Type',
      rating: 2
    },
    {
      image: '/Images/greek.svg',
      title: 'Greek Faro Salad',
  
      time: '15 minutes',
      mealType: 'meal Type',
      rating: 3
    },
    {
      image: '/Images/bur.svg',
      title: 'Mediterranean Diet Snack',
  
      time: '20 minutes',
      mealType: 'meal Type',
      rating: 4
    }
  ];

  return (
    <>
    <div className="dishes-container">
      {dishes.map((dish, index) => (
        <div key={index} className="dish-card">
          <img src={dish.image} alt={dish.title} className="dish-image" />
          <div className="dish-info">
            <div className='dish-btn-side'>
            <h3 className="dish-title">{dish.title}</h3>
            <button className='reviews'>Reviews:26</button>
            </div>
            <div  className='meal-type-for-main'>
            <div className='meal-type-for'>
            <p className="dish-time"><img src='/Images/watch.svg'/> {dish.time}</p>
            </div>
              <div>
            <p className="dish-type">{dish.mealType}</p>
             <img  src='/Images/str.svg'/> <span>  <img src='/Images/str.svg'/></span>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="footer-image">
      <div className='All'>
      <img src='/Images/cook.svg'/>
      <h1>All Rights Reserved </h1>
      </div>
         
      </div>
    </>
  );
};

export default Dishes;
