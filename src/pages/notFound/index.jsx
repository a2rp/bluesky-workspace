// src/pages/notFound/index.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";
import {
    FiAlertTriangle,
    FiCompass,
    FiHome,
    FiArrowLeftCircle,
} from "react-icons/fi";

const NotFound = () => {
    const location = useLocation();

    return (
        <Styled.PageWrap>
            <Styled.Inner>
                <Styled.Card>
                    <Styled.IconStack>
                        <span className="badge">404</span>
                        <span className="glyph">
                            <FiAlertTriangle />
                        </span>
                    </Styled.IconStack>

                    <Styled.TitleBlock>
                        <Styled.Overline>
                            <FiCompass />
                            You’ve reached a quiet corner of BlueSky
                        </Styled.Overline>

                        <Styled.Title>We couldn’t find this page.</Styled.Title>

                        <Styled.Subtitle>
                            The link you followed may be out of date, or the
                            workspace page moved while we were refreshing the
                            site. The good news: your next step is just a click
                            away.
                        </Styled.Subtitle>
                    </Styled.TitleBlock>

                    <Styled.PathHint>
                        <span className="label">Requested path</span>
                        <span className="value">
                            {location?.pathname || "/unknown"}
                        </span>
                    </Styled.PathHint>

                    <Styled.Actions>
                        <NavLink to="/home">
                            <Styled.PrimaryBtn type="button">
                                <FiHome />
                                <span>Back to BlueSky Home</span>
                            </Styled.PrimaryBtn>
                        </NavLink>

                        <NavLink to="/contact">
                            <Styled.SecondaryBtn type="button">
                                <FiArrowLeftCircle />
                                <span>Tell us what you were looking for</span>
                            </Styled.SecondaryBtn>
                        </NavLink>
                    </Styled.Actions>

                    <Styled.HelpList>
                        <p>Quick things you can try:</p>
                        <ul>
                            <li>Check if the address bar has any typos.</li>
                            <li>
                                Use the side navigation to jump to Services,
                                Pricing or Projects.
                            </li>
                            <li>
                                Drop us a short note on the contact page if
                                something feels broken.
                            </li>
                        </ul>
                    </Styled.HelpList>
                </Styled.Card>
            </Styled.Inner>
        </Styled.PageWrap>
    );
};

export default NotFound;
