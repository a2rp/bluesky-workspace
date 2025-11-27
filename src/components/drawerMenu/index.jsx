import React, { useMemo, useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";

import {
    FiHome,
    FiFileText,
    FiShield,
    FiUser,
    FiSettings,
    FiAlertTriangle,
    FiChevronDown,
    FiChevronRight,
    FiCircle,
    FiTag,
    FiList,
    FiMessageSquare,
    FiInfo,
} from "react-icons/fi";

import linksConfig from "../../links.json";

function getSectionIcon(id) {
    const map = {
        main: FiHome,
        services: FiSettings,
        pricing: FiTag,
        projects: FiList,
        contact: FiMessageSquare,
        info: FiInfo,
        system: FiAlertTriangle,
    };
    return map[id] || FiCircle;
}

// Icons for: Home, Services, Pricing, Projects, Contact
function getItemIcon(item) {
    const label = (item.label || "").toLowerCase();
    const path = (item.path || "").toLowerCase();
    const text = `${label} ${path}`;

    if (path === "/home" || label === "home" || text.includes("home")) {
        return FiHome;
    }

    if (path.includes("/services") || label.includes("service")) {
        return FiSettings;
    }

    if (path.includes("/pricing") || label.includes("pricing")) {
        return FiTag;
    }

    if (path.includes("/projects") || label.includes("project")) {
        return FiList;
    }

    if (path.includes("/contact") || label.includes("contact")) {
        return FiMessageSquare;
    }

    // tiny fallbacks (future-proof)
    if (text.includes("privacy")) return FiShield;
    if (text.includes("term")) return FiFileText;
    if (label.includes("account") || label.includes("profile")) return FiUser;
    if (label.includes("about")) return FiInfo;

    return FiCircle;
}

// build key consistently
function buildItemKey(parentKey, item) {
    const idPart = item.path || item.label;
    return parentKey ? `${parentKey}|${idPart}` : idPart;
}

// score-based matcher so only one "best" link is active
function matchScore(currentPath, configPath) {
    if (!configPath) return -1;

    const cleanCurrent = currentPath.replace(/\/+$/, "");
    const cleanConfig = configPath.replace(/\/+$/, "");

    const currentSegs = cleanCurrent.split("/").filter(Boolean);
    const configSegs = cleanConfig.split("/").filter(Boolean);

    if (configSegs.length === 0) {
        return cleanCurrent === "/" ? 1 : -1;
    }

    let score = 0;

    for (let i = 0; i < configSegs.length; i++) {
        const cfg = configSegs[i];
        const cur = currentSegs[i];

        if (!cur) {
            return -1;
        }

        if (cfg.startsWith(":")) {
            score += 1;
        } else if (cfg === cur) {
            score += 2;
        } else {
            return -1;
        }
    }

    if (currentSegs.length === configSegs.length) {
        score += 1;
    }

    return score;
}

// find best match for a given path
function findBestMatch(sections, currentPath) {
    let bestMatch = {
        key: null,
        sectionId: null,
        parentKey: "",
        score: -1,
    };

    const walkItems = (items, parentKey, sectionId) => {
        if (!Array.isArray(items)) return;

        for (const item of items) {
            const key = buildItemKey(parentKey, item);
            const hasChildren =
                Array.isArray(item.children) && item.children.length > 0;

            if (item.path) {
                const score = matchScore(currentPath, item.path);
                if (score > bestMatch.score) {
                    bestMatch = {
                        key,
                        sectionId,
                        parentKey,
                        score,
                    };
                }
            }

            if (hasChildren) {
                walkItems(item.children, key, sectionId);
            }
        }
    };

    sections.forEach((section) => {
        if (Array.isArray(section.children)) {
            walkItems(section.children, "", section.id);
        }
    });

    return bestMatch;
}

export default function DrawerMenu({ onNavigate }) {
    const location = useLocation();

    const [openSections, setOpenSections] = useState(() => new Set());
    const [openItems, setOpenItems] = useState(() => new Set());
    const [activeKey, setActiveKey] = useState(null);

    const sections = useMemo(() => linksConfig.sections || [], []);

    const activeItemRef = useRef(null);
    const initialisedRef = useRef(false);

    // FIRST LOAD ONLY
    useEffect(() => {
        if (sections.length === 0) return;
        if (initialisedRef.current) return;

        const currentPath = location.pathname;
        const bestMatch = findBestMatch(sections, currentPath);

        if (!bestMatch.key || bestMatch.score < 0) {
            if (sections[0]) {
                setOpenSections(new Set([sections[0].id]));
            }
            setOpenItems(new Set());
            setActiveKey(null);
        } else {
            const nextOpenSections = new Set();
            const nextOpenItems = new Set();

            if (bestMatch.sectionId) {
                nextOpenSections.add(bestMatch.sectionId);
            }

            let chainKey = bestMatch.parentKey;
            while (chainKey) {
                nextOpenItems.add(chainKey);
                const parts = chainKey.split("|");
                if (parts.length <= 1) break;
                parts.pop();
                chainKey = parts.join("|");
            }

            setOpenSections(nextOpenSections);
            setOpenItems(nextOpenItems);
            setActiveKey(bestMatch.key);
        }

        initialisedRef.current = true;
    }, [sections, location.pathname]);

    // EVERY ROUTE CHANGE
    useEffect(() => {
        if (sections.length === 0) return;

        const bestMatch = findBestMatch(sections, location.pathname);

        if (!bestMatch.key || bestMatch.score < 0) {
            setActiveKey(null);
        } else {
            setActiveKey(bestMatch.key);
        }
    }, [sections, location.pathname]);

    // Scroll active item into view
    useEffect(() => {
        const id = setTimeout(() => {
            if (activeItemRef.current) {
                activeItemRef.current.scrollIntoView({
                    block: "center",
                    inline: "nearest",
                    behavior: "smooth",
                });
            }
        }, 0);

        return () => clearTimeout(id);
    }, [activeKey]);

    const handleSectionToggle = (id) => {
        setOpenSections((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const handleItemToggle = (key) => {
        setOpenItems((prev) => {
            const next = new Set(prev);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    };

    const handleNavigate = () => {
        if (typeof onNavigate === "function") {
            onNavigate();
        }
    };

    const renderItem = (item, depth = 0, parentKey = "") => {
        const hasChildren =
            Array.isArray(item.children) && item.children.length > 0;
        const key = buildItemKey(parentKey, item);

        const isActive = key === activeKey;
        const isOpen = openItems.has(key);
        const ItemIcon = getItemIcon(item);

        if (hasChildren) {
            return (
                <div key={key}>
                    <Styled.ItemButton
                        type="button"
                        onClick={() => handleItemToggle(key)}
                        $active={isActive}
                    >
                        <div className="left">
                            <span className="icon-main">
                                <ItemIcon />
                            </span>
                            <span className="label">{item.label}</span>
                        </div>
                        <span className="chevron">
                            {isOpen ? <FiChevronDown /> : <FiChevronRight />}
                        </span>
                    </Styled.ItemButton>
                    {isOpen && (
                        <Styled.Children>
                            {item.children.map((child) =>
                                renderItem(child, depth + 1, key)
                            )}
                        </Styled.Children>
                    )}
                </div>
            );
        }

        return (
            <NavLink key={key} to={item.path || "#"} onClick={handleNavigate}>
                <Styled.ItemLink
                    ref={isActive ? activeItemRef : null}
                    $active={isActive}
                >
                    <div className="left">
                        <span className="icon-main">
                            <ItemIcon />
                        </span>
                        <span className="label">{item.label}</span>
                    </div>
                </Styled.ItemLink>
            </NavLink>
        );
    };

    return (
        <Styled.Wrapper aria-label="Site navigation">
            <Styled.ScrollArea>
                {sections.map((section) => {
                    const SectionIcon = getSectionIcon(section.id);
                    const isOpen = openSections.has(section.id);
                    const hasHeader = Boolean(section.label);

                    return (
                        <Styled.Section key={section.id}>
                            {/* Only show header if label exists (not for our flat main list) */}
                            {hasHeader && (
                                <Styled.SectionHeader
                                    type="button"
                                    onClick={() =>
                                        handleSectionToggle(section.id)
                                    }
                                >
                                    <div className="left">
                                        <span className="icon">
                                            <SectionIcon />
                                        </span>
                                        <span>{section.label}</span>
                                    </div>
                                    <span className="chevron">
                                        {isOpen ? (
                                            <FiChevronDown />
                                        ) : (
                                            <FiChevronRight />
                                        )}
                                    </span>
                                </Styled.SectionHeader>
                            )}

                            {/* For our flat main list: always open */}
                            {(!hasHeader || isOpen) && (
                                <Styled.SectionBody>
                                    {section.children?.map((item) =>
                                        renderItem(item)
                                    )}
                                </Styled.SectionBody>
                            )}
                        </Styled.Section>
                    );
                })}
            </Styled.ScrollArea>
        </Styled.Wrapper>
    );
}
