import React, { useEffect, useState } from 'react';

import { Skeleton } from '../../components';


import { Card, Title } from './styles';

const ImageCard = ({ photo, title }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const imageLoader = new Image();
    imageLoader.src = photo;
    imageLoader.onload = () => setImageLoaded(true);
  }, [photo]);

  return (
    <>
      {imageLoaded ? (
        <Card photo={photo}>
          <Title>{title}</Title>
        </Card>
      ) : (
        <Skeleton width='96px' height='96px' />
      )}
    </>
  );
}

export default ImageCard;
