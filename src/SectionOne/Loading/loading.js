import React from 'react';
import imgs from './gif5.gif';
import './laoding.css'


const Loading = () => {
  return <div className='loading'>
      <div className='imgs'>
      <img src={imgs}/>
      </div>
  </div>;
};

export default Loading;
