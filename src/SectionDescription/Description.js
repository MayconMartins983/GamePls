import React from 'react';
import './description.css';
import img1 from './the_witcher2.jpg';
import { useState, useEffect } from 'react';

const Description = () => {
  const [apiDados, setApiDados] = useState('') 
    
  useEffect ( () => { const Api = fetch ('https://gamespls-api.herokuapp.com/dark-souls')
  .then ((response) => response.json())
  .then (
      (body) => setApiDados (body)
  )
}, [])
  
  return (
   <>
    <div className='conteiner'>
      <div className='sectionDescription'>
        <div className='foto'>
          <img src={apiDados.picture}/>
          <p>{apiDados.title}</p>
        </div>
          <div className='description'>
            <h2>{apiDados.title}</h2>
            <p> <strong>Studio:</strong> {apiDados.studio}</p>
            <p><strong>Release_date:</strong> {apiDados.release_date}</p>
            <p><strong>Description:</strong> {apiDados.story}</p>
          </div>
      </div>
    </div>
   
   </>
  )
};

export default Description;
