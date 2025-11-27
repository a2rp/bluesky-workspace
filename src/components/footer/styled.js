// src/components/footer/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        width: 100%;
        border-top: 1px solid var(--color-border);
        background: var(--color-card-soft);
        color: var(--color-text);
    `,

    BottomBar: styled.div`
        padding: 12px var(--space-xl) 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        font-size: 12px;
        color: var(--color-text);
        padding: 15px;
        max-width: 1440px;
        margin: auto;

        .left {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            opacity: 0.9;
        }

        .right {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            opacity: 0.9;
        }

        a {
            color: var(--link);
            text-decoration: none;
            padding: 2px 6px;
            border-radius: 999px;
            transition: color var(--transition-med),
                background var(--transition-med);
        }

        a:hover {
            color: var(--link-hover);
            background: var(--accent-soft);
        }

        .heart {
            transform: translateY(1px);
            color: var(--accent);
        }

        @media (max-width: 680px) {
            padding-inline: 18px;
            flex-direction: column;
            align-items: flex-start;
        }
    `,
};
