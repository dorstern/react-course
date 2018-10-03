import React from 'react';
import styled, {css} from 'styled-components';
import { ListItem } from './ListItem';

export const Main = (props) => (
    <Container>
        {
            props.data.listItems.map( label => (<ListItem key={label} label={label}/>))
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