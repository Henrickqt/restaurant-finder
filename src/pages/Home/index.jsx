import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import { Card } from '../../components';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Wrapper, Container, Search, Logo, Carousel, CarouselTitle, Map } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt='Logo' />
          <TextField
            label='Pesquisar restaurantes'
            outlined
            trailingIcon={<MaterialIcon role='button' icon='search' />}
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </TextField>
          <CarouselTitle>
            Na sua área:
          </CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title='Restaurante 1' />
            <Card photo={restaurante} title='Restaurante 2' />
            <Card photo={restaurante} title='Restaurante 3' />
            <Card photo={restaurante} title='Restaurante 4' />
            <Card photo={restaurante} title='Restaurante 5' />
            <Card photo={restaurante} title='Restaurante 6' />
            <Card photo={restaurante} title='Restaurante 7' />
          </Carousel>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
}

export default Home;
