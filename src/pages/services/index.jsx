// src/pages/services/index.jsx
import React, { useCallback, useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiSearch,
    FiFilter,
    FiCheckCircle,
    FiUsers,
    FiWifi,
    FiCoffee,
    FiMonitor,
    FiMapPin,
    FiClock,
    FiArrowRightCircle,
    FiBriefcase,
    FiPhoneCall,
    FiChevronDown,
    FiChevronUp,
    FiLayers,
    FiSettings,
    FiTag,
    FiStar,
    FiList,
} from "react-icons/fi";

const fallbackImg =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop";

const servicesData = [
    {
        id: "private-offices",
        label: "Private Offices",
        tag: "Teams of 4–50",
        type: "managed-office",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        summary:
            "Lockable, fully managed office suites with ergonomic furniture, fast Wi-Fi, and on-site support.",
        highlights: [
            "Branded entry & signage options",
            "Enterprise-grade Wi-Fi & wired connectivity",
            "Daily housekeeping & utilities included",
        ],
        features: [
            "Ideal for growing teams who want plug-and-play workspaces.",
            "Flexible contracts starting from 3 months.",
            "Options for dedicated meeting room inside your suite.",
        ],
        sizeRange: "4–50 seats",
        suitableFor: "Startups, product teams, growing agencies",
        startingPrice: "₹18,000 / seat / month",
        billingCycle: "Monthly, quarterly, or annual",
        availability: "Available across premium Grade-A buildings.",
        sla: "99.9% uptime for connectivity & utilities.",
    },
    {
        id: "coworking-desks",
        label: "Coworking & Hot Desks",
        tag: "Solo & Hybrid Workers",
        type: "coworking",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        summary:
            "Flexible shared workspaces – choose a different desk every day and work alongside vibrant teams.",
        highlights: [
            "Day passes and monthly memberships",
            "Community events & networking",
            "Barista-style coffee & breakout lounges",
        ],
        features: [
            "Perfect for freelancers, consultants, or hybrid employees.",
            "Upgrade easily to a dedicated desk or private cabin.",
            "Access to phone booths and focus zones.",
        ],
        sizeRange: "1–10 seats",
        suitableFor: "Freelancers, consultants, remote workers",
        startingPrice: "₹5,000 / person / month",
        billingCycle: "Daily, weekly, or monthly",
        availability:
            "Flexible passes across multiple BlueSky locations in your city.",
        sla: "Service desk support during operating hours.",
    },
    {
        id: "meeting-rooms",
        label: "Meeting & Board Rooms",
        tag: "By the hour",
        type: "meeting-room",
        image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        summary:
            "On-demand meeting rooms with large displays, conference hardware, and concierge support.",
        highlights: [
            "HD video conferencing hardware",
            "On-site support for AV setup",
            "Tea/coffee service & catering options",
        ],
        features: [
            "Book rooms by the hour or full day.",
            "Choose from huddle rooms, 8-seater or 16-seater boardrooms.",
            "Perfect for client reviews, workshops, and interviews.",
        ],
        sizeRange: "2–16 seats",
        suitableFor: "Client meetings, workshops, interviews",
        startingPrice: "₹800 / hour",
        billingCycle: "On-demand booking",
        availability:
            "All meeting rooms are visible on your BlueSky booking dashboard.",
        sla: "Instant confirmation and on-ground assistance.",
    },
    {
        id: "virtual-offices",
        label: "Virtual Offices",
        tag: "Business Presence",
        type: "virtual-office",
        image:
            "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop",
        summary:
            "Use BlueSky as your registered business address, with mail handling and call support options.",
        highlights: [
            "Prime business address for branding",
            "Mail handling & notifications",
            "Optional call answering add-ons",
        ],
        features: [
            "Ideal for remote-first teams and early-stage startups.",
            "Upgrade into physical workspace when you're ready.",
            "Use address on invoices, websites, and legal documents.",
        ],
        sizeRange: "Remote & distributed teams",
        suitableFor: "Startups, consultants, remote-only companies",
        startingPrice: "₹1,999 / month",
        billingCycle: "Monthly or annual",
        availability:
            "Available at BlueSky hubs in key business districts.",
        sla: "Same-day notification for incoming mail.",
    },
    {
        id: "custom-enterprise",
        label: "Custom Enterprise Floors",
        tag: "Teams 50–500+",
        type: "enterprise",
        image:
            "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1200&auto=format&fit=crop",
        summary:
            "Bespoke workspace solutions – entire floors, neighborhoods, or campuses planned around your culture.",
        highlights: [
            "Designed with your brand and culture in mind",
            "Seat planning, zoning & collaboration mapping",
            "Dedicated BlueSky workspace success team",
        ],
        features: [
            "Best suited for fast-scaling and enterprise teams.",
            "Longer-term, fully customized workspace programs.",
            "Integrations with access control, SSO, and security policies.",
        ],
        sizeRange: "50–500+ seats",
        suitableFor: "Growth-stage, enterprise, and global teams",
        startingPrice: "Custom proposals on request",
        billingCycle: "Multi-year engagements",
        availability:
            "Projects delivered across tech parks and Grade-A campuses.",
        sla: "Dedicated account managers and on-site support.",
    },
];

const perks = [
    {
        id: "wifi",
        icon: FiWifi,
        label: "Enterprise-grade Wi-Fi & backups",
    },
    {
        id: "coffee",
        icon: FiCoffee,
        label: "Craft coffee & beverage stations",
    },
    {
        id: "it-support",
        icon: FiSettings,
        label: "Managed IT & desk support",
    },
    {
        id: "monitors",
        icon: FiMonitor,
        label: "Optional monitor & hardware rental",
    },
    {
        id: "access",
        icon: FiClock,
        label: "24×7 smart access (location specific)",
    },
    {
        id: "community",
        icon: FiUsers,
        label: "Events, meetups & community perks",
    },
];

const addons = [
    {
        id: "mail-handling",
        title: "Mailroom & Courier Handling",
        description:
            "We receive, log, and securely store your physical mail and courier deliveries.",
        bulletPoints: [
            "Notifications on every delivery",
            "Forwarding to your preferred address",
            "Dedicated mailroom hours",
        ],
    },
    {
        id: "it-desk",
        title: "IT & Device Desk",
        description:
            "From Wi-Fi troubleshooting to hardware advice, your team gets quick support.",
        bulletPoints: [
            "Device onboarding and Wi-Fi setup",
            "Secure guest networks",
            "Best-effort hardware guidance",
        ],
    },
    {
        id: "branding-pack",
        title: "Branding & Signage Pack",
        description:
            "Turn your workspace into a BlueSky x Your Brand environment.",
        bulletPoints: [
            "Logo wall & reception branding",
            "Wayfinding inside your suite",
            "Occasional brand moments in common areas",
        ],
    },
    {
        id: "events-support",
        title: "Events & Townhall Support",
        description:
            "Host launches, townhalls, or workshops in curated spaces inside BlueSky.",
        bulletPoints: [
            "Venue setup & seating layouts",
            "AV checks before your event",
            "On-ground coordination",
        ],
    },
];

const faqs = [
    {
        id: "contracts",
        question: "How flexible are the contracts for BlueSky workspaces?",
        answer:
            "For coworking and dedicated desks, you can choose from day passes, weekly passes, or monthly memberships. Private offices typically start at 3-month commitments, while custom enterprise floors are planned over longer multi-year terms. Within those terms, we try to stay as flexible as possible when you need to add seats or upgrade plans.",
    },
    {
        id: "visits",
        question: "Can I tour a workspace before deciding?",
        answer:
            "Absolutely. Share a shortlist of locations and your team size, and our workspace advisors will block a time with you. During the tour, you can see meeting rooms, breakout zones, phone booths, and the exact seats or office suites that might be reserved for you.",
    },
    {
        id: "pricing",
        question: "What factors influence pricing for my team?",
        answer:
            "Pricing depends on the type of workspace (coworking vs private offices vs enterprise floors), the number of seats, the city and locality, and the add-on services you choose. Once you share your headcount and preferred locations, our team sends a clear, line-item proposal.",
    },
    {
        id: "security",
        question: "How does BlueSky handle security and access?",
        answer:
            "We use a combination of smart access controls, visitor management, and CCTV where required. For managed and enterprise offices, we can work with your security or IT teams to align on policies, access levels, and compliance needs.",
    },
    {
        id: "scale",
        question: "What happens when my team grows or shrinks?",
        answer:
            "BlueSky is designed for change. If you grow, we can unlock additional seats, extra cabins, or an adjacent floor. If you temporarily need fewer seats, our team can help you reconfigure or create a cost-optimized bridge plan until you scale again.",
    },
];

const workspaceFilters = [
    { id: "all", label: "All workspace types" },
    { id: "managed-office", label: "Managed offices" },
    { id: "coworking", label: "Coworking & hot desks" },
    { id: "meeting-room", label: "Meeting rooms" },
    { id: "virtual-office", label: "Virtual offices" },
    { id: "enterprise", label: "Enterprise floors" },
];

const Services = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [viewMode, setViewMode] = useState("cards"); // "cards" | "list"
    const [search, setSearch] = useState("");
    const [expandedFaqId, setExpandedFaqId] = useState(faqs[0]?.id || null);

    const onImgError = useCallback((e) => {
        e.currentTarget.src = fallbackImg;
    }, []);

    const filteredServices = useMemo(() => {
        return servicesData.filter((service) => {
            const matchesFilter =
                activeFilter === "all" || service.type === activeFilter;

            const q = search.trim().toLowerCase();
            if (!q) return matchesFilter;

            const haystack = [
                service.label,
                service.summary,
                service.tag,
                service.suitableFor,
                ...(service.highlights || []),
                ...(service.features || []),
            ]
                .join(" ")
                .toLowerCase();

            const matchesSearch = haystack.includes(q);

            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, search]);

    const handleFilterClick = (id) => {
        setActiveFilter(id);
    };

    const handleFaqToggle = (id) => {
        setExpandedFaqId((prev) => (prev === id ? null : id));
    };

    const handleClearFilters = () => {
        setActiveFilter("all");
        setSearch("");
    };

    return (
        <Styled.PageWrap>
            <Styled.Inner>
                {/* Hero / intro */}
                <Styled.HeaderRow>
                    <Styled.TitleBlock>
                        <Styled.Overline>
                            <FiLayers />
                            BlueSky workspace catalogue
                        </Styled.Overline>
                        <Styled.PageTitle>
                            Services designed around the way your team works.
                        </Styled.PageTitle>
                        <Styled.Subtitle>
                            From solo creators to 500-seat enterprise teams – mix
                            and match private cabins, coworking seats, meeting
                            rooms, and virtual offices under a single workspace
                            partner.
                        </Styled.Subtitle>

                        <Styled.BadgeRow>
                            <Styled.Badge>
                                <FiCheckCircle />
                                Flexible contracts & simple pricing
                            </Styled.Badge>
                            <Styled.Badge>
                                <FiMapPin />
                                Prime business locations
                            </Styled.Badge>
                            <Styled.Badge>
                                <FiStar />
                                Workspace success team included
                            </Styled.Badge>
                        </Styled.BadgeRow>

                        <Styled.Actions>
                            <Styled.PrimaryBtn type="button">
                                <span className="icon">
                                    <FiPhoneCall />
                                </span>
                                <span>Talk to a workspace advisor</span>
                                <span className="tail">
                                    <FiArrowRightCircle />
                                </span>
                            </Styled.PrimaryBtn>
                            <Styled.GhostBtn type="button">
                                <span className="icon">
                                    <FiBriefcase />
                                </span>
                                <span>Download sample layout deck</span>
                            </Styled.GhostBtn>
                        </Styled.Actions>
                    </Styled.TitleBlock>

                    <Styled.SideHighlightCard>
                        <Styled.SideTag>
                            <FiClock />
                            Typically onboard in 7–21 days
                        </Styled.SideTag>
                        <Styled.SideTitle>
                            One workspace partner for all your formats.
                        </Styled.SideTitle>
                        <Styled.SideBody>
                            Mix coworking, private cabins, and enterprise floors
                            inside the same BlueSky location so your teams stay
                            connected but have the right zones for focus, calls,
                            and collaboration.
                        </Styled.SideBody>

                        <Styled.SideStatsRow>
                            <Styled.SideStat>
                                <span className="label">Seat range</span>
                                <span className="value">1 – 500+ seats</span>
                            </Styled.SideStat>
                            <Styled.SideStat>
                                <span className="label">Formats</span>
                                <span className="value">
                                    Coworking, managed, enterprise
                                </span>
                            </Styled.SideStat>
                        </Styled.SideStatsRow>

                        <Styled.SideFootNote>
                            Share your headcount, city & ideal move-in date and
                            we&apos;ll assemble a starting pack of options for
                            you.
                        </Styled.SideFootNote>
                    </Styled.SideHighlightCard>
                </Styled.HeaderRow>

                {/* Controls: Search, filters, view */}
                <Styled.Toolbar>
                    <Styled.SearchBox>
                        <FiSearch />
                        <Styled.SearchInput
                            type="text"
                            placeholder="Search by workspace type, use case, or keyword (e.g. 'hybrid team', 'client meetings')"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Styled.SearchBox>

                    <Styled.ToolbarRight>
                        <Styled.FilterPills>
                            {workspaceFilters.map((filter) => (
                                <Styled.FilterChip
                                    key={filter.id}
                                    type="button"
                                    $active={filter.id === activeFilter}
                                    onClick={() =>
                                        handleFilterClick(filter.id)
                                    }
                                >
                                    <span className="icon">
                                        {filter.id === "all" ? (
                                            <FiFilter />
                                        ) : (
                                            <FiCheckCircle />
                                        )}
                                    </span>
                                    <span>{filter.label}</span>
                                </Styled.FilterChip>
                            ))}
                        </Styled.FilterPills>

                        <Styled.ViewToggle>
                            <Styled.ToggleButton
                                type="button"
                                $active={viewMode === "cards"}
                                onClick={() => setViewMode("cards")}
                            >
                                <FiLayers />
                                <span>Card view</span>
                            </Styled.ToggleButton>
                            <Styled.ToggleButton
                                type="button"
                                $active={viewMode === "list"}
                                onClick={() => setViewMode("list")}
                            >
                                <FiList />
                                <span>Compact view</span>
                            </Styled.ToggleButton>
                        </Styled.ViewToggle>

                        <Styled.ClearBtn
                            type="button"
                            disabled={
                                activeFilter === "all" && search.trim() === ""
                            }
                            onClick={handleClearFilters}
                        >
                            Clear filters
                        </Styled.ClearBtn>
                    </Styled.ToolbarRight>
                </Styled.Toolbar>

                {/* Main layout: services + side perks/addons */}
                <Styled.MainLayout>
                    <Styled.ServicesColumn>
                        <Styled.SectionTitleRow>
                            <Styled.SectionTitle>
                                Workspace formats
                            </Styled.SectionTitle>
                            <Styled.SectionSubtitle>
                                Start with a format and we&apos;ll adapt it to
                                your team size, culture, and ways of working.
                            </Styled.SectionSubtitle>
                        </Styled.SectionTitleRow>

                        {filteredServices.length === 0 ? (
                            <Styled.EmptyState>
                                <div className="icon">
                                    <FiSearch />
                                </div>
                                <h3>No matching workspace formats yet</h3>
                                <p>
                                    Try clearing filters or using a different
                                    search phrase. You can also share your
                                    requirements and we&apos;ll suggest a
                                    starting configuration.
                                </p>
                                <Styled.PrimaryBtn type="button">
                                    <FiPhoneCall />
                                    <span>Share requirements with BlueSky</span>
                                </Styled.PrimaryBtn>
                            </Styled.EmptyState>
                        ) : viewMode === "cards" ? (
                            <Styled.CardsGrid>
                                {filteredServices.map((service) => (
                                    <Styled.Card key={service.id}>
                                        <Styled.CardImageWrap>
                                            <Styled.CardImage
                                                src={service.image}
                                                alt={service.label}
                                                loading="lazy"
                                                onError={onImgError}
                                            />
                                            <Styled.ImageTag>
                                                {service.tag}
                                            </Styled.ImageTag>
                                        </Styled.CardImageWrap>

                                        <Styled.CardBody>
                                            <Styled.CardHeaderRow>
                                                <Styled.CardTitleWrap>
                                                    <Styled.CardTitle>
                                                        {service.label}
                                                    </Styled.CardTitle>
                                                    <Styled.CardSummary>
                                                        {service.summary}
                                                    </Styled.CardSummary>
                                                </Styled.CardTitleWrap>
                                                <Styled.PriceBlock>
                                                    <span className="label">
                                                        Starting from
                                                    </span>
                                                    <span className="value">
                                                        {
                                                            service.startingPrice
                                                        }
                                                    </span>
                                                    <span className="hint">
                                                        {service.billingCycle}
                                                    </span>
                                                </Styled.PriceBlock>
                                            </Styled.CardHeaderRow>

                                            <Styled.MetaStatsRow>
                                                <Styled.StatItem>
                                                    <span className="icon">
                                                        <FiUsers />
                                                    </span>
                                                    <span className="label">
                                                        Team size
                                                    </span>
                                                    <span className="value">
                                                        {service.sizeRange}
                                                    </span>
                                                </Styled.StatItem>
                                                <Styled.StatItem>
                                                    <span className="icon">
                                                        <FiBriefcase />
                                                    </span>
                                                    <span className="label">
                                                        Best for
                                                    </span>
                                                    <span className="value">
                                                        {service.suitableFor}
                                                    </span>
                                                </Styled.StatItem>
                                                <Styled.StatItem>
                                                    <span className="icon">
                                                        <FiClock />
                                                    </span>
                                                    <span className="label">
                                                        Availability
                                                    </span>
                                                    <span className="value">
                                                        {service.availability}
                                                    </span>
                                                </Styled.StatItem>
                                            </Styled.MetaStatsRow>

                                            <Styled.HighlightsList>
                                                {service.highlights.map(
                                                    (item, index) => (
                                                        <li key={index}>
                                                            <FiCheckCircle />
                                                            <span>{item}</span>
                                                        </li>
                                                    )
                                                )}
                                            </Styled.HighlightsList>

                                            <Styled.FeatureList>
                                                {service.features.map(
                                                    (item, index) => (
                                                        <li key={index}>
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </Styled.FeatureList>

                                            <Styled.CardFooterRow>
                                                <Styled.CardFootNote>
                                                    {service.sla}
                                                </Styled.CardFootNote>
                                                <Styled.CardAction type="button">
                                                    <span>
                                                        Add this format to my
                                                        workspace plan
                                                    </span>
                                                    <FiArrowRightCircle />
                                                </Styled.CardAction>
                                            </Styled.CardFooterRow>
                                        </Styled.CardBody>
                                    </Styled.Card>
                                ))}
                            </Styled.CardsGrid>
                        ) : (
                            <Styled.ListView>
                                {filteredServices.map((service) => (
                                    <Styled.ListRow key={service.id}>
                                        <Styled.ListImageWrap>
                                            <Styled.ListImage
                                                src={service.image}
                                                alt={service.label}
                                                loading="lazy"
                                                onError={onImgError}
                                            />
                                        </Styled.ListImageWrap>
                                        <Styled.ListBody>
                                            <Styled.ListTitleRow>
                                                <div className="text">
                                                    <h3>{service.label}</h3>
                                                    <p>{service.summary}</p>
                                                </div>
                                                <div className="meta">
                                                    <span className="pill">
                                                        {service.tag}
                                                    </span>
                                                    <span className="price">
                                                        {
                                                            service.startingPrice
                                                        }
                                                    </span>
                                                </div>
                                            </Styled.ListTitleRow>
                                            <Styled.ListMetaRow>
                                                <span>
                                                    <FiUsers />{" "}
                                                    {service.sizeRange}
                                                </span>
                                                <span>
                                                    <FiBriefcase />{" "}
                                                    {service.suitableFor}
                                                </span>
                                                <span>
                                                    <FiClock />{" "}
                                                    {service.billingCycle}
                                                </span>
                                            </Styled.ListMetaRow>
                                        </Styled.ListBody>
                                    </Styled.ListRow>
                                ))}
                            </Styled.ListView>
                        )}
                    </Styled.ServicesColumn>

                    <Styled.SideColumn>
                        <Styled.SectionTitleRow>
                            <Styled.SectionTitle>
                                Why teams choose BlueSky
                            </Styled.SectionTitle>
                            <Styled.SectionSubtitle>
                                The space is just the start – the experience is
                                what teams remember.
                            </Styled.SectionSubtitle>
                        </Styled.SectionTitleRow>

                        <Styled.SideCard>
                            <Styled.Tagline>
                                Everyday comforts, office-grade reliability.
                            </Styled.Tagline>
                            <Styled.PerkList>
                                {perks.map((perk) => {
                                    const Icon = perk.icon;
                                    return (
                                        <li key={perk.id}>
                                            <span className="icon">
                                                <Icon />
                                            </span>
                                            <span className="label">
                                                {perk.label}
                                            </span>
                                        </li>
                                    );
                                })}
                            </Styled.PerkList>
                        </Styled.SideCard>

                        <Styled.AddonSection>
                            <Styled.SectionTitleRow>
                                <Styled.SectionTitle>
                                    Add-on programs
                                </Styled.SectionTitle>
                                <Styled.SectionSubtitle>
                                    Layer services on top of your plan so your
                                    team can stay focused on their actual work.
                                </Styled.SectionSubtitle>
                            </Styled.SectionTitleRow>
                            <Styled.AddonsGrid>
                                {addons.map((addon) => (
                                    <Styled.AddonCard key={addon.id}>
                                        <Styled.AddonTitle>
                                            {addon.title}
                                        </Styled.AddonTitle>
                                        <Styled.AddonBody>
                                            <p>{addon.description}</p>
                                            <ul>
                                                {addon.bulletPoints.map(
                                                    (point, index) => (
                                                        <li key={index}>
                                                            <FiCheckCircle />
                                                            <span>{point}</span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </Styled.AddonBody>
                                    </Styled.AddonCard>
                                ))}
                            </Styled.AddonsGrid>
                        </Styled.AddonSection>
                    </Styled.SideColumn>
                </Styled.MainLayout>

                {/* FAQs */}
                <Styled.FAQSection>
                    <Styled.SectionTitleRow>
                        <Styled.SectionTitle>
                            Questions, before we talk?
                        </Styled.SectionTitle>
                        <Styled.SectionSubtitle>
                            A few quick answers to help you understand how working
                            with BlueSky usually feels.
                        </Styled.SectionSubtitle>
                    </Styled.SectionTitleRow>

                    <Styled.FAQList>
                        {faqs.map((faq) => (
                            <Styled.FAQItem key={faq.id}>
                                <Styled.FAQQuestion
                                    type="button"
                                    onClick={() => handleFaqToggle(faq.id)}
                                    $expanded={expandedFaqId === faq.id}
                                >
                                    <div className="text">
                                        <span className="q">Q</span>
                                        <span>{faq.question}</span>
                                    </div>
                                    <span className="icon">
                                        {expandedFaqId === faq.id ? (
                                            <FiChevronUp />
                                        ) : (
                                            <FiChevronDown />
                                        )}
                                    </span>
                                </Styled.FAQQuestion>
                                {expandedFaqId === faq.id && (
                                    <Styled.FAQAnswer>
                                        {faq.answer}
                                    </Styled.FAQAnswer>
                                )}
                            </Styled.FAQItem>
                        ))}
                    </Styled.FAQList>
                </Styled.FAQSection>
            </Styled.Inner>
        </Styled.PageWrap>
    );
};

export default Services;
