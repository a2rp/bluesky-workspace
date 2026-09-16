// src/components/footer/index.jsx
import React from "react";
import { Styled } from "./styled";
import { TbHeart } from "react-icons/tb";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <Styled.Wrapper>
            <Styled.BottomBar>
                <div className="left">
                    Copyright &copy; {year} BlueSky Workspace Solutions
                </div>

                <div className="right">
                    Built with <TbHeart size={13} className="heart" /> in React by{" "}
                    <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                    .
                </div>
                <nav className="links" aria-label="Footer links">
                    <a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://codepen.io/ash1198" target="_blank" rel="noopener noreferrer">CodePen</a>
                    <a href="mailto:ash.ranjan09@gmail.com">Email</a>
                    <a href="https://a2rp-donation-page.netlify.app/" target="_blank" rel="noopener noreferrer">Support</a>
                    <a href="https://buymeacoffee.com/a2rp" target="_blank" rel="noopener noreferrer">Buy Me A Coffee</a>
                    <a href="https://patreon.com/a2rp" target="_blank" rel="noopener noreferrer">Patreon</a>
                </nav>
            </Styled.BottomBar>
        </Styled.Wrapper>
    );
}
