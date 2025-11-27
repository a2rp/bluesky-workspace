// src/App.styled.js
import styled, { css } from "styled-components";

/* Scrollbar that stays the same size (no layout shift) and
   uses subtle light tints on hover to match the premium theme. */
const hoverScrollbarStable = css`
    scrollbar-gutter: stable;

    /* Firefox defaults */
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;

    /* WebKit size */
    &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 8px;
        border: 3px solid transparent;
        background-clip: content-box;
        transition: background 0.15s ease;
    }

    /* On hover: use soft neutral accent (no layout jump) */
    @media (hover: hover) {
        &:hover {
            scrollbar-color: rgba(255, 255, 255, 0.35) transparent;
        }
        &:hover::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.35);
        }
        &::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.55);
        }
        &::-webkit-scrollbar-thumb:active {
            background: var(--accent);
        }
    }

    /* Touch devices: keep a visible thin thumb */
    @media (hover: none) {
        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.35) transparent;
        &::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.35);
        }
    }
`;

export const Styled = {
    Wrapper: styled.div`
        height: 100vh;
        overflow: hidden;
        overflow-y: auto;

        /* Theme surfaces */
        background: var(--color-bg);
        color: var(--color-text);

        ${hoverScrollbarStable};
    `,

    Main: styled.main`
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 15px;

        /* Subtle elevated surface under content */
        background: var(--color-card);
    `,

    RoutesWrapper: styled.div`
        width: 100%;
        min-height: 100vh;
        padding: 10vh 0;
    `,

    Drawer: styled.div`
        position: fixed;
        left: 0;
        top: 60px;
        width: 100%;
        height: calc(100vh - 60px);

        display: flex;

        .empty {
            width: 100%;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            cursor: pointer;

            animation: empty 0.2s ease-in 1 forwards;
            opacity: 1;
            @keyframes empty {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        }

        .menuWrapper {
            flex: 0 0 300px;
            position: relative;
            background-color: var(--color-card);

            animation: menuWrapper 0.2s ease-in 1 forwards;
            transform: translateX(100%);
            @keyframes menuWrapper {
                0% {
                    transform: translateX(100%);
                }
                100% {
                    transform: translateX(0);
                }
            }

            .menuScroller {
                border: 1px solid var(--color-border);
                height: 100%;
                overflow: hidden;
                overflow-y: auto;
            }
        }
    `,
};
