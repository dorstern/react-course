import React from 'react';
import Button from "./Button";
import { ThemeProvider } from 'styled-components';
import { Page } from "./Page";


const theme = {
    blue: "#4286f4",
    background: "blue",
    white: "#fff",
    gray: "#f2f2f2"
};

const App = props => (
    <ThemeProvider theme={theme}>
        <Page/>
    </ThemeProvider>
);

export default App;