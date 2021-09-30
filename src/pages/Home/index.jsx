import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Card, Restaurant, Modal, Map } from '../../components';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle } from './styles';

const Home = () => {
  const { restaurants } = useSelector((state) => state.restaurants);
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setQuery(inputValue);
    }
  }

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt='Logo' />
          <TextField
            label='Pesquisar restaurantes'
            outlined
            trailingIcon={
              <MaterialIcon role='button' icon='search' />
            }
          >
            <Input
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>
            Na sua área:
          </CarouselTitle>
          <Carousel {...settings}>
            {restaurants.map((restaurant) => (
              <Card
                key={restaurant.place_id}
                photo={restaurant.photos 
                  ? restaurant.photos[0].getUrl() 
                  : restaurante
                }
                title={restaurant.name}
              />
            ))}
          </Carousel>
        </Search>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.place_id}
            restaurant={restaurant}
          />
        ))}
      </Container>
      <Map query={query} />
      <Modal
        open={modalOpened}
        onClose={() => setModalOpened(!modalOpened)}
      />
    </Wrapper>
  );
}

export default Home;
