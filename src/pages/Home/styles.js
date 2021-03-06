import Slider from 'react-slick';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  width: 360px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  overflow-y: auto;
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #F8F8F8;
  padding: 16px;
`;

export const Logo = styled.img`
  width: 200px;
  align-self: center;
  margin-bottom: 16px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin: 0 8px;
  }
`;

export const CarouselTitle = styled.h1`
  margin: 16px 0;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
`;

export const ModalTitle = styled.p`
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.11px;
  line-height: 29px;
`;

export const ModalContent = styled.p`
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`;
