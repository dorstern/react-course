import React from 'react';
import Input from "./Input";
import Button from "./Button";
import styled, {css} from 'styled-components';


export const Home = (props) => (
    <Container>
        <Input label={"Username"}/>
        <Input label={"Password"}/>
        <Button onClick={ () => props.history.push('/content') } label={"Login"}/>
    </Container>
)

const Container = styled.div`
    width: 100%;
    height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 100px 0px;
`;