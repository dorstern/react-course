import React from 'react';
import styled, {css} from 'styled-components';


export const ListItem = (props) => (
    <Item>
        {props.label}
    </Item>
);

const Item = styled.div`
    width: 600px;
    height: 75px;
    background: ${({theme}) => theme.white };
    margin: 15px;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0 0 5px 2px rgba(0,0,0,0.1)
`;
