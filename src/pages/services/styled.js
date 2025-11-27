// src/pages/services/styled.js
import styled from "styled-components";

export const Styled = {
    PageWrap: styled.main`
        padding: 90px 16px 40px;
        background: var(--color-bg);
        color: var(--color-text);

        @media (min-width: 960px) {
            padding: 96px 40px 56px;
        }
    `,

    Inner: styled.div`
        max-width: 1180px;
        margin: 0 auto;
    `,

    HeaderRow: styled.section`
        display: grid;
        grid-template-columns: minmax(0, 3fr);
        gap: 24px;
        margin-bottom: 32px;

        @media (min-width: 960px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2fr);
            gap: 32px;
            margin-bottom: 40px;
        }
    `,

    TitleBlock: styled.div`
        display: flex;
        flex-direction: column;
        gap: 14px;
    `,

    Overline: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.75rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: var(--color-text);
        opacity: 0.85;

        svg {
            font-size: 0.9rem;
            color: var(--accent);
        }
    `,

    PageTitle: styled.h1`
        font-size: 1.6rem;
        line-height: 1.3;
        color: var(--color-heading);

        @media (min-width: 720px) {
            font-size: 2rem;
        }
    `,

    Subtitle: styled.p`
        font-size: 0.92rem;
        max-width: 40rem;
        color: var(--color-text);
        opacity: 0.94;
    `,

    BadgeRow: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 4px;
    `,

    Badge: styled.span`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 999px;
        border: 1px solid var(--accent-border);
        background: var(--accent-soft);
        font-size: 0.78rem;
        color: var(--color-heading);

        svg {
            font-size: 0.9rem;
        }
    `,

    Actions: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
    `,

    PrimaryBtn: styled.button`
        border-radius: 999px;
        padding: 8px 16px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 0.9rem;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--accent);
        color: #020617;
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
        transition: transform 0.12s ease-out, box-shadow 0.12s ease-out,
            background-color 0.16s ease-out;

        .icon,
        .tail {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
        }

        &:hover {
            transform: translateY(-1px);
            box-shadow: var(--shadow-md);
        }

        &:active {
            transform: translateY(0);
            box-shadow: var(--shadow-sm);
        }
    `,

    GhostBtn: styled.button`
        border-radius: 999px;
        padding: 8px 14px;
        border: 1px solid var(--color-border);
        background: transparent;
        color: var(--color-heading);
        font-size: 0.86rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        transition: background-color 0.14s ease-out, border-color 0.14s ease-out,
            transform 0.12s ease-out;

        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
        }

        &:hover {
            background: var(--color-card-soft);
            border-color: var(--accent-border);
            transform: translateY(-1px);
        }

        &:active {
            transform: translateY(0);
        }
    `,

    SideHighlightCard: styled.aside`
        border-radius: 16px;
        padding: 16px 16px 14px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border-strong);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,

    SideTag: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        align-self: flex-start;
        padding: 4px 10px;
        border-radius: 999px;
        background: var(--accent-soft);
        border: 1px solid var(--accent-border);
        font-size: 0.78rem;
        color: var(--color-heading);

        svg {
            font-size: 0.9rem;
        }
    `,

    SideTitle: styled.h2`
        font-size: 1rem;
        color: var(--color-heading);
        margin: 2px 0;
    `,

    SideBody: styled.p`
        font-size: 0.86rem;
        color: var(--color-text);
        opacity: 0.96;
    `,

    SideStatsRow: styled.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 8px;
        margin-top: 4px;

        @media (min-width: 600px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    SideStat: styled.div`
        border-radius: 10px;
        padding: 8px 10px;
        background: var(--color-card);
        border: 1px dashed var(--color-border);

        .label {
            display: block;
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: var(--color-text);
            opacity: 0.8;
            margin-bottom: 2px;
        }

        .value {
            font-size: 0.88rem;
            color: var(--color-heading);
        }
    `,

    SideFootNote: styled.p`
        margin-top: 6px;
        font-size: 0.8rem;
        color: var(--color-text);
        opacity: 0.9;
    `,

    Toolbar: styled.section`
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        @media (min-width: 960px) {
            flex-direction: row;
            align-items: center;
        }
    `,

    SearchBox: styled.div`
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 10px;
        border-radius: 999px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);

        svg {
            font-size: 1rem;
            color: var(--color-text);
            opacity: 0.85;
        }
    `,

    SearchInput: styled.input`
        border: none;
        outline: none;
        background: transparent;
        flex: 1 1 auto;
        font-size: 0.86rem;
        color: var(--color-heading);

        &::placeholder {
            color: var(--color-text);
            opacity: 0.7;
        }
    `,

    ToolbarRight: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: flex-start;

        @media (min-width: 960px) {
            justify-content: flex-end;
        }
    `,

    FilterPills: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: 100%;
    `,

    FilterChip: styled.button`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px 10px;
        border-radius: 999px;
        font-size: 0.8rem;
        border: 1px solid
            ${({ $active }) =>
                $active ? "var(--accent-border)" : "var(--color-border)"};
        background: ${({ $active }) =>
            $active ? "var(--accent-soft)" : "transparent"};
        color: ${({ $active }) =>
            $active ? "var(--color-heading)" : "var(--color-text)"};
        cursor: pointer;
        transition: background-color 0.14s ease-out, border-color 0.14s ease-out,
            transform 0.1s ease-out;

        svg {
            font-size: 0.9rem;
        }

        &:hover {
            transform: translateY(-1px);
            border-color: var(--accent-border);
            background: ${({ $active }) =>
                $active ? "var(--accent-soft)" : "var(--color-card-soft)"};
        }

        &:active {
            transform: translateY(0);
        }
    `,

    ViewToggle: styled.div`
        display: inline-flex;
        border-radius: 999px;
        overflow: hidden;
        border: 1px solid var(--color-border);
        background: var(--color-card-soft);
    `,

    ToggleButton: styled.button`
        padding: 5px 10px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 0.8rem;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: ${({ $active }) =>
            $active ? "var(--accent-soft)" : "transparent"};
        color: ${({ $active }) =>
            $active ? "var(--color-heading)" : "var(--color-text)"};

        svg {
            font-size: 0.9rem;
        }

        &:hover {
            background: ${({ $active }) =>
                $active ? "var(--accent-soft)" : "var(--color-card)"};
        }
    `,

    ClearBtn: styled.button`
        padding: 5px 10px;
        border-radius: 999px;
        border: 1px solid var(--color-border);
        background: transparent;
        font-size: 0.78rem;
        cursor: pointer;
        color: var(--color-text);
        transition: background-color 0.12s ease-out, border-color 0.12s ease-out,
            opacity 0.1s ease-out;

        &:disabled {
            opacity: 0.5;
            cursor: default;
        }

        &:not(:disabled):hover {
            background: var(--color-card-soft);
            border-color: var(--accent-border);
        }
    `,

    MainLayout: styled.section`
        display: grid;
        grid-template-columns: minmax(0, 3fr);
        gap: 24px;
        align-items: flex-start;

        @media (min-width: 1040px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2.2fr);
            gap: 28px;
        }
    `,

    ServicesColumn: styled.div`
        display: flex;
        flex-direction: column;
        gap: 14px;
    `,

    SideColumn: styled.div`
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,

    SectionTitleRow: styled.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: 4px;
    `,

    SectionTitle: styled.h2`
        font-size: 1rem;
        color: var(--color-heading);
    `,

    SectionSubtitle: styled.p`
        font-size: 0.82rem;
        color: var(--color-text);
        opacity: 0.92;
    `,

    CardsGrid: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 16px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (min-width: 1100px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    Card: styled.article`
        border-radius: 14px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: var(--shadow-sm);
        transition: transform 0.14s ease-out, box-shadow 0.14s ease-out,
            border-color 0.14s ease-out;

        &:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent-border);
        }

        &:hover img.card-image {
            transform: scale(1.03);
            filter: saturate(1.05);
        }
    `,

    CardImageWrap: styled.div`
        position: relative;
        overflow: hidden;
        max-height: 180px;

        @media (min-width: 720px) {
            max-height: 190px;
        }
    `,

    CardImage: styled.img.attrs({ className: "card-image" })`
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.16s ease-out, filter 0.16s ease-out;
    `,

    ImageTag: styled.span`
        position: absolute;
        left: 12px;
        bottom: 12px;
        padding: 4px 10px;
        border-radius: 999px;
        background: rgba(3, 7, 18, 0.78);
        color: #f9fafb;
        font-size: 0.76rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        backdrop-filter: blur(4px);
    `,

    CardBody: styled.div`
        padding: 12px 12px 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,

    CardHeaderRow: styled.div`
        display: flex;
        flex-direction: column;
        gap: 6px;

        @media (min-width: 900px) {
            flex-direction: row;
            justify-content: space-between;
            gap: 10px;
        }
    `,

    CardTitleWrap: styled.div`
        max-width: 100%;
    `,

    CardTitle: styled.h3`
        font-size: 0.98rem;
        color: var(--color-heading);
        margin-bottom: 2px;
    `,

    CardSummary: styled.p`
        font-size: 0.8rem;
        color: var(--color-text);
        opacity: 0.96;
    `,

    PriceBlock: styled.div`
        align-self: flex-start;
        text-align: right;
        min-width: 0;

        .label {
            display: block;
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: var(--color-text);
            opacity: 0.78;
        }

        .value {
            display: block;
            font-size: 0.9rem;
            color: var(--color-heading);
        }

        .hint {
            display: block;
            font-size: 0.76rem;
            color: var(--color-text);
        }
    `,

    MetaStatsRow: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 8px;
        margin-top: 2px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    `,

    StatItem: styled.div`
        border-radius: 10px;
        padding: 6px 8px;
        background: var(--color-card);
        border: 1px solid var(--color-border);

        .icon {
            font-size: 0.9rem;
            color: var(--accent);
        }

        .label {
            display: block;
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: var(--color-text);
            opacity: 0.78;
            margin-top: 2px;
        }

        .value {
            display: block;
            font-size: 0.8rem;
            color: var(--color-heading);
        }
    `,

    HighlightsList: styled.ul`
        list-style: none;
        padding: 0;
        margin: 4px 0 2px;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 4px;

        li {
            display: inline-flex;
            align-items: flex-start;
            gap: 6px;
            font-size: 0.8rem;
            color: var(--color-heading);

            svg {
                margin-top: 2px;
                font-size: 0.9rem;
                color: var(--accent);
            }

            span {
                flex: 1 1 auto;
            }
        }
    `,

    FeatureList: styled.ul`
        list-style: none;
        padding: 0;
        margin: 2px 0 4px;
        display: flex;
        flex-direction: column;
        gap: 2px;

        li {
            font-size: 0.8rem;
            color: var(--color-text);
            opacity: 0.94;
        }
    `,

    CardFooterRow: styled.div`
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 4px;

        @media (min-width: 720px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    `,

    CardFootNote: styled.p`
        font-size: 0.76rem;
        color: var(--color-text);
        opacity: 0.9;
    `,

    CardAction: styled.button`
        border-radius: 999px;
        padding: 6px 12px;
        border: 1px solid var(--accent-border);
        background: transparent;
        font-size: 0.8rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--color-heading);
        align-self: flex-start;
        transition: background-color 0.14s ease-out, border-color 0.14s ease-out,
            transform 0.1s ease-out;

        svg {
            font-size: 0.98rem;
        }

        &:hover {
            background: var(--accent-soft);
            border-color: var(--accent-border);
            transform: translateY(-1px);
        }

        &:active {
            transform: translateY(0);
        }
    `,

    EmptyState: styled.div`
        border-radius: 14px;
        border: 1px dashed var(--color-border);
        background: var(--color-card-soft);
        padding: 18px 16px;
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 6px;

        .icon {
            width: 32px;
            height: 32px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: var(--color-card);
            margin-bottom: 4px;

            svg {
                font-size: 1.1rem;
                color: var(--accent);
            }
        }

        h3 {
            font-size: 0.98rem;
            color: var(--color-heading);
            margin: 0;
        }

        p {
            font-size: 0.8rem;
            color: var(--color-text);
            opacity: 0.96;
            margin: 0 0 6px;
        }
    `,

    ListView: styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,

    ListRow: styled.article`
        display: grid;
        grid-template-columns: 120px minmax(0, 1fr);
        gap: 10px;
        padding: 8px 10px;
        border-radius: 12px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
        transition: transform 0.12s ease-out, box-shadow 0.12s ease-out,
            border-color 0.12s ease-out;

        &:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent-border);
        }

        &:hover img.list-image {
            transform: scale(1.03);
        }

        @media (max-width: 520px) {
            grid-template-columns: minmax(0, 1fr);
        }
    `,

    ListImageWrap: styled.div`
        border-radius: 10px;
        overflow: hidden;
        background: var(--color-card);
    `,

    ListImage: styled.img.attrs({ className: "list-image" })`
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.16s ease-out;
    `,

    ListBody: styled.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
    `,

    ListTitleRow: styled.div`
        display: flex;
        flex-direction: column;
        gap: 4px;

        @media (min-width: 720px) {
            flex-direction: row;
            justify-content: space-between;
            gap: 10px;
        }

        h3 {
            font-size: 0.94rem;
            color: var(--color-heading);
            margin: 0;
        }

        p {
            font-size: 0.8rem;
            color: var(--color-text);
            margin: 0;
        }

        .meta {
            display: flex;
            flex-direction: row;
            gap: 6px;
            align-items: center;
            justify-content: flex-start;

            @media (min-width: 720px) {
                flex-direction: column;
                align-items: flex-end;
            }

            .pill {
                font-size: 0.76rem;
                padding: 3px 8px;
                border-radius: 999px;
                background: var(--accent-soft);
                border: 1px solid var(--accent-border);
                color: var(--color-heading);
            }

            .price {
                font-size: 0.82rem;
                color: var(--color-heading);
            }
        }
    `,

    ListMetaRow: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        font-size: 0.8rem;
        color: var(--color-text);
        opacity: 0.92;

        span {
            display: inline-flex;
            align-items: center;
            gap: 4px;

            svg {
                font-size: 0.88rem;
                color: var(--accent);
            }
        }
    `,

    SideCard: styled.div`
        border-radius: 14px;
        padding: 14px 14px 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
    `,

    Tagline: styled.p`
        font-size: 0.86rem;
        color: var(--color-heading);
        margin-bottom: 8px;
    `,

    PerkList: styled.ul`
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 6px;

        li {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.8rem;
            color: var(--color-text);

            .icon {
                width: 26px;
                height: 26px;
                border-radius: 999px;
                background: var(--color-card);
                display: inline-flex;
                align-items: center;
                justify-content: center;

                svg {
                    font-size: 1rem;
                    color: var(--accent);
                }
            }
        }
    `,

    AddonSection: styled.section`
        display: flex;
        flex-direction: column;
        gap: 8px;
    `,

    AddonsGrid: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;

        @media (min-width: 640px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    AddonCard: styled.div`
        border-radius: 12px;
        padding: 10px 10px 8px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        transition: transform 0.12s ease-out, box-shadow 0.12s ease-out,
            border-color 0.12s ease-out;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--accent-border);
            box-shadow: var(--shadow-md);
        }
    `,

    AddonTitle: styled.h3`
        font-size: 0.88rem;
        color: var(--color-heading);
        margin-bottom: 4px;
    `,

    AddonBody: styled.div`
        p {
            font-size: 0.78rem;
            color: var(--color-text);
            margin: 0 0 4px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 3px;
        }

        li {
            display: inline-flex;
            align-items: flex-start;
            gap: 6px;
            font-size: 0.78rem;
            color: var(--color-text);

            svg {
                margin-top: 1px;
                font-size: 0.86rem;
                color: var(--accent);
            }
        }
    `,

    FAQSection: styled.section`
        margin-top: 32px;
        border-radius: 16px;
        padding: 14px 14px 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
    `,

    FAQList: styled.div`
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    `,

    FAQItem: styled.div`
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-card);
        overflow: hidden;
    `,

    FAQQuestion: styled.button`
        width: 100%;
        padding: 8px 10px;
        border: none;
        outline: none;
        background: ${({ $expanded }) =>
            $expanded ? "var(--accent-soft)" : "transparent"};
        color: var(--color-heading);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        transition: background-color 0.12s ease-out, transform 0.1s ease-out;

        .text {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-align: left;
            font-size: 0.86rem;

            .q {
                width: 20px;
                height: 20px;
                border-radius: 999px;
                border: 1px solid var(--accent-border);
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 0.76rem;
            }
        }

        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            svg {
                font-size: 1rem;
            }
        }

        &:hover {
            transform: translateY(-1px);
        }
    `,

    FAQAnswer: styled.div`
        padding: 6px 10px 9px;
        font-size: 0.8rem;
        color: var(--color-text);
        border-top: 1px solid var(--color-border);
        background: var(--color-card);
    `,
};
