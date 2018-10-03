import React from 'react';
import styled, {css} from 'styled-components';


const Input = (props) => (
    <StyledInput
        placeholder={props.label}
    />
);

export default Input;

const StyledInput = styled.input`
    width: 200px;
    height: 30px;
    display: flex;
    justify-content: center;
    margin: 5px;
`;