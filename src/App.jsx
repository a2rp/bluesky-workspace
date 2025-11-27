// src/App.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AppRoutes from "./AppRoutes";
import BackToTop from "./components/backToTop";
import DrawerMenu from "./components/drawerMenu";

export default function App() {
    const wrapperRef = useRef(null);
    const location = useLocation();
    const [displayDrawer, setDisplayDrawer] = useState(false);

    const handleHamburgerClick = () => {
        setDisplayDrawer(prev => !prev);
    };

    useEffect(() => {
        // console.log("displayDrawer", displayDrawer);
    }, [displayDrawer]);

    useEffect(() => {
        wrapperRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    return (
        <>
            <Styled.Wrapper ref={wrapperRef}>
                <Header
                    displayDrawer={displayDrawer}
                    setDisplayDrawer={setDisplayDrawer}
                    handleHamburgerClick={handleHamburgerClick}
                />
                <Styled.Main>
                    <Styled.RoutesWrapper>
                        <AppRoutes />
                    </Styled.RoutesWrapper>
                </Styled.Main>
                <Footer />
                <BackToTop targetRef={wrapperRef} />
            </Styled.Wrapper>

            {displayDrawer && (
                <>
                    <Styled.Drawer>
                        <div className="empty" onClick={handleHamburgerClick}></div>
                        <div className="menuWrapper">
                            <div className="menuScroller">
                                <DrawerMenu onNavigate={handleHamburgerClick} />
                            </div>
                        </div>
                    </Styled.Drawer>
                </>
            )}
        </>
    );
}
