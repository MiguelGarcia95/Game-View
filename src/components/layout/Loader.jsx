import React from 'react';
import { PacmanLoader } from 'react-spinners';

export const FullHeaderLoader = () => {
  const style = {
    position: 'absolute',
    left: 0, 
    right: 0, 
    top: 0, 
    bottom: 0,
    margin: 'auto'
  }
  return (
    <section className="loader_container full_loader">
      <section className="loader">
        <PacmanLoader
          size={100}
          sizeUnit={"px"}
          color={`#FFFF00`}
        />
      </section>
    </section>
  )
};