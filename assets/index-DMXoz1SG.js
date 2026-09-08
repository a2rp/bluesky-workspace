import{g as r,r as i,j as e,F as m,f as x,h,o as g,d as u,l as f,a as b}from"./index-CgKltyxS.js";const a={PageWrap:r.main`
        padding: 90px 16px 40px;
        background: var(--color-bg);
        color: var(--color-text);

        @media (min-width: 960px) {
            padding: 96px 40px 56px;
        }
    `,Inner:r.div`
        max-width: 1180px;
        margin: 0 auto;
    `,HeaderSection:r.section`
        display: grid;
        grid-template-columns: minmax(0, 3fr);
        gap: 24px;
        margin-bottom: 28px;

        @media (min-width: 960px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2.2fr);
            gap: 30px;
        }
    `,HeaderText:r.div`
        display: flex;
        flex-direction: column;
        gap: 14px;
    `,Overline:r.div`
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
    `,PageTitle:r.h1`
        font-size: 1.6rem;
        line-height: 1.3;
        color: var(--color-heading);

        @media (min-width: 720px) {
            font-size: 2rem;
        }
    `,Subtitle:r.p`
        font-size: 0.9rem;
        max-width: 40rem;
        color: var(--color-text);
        opacity: 0.94;
    `,HeaderMetaCard:r.aside`
        border-radius: 16px;
        padding: 14px 14px 12px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border-strong);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,MetaRow:r.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 8px;

        @media (min-width: 640px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,MetaItem:r.div`
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
    `,InfoNote:r.p`
        font-size: 0.78rem;
        color: var(--color-text);
        opacity: 0.92;
        border-radius: 10px;
        padding: 6px 8px;
        background: var(--color-card);
        border: 1px dashed var(--color-border);
        margin: 0;
    `,Toolbar:r.section`
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 20px;

        @media (min-width: 720px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    `,FilterLabel:r.div`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 0.8rem;
        color: var(--color-text);

        svg {
            font-size: 0.96rem;
            color: var(--accent);
        }
    `,FilterPills:r.div`
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    `,FilterChip:r.button`
        padding: 5px 11px;
        border-radius: 999px;
        border: 1px solid
            ${({$active:t})=>t?"var(--accent-border)":"var(--color-border)"};
        background: ${({$active:t})=>t?"var(--accent-soft)":"transparent"};
        font-size: 0.8rem;
        color: ${({$active:t})=>t?"var(--color-heading)":"var(--color-text)"};
        cursor: pointer;
        transition: background-color 0.14s ease-out, border-color 0.14s ease-out,
            transform 0.1s ease-out;

        &:hover {
            transform: translateY(-1px);
            border-color: var(--accent-border);
            background: ${({$active:t})=>t?"var(--accent-soft)":"var(--color-card-soft)"};
        }

        &:active {
            transform: translateY(0);
        }
    `,Grid:r.section`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 18px;

        @media (min-width: 880px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,Card:r.article`
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
    `,ImageWrap:r.div`
        position: relative;
        max-height: 200px;
        overflow: hidden;
    `,Image:r.img.attrs({className:"project-image"})`
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.16s ease-out, filter 0.16s ease-out;
    `,ImageTag:r.span`
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
    `,CardBody:r.div`
        padding: 12px 12px 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,CardHeader:r.div`
        display: flex;
        flex-direction: column;
        gap: 8px;

        @media (min-width: 720px) {
            flex-direction: row;
            justify-content: space-between;
            gap: 12px;
        }
    `,NameBlock:r.div`
        max-width: 100%;
    `,ProjectName:r.h2`
        font-size: 0.98rem;
        color: var(--color-heading);
        margin: 0 0 4px;
    `,LocationRow:r.div`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.8rem;
        color: var(--color-text);

        svg {
            font-size: 0.9rem;
            color: var(--accent);
        }
    `,StatsBlock:r.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 6px;

        @media (min-width: 720px) {
            min-width: 190px;
        }
    `,Stat:r.div`
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
    `,Highlights:r.ul`
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
    `,ImpactBlock:r.div`
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
    `,CardFooter:r.div`
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 4px;
    `,PrimaryBtn:r.button`
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
    `,SecondaryText:r.p`
        font-size: 0.78rem;
        color: var(--color-text);
        margin: 0;
    `},v="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",w=[{id:"all",label:"All projects"},{id:"tech",label:"Tech & product teams"},{id:"creative",label:"Creative & studios"},{id:"enterprise",label:"Enterprise programs"}],s=[{id:"orbit-labs-hybrid-hub",name:"Orbit Labs – Hybrid Hub Floor",category:"tech",location:"Outer Ring Road, Bengaluru",teamSize:"110-seat product & data pod",duration:"8-week build + phased move-in",formats:"Private offices + hot desks + project rooms",outcomeTag:"Hybrid-friendly campus inside a single floor",image:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",highlights:["Zoned the floor into focus pods, collaboration lanes, and quiet libraries.","Dedicated war-room cluster for product launches with large-format whiteboards.","Created a ‘townhall spine’ that doubles as internal demo corridor."],impact:"Teams moved from 3 separate buildings into one hybrid-ready floor while keeping their own rituals – fewer context switches, easier cross-team syncs."},{id:"northwind-creative-studio",name:"Northwind Studio – Creative Wing",category:"creative",location:"Indiranagar, Bengaluru",teamSize:"38-seat design & content studio",duration:"5-week refresh & migration",formats:"Open studio + edit bays + client lounge",outcomeTag:"‘Lights-on’ creative floor with calm corners",image:"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&auto=format&fit=crop",highlights:["Flexible workbenches for storyboard and layout work.","Semi-dark edit bays with acoustic treatment for video teams.","Client lounge set up as a living-room style presentation zone."],impact:"Able to host client reviews, recording sessions, and internal sprints without booking external studios every week."},{id:"stellar-commerce-growth-suite",name:"Stellar Commerce – Growth Suite",category:"tech",location:"Hitech City, Hyderabad",teamSize:"65-seat growth & ops cluster",duration:"6-week design + 3-week handover",formats:"Neighbourhood-style pods + shared meeting alley",outcomeTag:"Always-on growth floor for fast experiments",image:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",highlights:["Seat-map designed around cross-functional pods – growth, data, CX.","Meeting alley with back-to-back huddle rooms for rapid reviews.","Acoustic phone booths for outbound sales and support calls."],impact:"Growth teams now sit within 30 seconds of each other – decision loops and rollout cadence improved noticeably."},{id:"aurora-finance-campus",name:"Aurora Finance – Managed Multi-floor Campus",category:"enterprise",location:"Central Business District, Mumbai",teamSize:"320-seat regional HQ",duration:"Staggered delivery over 16 weeks",formats:"Multi-floor managed office + executive wing",outcomeTag:"Regional headquarters without owning the building",image:"https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1200&auto=format&fit=crop",highlights:["Dedicated executive wing with controlled access and reception.","Shared training and assessment center across two floors.","Disaster-recovery capable IT backbone with vendor coordination."],impact:"Aurora consolidated three leased spaces into a single BlueSky campus, with one contract and one workspace partner."}],j=()=>{const[t,n]=i.useState("all"),l=i.useCallback(o=>{o.currentTarget.src=v},[]),d=i.useMemo(()=>t==="all"?s:s.filter(o=>o.category===t),[t]);return e.jsx(a.PageWrap,{children:e.jsxs(a.Inner,{children:[e.jsxs(a.HeaderSection,{children:[e.jsxs(a.HeaderText,{children:[e.jsxs(a.Overline,{children:[e.jsx(m,{}),"Selected BlueSky workspace projects"]}),e.jsx(a.PageTitle,{children:"Workspaces that were planned like products, not just floors."}),e.jsx(a.Subtitle,{children:"Every BlueSky workspace starts from three simple questions – who is working here, what do their days look like, and how should this floor feel when a team walks in on a busy Monday."})]}),e.jsxs(a.HeaderMetaCard,{children:[e.jsxs(a.MetaRow,{children:[e.jsxs(a.MetaItem,{children:[e.jsx("span",{className:"icon",children:e.jsx(x,{})}),e.jsx("span",{className:"label",children:"Engagement styles"}),e.jsx("span",{className:"value",children:"Managed offices & enterprise programs"})]}),e.jsxs(a.MetaItem,{children:[e.jsx("span",{className:"icon",children:e.jsx(h,{})}),e.jsx("span",{className:"label",children:"Teams we've designed for"}),e.jsx("span",{className:"value",children:"Product, design, support, sales & more"})]})]}),e.jsx(a.InfoNote,{children:"We've anonymised names and exact floor-plans here, but kept the real use-cases, constraints, and outcomes so you can imagine your own project."})]})]}),e.jsxs(a.Toolbar,{children:[e.jsxs(a.FilterLabel,{children:[e.jsx(g,{}),e.jsx("span",{children:"View projects by team profile"})]}),e.jsx(a.FilterPills,{children:w.map(o=>e.jsx(a.FilterChip,{type:"button",$active:o.id===t,onClick:()=>n(o.id),children:o.label},o.id))})]}),e.jsx(a.Grid,{children:d.map(o=>e.jsxs(a.Card,{children:[e.jsxs(a.ImageWrap,{children:[e.jsx(a.Image,{src:o.image,alt:o.name,onError:l,loading:"lazy"}),e.jsx(a.ImageTag,{children:o.outcomeTag})]}),e.jsxs(a.CardBody,{children:[e.jsxs(a.CardHeader,{children:[e.jsxs(a.NameBlock,{children:[e.jsx(a.ProjectName,{children:o.name}),e.jsxs(a.LocationRow,{children:[e.jsx(u,{}),e.jsx("span",{children:o.location})]})]}),e.jsxs(a.StatsBlock,{children:[e.jsxs(a.Stat,{children:[e.jsx("span",{className:"label",children:"Team size"}),e.jsx("span",{className:"value",children:o.teamSize})]}),e.jsxs(a.Stat,{children:[e.jsx("span",{className:"label",children:"Engagement window"}),e.jsx("span",{className:"value",children:o.duration})]}),e.jsxs(a.Stat,{children:[e.jsx("span",{className:"label",children:"Formats"}),e.jsx("span",{className:"value",children:o.formats})]})]})]}),e.jsx(a.Highlights,{children:o.highlights.map((c,p)=>e.jsxs("li",{children:[e.jsx(f,{}),e.jsx("span",{children:c})]},p))}),e.jsxs(a.ImpactBlock,{children:[e.jsx("h4",{children:"What changed for the team"}),e.jsx("p",{children:o.impact})]}),e.jsxs(a.CardFooter,{children:[e.jsxs(a.PrimaryBtn,{type:"button",children:[e.jsx(b,{}),e.jsx("span",{children:"Imagine a similar layout for my team"})]}),e.jsx(a.SecondaryText,{children:"Share your seat count, city, and ideal move-in date and we'll respond with 2–3 starting configurations inspired by these projects."})]})]})]},o.id))})]})})};export{j as default};
