import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  width: 96px;
  height: 96px;
  border-radius: 8px;
  padding: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: #FFFFFF;
  font-size: 16px;
`;
