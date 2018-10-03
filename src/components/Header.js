import React from 'react';
import styled, {css} from 'styled-components';
import Button from './Button';


export const Header = (props) => (
    <Container>
        <Input/>
        <Button/>
    </Container>
);

const Container = styled.div`
    height: 150px;
    width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-bottom: 1px #eee;
	background: ${({theme}) => theme.white};
	box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Input = styled.input`
    height: 30px;
    width: 195px;
    margin: 5px;
    display: flex;
    justify-content: center;
    border-radius: 3px;
`;