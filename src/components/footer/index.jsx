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
                    © {year} | All rights reserved.
                </div>

                <div className="right">
                    Built with <TbHeart size={13} className="heart" /> in React by{" "}
                    <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                    .
                </div>
            </Styled.BottomBar>
        </Styled.Wrapper>
    );
}
