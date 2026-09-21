import{g as a,r as n,j as e,F as w,l as d,d as N,m as P,b as j,a as k,f as g,e as c,n as S,o as R,p as I,c as u,q as L,s as W,t as q,h as M,u as D,v as E}from"./index-_-qp2OvU.js";const r={PageWrap:a.main`
        padding: 90px 16px 40px;
        background: var(--color-bg);
        color: var(--color-text);

        @media (min-width: 960px) {
            padding: 96px 40px 56px;
        }
    `,Inner:a.div`
        max-width: 1180px;
        margin: 0 auto;
    `,HeaderRow:a.section`
        display: grid;
        grid-template-columns: minmax(0, 3fr);
        gap: 24px;
        margin-bottom: 32px;

        @media (min-width: 960px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2fr);
            gap: 32px;
            margin-bottom: 40px;
        }
    `,TitleBlock:a.div`
        display: flex;
        flex-direction: column;
        gap: 14px;
    `,Overline:a.div`
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
    `,PageTitle:a.h1`
        font-size: 1.6rem;
        line-height: 1.3;
        color: var(--color-heading);

        @media (min-width: 720px) {
            font-size: 2rem;
        }
    `,Subtitle:a.p`
        font-size: 0.92rem;
        max-width: 40rem;
        color: var(--color-text);
        opacity: 0.94;
    `,BadgeRow:a.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 4px;
    `,Badge:a.span`
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
    `,Actions:a.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
    `,PrimaryBtn:a.button`
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
    `,GhostBtn:a.button`
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
    `,SideHighlightCard:a.aside`
        border-radius: 16px;
        padding: 16px 16px 14px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border-strong);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,SideTag:a.div`
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
    `,SideTitle:a.h2`
        font-size: 1rem;
        color: var(--color-heading);
        margin: 2px 0;
    `,SideBody:a.p`
        font-size: 0.86rem;
        color: var(--color-text);
        opacity: 0.96;
    `,SideStatsRow:a.div`
        display: grid;
        grid-template-columns: 1fr;
        gap: 8px;
        margin-top: 4px;

        @media (min-width: 600px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,SideStat:a.div`
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
    `,SideFootNote:a.p`
        margin-top: 6px;
        font-size: 0.8rem;
        color: var(--color-text);
        opacity: 0.9;
    `,Toolbar:a.section`
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        @media (min-width: 960px) {
            flex-direction: row;
            align-items: center;
        }
    `,SearchBox:a.div`
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
    `,SearchInput:a.input`
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
    `,ToolbarRight:a.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        justify-content: flex-start;

        @media (min-width: 960px) {
            justify-content: flex-end;
        }
    `,FilterPills:a.div`
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: 100%;
    `,FilterChip:a.button`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 5px 10px;
        border-radius: 999px;
        font-size: 0.8rem;
        border: 1px solid
            ${({$active:i})=>i?"var(--accent-border)":"var(--color-border)"};
        background: ${({$active:i})=>i?"var(--accent-soft)":"transparent"};
        color: ${({$active:i})=>i?"var(--color-heading)":"var(--color-text)"};
        cursor: pointer;
        transition: background-color 0.14s ease-out, border-color 0.14s ease-out,
            transform 0.1s ease-out;

        svg {
            font-size: 0.9rem;
        }

        &:hover {
            transform: translateY(-1px);
            border-color: var(--accent-border);
            background: ${({$active:i})=>i?"var(--accent-soft)":"var(--color-card-soft)"};
        }

        &:active {
            transform: translateY(0);
        }
    `,ViewToggle:a.div`
        display: inline-flex;
        border-radius: 999px;
        overflow: hidden;
        border: 1px solid var(--color-border);
        background: var(--color-card-soft);
    `,ToggleButton:a.button`
        padding: 5px 10px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 0.8rem;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: ${({$active:i})=>i?"var(--accent-soft)":"transparent"};
        color: ${({$active:i})=>i?"var(--color-heading)":"var(--color-text)"};

        svg {
            font-size: 0.9rem;
        }

        &:hover {
            background: ${({$active:i})=>i?"var(--accent-soft)":"var(--color-card)"};
        }
    `,ClearBtn:a.button`
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
    `,MainLayout:a.section`
        display: grid;
        grid-template-columns: minmax(0, 3fr);
        gap: 24px;
        align-items: flex-start;

        @media (min-width: 1040px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2.2fr);
            gap: 28px;
        }
    `,ServicesColumn:a.div`
        display: flex;
        flex-direction: column;
        gap: 14px;
    `,SideColumn:a.div`
        display: flex;
        flex-direction: column;
        gap: 18px;
    `,SectionTitleRow:a.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: 4px;
    `,SectionTitle:a.h2`
        font-size: 1rem;
        color: var(--color-heading);
    `,SectionSubtitle:a.p`
        font-size: 0.82rem;
        color: var(--color-text);
        opacity: 0.92;
    `,CardsGrid:a.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 16px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (min-width: 1100px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,Card:a.article`
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
    `,CardImageWrap:a.div`
        position: relative;
        overflow: hidden;
        max-height: 180px;

        @media (min-width: 720px) {
            max-height: 190px;
        }
    `,CardImage:a.img.attrs({className:"card-image"})`
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.16s ease-out, filter 0.16s ease-out;
    `,ImageTag:a.span`
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
    `,CardBody:a.div`
        padding: 12px 12px 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,CardHeaderRow:a.div`
        display: flex;
        flex-direction: column;
        gap: 6px;

        @media (min-width: 900px) {
            flex-direction: row;
            justify-content: space-between;
            gap: 10px;
        }
    `,CardTitleWrap:a.div`
        max-width: 100%;
    `,CardTitle:a.h3`
        font-size: 0.98rem;
        color: var(--color-heading);
        margin-bottom: 2px;
    `,CardSummary:a.p`
        font-size: 0.8rem;
        color: var(--color-text);
        opacity: 0.96;
    `,PriceBlock:a.div`
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
    `,MetaStatsRow:a.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 8px;
        margin-top: 2px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    `,StatItem:a.div`
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
    `,HighlightsList:a.ul`
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
    `,FeatureList:a.ul`
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
    `,CardFooterRow:a.div`
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 4px;

        @media (min-width: 720px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    `,CardFootNote:a.p`
        font-size: 0.76rem;
        color: var(--color-text);
        opacity: 0.9;
    `,CardAction:a.button`
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
    `,EmptyState:a.div`
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
    `,ListView:a.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,ListRow:a.article`
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
    `,ListImageWrap:a.div`
        border-radius: 10px;
        overflow: hidden;
        background: var(--color-card);
    `,ListImage:a.img.attrs({className:"list-image"})`
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.16s ease-out;
    `,ListBody:a.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
    `,ListTitleRow:a.div`
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
    `,ListMetaRow:a.div`
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
    `,SideCard:a.div`
        border-radius: 14px;
        padding: 14px 14px 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
    `,Tagline:a.p`
        font-size: 0.86rem;
        color: var(--color-heading);
        margin-bottom: 8px;
    `,PerkList:a.ul`
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
    `,AddonSection:a.section`
        display: flex;
        flex-direction: column;
        gap: 8px;
    `,AddonsGrid:a.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;

        @media (min-width: 640px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,AddonCard:a.div`
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
    `,AddonTitle:a.h3`
        font-size: 0.88rem;
        color: var(--color-heading);
        margin-bottom: 4px;
    `,AddonBody:a.div`
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
    `,FAQSection:a.section`
        margin-top: 32px;
        border-radius: 16px;
        padding: 14px 14px 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
    `,FAQList:a.div`
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    `,FAQItem:a.div`
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: var(--color-card);
        overflow: hidden;
    `,FAQQuestion:a.button`
        width: 100%;
        padding: 8px 10px;
        border: none;
        outline: none;
        background: ${({$expanded:i})=>i?"var(--accent-soft)":"transparent"};
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
    `,FAQAnswer:a.div`
        padding: 6px 10px 9px;
        font-size: 0.8rem;
        color: var(--color-text);
        border-top: 1px solid var(--color-border);
        background: var(--color-card);
    `},H="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",O=[{id:"private-offices",label:"Private Offices",tag:"Teams of 4–50",type:"managed-office",image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",summary:"Lockable, fully managed office suites with ergonomic furniture, fast Wi-Fi, and on-site support.",highlights:["Branded entry & signage options","Enterprise-grade Wi-Fi & wired connectivity","Daily housekeeping & utilities included"],features:["Ideal for growing teams who want plug-and-play workspaces.","Flexible contracts starting from 3 months.","Options for dedicated meeting room inside your suite."],sizeRange:"4–50 seats",suitableFor:"Startups, product teams, growing agencies",startingPrice:"₹18,000 / seat / month",billingCycle:"Monthly, quarterly, or annual",availability:"Available across premium Grade-A buildings.",sla:"99.9% uptime for connectivity & utilities."},{id:"coworking-desks",label:"Coworking & Hot Desks",tag:"Solo & Hybrid Workers",type:"coworking",image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",summary:"Flexible shared workspaces – choose a different desk every day and work alongside vibrant teams.",highlights:["Day passes and monthly memberships","Community events & networking","Barista-style coffee & breakout lounges"],features:["Perfect for freelancers, consultants, or hybrid employees.","Upgrade easily to a dedicated desk or private cabin.","Access to phone booths and focus zones."],sizeRange:"1–10 seats",suitableFor:"Freelancers, consultants, remote workers",startingPrice:"₹5,000 / person / month",billingCycle:"Daily, weekly, or monthly",availability:"Flexible passes across multiple BlueSky locations in your city.",sla:"Service desk support during operating hours."},{id:"meeting-rooms",label:"Meeting & Board Rooms",tag:"By the hour",type:"meeting-room",image:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",summary:"On-demand meeting rooms with large displays, conference hardware, and concierge support.",highlights:["HD video conferencing hardware","On-site support for AV setup","Tea/coffee service & catering options"],features:["Book rooms by the hour or full day.","Choose from huddle rooms, 8-seater or 16-seater boardrooms.","Perfect for client reviews, workshops, and interviews."],sizeRange:"2–16 seats",suitableFor:"Client meetings, workshops, interviews",startingPrice:"₹800 / hour",billingCycle:"On-demand booking",availability:"All meeting rooms are visible on your BlueSky booking dashboard.",sla:"Instant confirmation and on-ground assistance."},{id:"virtual-offices",label:"Virtual Offices",tag:"Business Presence",type:"virtual-office",image:"https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop",summary:"Use BlueSky as your registered business address, with mail handling and call support options.",highlights:["Prime business address for branding","Mail handling & notifications","Optional call answering add-ons"],features:["Ideal for remote-first teams and early-stage startups.","Upgrade into physical workspace when you're ready.","Use address on invoices, websites, and legal documents."],sizeRange:"Remote & distributed teams",suitableFor:"Startups, consultants, remote-only companies",startingPrice:"₹1,999 / month",billingCycle:"Monthly or annual",availability:"Available at BlueSky hubs in key business districts.",sla:"Same-day notification for incoming mail."},{id:"custom-enterprise",label:"Custom Enterprise Floors",tag:"Teams 50–500+",type:"enterprise",image:"https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1200&auto=format&fit=crop",summary:"Bespoke workspace solutions – entire floors, neighborhoods, or campuses planned around your culture.",highlights:["Designed with your brand and culture in mind","Seat planning, zoning & collaboration mapping","Dedicated BlueSky workspace success team"],features:["Best suited for fast-scaling and enterprise teams.","Longer-term, fully customized workspace programs.","Integrations with access control, SSO, and security policies."],sizeRange:"50–500+ seats",suitableFor:"Growth-stage, enterprise, and global teams",startingPrice:"Custom proposals on request",billingCycle:"Multi-year engagements",availability:"Projects delivered across tech parks and Grade-A campuses.",sla:"Dedicated account managers and on-site support."}],Q=[{id:"wifi",icon:L,label:"Enterprise-grade Wi-Fi & backups"},{id:"coffee",icon:W,label:"Craft coffee & beverage stations"},{id:"it-support",icon:q,label:"Managed IT & desk support"},{id:"monitors",icon:M,label:"Optional monitor & hardware rental"},{id:"access",icon:c,label:"24×7 smart access (location specific)"},{id:"community",icon:u,label:"Events, meetups & community perks"}],Y=[{id:"mail-handling",title:"Mailroom & Courier Handling",description:"We receive, log, and securely store your physical mail and courier deliveries.",bulletPoints:["Notifications on every delivery","Forwarding to your preferred address","Dedicated mailroom hours"]},{id:"it-desk",title:"IT & Device Desk",description:"From Wi-Fi troubleshooting to hardware advice, your team gets quick support.",bulletPoints:["Device onboarding and Wi-Fi setup","Secure guest networks","Best-effort hardware guidance"]},{id:"branding-pack",title:"Branding & Signage Pack",description:"Turn your workspace into a BlueSky x Your Brand environment.",bulletPoints:["Logo wall & reception branding","Wayfinding inside your suite","Occasional brand moments in common areas"]},{id:"events-support",title:"Events & Townhall Support",description:"Host launches, townhalls, or workshops in curated spaces inside BlueSky.",bulletPoints:["Venue setup & seating layouts","AV checks before your event","On-ground coordination"]}],z=[{id:"contracts",question:"How flexible are the contracts for BlueSky workspaces?",answer:"For coworking and dedicated desks, you can choose from day passes, weekly passes, or monthly memberships. Private offices typically start at 3-month commitments, while custom enterprise floors are planned over longer multi-year terms. Within those terms, we try to stay as flexible as possible when you need to add seats or upgrade plans."},{id:"visits",question:"Can I tour a workspace before deciding?",answer:"Absolutely. Share a shortlist of locations and your team size, and our workspace advisors will block a time with you. During the tour, you can see meeting rooms, breakout zones, phone booths, and the exact seats or office suites that might be reserved for you."},{id:"pricing",question:"What factors influence pricing for my team?",answer:"Pricing depends on the type of workspace (coworking vs private offices vs enterprise floors), the number of seats, the city and locality, and the add-on services you choose. Once you share your headcount and preferred locations, our team sends a clear, line-item proposal."},{id:"security",question:"How does BlueSky handle security and access?",answer:"We use a combination of smart access controls, visitor management, and CCTV where required. For managed and enterprise offices, we can work with your security or IT teams to align on policies, access levels, and compliance needs."},{id:"scale",question:"What happens when my team grows or shrinks?",answer:"BlueSky is designed for change. If you grow, we can unlock additional seats, extra cabins, or an adjacent floor. If you temporarily need fewer seats, our team can help you reconfigure or create a cost-optimized bridge plan until you scale again."}],$=[{id:"all",label:"All workspace types"},{id:"managed-office",label:"Managed offices"},{id:"coworking",label:"Coworking & hot desks"},{id:"meeting-room",label:"Meeting rooms"},{id:"virtual-office",label:"Virtual offices"},{id:"enterprise",label:"Enterprise floors"}],U=()=>{var v;const[i,h]=n.useState("all"),[p,f]=n.useState("cards"),[l,b]=n.useState(""),[m,C]=n.useState(((v=z[0])==null?void 0:v.id)||null),y=n.useCallback(o=>{o.currentTarget.src=H},[]),x=n.useMemo(()=>O.filter(o=>{const s=i==="all"||o.type===i,t=l.trim().toLowerCase();if(!t)return s;const A=[o.label,o.summary,o.tag,o.suitableFor,...o.highlights||[],...o.features||[]].join(" ").toLowerCase().includes(t);return s&&A}),[i,l]),F=o=>{h(o)},B=o=>{C(s=>s===o?null:o)},T=()=>{h("all"),b("")};return e.jsx(r.PageWrap,{children:e.jsxs(r.Inner,{children:[e.jsxs(r.HeaderRow,{children:[e.jsxs(r.TitleBlock,{children:[e.jsxs(r.Overline,{children:[e.jsx(w,{}),"BlueSky workspace catalogue"]}),e.jsx(r.PageTitle,{children:"Services designed around the way your team works."}),e.jsx(r.Subtitle,{children:"From solo creators to 500-seat enterprise teams – mix and match private cabins, coworking seats, meeting rooms, and virtual offices under a single workspace partner."}),e.jsxs(r.BadgeRow,{children:[e.jsxs(r.Badge,{children:[e.jsx(d,{}),"Flexible contracts & simple pricing"]}),e.jsxs(r.Badge,{children:[e.jsx(N,{}),"Prime business locations"]}),e.jsxs(r.Badge,{children:[e.jsx(P,{}),"Workspace success team included"]})]}),e.jsxs(r.Actions,{children:[e.jsxs(r.PrimaryBtn,{type:"button",children:[e.jsx("span",{className:"icon",children:e.jsx(j,{})}),e.jsx("span",{children:"Talk to a workspace advisor"}),e.jsx("span",{className:"tail",children:e.jsx(k,{})})]}),e.jsxs(r.GhostBtn,{type:"button",children:[e.jsx("span",{className:"icon",children:e.jsx(g,{})}),e.jsx("span",{children:"Download sample layout deck"})]})]})]}),e.jsxs(r.SideHighlightCard,{children:[e.jsxs(r.SideTag,{children:[e.jsx(c,{}),"Typically onboard in 7–21 days"]}),e.jsx(r.SideTitle,{children:"One workspace partner for all your formats."}),e.jsx(r.SideBody,{children:"Mix coworking, private cabins, and enterprise floors inside the same BlueSky location so your teams stay connected but have the right zones for focus, calls, and collaboration."}),e.jsxs(r.SideStatsRow,{children:[e.jsxs(r.SideStat,{children:[e.jsx("span",{className:"label",children:"Seat range"}),e.jsx("span",{className:"value",children:"1 – 500+ seats"})]}),e.jsxs(r.SideStat,{children:[e.jsx("span",{className:"label",children:"Formats"}),e.jsx("span",{className:"value",children:"Coworking, managed, enterprise"})]})]}),e.jsx(r.SideFootNote,{children:"Share your headcount, city & ideal move-in date and we'll assemble a starting pack of options for you."})]})]}),e.jsxs(r.Toolbar,{children:[e.jsxs(r.SearchBox,{children:[e.jsx(S,{}),e.jsx(r.SearchInput,{type:"text",placeholder:"Search by workspace type, use case, or keyword (e.g. 'hybrid team', 'client meetings')",value:l,onChange:o=>b(o.target.value)})]}),e.jsxs(r.ToolbarRight,{children:[e.jsx(r.FilterPills,{children:$.map(o=>e.jsxs(r.FilterChip,{type:"button",$active:o.id===i,onClick:()=>F(o.id),children:[e.jsx("span",{className:"icon",children:o.id==="all"?e.jsx(R,{}):e.jsx(d,{})}),e.jsx("span",{children:o.label})]},o.id))}),e.jsxs(r.ViewToggle,{children:[e.jsxs(r.ToggleButton,{type:"button",$active:p==="cards",onClick:()=>f("cards"),children:[e.jsx(w,{}),e.jsx("span",{children:"Card view"})]}),e.jsxs(r.ToggleButton,{type:"button",$active:p==="list",onClick:()=>f("list"),children:[e.jsx(I,{}),e.jsx("span",{children:"Compact view"})]})]}),e.jsx(r.ClearBtn,{type:"button",disabled:i==="all"&&l.trim()==="",onClick:T,children:"Clear filters"})]})]}),e.jsxs(r.MainLayout,{children:[e.jsxs(r.ServicesColumn,{children:[e.jsxs(r.SectionTitleRow,{children:[e.jsx(r.SectionTitle,{children:"Workspace formats"}),e.jsx(r.SectionSubtitle,{children:"Start with a format and we'll adapt it to your team size, culture, and ways of working."})]}),x.length===0?e.jsxs(r.EmptyState,{children:[e.jsx("div",{className:"icon",children:e.jsx(S,{})}),e.jsx("h3",{children:"No matching workspace formats yet"}),e.jsx("p",{children:"Try clearing filters or using a different search phrase. You can also share your requirements and we'll suggest a starting configuration."}),e.jsxs(r.PrimaryBtn,{type:"button",children:[e.jsx(j,{}),e.jsx("span",{children:"Share requirements with BlueSky"})]})]}):p==="cards"?e.jsx(r.CardsGrid,{children:x.map(o=>e.jsxs(r.Card,{children:[e.jsxs(r.CardImageWrap,{children:[e.jsx(r.CardImage,{src:o.image,alt:o.label,loading:"lazy",onError:y}),e.jsx(r.ImageTag,{children:o.tag})]}),e.jsxs(r.CardBody,{children:[e.jsxs(r.CardHeaderRow,{children:[e.jsxs(r.CardTitleWrap,{children:[e.jsx(r.CardTitle,{children:o.label}),e.jsx(r.CardSummary,{children:o.summary})]}),e.jsxs(r.PriceBlock,{children:[e.jsx("span",{className:"label",children:"Starting from"}),e.jsx("span",{className:"value",children:o.startingPrice}),e.jsx("span",{className:"hint",children:o.billingCycle})]})]}),e.jsxs(r.MetaStatsRow,{children:[e.jsxs(r.StatItem,{children:[e.jsx("span",{className:"icon",children:e.jsx(u,{})}),e.jsx("span",{className:"label",children:"Team size"}),e.jsx("span",{className:"value",children:o.sizeRange})]}),e.jsxs(r.StatItem,{children:[e.jsx("span",{className:"icon",children:e.jsx(g,{})}),e.jsx("span",{className:"label",children:"Best for"}),e.jsx("span",{className:"value",children:o.suitableFor})]}),e.jsxs(r.StatItem,{children:[e.jsx("span",{className:"icon",children:e.jsx(c,{})}),e.jsx("span",{className:"label",children:"Availability"}),e.jsx("span",{className:"value",children:o.availability})]})]}),e.jsx(r.HighlightsList,{children:o.highlights.map((s,t)=>e.jsxs("li",{children:[e.jsx(d,{}),e.jsx("span",{children:s})]},t))}),e.jsx(r.FeatureList,{children:o.features.map((s,t)=>e.jsx("li",{children:s},t))}),e.jsxs(r.CardFooterRow,{children:[e.jsx(r.CardFootNote,{children:o.sla}),e.jsxs(r.CardAction,{type:"button",children:[e.jsx("span",{children:"Add this format to my workspace plan"}),e.jsx(k,{})]})]})]})]},o.id))}):e.jsx(r.ListView,{children:x.map(o=>e.jsxs(r.ListRow,{children:[e.jsx(r.ListImageWrap,{children:e.jsx(r.ListImage,{src:o.image,alt:o.label,loading:"lazy",onError:y})}),e.jsxs(r.ListBody,{children:[e.jsxs(r.ListTitleRow,{children:[e.jsxs("div",{className:"text",children:[e.jsx("h3",{children:o.label}),e.jsx("p",{children:o.summary})]}),e.jsxs("div",{className:"meta",children:[e.jsx("span",{className:"pill",children:o.tag}),e.jsx("span",{className:"price",children:o.startingPrice})]})]}),e.jsxs(r.ListMetaRow,{children:[e.jsxs("span",{children:[e.jsx(u,{})," ",o.sizeRange]}),e.jsxs("span",{children:[e.jsx(g,{})," ",o.suitableFor]}),e.jsxs("span",{children:[e.jsx(c,{})," ",o.billingCycle]})]})]})]},o.id))})]}),e.jsxs(r.SideColumn,{children:[e.jsxs(r.SectionTitleRow,{children:[e.jsx(r.SectionTitle,{children:"Why teams choose BlueSky"}),e.jsx(r.SectionSubtitle,{children:"The space is just the start – the experience is what teams remember."})]}),e.jsxs(r.SideCard,{children:[e.jsx(r.Tagline,{children:"Everyday comforts, office-grade reliability."}),e.jsx(r.PerkList,{children:Q.map(o=>{const s=o.icon;return e.jsxs("li",{children:[e.jsx("span",{className:"icon",children:e.jsx(s,{})}),e.jsx("span",{className:"label",children:o.label})]},o.id)})})]}),e.jsxs(r.AddonSection,{children:[e.jsxs(r.SectionTitleRow,{children:[e.jsx(r.SectionTitle,{children:"Add-on programs"}),e.jsx(r.SectionSubtitle,{children:"Layer services on top of your plan so your team can stay focused on their actual work."})]}),e.jsx(r.AddonsGrid,{children:Y.map(o=>e.jsxs(r.AddonCard,{children:[e.jsx(r.AddonTitle,{children:o.title}),e.jsxs(r.AddonBody,{children:[e.jsx("p",{children:o.description}),e.jsx("ul",{children:o.bulletPoints.map((s,t)=>e.jsxs("li",{children:[e.jsx(d,{}),e.jsx("span",{children:s})]},t))})]})]},o.id))})]})]})]}),e.jsxs(r.FAQSection,{children:[e.jsxs(r.SectionTitleRow,{children:[e.jsx(r.SectionTitle,{children:"Questions, before we talk?"}),e.jsx(r.SectionSubtitle,{children:"A few quick answers to help you understand how working with BlueSky usually feels."})]}),e.jsx(r.FAQList,{children:z.map(o=>e.jsxs(r.FAQItem,{children:[e.jsxs(r.FAQQuestion,{type:"button",onClick:()=>B(o.id),$expanded:m===o.id,children:[e.jsxs("div",{className:"text",children:[e.jsx("span",{className:"q",children:"Q"}),e.jsx("span",{children:o.question})]}),e.jsx("span",{className:"icon",children:m===o.id?e.jsx(D,{}):e.jsx(E,{})})]}),m===o.id&&e.jsx(r.FAQAnswer,{children:o.answer})]},o.id))})]})]})})};export{U as default};
