import React from 'react';
import styled, {css} from 'styled-components';
import { Toolbar } from "./Toolbar";
import { Header } from './Header';
import { Main } from './Main';

export const Page = (props) => (
    <Container>
        <Toolbar/>
        <Header/>
        <Main data={props.data}/>
    </Container>
);

const Container = styled.div`
    height: 100%;
    width: 100%;
	background: ${({theme}) => theme.gray}; 
`;
