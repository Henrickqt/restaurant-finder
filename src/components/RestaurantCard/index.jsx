import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

import { Skeleton } from '../../components';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const settings = {
    count: 5,
    isHalf: true,
    value: restaurant.rating,
    edit: false,
    size: 20,
    activeColor: '#E7711C',
  };

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars {...settings} />
        <Address>
          {restaurant.vicinity || restaurant.formatted_address}
        </Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos 
          ? restaurant.photos[0].getUrl() 
          : restaurante
        }
        alt="Foto do restaurante"
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && <Skeleton width='96px' height='96px' />}
    </Restaurant>
  );
}

export default RestaurantCard;
