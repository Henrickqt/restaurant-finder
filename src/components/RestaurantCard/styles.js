import styled from 'styled-components';

export const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  border-left: 8px solid transparent;
  margin-top: 8px;
  padding: 16px;
  background-color: #FFFFFF;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  margin-bottom: 8px;
`;

export const Address = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin: 8px 0;
`;

export const RestaurantPhoto = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 8px;
  margin-left: 8px;
  object-fit: cover;
`;
