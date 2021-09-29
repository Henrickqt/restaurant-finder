import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

const RestaurantCard = () => {
  const settings = {
    count: 5,
    isHalf: true,
    value: 4,
    edit: false,
    size: 20,
    activeColor: '#E7711C',
  };

  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Restaurante 1</Title>
        <ReactStars {...settings} />
        <Address>Rua Comendador José Esteves</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurante} alt="Imagem do restaurante" />
    </Restaurant>
  );
}

export default RestaurantCard;
