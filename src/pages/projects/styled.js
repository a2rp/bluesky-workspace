// src/pages/projects/styled.js
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
            gap: 30px;
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

    HeaderMetaCard: styled.aside`
        border-radius: 16px;
        padding: 14px 14px 12px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border-strong);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,

    MetaRow: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 8px;

        @media (min-width: 640px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    MetaItem: styled.div`
        border-radius: 12px;
        padding: 8px 10px;
        background: var(--color-card);
        border: 1px solid var(--color-border);

        .icon {
            width: 26px;
            height: 26px;
            border-radius: 999px;
            background: var(--color-card-soft);
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
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--color-text);
            opacity: 0.8;
        }

        .value {
            display: block;
            font-size: 0.84rem;
            color: var(--color-heading);
        }
    `,

    InfoNote: styled.p`
        font-size: 0.78rem;
        color: var(--color-text);
        opacity: 0.92;
        border-radius: 10px;
        padding: 6px 8px;
        background: var(--color-card);
        border: 1px dashed var(--color-border);
        margin: 0;
    `,

    Toolbar: styled.section`
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 20px;

        @media (min-width: 720px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    `,

    FilterLabel: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 0.8rem;
        color: var(--color-text);

        svg {
            font-size: 0.96rem;
            color: var(--accent);
        }
    `,

    FilterPills: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    `,

    FilterChip: styled.button`
        padding: 5px 11px;
        border-radius: 999px;
        border: 1px solid
            ${({ $active }) =>
                $active ? "var(--accent-border)" : "var(--color-border)"};
        background: ${({ $active }) =>
            $active ? "var(--accent-soft)" : "transparent"};
        font-size: 0.8rem;
        color: ${({ $active }) =>
            $active ? "var(--color-heading)" : "var(--color-text)"};
        cursor: pointer;
        transition: background-color 0.14s ease-out, border-color 0.14s ease-out,
            transform 0.1s ease-out;

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

    Grid: styled.section`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 18px;

        @media (min-width: 880px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,

    Card: styled.article`
        border-radius: 16px;
        overflow: hidden;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        transition: transform 0.16s ease-out, box-shadow 0.16s ease-out,
            border-color 0.16s ease-out;

        &:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent-border);
        }

        &:hover img.project-image {
            transform: scale(1.03);
            filter: saturate(1.05);
        }
    `,

    ImageWrap: styled.div`
        position: relative;
        max-height: 200px;
        overflow: hidden;
    `,

    Image: styled.img.attrs({ className: "project-image" })`
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
        background: rgba(0, 0, 0, 0.75);
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

    CardHeader: styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;

        @media (min-width: 720px) {
            flex-direction: row;
            justify-content: space-between;
            gap: 12px;
        }
    `,

    NameBlock: styled.div`
        max-width: 100%;
    `,

    ProjectName: styled.h2`
        font-size: 0.98rem;
        color: var(--color-heading);
        margin: 0 0 4px;
    `,

    LocationRow: styled.div`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.8rem;
        color: var(--color-text);

        svg {
            font-size: 0.9rem;
            color: var(--accent);
        }
    `,

    StatsBlock: styled.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 6px;

        @media (min-width: 720px) {
            min-width: 190px;
        }
    `,

    Stat: styled.div`
        border-radius: 10px;
        padding: 6px 8px;
        background: var(--color-card);
        border: 1px solid var(--color-border);

        .label {
            display: block;
            font-size: 0.72rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.8;
        }

        .value {
            display: block;
            font-size: 0.8rem;
            color: var(--color-heading);
        }
    `,

    Highlights: styled.ul`
        list-style: none;
        padding: 0;
        margin: 2px 0;
        display: flex;
        flex-direction: column;
        gap: 4px;

        li {
            display: inline-flex;
            align-items: flex-start;
            gap: 6px;
            font-size: 0.8rem;
            color: var(--color-text);

            svg {
                margin-top: 1px;
                font-size: 0.9rem;
                color: var(--accent);
            }

            span {
                flex: 1 1 auto;
            }
        }
    `,

    ImpactBlock: styled.div`
        border-radius: 12px;
        padding: 8px 10px;
        background: var(--color-card);
        border: 1px solid var(--color-border);

        h4 {
            margin: 0 0 4px;
            font-size: 0.84rem;
            color: var(--color-heading);
        }

        p {
            margin: 0;
            font-size: 0.8rem;
            color: var(--color-text);
        }
    `,

    CardFooter: styled.div`
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 4px;
    `,

    PrimaryBtn: styled.button`
        border-radius: 999px;
        padding: 6px 12px;
        border: 1px solid var(--accent-border);
        background: var(--accent);
        color: #020617;
        cursor: pointer;
        font-size: 0.8rem;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        align-self: flex-start;
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

    SecondaryText: styled.p`
        font-size: 0.78rem;
        color: var(--color-text);
        margin: 0;
    `,
};
