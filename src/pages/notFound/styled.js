// src/pages/notFound/styled.js
import styled from "styled-components";

export const Styled = {
    PageWrap: styled.main`
        padding: 90px 16px 40px;
        background: var(--color-bg);
        color: var(--color-text);
        min-height: 100vh;

        @media (min-width: 960px) {
            padding: 96px 40px 56px;
        }
    `,

    Inner: styled.div`
        max-width: 880px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 120px);
    `,

    Card: styled.section`
        width: 100%;
        border-radius: 18px;
        padding: 20px 18px 18px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border-strong);
        box-shadow: var(--shadow-md);
        display: flex;
        flex-direction: column;
        gap: 14px;

        @media (min-width: 720px) {
            padding: 24px 22px 20px;
        }
    `,

    IconStack: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 4px;

        .badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            border-radius: 999px;
            background: var(--accent-soft);
            border: 1px solid var(--accent-border);
            color: var(--color-heading);
            font-weight: 600;
            font-size: 1rem;
        }

        .glyph {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            background: var(--color-card);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-shadow: var(--shadow-sm);

            svg {
                font-size: 1.3rem;
                color: var(--accent);
            }
        }
    `,

    TitleBlock: styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;
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

    Title: styled.h1`
        font-size: 1.5rem;
        line-height: 1.3;
        color: var(--color-heading);

        @media (min-width: 720px) {
            font-size: 1.8rem;
        }
    `,

    Subtitle: styled.p`
        font-size: 0.9rem;
        max-width: 40rem;
        color: var(--color-text);
        opacity: 0.94;
        margin: 0;
    `,

    PathHint: styled.div`
        border-radius: 10px;
        padding: 8px 10px;
        background: var(--color-card);
        border: 1px solid var(--color-border);

        .label {
            display: block;
            font-size: 0.74rem;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: var(--color-text);
            opacity: 0.8;
        }

        .value {
            display: block;
            font-size: 0.84rem;
            color: var(--color-heading);
            word-break: break-all;
        }
    `,

    Actions: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 4px;

        a {
            text-decoration: none;
        }
    `,

    PrimaryBtn: styled.button`
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

    SecondaryBtn: styled.button`
        border-radius: 999px;
        padding: 7px 12px;
        border: 1px solid var(--color-border);
        background: transparent;
        font-size: 0.8rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        color: var(--color-heading);
        transition: background-color 0.14s ease-out, border-color 0.14s ease-out;

        svg {
            font-size: 0.96rem;
        }

        &:hover {
            background: var(--color-card);
            border-color: var(--accent-border);
        }
    `,

    HelpList: styled.div`
        margin-top: 4px;
        border-radius: 10px;
        padding: 8px 10px 9px;
        background: var(--color-card);
        border: 1px solid var(--color-border);

        p {
            margin: 0 0 4px;
            font-size: 0.8rem;
            color: var(--color-heading);
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
            font-size: 0.78rem;
            color: var(--color-text);
        }
    `,
};
