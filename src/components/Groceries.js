import React from 'react';
import { GroceryItem } from './GroceryItem';
import Button from "./Button";


export const Groceries = props => (
    <div>
        <h3>Grocery List</h3>
        <ul>
            {
                props.list.map(label => (
                    <GroceryItem key={label} label={label} onClick={() => console.log(label)}/>
                ))
            }
        </ul>
        <Button/>
    </div>
);
