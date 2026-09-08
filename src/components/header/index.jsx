import React, { useEffect, useState } from "react";
import { Styled } from "./styled";
import { IoIosMenu } from "react-icons/io";
import { FiSun, FiMoon } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const THEME_KEY = "bluesky-workspace-theme"; // only for UI theme

const Header = ({ handleHamburgerClick }) => {
    const [isLight, setIsLight] = useState(() => {
        if (typeof window === "undefined") return false;

        // 1) check localStorage
        try {
            const stored = window.localStorage.getItem(THEME_KEY);
            if (stored === "light") return true;
            if (stored === "dark") return false;
        } catch {
            // ignore storage errors
        }

        // 2) fall back to current html attribute if any
        const hasLight =
            document.documentElement.getAttribute("data-theme") === "light";
        return hasLight;
    });

    // sync theme with <html data-theme="light"> + localStorage
    useEffect(() => {
        if (typeof document === "undefined") return;

        const root = document.documentElement;
        if (isLight) {
            root.setAttribute("data-theme", "light");
        } else {
            root.removeAttribute("data-theme");
        }

        // persist choice
        try {
            window.localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
        } catch {
            // ignore storage failures
        }
    }, [isLight]);

    const handleThemeToggle = () => {
        setIsLight((prev) => !prev);
    };

    return (
        <Styled.Wrapper>
            <Styled.Main>
                <NavLink to="/home" className="brand">
                    <span className="brandText">BlueSky Workspace Solutions</span>
                </NavLink>

                <div className="themeHamburger">
                    <div className="theme">
                        <Styled.ThemeToggle
                            type="button"
                            aria-label="Toggle light / dark theme"
                            $isLight={isLight}
                            onClick={handleThemeToggle}
                        >
                            <span className="icon sun">
                                <FiSun />
                            </span>
                            <span className="icon moon">
                                <FiMoon />
                            </span>
                            <Styled.ThemeThumb $isLight={isLight} />
                        </Styled.ThemeToggle>
                    </div>

                    <div className="hamburger" onClick={handleHamburgerClick}>
                        <IoIosMenu size={24} />
                    </div>
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Header;
