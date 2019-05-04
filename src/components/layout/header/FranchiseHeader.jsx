import React from 'react';

import '../css/display_header.css';

const FranchiseHeader = ({franchise}) => {
  const headerImage = {
    backgroundImage: `url(${franchise.image.screen_large_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed'
  }
  
  return (
    <section className="review_header franchise_header" style={headerImage}>
      <h1>{`Franchise: ${franchise.name}`}</h1>
    </section>
  )
}

export default FranchiseHeader;