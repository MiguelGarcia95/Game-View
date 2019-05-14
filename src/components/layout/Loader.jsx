import React from 'react';
import { PacmanLoader, ClipLoader } from 'react-spinners';

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

export const SidebarLoader = () => {
  return (
    <section className="loader_container sidebar_loader">
      <section className="loader">
        <PacmanLoader
          size={25}
          sizeUnit={"px"}
          color={`#FFFF00`}
        />
      </section>
    </section>
  )
};

export const ResultsLoader = () => {
  return (
    <section className="loader_container results_loader">
      <section className="loader">
        <ClipLoader
          size={100}
          sizeUnit={"px"}
          color={`#FFFF00`}
        />
      </section>
    </section>
  )
};