import React, { useState } from 'react';

const Tour = ({id, image, info, price, name}) => {

  return <article className='single-tour'>
   <img src={image} alt={name}/>
   <footer>
    <div className='tour-info'>
      <h4>{name}</h4>
      <h4 className='tour-rice'>${price}</h4>
    </div>
    <p>{info}</p>
    <button className='delete-btn'>not intetested</button>
   </footer>
  </article>;
};

export default Tour;