import React from 'react';
import { PacmanLoader } from 'react-spinners';

export const FullHeaderLoader = () => {
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

export const ContentLoader = () => {
  return (
    <section className="loader_container content_loader">
      <section className="loader">
        <PacmanLoader
          size={50}
          sizeUnit={"px"}
          color={`#FFFF00`}
        />
      </section>
    </section>
  )
};