// src/pages/pricing/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiTag,
    FiStar,
    FiUsers,
    FiBriefcase,
    FiCheckCircle,
    FiToggleLeft,
    FiToggleRight,
    FiArrowRightCircle,
    FiInfo,
    FiHelpCircle,
    FiClock,
    FiMapPin,
} from "react-icons/fi";

const plans = [
    {
        id: "hot-desk",
        name: "Hot Desk",
        tag: "Best for solo & hybrid",
        highlight: false,
        seats: "1–3 seats",
        priceMonthly: 5000,
        priceYearly: 4800,
        unitLabel: "per person / month",
        description:
            "Pick a new desk every day in our shared coworking zones – perfect for flexible and hybrid schedules.",
        idealFor: "Freelancers, consultants, remote-first individual contributors.",
        features: [
            "Access to shared coworking zones during business hours",
            "High-speed Wi-Fi, power outlets, and phone booths",
            "Access to BlueSky café lounges & focus corners",
            "Member pricing on meeting rooms & day passes",
        ],
        extras: [
            "Guest passes available",
            "Upgrade to dedicated desk anytime",
        ],
    },
    {
        id: "dedicated-desk",
        name: "Dedicated Desk",
        tag: "Your own everyday spot",
        highlight: true,
        seats: "1–8 seats",
        priceMonthly: 9000,
        priceYearly: 8400,
        unitLabel: "per person / month",
        description:
            "Keep your own desk, screens, and personal setup – all inside our managed coworking floors.",
        idealFor:
            "Small pods, designers, engineers, creators who prefer a familiar setup.",
        features: [
            "Fixed desk in a quiet, shared neighborhood",
            "Lockable storage & monitor support",
            "Priority access to meeting rooms & phone booths",
            "Mail & courier handling at the front desk",
        ],
        extras: [
            "Add-on IT & device support desk",
            "Discounted extra hot-desk passes",
        ],
    },
    {
        id: "private-office",
        name: "Private Office",
        tag: "Plug-and-play team suites",
        highlight: false,
        seats: "4–50 seats",
        priceMonthly: 18000,
        priceYearly: 16800,
        unitLabel: "per seat / month",
        description:
            "Lockable, branded office suites for teams that need a quieter, fully managed environment.",
        idealFor:
            "Product teams, agencies, and startups that need privacy with on-demand meeting rooms.",
        features: [
            "Fully furnished, lockable suites with branding options",
            "Enterprise-grade Wi-Fi & wired connectivity",
            "Daily housekeeping, utilities, and security included",
            "Access to event spaces, townhall zones & lounges",
        ],
        extras: [
            "Optional in-suite meeting room & phone booths",
            "Seats can be added as you grow",
        ],
    },
    {
        id: "enterprise",
        name: "Enterprise Floor",
        tag: "Custom layouts & programs",
        highlight: false,
        seats: "50–500+ seats",
        priceMonthly: null,
        priceYearly: null,
        unitLabel: "custom proposals",
        description:
            "Entire floors or multi-floor programs planned with your IT, HR, and workplace teams.",
        idealFor:
            "Growth-stage and enterprise teams that want BlueSky as their workspace partner.",
        features: [
            "Custom layouts, zones, and collaboration patterns",
            "Dedicated BlueSky workspace success & facilities teams",
            "Integrations with your SSO, security & access policies",
            "Multi-city rollout and migration planning support",
        ],
        extras: [
            "Townhall, launch & event support",
            "Quarterly workspace health reviews",
        ],
    },
];

const allIncluded = [
    "High-speed Wi-Fi and power-backup supported zones",
    "Front-desk team for check-ins, guidance, and mail handling",
    "Common kitchens, tea/coffee stations, and breakout areas",
    "Access to community events, talks, and curated meetups",
];

const Pricing = () => {
    const [billingMode, setBillingMode] = useState("monthly"); // 'monthly' | 'yearly'

    const displayPlans = useMemo(() => {
        return plans.map((plan) => {
            if (plan.id === "enterprise") {
                return { ...plan, displayPrice: "Talk to us" };
            }

            const raw =
                billingMode === "monthly"
                    ? plan.priceMonthly
                    : plan.priceYearly;
            const suffix =
                billingMode === "monthly" ? "per month" : "per month (effective)";
            const formatted = `₹${raw.toLocaleString("en-IN")}`;

            return { ...plan, displayPrice: formatted, displaySuffix: suffix };
        });
    }, [billingMode]);

    const handleToggleBilling = () => {
        setBillingMode((prev) => (prev === "monthly" ? "yearly" : "monthly"));
    };

    return (
        <Styled.PageWrap>
            <Styled.Inner>
                {/* Hero + billing toggle */}
                <Styled.HeaderSection>
                    <Styled.HeaderLeft>
                        <Styled.Overline>
                            <FiTag />
                            BlueSky workspace pricing
                        </Styled.Overline>
                        <Styled.PageTitle>
                            Transparent plans, designed around workspace
                            outcomes.
                        </Styled.PageTitle>
                        <Styled.Subtitle>
                            Start small or move your entire team – with BlueSky
                            you only pay for the seats and services you actually
                            use, while we handle the space, amenities, and
                            day-to-day operations.
                        </Styled.Subtitle>

                        <Styled.MetaRow>
                            <Styled.MetaItem>
                                <span className="icon">
                                    <FiClock />
                                </span>
                                <span className="label">
                                    Typical onboarding window
                                </span>
                                <span className="value">
                                    7–21 days from sign-off
                                </span>
                            </Styled.MetaItem>
                            <Styled.MetaItem>
                                <span className="icon">
                                    <FiMapPin />
                                </span>
                                <span className="label">Locations</span>
                                <span className="value">
                                    Prime business districts only
                                </span>
                            </Styled.MetaItem>
                        </Styled.MetaRow>
                    </Styled.HeaderLeft>

                    <Styled.HeaderRight>
                        <Styled.BillingToggleCard>
                            <Styled.BillingLabelRow>
                                <span className="label">
                                    Choose how you&apos;d like to view prices
                                </span>
                                <span className="hint">
                                    Yearly view includes long-term partnership
                                    benefits for select plans.
                                </span>
                            </Styled.BillingLabelRow>

                            <Styled.ToggleRow>
                                <Styled.ModeLabel
                                    $active={billingMode === "monthly"}
                                >
                                    Monthly
                                </Styled.ModeLabel>

                                <Styled.ToggleSwitch
                                    type="button"
                                    onClick={handleToggleBilling}
                                    aria-label="Toggle billing mode"
                                >
                                    <span className="icon left">
                                        <FiToggleLeft />
                                    </span>
                                    <Styled.ToggleThumb
                                        $mode={billingMode}
                                    />
                                    <span className="icon right">
                                        <FiToggleRight />
                                    </span>
                                </Styled.ToggleSwitch>

                                <Styled.ModeLabel
                                    $active={billingMode === "yearly"}
                                >
                                    Yearly
                                </Styled.ModeLabel>
                            </Styled.ToggleRow>

                            <Styled.BillingNote>
                                <FiInfo />
                                <span>
                                    Yearly billing typically unlocks
                                    relationship-based benefits on select plans.
                                    Enterprise floors are always custom
                                    proposals.
                                </span>
                            </Styled.BillingNote>
                        </Styled.BillingToggleCard>
                    </Styled.HeaderRight>
                </Styled.HeaderSection>

                {/* Plans grid */}
                <Styled.PlansSection>
                    <Styled.SectionHeaderRow>
                        <Styled.SectionTitle>
                            Workspace plans at a glance
                        </Styled.SectionTitle>
                        <Styled.SectionSubtitle>
                            Pick a starting format for your team. You can always
                            mix multiple plans across pods, departments, or
                            cities as you grow.
                        </Styled.SectionSubtitle>
                    </Styled.SectionHeaderRow>

                    <Styled.PlansGrid>
                        {displayPlans.map((plan) => (
                            <Styled.PlanCard
                                key={plan.id}
                                $highlight={plan.highlight}
                            >
                                {plan.highlight && (
                                    <Styled.RecommendedTag>
                                        <FiStar />
                                        Recommended for most teams
                                    </Styled.RecommendedTag>
                                )}

                                <Styled.PlanHeader>
                                    <Styled.PlanNameRow>
                                        <Styled.PlanName>
                                            {plan.name}
                                        </Styled.PlanName>
                                        <Styled.PlanTag>
                                            {plan.tag}
                                        </Styled.PlanTag>
                                    </Styled.PlanNameRow>

                                    <Styled.PlanSeatMeta>
                                        <FiUsers />
                                        <span>{plan.seats}</span>
                                    </Styled.PlanSeatMeta>
                                </Styled.PlanHeader>

                                <Styled.PlanPriceBlock>
                                    <div className="left">
                                        <span className="label">
                                            {plan.id === "enterprise"
                                                ? "Engagement model"
                                                : "Starting from"}
                                        </span>
                                        <span className="value">
                                            {plan.displayPrice}
                                        </span>
                                        <span className="unit">
                                            {plan.id === "enterprise"
                                                ? plan.unitLabel
                                                : plan.unitLabel}
                                        </span>
                                    </div>

                                    {plan.id !== "enterprise" && (
                                        <Styled.PlanBillingHint>
                                            {billingMode === "yearly"
                                                ? "Indicative effective monthly price."
                                                : "Extend to yearly to explore long-term benefits."}
                                        </Styled.PlanBillingHint>
                                    )}
                                </Styled.PlanPriceBlock>

                                <Styled.PlanDescription>
                                    {plan.description}
                                </Styled.PlanDescription>

                                <Styled.PlanIdealFor>
                                    <span className="label">Best for</span>
                                    <span className="value">
                                        {plan.idealFor}
                                    </span>
                                </Styled.PlanIdealFor>

                                <Styled.FeatureList>
                                    {plan.features.map((feature, index) => (
                                        <li key={index}>
                                            <FiCheckCircle />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </Styled.FeatureList>

                                <Styled.ExtrasList>
                                    {plan.extras.map((extra, index) => (
                                        <li key={index}>{extra}</li>
                                    ))}
                                </Styled.ExtrasList>

                                <Styled.PlanActionRow>
                                    <Styled.PrimaryBtn type="button">
                                        {plan.id === "enterprise" ? (
                                            <>
                                                <FiBriefcase />
                                                <span>
                                                    Discuss a custom floor plan
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <FiArrowRightCircle />
                                                <span>
                                                    Explore this plan for my
                                                    team
                                                </span>
                                            </>
                                        )}
                                    </Styled.PrimaryBtn>

                                    <Styled.SecondaryLink type="button">
                                        <FiHelpCircle />
                                        <span>Share this plan by email</span>
                                    </Styled.SecondaryLink>
                                </Styled.PlanActionRow>
                            </Styled.PlanCard>
                        ))}
                    </Styled.PlansGrid>
                </Styled.PlansSection>

                {/* Common inclusions */}
                <Styled.IncludedSection>
                    <Styled.SectionHeaderRow>
                        <Styled.SectionTitle>
                            Included across all BlueSky plans
                        </Styled.SectionTitle>
                        <Styled.SectionSubtitle>
                            Every plan is built on the same BlueSky workspace
                            foundation, so your team gets a consistent experience
                            as you scale across pods, cities, or formats.
                        </Styled.SectionSubtitle>
                    </Styled.SectionHeaderRow>

                    <Styled.IncludedGrid>
                        {allIncluded.map((item, index) => (
                            <Styled.IncludedItem key={index}>
                                <span className="icon">
                                    <FiCheckCircle />
                                </span>
                                <p>{item}</p>
                            </Styled.IncludedItem>
                        ))}
                    </Styled.IncludedGrid>
                </Styled.IncludedSection>

                {/* Small note strip */}
                <Styled.NoteStrip>
                    <span className="icon">
                        <FiInfo />
                    </span>
                    <p>
                        All prices shown are indicative and may vary by city,
                        micro-market, and building. Share your seat count and
                        preferred locations and we&apos;ll respond with a clean,
                        line-item proposal – no hidden charges.
                    </p>
                </Styled.NoteStrip>
            </Styled.Inner>
        </Styled.PageWrap>
    );
};

export default Pricing;
