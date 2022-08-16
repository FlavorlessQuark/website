import React, {useState} from 'react'
import styled, { ThemeProvider } from "styled-components"
import { ReactComponent as emailSVG} from "../../assets/email.svg"
import { ReactComponent as githubSVG} from "../../assets/github.svg"
import { ReactComponent as linkedinSVG} from "../../assets/linkedin.svg"

import { ReactComponent as hudContainer} from "../../assets/HUD/IconContainer.svg"
// import Background from "../../assets/HUD/IconContainer.svg"

export const Footer = () =>
{
    const [active, setActive] = useState("Resume");
    const links = [["https://github.com/FlavorlessQuark", <Github />], ["https://www.linkedin.com/in/johanna-josephine-7a91b01b6", <Linkedin/>], ["mailto:jjosephi.dev@google.com", <Email/>]]

    return (
        <Container>
            <Bg/>
            <SocialContainer>
                {
                    links.map((elem) =>
					<a href={elem[0]}>
                    {elem[1]}
					</a>
                    )
                }
            </SocialContainer>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;

    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;

`

const Bg = styled(hudContainer)`
	position: absolute;
	z-index: -1;
	top: -35%;
	left: -3px;
`

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
	position: relative;
	align-items: end;
	justify-content: space-around;
	top: -10px;
	left: 10px;
`
const Github = styled(githubSVG)`
    display: flex;
    width: 84%;
    // padding: 5% 0px;
`
const Linkedin = styled(linkedinSVG)`
    display: flex;
    width: 84%;
    // padding: 5% 0px;
`
const Email = styled(emailSVG)`
    display: flex;
    width: 84%;
    // padding: 5% 0px;
`

const Delimeter = styled.div`
    display: flex;

    width: 3px;
    background: ${props => props.theme.colors.primary};
`
