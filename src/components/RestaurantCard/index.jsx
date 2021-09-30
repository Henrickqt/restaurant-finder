import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = ({ restaurant }) => {
  const settings = {
    count: 5,
    isHalf: true,
    value: restaurant.rating,
    edit: false,
    size: 20,
    activeColor: '#E7711C',
  };

  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars {...settings} />
        <Address>
          {restaurant.vicinity || restaurant.formatted_address}
        </Address>
      </RestaurantInfo>
      <RestaurantPhoto
        src={restaurant.photos 
          ? restaurant.photos[0].getUrl() 
          : restaurante
        }
        alt="Foto do restaurante"
      />
    </Restaurant>
  );
}

export default RestaurantCard;
