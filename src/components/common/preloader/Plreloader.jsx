import React from 'react';
import preloader from '../../../assets/img/spinning-circles.svg';

let Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
