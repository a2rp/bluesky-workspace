import styled from "styled-components";

export const Styled = {
    Wrapper: styled.nav`
        height: 100%;
        color: var(--color-text);
        padding: 12px 10px;
        display: flex;
        flex-direction: column;
        background: var(--color-card-soft);
        border-right: 1px solid var(--color-border-soft);
    `,

    ScrollArea: styled.div`
        flex: 1 1 auto;
        overflow: hidden;
        overflow-y: auto;
        padding-right: 4px;

        /* simple matching scrollbar */
        scrollbar-width: thin;
        scrollbar-color: var(--accent-border) transparent;

        &::-webkit-scrollbar {
            width: 8px;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background: var(--accent-border);
            border-radius: 999px;
        }
    `,

    Section: styled.section`
        border-radius: 12px;
        padding: 6px 4px 4px;
        margin-bottom: 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border-soft);
    `,

    SectionHeader: styled.button`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 6px 8px;
        border-radius: 8px;
        background: transparent;
        color: inherit;
        cursor: pointer;
        border: none;
        outline: none;
        transition: background-color 0.16s ease-out, transform 0.09s ease-out;

        &:hover {
            background: var(--color-card);
            transform: translateY(-1px);
        }

        .left {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.11em;
            color: var(--color-text);
            opacity: 0.75;
        }

        .icon {
            font-size: 1rem;
            color: var(--accent);
        }

        .chevron {
            font-size: 1rem;
            opacity: 0.75;
            color: var(--color-text);
        }
    `,

    SectionBody: styled.div`
        margin-top: 6px;
        padding: 4px;
        border-radius: 9px;
        background: var(--color-card);
        border: 1px solid var(--color-border-soft);
    `,

    ItemButton: styled.button`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        padding: 6px 10px 6px 14px;
        border-radius: 8px;
        background: transparent;
        border: none;
        cursor: pointer;
        color: ${({ $active }) =>
            $active ? "var(--color-heading)" : "var(--color-text)"};
        font-size: 0.82rem;
        transition: background-color 0.16s ease-out, transform 0.09s ease-out,
            box-shadow 0.16s ease-out;

        &:hover {
            background: var(--color-card-soft);
            transform: translateY(-1px);
            box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
        }

        .left {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            min-width: 0;
        }

        .label {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .icon-main {
            font-size: 1rem;
            opacity: ${({ $active }) => ($active ? 1 : 0.85)};
            color: ${({ $active }) =>
                $active ? "var(--accent)" : "var(--color-text)"};
        }

        .chevron {
            font-size: 0.9rem;
            opacity: 0.85;
            color: var(--color-text);
        }
    `,

    ItemLink: styled.span`
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        width: 100%;
        padding: 6px 10px 6px 14px;
        border-radius: 8px;
        text-decoration: none;
        font-size: 0.82rem;
        cursor: pointer;
        color: ${({ $active }) =>
            $active ? "var(--color-heading)" : "var(--color-text)"};
        background: ${({ $active }) =>
            $active ? "var(--accent-soft)" : "transparent"};
        border: 1px solid
            ${({ $active }) =>
                $active ? "var(--color-border-strong)" : "transparent"};
        position: relative;
        transition: background-color 0.16s ease-out, border-color 0.16s ease-out,
            transform 0.09s ease-out, box-shadow 0.16s ease-out;

        &:hover {
            background: var(--color-card-soft);
            box-shadow: 0 5px 12px rgba(0, 0, 0, 0.4);
            transform: translateY(-1px);
        }

        &::before {
            content: "";
            position: absolute;
            left: 6px;
            top: 6px;
            bottom: 6px;
            width: 2px;
            border-radius: 999px;
            background: ${({ $active }) =>
                $active ? "var(--accent)" : "transparent"};
        }

        .left {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            min-width: 0;
        }

        .label {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }

        .icon-main {
            font-size: 0.9rem;
            opacity: ${({ $active }) => ($active ? 1 : 0.78)};
            color: ${({ $active }) =>
                $active ? "var(--accent)" : "var(--color-text)"};
        }
    `,

    Children: styled.div`
        margin-left: 18px;
        border-left: 1px dashed var(--color-border-soft);
        padding-left: 8px;
        margin-top: 4px;
    `,
};
