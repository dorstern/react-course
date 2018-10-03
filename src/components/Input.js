import React from 'react';
import styled, {css} from 'styled-components';


const Input = (props) => (
    <StyledInput
        placeholder={props.label}
    />
);

export default Input;

const StyledInput = styled.input`
    
`;