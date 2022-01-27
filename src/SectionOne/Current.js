import React from 'react';
import Star from './Star';
import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';



const Current = ({image, title, rating}) => {

  return (
    
    <div>
        <div className='current'>
        
            <div className='img' > 
                { <img src={image}/> }                
            </div>

            <div className='titulo'>
                {title}
            </div>

            <div className='assessment'>
                Avaliação: {rating}/5
            </div>        
                
        </div>
    </div> 
    
    )
};

export default Current;

 