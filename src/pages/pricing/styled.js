// src/pages/pricing/styled.js
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

    HeaderSection: styled.section`
        display: grid;
        grid-template-columns: minmax(0, 3fr);
        gap: 24px;
        margin-bottom: 32px;

        @media (min-width: 960px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2.3fr);
            gap: 32px;
        }
    `,

    HeaderLeft: styled.div`
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

    MetaRow: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;
        margin-top: 6px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    MetaItem: styled.div`
        border-radius: 12px;
        padding: 8px 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);

        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 26px;
            height: 26px;
            border-radius: 999px;
            background: var(--color-card);
            margin-bottom: 4px;

            svg {
                font-size: 1rem;
                color: var(--accent);
            }
        }

        .label {
            display: block;
            font-size: 0.74rem;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--color-text);
            opacity: 0.8;
        }

        .value {
            display: block;
            font-size: 0.86rem;
            color: var(--color-heading);
        }
    `,

    HeaderRight: styled.div`
        display: flex;
        align-items: stretch;
    `,

    BillingToggleCard: styled.div`
        border-radius: 16px;
        padding: 14px 14px 12px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border-strong);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    `,

    BillingLabelRow: styled.div`
        display: flex;
        flex-direction: column;
        gap: 3px;

        .label {
            font-size: 0.84rem;
            color: var(--color-heading);
        }

        .hint {
            font-size: 0.78rem;
            color: var(--color-text);
            opacity: 0.92;
        }
    `,

    ToggleRow: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin-top: 4px;
        align-self: flex-start;
    `,

    ModeLabel: styled.span`
        font-size: 0.8rem;
        color: ${({ $active }) =>
            $active ? "var(--color-heading)" : "var(--color-text)"};
        opacity: ${({ $active }) => ($active ? 1 : 0.75)};
    `,

    ToggleSwitch: styled.button`
        position: relative;
        width: 70px;
        height: 28px;
        border-radius: 999px;
        border: 1px solid var(--color-border);
        background: var(--color-card);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        outline: none;
        padding: 0;
        overflow: hidden;
        transition: background-color 0.18s ease-out, border-color 0.18s ease-out;

        .icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.1rem;
            color: var(--color-text);
            opacity: 0.65;
        }

        .icon.left {
            left: 8px;
        }

        .icon.right {
            right: 8px;
        }

        &:hover {
            border-color: var(--accent-border);
        }
    `,

    ToggleThumb: styled.span`
        width: 26px;
        height: 22px;
        border-radius: 999px;
        background: linear-gradient(
            145deg,
            var(--accent),
            var(--accent-border)
        );
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.5);
        transform: translateX(
            ${({ $mode }) => ($mode === "yearly" ? "16px" : "-16px")}
        );
        transition: transform 0.18s ease-out, box-shadow 0.18s ease-out;
    `,

    BillingNote: styled.div`
        margin-top: 4px;
        border-radius: 10px;
        padding: 6px 8px;
        background: var(--color-card);
        border: 1px solid var(--color-border);
        font-size: 0.78rem;
        display: flex;
        gap: 6px;
        align-items: flex-start;
        color: var(--color-text);

        svg {
            flex-shrink: 0;
            margin-top: 2px;
            font-size: 0.9rem;
            color: var(--accent);
        }
    `,

    PlansSection: styled.section`
        margin-bottom: 28px;
    `,

    SectionHeaderRow: styled.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: 10px;
    `,

    SectionTitle: styled.h2`
        font-size: 1rem;
        color: var(--color-heading);
    `,

    SectionSubtitle: styled.p`
        font-size: 0.82rem;
        color: var(--color-text);
        opacity: 0.92;
        max-width: 46rem;
    `,

    PlansGrid: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 16px;

        @media (min-width: 780px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    PlanCard: styled.article`
        position: relative;
        border-radius: 16px;
        padding: 14px 14px 12px;
        background: var(--color-card-soft);
        border: 1px solid
            ${({ $highlight }) =>
                $highlight ? "var(--accent-border)" : "var(--color-border)"};
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: transform 0.14s ease-out, box-shadow 0.14s ease-out,
            border-color 0.14s ease-out;

        &:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent-border);
        }
    `,

    RecommendedTag: styled.span`
        position: absolute;
        top: 10px;
        right: 12px;
        padding: 3px 9px;
        border-radius: 999px;
        background: var(--accent-soft);
        border: 1px solid var(--accent-border);
        font-size: 0.74rem;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        color: var(--color-heading);

        svg {
            font-size: 0.9rem;
        }
    `,

    PlanHeader: styled.div`
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: flex-start;
    `,

    PlanNameRow: styled.div`
        display: flex;
        flex-direction: column;
        gap: 3px;
    `,

    PlanName: styled.h3`
        font-size: 0.96rem;
        color: var(--color-heading);
        margin: 0;
    `,

    PlanTag: styled.span`
        font-size: 0.78rem;
        padding: 3px 8px;
        border-radius: 999px;
        border: 1px solid var(--color-border);
        background: var(--color-card);
        color: var(--color-text);
    `,

    PlanSeatMeta: styled.span`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.8rem;
        color: var(--color-text);

        svg {
            font-size: 0.96rem;
            color: var(--accent);
        }
    `,

    PlanPriceBlock: styled.div`
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: flex-end;

        .left {
            display: flex;
            flex-direction: column;
            gap: 1px;
        }

        .label {
            font-size: 0.74rem;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: var(--color-text);
            opacity: 0.8;
        }

        .value {
            font-size: 1.02rem;
            color: var(--color-heading);
        }

        .unit {
            font-size: 0.78rem;
            color: var(--color-text);
        }
    `,

    PlanBillingHint: styled.span`
        font-size: 0.74rem;
        color: var(--color-text);
        opacity: 0.9;
        text-align: right;
        max-width: 11rem;
    `,

    PlanDescription: styled.p`
        font-size: 0.8rem;
        color: var(--color-text);
        margin: 2px 0 0;
    `,

    PlanIdealFor: styled.div`
        margin-top: 2px;

        .label {
            display: block;
            font-size: 0.74rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.85;
        }

        .value {
            display: block;
            font-size: 0.78rem;
            color: var(--color-heading);
        }
    `,

    FeatureList: styled.ul`
        list-style: none;
        padding: 0;
        margin: 4px 0 2px;
        display: flex;
        flex-direction: column;
        gap: 3px;

        li {
            display: inline-flex;
            align-items: flex-start;
            gap: 6px;
            font-size: 0.78rem;
            color: var(--color-text);

            svg {
                margin-top: 1px;
                font-size: 0.88rem;
                color: var(--accent);
            }

            span {
                flex: 1 1 auto;
            }
        }
    `,

    ExtrasList: styled.ul`
        list-style: none;
        padding: 0;
        margin: 2px 0 4px;
        display: flex;
        flex-direction: column;
        gap: 2px;

        li {
            font-size: 0.76rem;
            color: var(--color-text);
            opacity: 0.95;
        }
    `,

    PlanActionRow: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 4px;
    `,

    PrimaryBtn: styled.button`
        border-radius: 999px;
        padding: 6px 14px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 0.8rem;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--accent);
        color: #020617;
        box-shadow: 0 10px 22px rgba(0, 0, 0, 0.5);
        transition: transform 0.12s ease-out, box-shadow 0.12s ease-out;

        svg {
            font-size: 0.98rem;
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

    SecondaryLink: styled.button`
        border-radius: 999px;
        padding: 6px 10px;
        border: 1px solid var(--color-border);
        background: transparent;
        font-size: 0.78rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--color-text);
        transition: background-color 0.12s ease-out, border-color 0.12s ease-out;

        svg {
            font-size: 0.9rem;
        }

        &:hover {
            background: var(--color-card);
            border-color: var(--accent-border);
        }
    `,

    IncludedSection: styled.section`
        margin-top: 6px;
        margin-bottom: 20px;
    `,

    IncludedGrid: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    IncludedItem: styled.div`
        border-radius: 12px;
        padding: 8px 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        display: flex;
        gap: 8px;
        align-items: flex-start;

        .icon {
            width: 26px;
            height: 26px;
            border-radius: 999px;
            background: var(--color-card);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-top: 2px;

            svg {
                font-size: 1rem;
                color: var(--accent);
            }
        }

        p {
            margin: 0;
            font-size: 0.8rem;
            color: var(--color-text);
        }
    `,

    NoteStrip: styled.div`
        border-radius: 12px;
        padding: 8px 10px;
        background: var(--color-card-soft);
        border: 1px dashed var(--color-border);
        display: flex;
        gap: 8px;
        align-items: flex-start;
        font-size: 0.8rem;
        color: var(--color-text);

        .icon {
            width: 24px;
            height: 24px;
            border-radius: 999px;
            background: var(--color-card);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-top: 1px;

            svg {
                font-size: 0.9rem;
                color: var(--accent);
            }
        }

        p {
            margin: 0;
        }
    `,
};
