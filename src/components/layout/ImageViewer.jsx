import React from 'react';
// import './css/imgae_viewer.css';

const ImageViewer = ({setCurrentImage, currentImage}) => {
  return (
    <section className="image">
      <section className="image_background" onClick={() => setCurrentImage(null)}></section>
      <section className="image_box">
        <img src={currentImage} alt={currentImage}/>
      </section>
    </section>
  )
}

export default ImageViewer;