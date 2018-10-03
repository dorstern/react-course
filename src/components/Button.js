import React from 'react';
import styled, {css} from 'styled-components';

const Button = (props) => (
  <StyleButton onClick={props.onClick}>
      { props.label }
  </StyleButton>
);

export default Button;

const StyleButton = styled.button`
    height: 35px;
    width: 200px;
    margin: 5px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    border-radius: 3px;
`;
