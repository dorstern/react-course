import React from 'react';
import styled, {css} from 'styled-components';
import { ListItem } from './ListItem';

const listItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4"
];

export const Main = () => (
    <Container>
        {
            listItems.map( label => (<ListItem key={label} label={label}/>))
        }
    </Container>
);

const Container = styled.div`
    height: 100%;
    width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;