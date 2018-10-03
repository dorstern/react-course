import React from 'react';
import Button from "./Button";
import { ThemeProvider } from 'styled-components';

const theme = {
    primary: "red",
    scondary: "blue"
};

export const App = () => (
    <ThemeProvider theme={theme}>
        <div>
            <Button label="Click me"/>
        </div>
    </ThemeProvider>
);