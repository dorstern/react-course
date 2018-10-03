import React from 'react';
import styled, {css} from 'styled-components';


export const Toolbar = () => (
    <Container>
    </Container>
);

const Container = styled.div`
    width: 100%;
    height: 50px;
    background: ${({theme}) => theme.blue};
`;