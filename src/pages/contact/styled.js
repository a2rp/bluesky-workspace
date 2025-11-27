// src/pages/contact/styled.js
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
        margin-bottom: 28px;

        @media (min-width: 960px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2.2fr);
            gap: 32px;
        }
    `,

    HeaderText: styled.div`
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
        font-size: 0.9rem;
        max-width: 40rem;
        color: var(--color-text);
        opacity: 0.94;
    `,

    HeaderSide: styled.div`
        display: flex;
        align-items: stretch;
    `,

    InfoCard: styled.div`
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

    InfoRow: styled.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;

        .icon {
            width: 28px;
            height: 28px;
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

        .text {
            flex: 1 1 auto;
        }

        .label {
            display: block;
            font-size: 0.78rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--color-text);
            opacity: 0.82;
        }

        .value {
            display: block;
            font-size: 0.86rem;
            color: var(--color-heading);
        }
    `,

    MainLayout: styled.section`
        display: grid;
        grid-template-columns: minmax(0, 3fr);
        gap: 22px;
        align-items: flex-start;

        @media (min-width: 980px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2.1fr);
            gap: 26px;
        }
    `,

    FormSection: styled.div`
        display: flex;
        flex-direction: column;
        gap: 12px;
    `,

    SideSection: styled.div`
        display: flex;
        flex-direction: column;
        gap: 14px;
    `,

    SuccessBanner: styled.div`
        border-radius: 12px;
        padding: 8px 10px;
        background: var(--accent-soft);
        border: 1px solid var(--accent-border);
        display: flex;
        gap: 8px;
        align-items: flex-start;
        color: var(--color-heading);
        font-size: 0.82rem;

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
            }
        }

        .title {
            display: block;
            font-weight: 600;
        }

        .body {
            display: block;
            color: var(--color-text);
        }
    `,

    Form: styled.form`
        border-radius: 16px;
        padding: 14px 14px 12px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,

    FieldRow: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    Field: styled.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
    `,

    Label: styled.label`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.8rem;
        color: var(--color-heading);

        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 0.96rem;
            color: var(--accent);
        }
    `,

    Input: styled.input`
        border-radius: 8px;
        padding: 7px 9px;
        border: 1px solid
            ${({ $error }) =>
                $error ? "rgba(220, 38, 38, 0.9)" : "var(--color-border)"};
        background: var(--color-card);
        color: var(--color-heading);
        font-size: 0.82rem;
        outline: none;
        transition: border-color 0.14s ease-out, box-shadow 0.14s ease-out,
            background-color 0.14s ease-out;

        &::placeholder {
            color: var(--color-text);
            opacity: 0.7;
        }

        &:focus-visible {
            border-color: var(--accent-border);
            box-shadow: 0 0 0 1px var(--accent-soft);
            background: var(--color-card-soft);
        }
    `,

    Select: styled.select`
        border-radius: 8px;
        padding: 7px 9px;
        border: 1px solid var(--color-border);
        background: var(--color-card);
        color: var(--color-heading);
        font-size: 0.82rem;
        outline: none;
        transition: border-color 0.14s ease-out, box-shadow 0.14s ease-out,
            background-color 0.14s ease-out;

        &:focus-visible {
            border-color: var(--accent-border);
            box-shadow: 0 0 0 1px var(--accent-soft);
            background: var(--color-card-soft);
        }
    `,

    Textarea: styled.textarea`
        border-radius: 8px;
        padding: 7px 9px;
        border: 1px solid
            ${({ $error }) =>
                $error ? "rgba(220, 38, 38, 0.9)" : "var(--color-border)"};
        background: var(--color-card);
        color: var(--color-heading);
        font-size: 0.82rem;
        outline: none;
        resize: vertical;
        min-height: 120px;
        transition: border-color 0.14s ease-out, box-shadow 0.14s ease-out,
            background-color 0.14s ease-out;

        &::placeholder {
            color: var(--color-text);
            opacity: 0.7;
        }

        &:focus-visible {
            border-color: var(--accent-border);
            box-shadow: 0 0 0 1px var(--accent-soft);
            background: var(--color-card-soft);
        }
    `,

    ErrorText: styled.span`
        font-size: 0.76rem;
        color: rgba(248, 113, 113, 0.94);
    `,

    FormFooter: styled.div`
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

    SubmitBtn: styled.button`
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

    PrivacyNote: styled.p`
        font-size: 0.76rem;
        color: var(--color-text);
        margin: 0;
        max-width: 18rem;
    `,

    ImageCard: styled.div`
        border-radius: 16px;
        overflow: hidden;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
    `,

    Image: styled.img`
        width: 100%;
        height: 190px;
        object-fit: cover;
        display: block;
    `,

    ImageCaption: styled.p`
        margin: 6px 9px 8px;
        font-size: 0.78rem;
        color: var(--color-text);
    `,

    QuickList: styled.div`
        border-radius: 14px;
        padding: 10px 11px 9px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);

        ul {
            list-style: none;
            padding: 0;
            margin: 4px 0 0;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        li {
            display: inline-flex;
            align-items: flex-start;
            gap: 6px;
            font-size: 0.8rem;
            color: var(--color-text);

            svg {
                margin-top: 2px;
                font-size: 0.88rem;
                color: var(--accent);
            }

            span {
                flex: 1 1 auto;
            }
        }
    `,

    QuickTitle: styled.h2`
        font-size: 0.9rem;
        color: var(--color-heading);
        margin: 0;
    `,
};
