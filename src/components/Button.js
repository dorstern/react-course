import React from 'react';
import styled, {css} from 'styled-components';

const Button = props => (
  <Container isDisabled={true}>
      <Label>
          {props.label}
      </Label>
  </Container>
);

export default Button;

const Container = styled.div`
    width: 100px;
    height: 50px;
    color: red;
    background: ${({ isDisabled }) => isDisabled ? 'yellow' : 'red' };
    
    ${({ isDisabled }) => isDisabled && css` 
        pointer-events = none;
        opacity: 0.5;     
    `}
`;

const Label = styled.h3``;
