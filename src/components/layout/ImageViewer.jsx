import React from 'react';
import './css/image_viewer.css';

const ImageViewer = ({setCurrentImage, currentImageIndex, currentImage, changeImage}) => {
  return (
    <section className="image">
      <section className="image_background" onClick={() => setCurrentImage(null, null)}></section>
      <section className="image_box">
        <img src={currentImage} alt={currentImage}/>
      </section>
      <section className="click left" onClick={() => changeImage(currentImageIndex, 'prev')} ><i className="fas fa-2x fa-arrow-left"></i></section>
      <section className="click right" onClick={() => changeImage(currentImageIndex, 'next')} ><i className="fas fa-2x fa-arrow-right"></i></section>
    </section>
  )
}

export default ImageViewer;