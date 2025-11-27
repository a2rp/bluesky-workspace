// src/pages/home/styled.js
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

    /* ===== Hero ===== */

    HeroSection: styled.section`
        display: grid;
        grid-template-columns: minmax(0, 3fr);
        gap: 24px;
        margin-bottom: 28px;

        @media (min-width: 980px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2.4fr);
            gap: 32px;
        }
    `,

    HeroText: styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
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

    HeroTitle: styled.h1`
        font-size: 1.7rem;
        line-height: 1.25;
        color: var(--color-heading);

        @media (min-width: 720px) {
            font-size: 2.1rem;
        }
    `,

    HeroSubtitle: styled.p`
        font-size: 0.92rem;
        max-width: 40rem;
        color: var(--color-text);
        opacity: 0.95;
    `,

    HeroActions: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        a {
            text-decoration: none;
        }
    `,

    PrimaryBtn: styled.button`
        border-radius: 999px;
        padding: 8px 16px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 0.86rem;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: var(--accent);
        color: #020617;
        box-shadow: 0 12px 26px rgba(0, 0, 0, 0.6);
        transition: transform 0.12s ease-out, box-shadow 0.12s ease-out;

        svg {
            font-size: 1.02rem;
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

    SecondaryBtn: styled.button`
        border-radius: 999px;
        padding: 8px 14px;
        border: 1px solid var(--color-border);
        background: transparent;
        font-size: 0.84rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--color-heading);
        transition: background-color 0.14s ease-out, border-color 0.14s ease-out;

        svg {
            font-size: 1rem;
        }

        &:hover {
            background: var(--color-card-soft);
            border-color: var(--accent-border);
        }
    `,

    HeroMetaRow: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;
        margin-top: 8px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    `,

    MetaItem: styled.div`
        border-radius: 12px;
        padding: 8px 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);

        .icon {
            width: 26px;
            height: 26px;
            border-radius: 999px;
            background: var(--color-card);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 4px;

            svg {
                font-size: 1rem;
                color: var(--accent);
            }
        }

        .label {
            display: block;
            font-size: 0.74rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.8;
        }

        .value {
            display: block;
            font-size: 0.82rem;
            color: var(--color-heading);
        }
    `,

    HeroVisual: styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,

    HeroImageWrap: styled.div`
        border-radius: 18px;
        overflow: hidden;
        position: relative;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-md);

        .hero-image {
            width: 100%;
            height: 220px;
            object-fit: cover;
            display: block;
            transition: transform 0.16s ease-out, filter 0.16s ease-out;
        }

        &:hover .hero-image {
            transform: scale(1.03);
            filter: saturate(1.05);
        }
    `,

    HeroBadge: styled.div`
        position: absolute;
        left: 12px;
        bottom: 12px;
        border-radius: 999px;
        padding: 6px 11px;
        background: rgba(3, 7, 18, 0.85);
        color: #f9fafb;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        backdrop-filter: blur(4px);

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 999px;
            background: #22c55e;
        }

        .text {
            display: flex;
            flex-direction: column;
            gap: 1px;
        }

        .label {
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.13em;
        }

        .value {
            font-size: 0.78rem;
        }
    `,

    HeroMiniCard: styled.div`
        border-radius: 14px;
        padding: 10px 11px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 6px;

        .header {
            display: flex;
            gap: 8px;
            align-items: flex-start;
        }

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

        .label {
            display: block;
            font-size: 0.76rem;
            letter-spacing: 0.13em;
            text-transform: uppercase;
            color: var(--color-text);
            opacity: 0.86;
        }

        .value {
            display: block;
            font-size: 0.84rem;
            color: var(--color-heading);
        }
    `,

    TagsRow: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 2px;

        .tag {
            font-size: 0.76rem;
            padding: 3px 8px;
            border-radius: 999px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            color: var(--color-text);
        }
    `,

    /* ===== Shared section header ===== */

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

    /* ===== Highlights ===== */

    HighlightsSection: styled.section`
        margin-bottom: 26px;
    `,

    HighlightsGrid: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 14px;

        @media (min-width: 880px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    `,

    HighlightCard: styled.article`
        border-radius: 14px;
        padding: 12px 12px 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 6px;
        transition: transform 0.14s ease-out, box-shadow 0.14s ease-out,
            border-color 0.14s ease-out;

        &:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent-border);
        }

        .icon {
            width: 30px;
            height: 30px;
            border-radius: 999px;
            background: var(--color-card);
            display: inline-flex;
            align-items: center;
            justify-content: center;

            svg {
                font-size: 1.1rem;
                color: var(--accent);
            }
        }

        h3 {
            font-size: 0.94rem;
            color: var(--color-heading);
            margin: 0;
        }

        p {
            font-size: 0.8rem;
            color: var(--color-text);
            margin: 2px 0 2px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 2px 0 0;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        li {
            font-size: 0.78rem;
            color: var(--color-text);
        }
    `,

    /* ===== Formats snapshot ===== */

    FormatsSection: styled.section`
        margin-bottom: 26px;
    `,

    FormatsGrid: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 14px;

        @media (min-width: 880px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    `,

    FormatCard: styled.article`
        border-radius: 14px;
        padding: 12px 12px 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        display: flex;
        flex-direction: column;
        gap: 6px;
        box-shadow: var(--shadow-sm);
        transition: transform 0.14s ease-out, box-shadow 0.14s ease-out,
            border-color 0.14s ease-out;

        &:hover {
            transform: translateY(-3px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent-border);
        }

        .top {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .label {
            font-size: 0.74rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.86;
        }

        h3 {
            font-size: 0.94rem;
            color: var(--color-heading);
            margin: 0;
        }

        p {
            font-size: 0.8rem;
            color: var(--color-text);
            margin: 2px 0 2px;
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 2px 0 4px;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        li {
            font-size: 0.78rem;
            color: var(--color-text);
        }
    `,

    ChipLink: styled.button`
        margin-top: 2px;
        border-radius: 999px;
        padding: 5px 10px;
        border: 1px solid var(--accent-border);
        background: transparent;
        font-size: 0.78rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--color-heading);
        transition: background-color 0.14s ease-out, border-color 0.14s ease-out,
            transform 0.1s ease-out;

        svg {
            font-size: 0.9rem;
        }

        &:hover {
            background: var(--accent-soft);
            transform: translateY(-1px);
        }

        &:active {
            transform: translateY(0);
        }
    `,

    /* ===== Steps ===== */

    StepsSection: styled.section`
        margin-bottom: 10px;
    `,

    StepsRow: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 12px;
        margin-top: 6px;

        @media (min-width: 880px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    `,

    StepCard: styled.article`
        border-radius: 14px;
        padding: 12px 12px 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        display: flex;
        flex-direction: column;
        gap: 6px;

        .badge {
            align-self: flex-start;
            font-size: 0.74rem;
            padding: 3px 8px;
            border-radius: 999px;
            background: var(--color-card);
            border: 1px solid var(--color-border);
            color: var(--color-text);
        }

        h3 {
            font-size: 0.9rem;
            color: var(--color-heading);
            margin: 0;
        }

        p {
            font-size: 0.8rem;
            color: var(--color-text);
            margin: 0;
        }
    `,

    StepsFooter: styled.div`
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 10px;

        a {
            text-decoration: none;
        }

        .hint {
            font-size: 0.76rem;
            color: var(--color-text);
        }
    `,

    StepCTA: styled.button`
        border-radius: 999px;
        padding: 7px 14px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 0.82rem;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        background: var(--accent);
        color: #020617;
        box-shadow: 0 10px 22px rgba(0, 0, 0, 0.55);
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
};
