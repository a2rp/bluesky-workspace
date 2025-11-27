import{d as o,r as l,j as e,F as d,N as a,a as i,b as c,c as p,e as x,f as m,g as h,h as g,i as u,k as f,l as s}from"./index-DXdF140q.js";const r={PageWrap:o.main`
        padding: 90px 16px 40px;
        background: var(--color-bg);
        color: var(--color-text);

        @media (min-width: 960px) {
            padding: 96px 40px 56px;
        }
    `,Inner:o.div`
        max-width: 1180px;
        margin: 0 auto;
    `,HeroSection:o.section`
        display: grid;
        grid-template-columns: minmax(0, 3fr);
        gap: 24px;
        margin-bottom: 28px;

        @media (min-width: 980px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2.4fr);
            gap: 32px;
        }
    `,HeroText:o.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,Overline:o.div`
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
    `,HeroTitle:o.h1`
        font-size: 1.7rem;
        line-height: 1.25;
        color: var(--color-heading);

        @media (min-width: 720px) {
            font-size: 2.1rem;
        }
    `,HeroSubtitle:o.p`
        font-size: 0.92rem;
        max-width: 40rem;
        color: var(--color-text);
        opacity: 0.95;
    `,HeroActions:o.div`
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        a {
            text-decoration: none;
        }
    `,PrimaryBtn:o.button`
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
    `,SecondaryBtn:o.button`
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
    `,HeroMetaRow:o.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;
        margin-top: 8px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    `,MetaItem:o.div`
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
    `,HeroVisual:o.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,HeroImageWrap:o.div`
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
    `,HeroBadge:o.div`
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
    `,HeroMiniCard:o.div`
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
    `,TagsRow:o.div`
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
    `,SectionHeaderRow:o.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: 10px;
    `,SectionTitle:o.h2`
        font-size: 1rem;
        color: var(--color-heading);
    `,SectionSubtitle:o.p`
        font-size: 0.82rem;
        color: var(--color-text);
        opacity: 0.92;
        max-width: 46rem;
    `,HighlightsSection:o.section`
        margin-bottom: 26px;
    `,HighlightsGrid:o.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 14px;

        @media (min-width: 880px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    `,HighlightCard:o.article`
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
    `,FormatsSection:o.section`
        margin-bottom: 26px;
    `,FormatsGrid:o.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 14px;

        @media (min-width: 880px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    `,FormatCard:o.article`
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
    `,ChipLink:o.button`
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
    `,StepsSection:o.section`
        margin-bottom: 10px;
    `,StepsRow:o.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 12px;
        margin-top: 6px;

        @media (min-width: 880px) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    `,StepCard:o.article`
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
    `,StepsFooter:o.div`
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
    `,StepCTA:o.button`
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
    `},b="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",v=()=>{const t=l.useCallback(n=>{n.currentTarget.src=b},[]);return e.jsx(r.PageWrap,{children:e.jsxs(r.Inner,{children:[e.jsxs(r.HeroSection,{children:[e.jsxs(r.HeroText,{children:[e.jsxs(r.Overline,{children:[e.jsx(d,{}),"Modern workspaces, planned like products."]}),e.jsx(r.HeroTitle,{children:"Managed workspaces for teams that have outgrown generic offices."}),e.jsx(r.HeroSubtitle,{children:"BlueSky designs and runs calm, modern workspaces for growing teams – from a handful of dedicated desks to multi-floor managed offices. Your team brings the work; we shape the floor around it."}),e.jsxs(r.HeroActions,{children:[e.jsx(a,{to:"/services",children:e.jsxs(r.PrimaryBtn,{type:"button",children:[e.jsx(i,{}),e.jsx("span",{children:"Explore workspace formats"})]})}),e.jsx(a,{to:"/contact",children:e.jsxs(r.SecondaryBtn,{type:"button",children:[e.jsx(c,{}),e.jsx("span",{children:"Talk to a workspace specialist"})]})})]}),e.jsxs(r.HeroMetaRow,{children:[e.jsxs(r.MetaItem,{children:[e.jsx("span",{className:"icon",children:e.jsx(p,{})}),e.jsx("span",{className:"label",children:"Comfortably supports"}),e.jsx("span",{className:"value",children:"10–500+ seat teams with layered formats"})]}),e.jsxs(r.MetaItem,{children:[e.jsx("span",{className:"icon",children:e.jsx(x,{})}),e.jsx("span",{className:"label",children:"Planned for"}),e.jsx("span",{className:"value",children:"Prime business districts, not just any building"})]}),e.jsxs(r.MetaItem,{children:[e.jsx("span",{className:"icon",children:e.jsx(m,{})}),e.jsx("span",{className:"label",children:"Typical go-live window"}),e.jsx("span",{className:"value",children:"6–12 weeks from aligned brief"})]})]})]}),e.jsxs(r.HeroVisual,{children:[e.jsxs(r.HeroImageWrap,{children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",alt:"BlueSky managed workspace",loading:"lazy",onError:t,className:"hero-image"}),e.jsxs(r.HeroBadge,{children:[e.jsx("span",{className:"dot"}),e.jsxs("div",{className:"text",children:[e.jsx("span",{className:"label",children:"Live BlueSky floor"}),e.jsx("span",{className:"value",children:"Hybrid pods · focus corners · calm meeting alley"})]})]})]}),e.jsxs(r.HeroMiniCard,{children:[e.jsxs("div",{className:"header",children:[e.jsx("span",{className:"icon",children:e.jsx(h,{})}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"How teams use BlueSky"}),e.jsx("span",{className:"value",children:"Managed office instead of another generic lease."})]})]}),e.jsxs(r.TagsRow,{children:[e.jsx("span",{className:"tag",children:"Hybrid product floors"}),e.jsx("span",{className:"tag",children:"Creative studios"}),e.jsx("span",{className:"tag",children:"Regional HQ wings"})]})]})]})]}),e.jsxs(r.HighlightsSection,{children:[e.jsxs(r.SectionHeaderRow,{children:[e.jsx(r.SectionTitle,{children:"Why teams choose BlueSky over a regular office."}),e.jsx(r.SectionSubtitle,{children:"Managed office doesn't just mean someone else pays the electricity bill. We think deeply about how your team works, then design and run a floor that actually supports that rhythm."})]}),e.jsxs(r.HighlightsGrid,{children:[e.jsxs(r.HighlightCard,{children:[e.jsx("div",{className:"icon",children:e.jsx(g,{})}),e.jsx("h3",{children:"Planned for your actual workday"}),e.jsx("p",{children:"We study how your team spends a week – deep work, calls, rituals – and zone the floor around those patterns, not just rows of desks."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Focus pods, call corners, quiet libraries"}),e.jsx("li",{children:"Walkable distance between cross-functional pods"}),e.jsx("li",{children:"Meeting rooms sized for real usage, not guesswork"})]})]}),e.jsxs(r.HighlightCard,{children:[e.jsx("div",{className:"icon",children:e.jsx(u,{})}),e.jsx("h3",{children:"Multiple formats under one roof"}),e.jsx("p",{children:"Hot desks, dedicated desks, project rooms, private offices and enterprise floors – mixed in one managed building if you need it."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Start with a pod, scale into a suite"}),e.jsx("li",{children:"Mix formats across teams and cities"}),e.jsx("li",{children:"Upgrade without shifting to a new landlord"})]})]}),e.jsxs(r.HighlightCard,{children:[e.jsx("div",{className:"icon",children:e.jsx(f,{})}),e.jsx("h3",{children:"One workspace partner as you grow"}),e.jsx("p",{children:"Instead of renegotiating leases and juggling vendors, you work with one BlueSky team that knows your culture and roadmap."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Single contract, clear workspace outcomes"}),e.jsx("li",{children:"Multi-city and multi-floor programs"}),e.jsx("li",{children:"Quarterly workspace health check-ins"})]})]})]})]}),e.jsxs(r.FormatsSection,{children:[e.jsxs(r.SectionHeaderRow,{children:[e.jsx(r.SectionTitle,{children:"Pick a starting format today, evolve as your team does."}),e.jsx(r.SectionSubtitle,{children:`You don't have to get the "forever floor" right on day one. Most BlueSky clients move between formats as their teams and products evolve.`})]}),e.jsxs(r.FormatsGrid,{children:[e.jsxs(r.FormatCard,{children:[e.jsxs("div",{className:"top",children:[e.jsx("span",{className:"label",children:"For early teams"}),e.jsx("h3",{children:"Hot desks & dedicated pods"})]}),e.jsx("p",{children:"Start with flexible seats and a small cluster of dedicated desks in a calm shared neighborhood."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Good for 3–15 person teams"}),e.jsx("li",{children:"Hybrid-friendly, pay only for what you use"}),e.jsx("li",{children:"Priority access to meeting rooms"})]}),e.jsx(a,{to:"/services",children:e.jsxs(r.ChipLink,{type:"button",children:[e.jsx(s,{}),e.jsx("span",{children:"See all workspace formats"})]})})]}),e.jsxs(r.FormatCard,{children:[e.jsxs("div",{className:"top",children:[e.jsx("span",{className:"label",children:"Growing pods"}),e.jsx("h3",{children:"Private offices & team suites"})]}),e.jsx("p",{children:"For teams that want their own lockable space but still like being part of a larger managed workspace community."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Clean, branded suites with focus rooms"}),e.jsx("li",{children:"Fewer vendor calls; everything is managed"}),e.jsx("li",{children:"Scale seats without switching buildings"})]}),e.jsx(a,{to:"/pricing",children:e.jsxs(r.ChipLink,{type:"button",children:[e.jsx(s,{}),e.jsx("span",{children:"Browse pricing examples"})]})})]}),e.jsxs(r.FormatCard,{children:[e.jsxs("div",{className:"top",children:[e.jsx("span",{className:"label",children:"Established teams"}),e.jsx("h3",{children:"Enterprise floors & programs"})]}),e.jsx("p",{children:"Entire floors or multi-floor programs designed with your IT, HR, and workplace teams from day one."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Custom layouts, security and IT policies"}),e.jsx("li",{children:"Townhall zones and training clusters"}),e.jsx("li",{children:"One partner for design, fit-out and run"})]}),e.jsx(a,{to:"/projects",children:e.jsxs(r.ChipLink,{type:"button",children:[e.jsx(s,{}),e.jsx("span",{children:"See past workspace stories"})]})})]})]})]}),e.jsxs(r.StepsSection,{children:[e.jsxs(r.SectionHeaderRow,{children:[e.jsx(r.SectionTitle,{children:"A simple, calm way to go from idea to live floor."}),e.jsx(r.SectionSubtitle,{children:"No buzzwords, no complicated funnels – just a structured conversation that ends with the right workspace for your team."})]}),e.jsxs(r.StepsRow,{children:[e.jsxs(r.StepCard,{children:[e.jsx("div",{className:"badge",children:"Step 1"}),e.jsx("h3",{children:"Share how your team works"}),e.jsx("p",{children:"You tell us about your workday, team structure, seat count, and what isn't working in your current space."})]}),e.jsxs(r.StepCard,{children:[e.jsx("div",{className:"badge",children:"Step 2"}),e.jsx("h3",{children:"Walk through sample floors"}),e.jsx("p",{children:"We walk you through real BlueSky floors and propose 2–3 starting configurations with clear seat-wise pricing."})]}),e.jsxs(r.StepCard,{children:[e.jsx("div",{className:"badge",children:"Step 3"}),e.jsx("h3",{children:"We shape, you plug in"}),e.jsx("p",{children:"BlueSky handles fit-out, amenities, and day-to-day operations while your team moves in and gets to work."})]})]}),e.jsxs(r.StepsFooter,{children:[e.jsx(a,{to:"/contact",children:e.jsxs(r.StepCTA,{type:"button",children:[e.jsx(i,{}),e.jsx("span",{children:"Start with a short, non-pushy conversation"})]})}),e.jsx("span",{className:"hint",children:"You won't be added to mailing lists or sales-heavy sequences."})]})]})]})})};export{v as default};
