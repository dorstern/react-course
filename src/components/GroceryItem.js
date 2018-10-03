import React from 'react';

export const GroceryItem = props => (
    <li onClick={props.onClick}>
        {props.label}
    </li>
);
