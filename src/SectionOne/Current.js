import React from 'react';
import Star from './Star';
import { useState, useEffect } from 'react';


const Current = ({image, title, rating}) => {
    
  return <div>
      <div className='current'>

        <div className='img'>
            { <img src={image}/> }
            
        </div>

        <div className='titulo'>
            {title}
        </div>

       
        <div className='assessment'>
            Avaliação: {rating}/5
        </div>
       
            
        </div>
    </div>;
};

export default Current;

/* 
( () => { const Api = fetch ('https://gamespls-api.herokuapp.com/dark-souls')
        .then ((response) => response.json())
        .then (
            (body) => setApiDados (body.rating)
        )
    } */