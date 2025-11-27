import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 60px;
        z-index: 9999;
        overflow: hidden;

        display: flex;
        align-items: center;

        background: var(--color-card-soft);
        border-bottom: 1px solid var(--color-border);
        color: var(--color-text);
        box-shadow: var(--shadow-sm); /* token exists in theme */
        backdrop-filter: saturate(1.1) blur(6px);
    `,

    Main: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px var(--space-xl);
        gap: 12px;

        @media (max-width: 720px) {
            padding: 10px var(--space-lg);
        }

        .brand {
            font-size: var(--font-size-md);
            font-weight: 600;
            letter-spacing: 0.08em;
            color: var(--color-heading);
            text-transform: uppercase;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            text-decoration: none;
            position: relative;
            padding: 0 10px;
        }

        .brandText {
            white-space: nowrap;
        }

        .themeHamburger {
            display: flex;
            align-items: center;
            gap: 16px;

            .theme {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .hamburger {
                border: 1px solid var(--color-border);
                border-radius: 8px;
                cursor: pointer;
                display: flex;
                padding: 4px 10px;
                background: var(--color-card-soft);
                transition: background-color 0.16s ease-out,
                    border-color 0.16s ease-out, transform 0.12s ease-out,
                    box-shadow 0.16s ease-out;

                svg {
                    transition: transform 0.16s ease-out, color 0.16s ease-out;
                    color: var(--color-text);
                }

                &:hover {
                    background: var(--color-card);
                    border-color: var(--accent-border);
                    box-shadow: 0 0 0 1px var(--accent-soft);

                    svg {
                        transform: translateY(-1px);
                        color: var(--accent);
                    }
                }

                &:active {
                    transform: translateY(0);
                    box-shadow: none;
                }
            }
        }
    `,

    ThemeToggle: styled.button`
        position: relative;
        width: 52px;
        height: 26px;
        padding: 0;
        border-radius: 999px;
        border: 1px solid var(--color-border);
        background: ${({ $isLight }) =>
            $isLight ? "var(--color-card-soft)" : "var(--color-bg)"};
        display: inline-flex;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        outline: none;
        transition: background-color 0.18s ease-out, border-color 0.18s ease-out,
            box-shadow 0.18s ease-out;

        .icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 13px;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            transition: opacity 0.18s ease-out, transform 0.18s ease-out;
            color: var(--color-text);
        }

        .icon.sun {
            left: 8px;
            opacity: ${({ $isLight }) => ($isLight ? 1 : 0.35)};
            transform: translateY(-50%)
                scale(${({ $isLight }) => ($isLight ? 1 : 0.9)});
            color: ${({ $isLight }) =>
                $isLight ? "var(--accent)" : "var(--color-text)"};
        }

        .icon.moon {
            right: 8px;
            opacity: ${({ $isLight }) => ($isLight ? 0.35 : 1)};
            transform: translateY(-50%)
                scale(${({ $isLight }) => ($isLight ? 0.9 : 1)});
        }

        &:hover {
            border-color: var(--accent-border);
            box-shadow: 0 0 0 1px var(--accent-soft);
        }

        &:focus-visible {
            box-shadow: 0 0 0 2px var(--accent-soft);
        }
    `,

    ThemeThumb: styled.span`
        width: 18px;
        height: 18px;
        border-radius: 999px;
        background: linear-gradient(
            145deg,
            var(--accent),
            var(--accent-border)
        );
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
        transform: translateX(${({ $isLight }) => ($isLight ? "26px" : "4px")});
        transition: transform 0.18s ease-out, box-shadow 0.18s ease-out;

        &:active {
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
        }
    `,
};
