import styled from "styled-components"
import github from '../assets/github_icon.png'
import email from '../assets/email_icon.png'

const StyledFooter = styled.footer`
    background-color: #3f3f3f;
    margin-bottom: 0px;
    ul {
        margin: 0;
    }
    li {
        width: 60px;
        height: 60px;
        background-position: bottom;
        transition: background-position .2s ease;
        color: transparent;
        text-decoration: none;
        display: inline-block;
        vertical-align: middle;
        margin: 10px;
        a, a:visited {
            color: transparent;
            text-decoration: none;
        }
        &:hover {
            background-position: top;
            transition: background-position .3s ease;
        }
        &.github {
            background-image: url(${github});
        }
        &.email {
            background-image: url(${email});
        }
    }
    div {
        background-color: #c79b69;
        padding: 5px;
        font-size: 0.7rem;
        font-family: "Nunito Sans";
    }
`
const Footer = () => {
    return (
        <StyledFooter>
            <ul>
                <a href='http://github.com/curios789/coffeebase'><li className="github">Github</li></a>
                <a href="mailto:umstot.david@gmail.com"><li className="email">Email Me!</li></a>
            </ul>
            <div><em>Developed by David Umstot for NuCamp Coding Bootcamp 2022</em></div>
        </StyledFooter>
    )
}

export default Footer;