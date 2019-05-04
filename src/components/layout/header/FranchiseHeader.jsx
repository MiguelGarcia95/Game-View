import React from 'react';

const FranchiseHeader = ({franchise, title, headerClass, image}) => {
  if (image) {
    const headerImage = {
      backgroundImage: `url(${franchise.image.screen_large_url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed'
    };

    return (
      <section className={`review_header ${headerClass}`} style={headerImage}>
        <h1>{title} <span>{franchise.name}</span></h1>
      </section>
    )
  } else {
    return (
      <section className={`review_header ${headerClass}`}>
        <h1>{title} <span>{franchise.name}</span></h1>
      </section>
    )
  }
}

export default FranchiseHeader;