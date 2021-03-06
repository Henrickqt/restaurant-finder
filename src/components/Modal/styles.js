import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 144px);
  width: 500px;
  border-radius: 8px;
  padding: 24px;
  background-color: #FFFFFF;
  box-shadow: 0 0 32px rgba(78, 89, 131, 0.2);
`;
