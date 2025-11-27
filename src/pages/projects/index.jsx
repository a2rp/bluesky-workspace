// src/pages/projects/index.jsx
import React, { useCallback, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiLayers,
    FiMapPin,
    FiUsers,
    FiClock,
    FiCheckCircle,
    FiFilter,
    FiArrowRightCircle,
    FiMonitor,
    FiBriefcase,
} from "react-icons/fi";

const fallbackImg =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop";

const filters = [
    { id: "all", label: "All projects" },
    { id: "tech", label: "Tech & product teams" },
    { id: "creative", label: "Creative & studios" },
    { id: "enterprise", label: "Enterprise programs" },
];

const projects = [
    {
        id: "orbit-labs-hybrid-hub",
        name: "Orbit Labs – Hybrid Hub Floor",
        category: "tech",
        location: "Outer Ring Road, Bengaluru",
        teamSize: "110-seat product & data pod",
        duration: "8-week build + phased move-in",
        formats: "Private offices + hot desks + project rooms",
        outcomeTag: "Hybrid-friendly campus inside a single floor",
        image:
            "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
        highlights: [
            "Zoned the floor into focus pods, collaboration lanes, and quiet libraries.",
            "Dedicated war-room cluster for product launches with large-format whiteboards.",
            "Created a ‘townhall spine’ that doubles as internal demo corridor.",
        ],
        impact:
            "Teams moved from 3 separate buildings into one hybrid-ready floor while keeping their own rituals – fewer context switches, easier cross-team syncs.",
    },
    {
        id: "northwind-creative-studio",
        name: "Northwind Studio – Creative Wing",
        category: "creative",
        location: "Indiranagar, Bengaluru",
        teamSize: "38-seat design & content studio",
        duration: "5-week refresh & migration",
        formats: "Open studio + edit bays + client lounge",
        outcomeTag: "‘Lights-on’ creative floor with calm corners",
        image:
            "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",
        highlights: [
            "Flexible workbenches for storyboard and layout work.",
            "Semi-dark edit bays with acoustic treatment for video teams.",
            "Client lounge set up as a living-room style presentation zone.",
        ],
        impact:
            "Able to host client reviews, recording sessions, and internal sprints without booking external studios every week.",
    },
    {
        id: "stellar-commerce-growth-suite",
        name: "Stellar Commerce – Growth Suite",
        category: "tech",
        location: "Hitech City, Hyderabad",
        teamSize: "65-seat growth & ops cluster",
        duration: "6-week design + 3-week handover",
        formats: "Neighbourhood-style pods + shared meeting alley",
        outcomeTag: "Always-on growth floor for fast experiments",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        highlights: [
            "Seat-map designed around cross-functional pods – growth, data, CX.",
            "Meeting alley with back-to-back huddle rooms for rapid reviews.",
            "Acoustic phone booths for outbound sales and support calls.",
        ],
        impact:
            "Growth teams now sit within 30 seconds of each other – decision loops and rollout cadence improved noticeably.",
    },
    {
        id: "aurora-finance-campus",
        name: "Aurora Finance – Managed Multi-floor Campus",
        category: "enterprise",
        location: "Central Business District, Mumbai",
        teamSize: "320-seat regional HQ",
        duration: "Staggered delivery over 16 weeks",
        formats: "Multi-floor managed office + executive wing",
        outcomeTag: "Regional headquarters without owning the building",
        image:
            "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1200&auto=format&fit=crop",
        highlights: [
            "Dedicated executive wing with controlled access and reception.",
            "Shared training and assessment center across two floors.",
            "Disaster-recovery capable IT backbone with vendor coordination.",
        ],
        impact:
            "Aurora consolidated three leased spaces into a single BlueSky campus, with one contract and one workspace partner.",
    },
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const onImgError = useCallback((e) => {
        e.currentTarget.src = fallbackImg;
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeFilter === "all") return projects;
        return projects.filter((p) => p.category === activeFilter);
    }, [activeFilter]);

    return (
        <Styled.PageWrap>
            <Styled.Inner>
                {/* Hero */}
                <Styled.HeaderSection>
                    <Styled.HeaderText>
                        <Styled.Overline>
                            <FiLayers />
                            Selected BlueSky workspace projects
                        </Styled.Overline>
                        <Styled.PageTitle>
                            Workspaces that were planned like products, not
                            just floors.
                        </Styled.PageTitle>
                        <Styled.Subtitle>
                            Every BlueSky workspace starts from three simple
                            questions – who is working here, what do their days
                            look like, and how should this floor feel when a
                            team walks in on a busy Monday.
                        </Styled.Subtitle>
                    </Styled.HeaderText>

                    <Styled.HeaderMetaCard>
                        <Styled.MetaRow>
                            <Styled.MetaItem>
                                <span className="icon">
                                    <FiBriefcase />
                                </span>
                                <span className="label">Engagement styles</span>
                                <span className="value">
                                    Managed offices & enterprise programs
                                </span>
                            </Styled.MetaItem>
                            <Styled.MetaItem>
                                <span className="icon">
                                    <FiMonitor />
                                </span>
                                <span className="label">
                                    Teams we&apos;ve designed for
                                </span>
                                <span className="value">
                                    Product, design, support, sales & more
                                </span>
                            </Styled.MetaItem>
                        </Styled.MetaRow>

                        <Styled.InfoNote>
                            We&apos;ve anonymised names and exact floor-plans
                            here, but kept the real use-cases, constraints, and
                            outcomes so you can imagine your own project.
                        </Styled.InfoNote>
                    </Styled.HeaderMetaCard>
                </Styled.HeaderSection>

                {/* Filters */}
                <Styled.Toolbar>
                    <Styled.FilterLabel>
                        <FiFilter />
                        <span>View projects by team profile</span>
                    </Styled.FilterLabel>
                    <Styled.FilterPills>
                        {filters.map((filter) => (
                            <Styled.FilterChip
                                key={filter.id}
                                type="button"
                                $active={filter.id === activeFilter}
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                {filter.label}
                            </Styled.FilterChip>
                        ))}
                    </Styled.FilterPills>
                </Styled.Toolbar>

                {/* Projects grid */}
                <Styled.Grid>
                    {filteredProjects.map((project) => (
                        <Styled.Card key={project.id}>
                            <Styled.ImageWrap>
                                <Styled.Image
                                    src={project.image}
                                    alt={project.name}
                                    onError={onImgError}
                                    loading="lazy"
                                />
                                <Styled.ImageTag>
                                    {project.outcomeTag}
                                </Styled.ImageTag>
                            </Styled.ImageWrap>

                            <Styled.CardBody>
                                <Styled.CardHeader>
                                    <Styled.NameBlock>
                                        <Styled.ProjectName>
                                            {project.name}
                                        </Styled.ProjectName>
                                        <Styled.LocationRow>
                                            <FiMapPin />
                                            <span>{project.location}</span>
                                        </Styled.LocationRow>
                                    </Styled.NameBlock>

                                    <Styled.StatsBlock>
                                        <Styled.Stat>
                                            <span className="label">
                                                Team size
                                            </span>
                                            <span className="value">
                                                {project.teamSize}
                                            </span>
                                        </Styled.Stat>
                                        <Styled.Stat>
                                            <span className="label">
                                                Engagement window
                                            </span>
                                            <span className="value">
                                                {project.duration}
                                            </span>
                                        </Styled.Stat>
                                        <Styled.Stat>
                                            <span className="label">
                                                Formats
                                            </span>
                                            <span className="value">
                                                {project.formats}
                                            </span>
                                        </Styled.Stat>
                                    </Styled.StatsBlock>
                                </Styled.CardHeader>

                                <Styled.Highlights>
                                    {project.highlights.map(
                                        (highlight, index) => (
                                            <li key={index}>
                                                <FiCheckCircle />
                                                <span>{highlight}</span>
                                            </li>
                                        )
                                    )}
                                </Styled.Highlights>

                                <Styled.ImpactBlock>
                                    <h4>What changed for the team</h4>
                                    <p>{project.impact}</p>
                                </Styled.ImpactBlock>

                                <Styled.CardFooter>
                                    <Styled.PrimaryBtn type="button">
                                        <FiArrowRightCircle />
                                        <span>
                                            Imagine a similar layout for my
                                            team
                                        </span>
                                    </Styled.PrimaryBtn>
                                    <Styled.SecondaryText>
                                        Share your seat count, city, and ideal
                                        move-in date and we&apos;ll respond with
                                        2–3 starting configurations inspired by
                                        these projects.
                                    </Styled.SecondaryText>
                                </Styled.CardFooter>
                            </Styled.CardBody>
                        </Styled.Card>
                    ))}
                </Styled.Grid>
            </Styled.Inner>
        </Styled.PageWrap>
    );
};

export default Projects;
