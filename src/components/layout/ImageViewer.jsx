import React from 'react';
import './css/image_viewer.css';

const ImageViewer = ({setCurrentImage, currentImage, currentImageIndex}) => {
  return (
    <section className="image">
      <section className="image_background" onClick={() => setCurrentImage(null, null)}></section>
      <section className="image_box">
        <img src={currentImage} alt={currentImage}/>
      </section>
    </section>
  )
}

export default ImageViewer;