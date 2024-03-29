import React from 'react'
import styled, { ThemeProvider } from "styled-components"
import Footer from './Footer'
import NavBar from './NavBar'
import { styles } from '../../styles'

import { ReactComponent as right } from "../../assets/HUD/HUDRight.svg"
import { ReactComponent as top } from "../../assets/HUD/HUDTop.svg"
import { ReactComponent as left } from "../../assets/HUD/HUDLefts.svg"

const Baseview = ({ children }) =>
{
    return (
    <ThemeProvider theme={styles}>
        <Container>
            <Background/>
            <NavBar/>
			<HUD>
				<HUDLeft/>
				<HUDTop/>
				<HUDRight/>
			</HUD>
            <PageContent>
                {children}
            </PageContent>
            <Footer/>
        </Container>
    </ThemeProvider>
    )
}

const Container = styled.div`
    display:flex;

    width: 100vw;
    height: 100vh;
`

const HUD = styled.div`
	display:flex;
	flex-direction: row;
	position:fixed;
	width: 100vw;
	pointer-events: none;
	z-index: 1;
`

const HUDLeft = styled(left)`
	display:flex;
	top: -7px;
	left: -4px;
	flex-shrink: 0;
	position: relative;
	margin-right: -6px;

	@media screen and (max-width : ${props =>props.theme.mobile}px) {
		left: -50px;
		margin-right: -52px;
	}
`
const HUDTop = styled(top)`
	display:flex;
	top: -4px;
	position:relative;
	width: 101%;
	 background-color: ${props => props.theme.colors.background || "grey"};

`
const HUDRight = styled(right)`
	display:flex;
	right: -1px;
	top: -4px;
	flex-shrink: 0;
	position:relative;
	margin-left: -5px;

	@media only screen and (max-device-width : ${props =>props.theme.mobile}px) {
		right: -50px;
		margin-left: -54px;
	}
`

const Background = styled.div`
    display:flex;

    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: -1;
    background-color: ${props => props.theme.colors.background || "grey"};
	// @media screen and (max-width : ${props =>props.theme.mobile}px) {
	// 	background-color: red;
	// }

`


const PageContent = styled.div`
    display: flex;
    width: 100vw;
    // padding: 100px 100px 0px 100px;
	width: calc(100vw - 200px);
	margin: 20px 100px 0px 100px;
	// width: 100vw;
	@media screen and (max-width : ${props =>props.theme.mobile}px) {
		width: calc(100vw - 90px);
		margin: 0px 45px 0px 56px;
	}
	position: absolute;
	// z-index: -1;
`
export default Baseview;
