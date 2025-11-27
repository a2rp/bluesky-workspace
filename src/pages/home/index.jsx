// src/pages/home/index.jsx
import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Styled } from "./styled";
import {
    FiArrowRightCircle,
    FiPhoneCall,
    FiMapPin,
    FiUsers,
    FiClock,
    FiGrid,
    FiCheckCircle,
    FiLayers,
    FiBriefcase,
    FiMonitor,
    FiTrendingUp,
} from "react-icons/fi";

const fallbackImg =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop";

const Home = () => {
    const onImgError = useCallback((e) => {
        e.currentTarget.src = fallbackImg;
    }, []);

    return (
        <Styled.PageWrap>
            <Styled.Inner>
                {/* Hero */}
                <Styled.HeroSection>
                    <Styled.HeroText>
                        <Styled.Overline>
                            <FiLayers />
                            Modern workspaces, planned like products.
                        </Styled.Overline>

                        <Styled.HeroTitle>
                            Managed workspaces for teams that have outgrown
                            generic offices.
                        </Styled.HeroTitle>

                        <Styled.HeroSubtitle>
                            BlueSky designs and runs calm, modern workspaces for
                            growing teams – from a handful of dedicated desks
                            to multi-floor managed offices. Your team brings the
                            work; we shape the floor around it.
                        </Styled.HeroSubtitle>

                        <Styled.HeroActions>
                            <NavLink to="/services">
                                <Styled.PrimaryBtn type="button">
                                    <FiArrowRightCircle />
                                    <span>Explore workspace formats</span>
                                </Styled.PrimaryBtn>
                            </NavLink>

                            <NavLink to="/contact">
                                <Styled.SecondaryBtn type="button">
                                    <FiPhoneCall />
                                    <span>Talk to a workspace specialist</span>
                                </Styled.SecondaryBtn>
                            </NavLink>
                        </Styled.HeroActions>

                        <Styled.HeroMetaRow>
                            <Styled.MetaItem>
                                <span className="icon">
                                    <FiUsers />
                                </span>
                                <span className="label">
                                    Comfortably supports
                                </span>
                                <span className="value">
                                    10–500+ seat teams with layered formats
                                </span>
                            </Styled.MetaItem>
                            <Styled.MetaItem>
                                <span className="icon">
                                    <FiMapPin />
                                </span>
                                <span className="label">Planned for</span>
                                <span className="value">
                                    Prime business districts, not just any
                                    building
                                </span>
                            </Styled.MetaItem>
                            <Styled.MetaItem>
                                <span className="icon">
                                    <FiClock />
                                </span>
                                <span className="label">
                                    Typical go-live window
                                </span>
                                <span className="value">
                                    6–12 weeks from aligned brief
                                </span>
                            </Styled.MetaItem>
                        </Styled.HeroMetaRow>
                    </Styled.HeroText>

                    <Styled.HeroVisual>
                        <Styled.HeroImageWrap>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                                alt="BlueSky managed workspace"
                                loading="lazy"
                                onError={onImgError}
                                className="hero-image"
                            />
                            <Styled.HeroBadge>
                                <span className="dot" />
                                <div className="text">
                                    <span className="label">
                                        Live BlueSky floor
                                    </span>
                                    <span className="value">
                                        Hybrid pods · focus corners · calm
                                        meeting alley
                                    </span>
                                </div>
                            </Styled.HeroBadge>
                        </Styled.HeroImageWrap>

                        <Styled.HeroMiniCard>
                            <div className="header">
                                <span className="icon">
                                    <FiBriefcase />
                                </span>
                                <div>
                                    <span className="label">
                                        How teams use BlueSky
                                    </span>
                                    <span className="value">
                                        Managed office instead of another
                                        generic lease.
                                    </span>
                                </div>
                            </div>
                            <Styled.TagsRow>
                                <span className="tag">Hybrid product floors</span>
                                <span className="tag">Creative studios</span>
                                <span className="tag">Regional HQ wings</span>
                            </Styled.TagsRow>
                        </Styled.HeroMiniCard>
                    </Styled.HeroVisual>
                </Styled.HeroSection>

                {/* Highlights */}
                <Styled.HighlightsSection>
                    <Styled.SectionHeaderRow>
                        <Styled.SectionTitle>
                            Why teams choose BlueSky over a regular office.
                        </Styled.SectionTitle>
                        <Styled.SectionSubtitle>
                            Managed office doesn&apos;t just mean someone else
                            pays the electricity bill. We think deeply about how
                            your team works, then design and run a floor that
                            actually supports that rhythm.
                        </Styled.SectionSubtitle>
                    </Styled.SectionHeaderRow>

                    <Styled.HighlightsGrid>
                        <Styled.HighlightCard>
                            <div className="icon">
                                <FiMonitor />
                            </div>
                            <h3>Planned for your actual workday</h3>
                            <p>
                                We study how your team spends a week – deep
                                work, calls, rituals – and zone the floor around
                                those patterns, not just rows of desks.
                            </p>
                            <ul>
                                <li>Focus pods, call corners, quiet libraries</li>
                                <li>Walkable distance between cross-functional pods</li>
                                <li>Meeting rooms sized for real usage, not guesswork</li>
                            </ul>
                        </Styled.HighlightCard>

                        <Styled.HighlightCard>
                            <div className="icon">
                                <FiGrid />
                            </div>
                            <h3>Multiple formats under one roof</h3>
                            <p>
                                Hot desks, dedicated desks, project rooms,
                                private offices and enterprise floors – mixed
                                in one managed building if you need it.
                            </p>
                            <ul>
                                <li>Start with a pod, scale into a suite</li>
                                <li>Mix formats across teams and cities</li>
                                <li>Upgrade without shifting to a new landlord</li>
                            </ul>
                        </Styled.HighlightCard>

                        <Styled.HighlightCard>
                            <div className="icon">
                                <FiTrendingUp />
                            </div>
                            <h3>One workspace partner as you grow</h3>
                            <p>
                                Instead of renegotiating leases and juggling
                                vendors, you work with one BlueSky team that
                                knows your culture and roadmap.
                            </p>
                            <ul>
                                <li>Single contract, clear workspace outcomes</li>
                                <li>Multi-city and multi-floor programs</li>
                                <li>Quarterly workspace health check-ins</li>
                            </ul>
                        </Styled.HighlightCard>
                    </Styled.HighlightsGrid>
                </Styled.HighlightsSection>

                {/* Snapshot of formats */}
                <Styled.FormatsSection>
                    <Styled.SectionHeaderRow>
                        <Styled.SectionTitle>
                            Pick a starting format today, evolve as your team
                            does.
                        </Styled.SectionTitle>
                        <Styled.SectionSubtitle>
                            You don&apos;t have to get the &quot;forever floor&quot;
                            right on day one. Most BlueSky clients move between
                            formats as their teams and products evolve.
                        </Styled.SectionSubtitle>
                    </Styled.SectionHeaderRow>

                    <Styled.FormatsGrid>
                        <Styled.FormatCard>
                            <div className="top">
                                <span className="label">For early teams</span>
                                <h3>Hot desks & dedicated pods</h3>
                            </div>
                            <p>
                                Start with flexible seats and a small cluster of
                                dedicated desks in a calm shared neighborhood.
                            </p>
                            <ul>
                                <li>Good for 3–15 person teams</li>
                                <li>Hybrid-friendly, pay only for what you use</li>
                                <li>Priority access to meeting rooms</li>
                            </ul>
                            <NavLink to="/services">
                                <Styled.ChipLink type="button">
                                    <FiCheckCircle />
                                    <span>See all workspace formats</span>
                                </Styled.ChipLink>
                            </NavLink>
                        </Styled.FormatCard>

                        <Styled.FormatCard>
                            <div className="top">
                                <span className="label">Growing pods</span>
                                <h3>Private offices & team suites</h3>
                            </div>
                            <p>
                                For teams that want their own lockable space
                                but still like being part of a larger managed
                                workspace community.
                            </p>
                            <ul>
                                <li>Clean, branded suites with focus rooms</li>
                                <li>Fewer vendor calls; everything is managed</li>
                                <li>Scale seats without switching buildings</li>
                            </ul>
                            <NavLink to="/pricing">
                                <Styled.ChipLink type="button">
                                    <FiCheckCircle />
                                    <span>Browse pricing examples</span>
                                </Styled.ChipLink>
                            </NavLink>
                        </Styled.FormatCard>

                        <Styled.FormatCard>
                            <div className="top">
                                <span className="label">Established teams</span>
                                <h3>Enterprise floors & programs</h3>
                            </div>
                            <p>
                                Entire floors or multi-floor programs designed
                                with your IT, HR, and workplace teams from day
                                one.
                            </p>
                            <ul>
                                <li>Custom layouts, security and IT policies</li>
                                <li>Townhall zones and training clusters</li>
                                <li>One partner for design, fit-out and run</li>
                            </ul>
                            <NavLink to="/projects">
                                <Styled.ChipLink type="button">
                                    <FiCheckCircle />
                                    <span>See past workspace stories</span>
                                </Styled.ChipLink>
                            </NavLink>
                        </Styled.FormatCard>
                    </Styled.FormatsGrid>
                </Styled.FormatsSection>

                {/* How it works */}
                <Styled.StepsSection>
                    <Styled.SectionHeaderRow>
                        <Styled.SectionTitle>
                            A simple, calm way to go from idea to live floor.
                        </Styled.SectionTitle>
                        <Styled.SectionSubtitle>
                            No buzzwords, no complicated funnels – just a
                            structured conversation that ends with the right
                            workspace for your team.
                        </Styled.SectionSubtitle>
                    </Styled.SectionHeaderRow>

                    <Styled.StepsRow>
                        <Styled.StepCard>
                            <div className="badge">Step 1</div>
                            <h3>Share how your team works</h3>
                            <p>
                                You tell us about your workday, team structure,
                                seat count, and what isn&apos;t working in your
                                current space.
                            </p>
                        </Styled.StepCard>

                        <Styled.StepCard>
                            <div className="badge">Step 2</div>
                            <h3>Walk through sample floors</h3>
                            <p>
                                We walk you through real BlueSky floors and
                                propose 2–3 starting configurations with clear
                                seat-wise pricing.
                            </p>
                        </Styled.StepCard>

                        <Styled.StepCard>
                            <div className="badge">Step 3</div>
                            <h3>We shape, you plug in</h3>
                            <p>
                                BlueSky handles fit-out, amenities, and
                                day-to-day operations while your team moves in
                                and gets to work.
                            </p>
                        </Styled.StepCard>
                    </Styled.StepsRow>

                    <Styled.StepsFooter>
                        <NavLink to="/contact">
                            <Styled.StepCTA type="button">
                                <FiArrowRightCircle />
                                <span>
                                    Start with a short, non-pushy conversation
                                </span>
                            </Styled.StepCTA>
                        </NavLink>
                        <span className="hint">
                            You won&apos;t be added to mailing lists or
                            sales-heavy sequences.
                        </span>
                    </Styled.StepsFooter>
                </Styled.StepsSection>
            </Styled.Inner>
        </Styled.PageWrap>
    );
};

export default Home;
