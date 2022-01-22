import React, { useState } from 'react';
import './star.css'
import {FaStar} from 'react-icons/fa'

const Star = ({avaliacao}) => {
    const [rating, SetRating] = useState (avaliacao)

    
  return <div>
      {[...Array(5)].map ((estrela, i) => {
          const ratingValue = i+1
      return (
        <label key={i} className='label'>
            <input type='radio' 
            name='rating' id='rating' 
            value={ratingValue} 
            
            />
            <FaStar color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"} className='stars' size={18}/>
        </label>
    )
      })}


  </div>;
};

export default Star;



