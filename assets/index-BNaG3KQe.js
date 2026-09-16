import{g as a,r as n,j as e,w as g,e as h,d as u,x as f,y,z as l,m as b,c as v,l as c,f as j,a as w,A as k}from"./index-uj-DcZM4.js";const r={PageWrap:a.main`
        padding: 90px 16px 40px;
        background: var(--color-bg);
        color: var(--color-text);

        @media (min-width: 960px) {
            padding: 96px 40px 56px;
        }
    `,Inner:a.div`
        max-width: 1180px;
        margin: 0 auto;
    `,HeaderSection:a.section`
        display: grid;
        grid-template-columns: minmax(0, 3fr);
        gap: 24px;
        margin-bottom: 32px;

        @media (min-width: 960px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2.3fr);
            gap: 32px;
        }
    `,HeaderLeft:a.div`
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
    `,MetaRow:a.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;
        margin-top: 6px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,MetaItem:a.div`
        border-radius: 12px;
        padding: 8px 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);

        .icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 26px;
            height: 26px;
            border-radius: 999px;
            background: var(--color-card);
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
            font-size: 0.86rem;
            color: var(--color-heading);
        }
    `,HeaderRight:a.div`
        display: flex;
        align-items: stretch;
    `,BillingToggleCard:a.div`
        border-radius: 16px;
        padding: 14px 14px 12px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border-strong);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    `,BillingLabelRow:a.div`
        display: flex;
        flex-direction: column;
        gap: 3px;

        .label {
            font-size: 0.84rem;
            color: var(--color-heading);
        }

        .hint {
            font-size: 0.78rem;
            color: var(--color-text);
            opacity: 0.92;
        }
    `,ToggleRow:a.div`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin-top: 4px;
        align-self: flex-start;
    `,ModeLabel:a.span`
        font-size: 0.8rem;
        color: ${({$active:i})=>i?"var(--color-heading)":"var(--color-text)"};
        opacity: ${({$active:i})=>i?1:.75};
    `,ToggleSwitch:a.button`
        position: relative;
        width: 70px;
        height: 28px;
        border-radius: 999px;
        border: 1px solid var(--color-border);
        background: var(--color-card);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        outline: none;
        padding: 0;
        overflow: hidden;
        transition: background-color 0.18s ease-out, border-color 0.18s ease-out;

        .icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.1rem;
            color: var(--color-text);
            opacity: 0.65;
        }

        .icon.left {
            left: 8px;
        }

        .icon.right {
            right: 8px;
        }

        &:hover {
            border-color: var(--accent-border);
        }
    `,ToggleThumb:a.span`
        width: 26px;
        height: 22px;
        border-radius: 999px;
        background: linear-gradient(
            145deg,
            var(--accent),
            var(--accent-border)
        );
        box-shadow: 0 8px 18px rgba(0, 0, 0, 0.5);
        transform: translateX(
            ${({$mode:i})=>i==="yearly"?"16px":"-16px"}
        );
        transition: transform 0.18s ease-out, box-shadow 0.18s ease-out;
    `,BillingNote:a.div`
        margin-top: 4px;
        border-radius: 10px;
        padding: 6px 8px;
        background: var(--color-card);
        border: 1px solid var(--color-border);
        font-size: 0.78rem;
        display: flex;
        gap: 6px;
        align-items: flex-start;
        color: var(--color-text);

        svg {
            flex-shrink: 0;
            margin-top: 2px;
            font-size: 0.9rem;
            color: var(--accent);
        }
    `,PlansSection:a.section`
        margin-bottom: 28px;
    `,SectionHeaderRow:a.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin-bottom: 10px;
    `,SectionTitle:a.h2`
        font-size: 1rem;
        color: var(--color-heading);
    `,SectionSubtitle:a.p`
        font-size: 0.82rem;
        color: var(--color-text);
        opacity: 0.92;
        max-width: 46rem;
    `,PlansGrid:a.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 16px;

        @media (min-width: 780px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,PlanCard:a.article`
        position: relative;
        border-radius: 16px;
        padding: 14px 14px 12px;
        background: var(--color-card-soft);
        border: 1px solid
            ${({$highlight:i})=>i?"var(--accent-border)":"var(--color-border)"};
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: transform 0.14s ease-out, box-shadow 0.14s ease-out,
            border-color 0.14s ease-out;

        &:hover {
            transform: translateY(-4px);
            box-shadow: var(--shadow-md);
            border-color: var(--accent-border);
        }
    `,RecommendedTag:a.span`
        position: absolute;
        top: 10px;
        right: 12px;
        padding: 3px 9px;
        border-radius: 999px;
        background: var(--accent-soft);
        border: 1px solid var(--accent-border);
        font-size: 0.74rem;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        color: var(--color-heading);

        svg {
            font-size: 0.9rem;
        }
    `,PlanHeader:a.div`
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: flex-start;
    `,PlanNameRow:a.div`
        display: flex;
        flex-direction: column;
        gap: 3px;
    `,PlanName:a.h3`
        font-size: 0.96rem;
        color: var(--color-heading);
        margin: 0;
    `,PlanTag:a.span`
        font-size: 0.78rem;
        padding: 3px 8px;
        border-radius: 999px;
        border: 1px solid var(--color-border);
        background: var(--color-card);
        color: var(--color-text);
    `,PlanSeatMeta:a.span`
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.8rem;
        color: var(--color-text);

        svg {
            font-size: 0.96rem;
            color: var(--accent);
        }
    `,PlanPriceBlock:a.div`
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: flex-end;

        .left {
            display: flex;
            flex-direction: column;
            gap: 1px;
        }

        .label {
            font-size: 0.74rem;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            color: var(--color-text);
            opacity: 0.8;
        }

        .value {
            font-size: 1.02rem;
            color: var(--color-heading);
        }

        .unit {
            font-size: 0.78rem;
            color: var(--color-text);
        }
    `,PlanBillingHint:a.span`
        font-size: 0.74rem;
        color: var(--color-text);
        opacity: 0.9;
        text-align: right;
        max-width: 11rem;
    `,PlanDescription:a.p`
        font-size: 0.8rem;
        color: var(--color-text);
        margin: 2px 0 0;
    `,PlanIdealFor:a.div`
        margin-top: 2px;

        .label {
            display: block;
            font-size: 0.74rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
            color: var(--color-text);
            opacity: 0.85;
        }

        .value {
            display: block;
            font-size: 0.78rem;
            color: var(--color-heading);
        }
    `,FeatureList:a.ul`
        list-style: none;
        padding: 0;
        margin: 4px 0 2px;
        display: flex;
        flex-direction: column;
        gap: 3px;

        li {
            display: inline-flex;
            align-items: flex-start;
            gap: 6px;
            font-size: 0.78rem;
            color: var(--color-text);

            svg {
                margin-top: 1px;
                font-size: 0.88rem;
                color: var(--accent);
            }

            span {
                flex: 1 1 auto;
            }
        }
    `,ExtrasList:a.ul`
        list-style: none;
        padding: 0;
        margin: 2px 0 4px;
        display: flex;
        flex-direction: column;
        gap: 2px;

        li {
            font-size: 0.76rem;
            color: var(--color-text);
            opacity: 0.95;
        }
    `,PlanActionRow:a.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 4px;
    `,PrimaryBtn:a.button`
        border-radius: 999px;
        padding: 6px 14px;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 0.8rem;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background: var(--accent);
        color: #020617;
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
    `,SecondaryLink:a.button`
        border-radius: 999px;
        padding: 6px 10px;
        border: 1px solid var(--color-border);
        background: transparent;
        font-size: 0.78rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: var(--color-text);
        transition: background-color 0.12s ease-out, border-color 0.12s ease-out;

        svg {
            font-size: 0.9rem;
        }

        &:hover {
            background: var(--color-card);
            border-color: var(--accent-border);
        }
    `,IncludedSection:a.section`
        margin-top: 6px;
        margin-bottom: 20px;
    `,IncludedGrid:a.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,IncludedItem:a.div`
        border-radius: 12px;
        padding: 8px 10px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        display: flex;
        gap: 8px;
        align-items: flex-start;

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
                color: var(--accent);
            }
        }

        p {
            margin: 0;
            font-size: 0.8rem;
            color: var(--color-text);
        }
    `,NoteStrip:a.div`
        border-radius: 12px;
        padding: 8px 10px;
        background: var(--color-card-soft);
        border: 1px dashed var(--color-border);
        display: flex;
        gap: 8px;
        align-items: flex-start;
        font-size: 0.8rem;
        color: var(--color-text);

        .icon {
            width: 24px;
            height: 24px;
            border-radius: 999px;
            background: var(--color-card);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-top: 1px;

            svg {
                font-size: 0.9rem;
                color: var(--accent);
            }
        }

        p {
            margin: 0;
        }
    `},S=[{id:"hot-desk",name:"Hot Desk",tag:"Best for solo & hybrid",highlight:!1,seats:"1–3 seats",priceMonthly:5e3,priceYearly:4800,unitLabel:"per person / month",description:"Pick a new desk every day in our shared coworking zones – perfect for flexible and hybrid schedules.",idealFor:"Freelancers, consultants, remote-first individual contributors.",features:["Access to shared coworking zones during business hours","High-speed Wi-Fi, power outlets, and phone booths","Access to BlueSky café lounges & focus corners","Member pricing on meeting rooms & day passes"],extras:["Guest passes available","Upgrade to dedicated desk anytime"]},{id:"dedicated-desk",name:"Dedicated Desk",tag:"Your own everyday spot",highlight:!0,seats:"1–8 seats",priceMonthly:9e3,priceYearly:8400,unitLabel:"per person / month",description:"Keep your own desk, screens, and personal setup – all inside our managed coworking floors.",idealFor:"Small pods, designers, engineers, creators who prefer a familiar setup.",features:["Fixed desk in a quiet, shared neighborhood","Lockable storage & monitor support","Priority access to meeting rooms & phone booths","Mail & courier handling at the front desk"],extras:["Add-on IT & device support desk","Discounted extra hot-desk passes"]},{id:"private-office",name:"Private Office",tag:"Plug-and-play team suites",highlight:!1,seats:"4–50 seats",priceMonthly:18e3,priceYearly:16800,unitLabel:"per seat / month",description:"Lockable, branded office suites for teams that need a quieter, fully managed environment.",idealFor:"Product teams, agencies, and startups that need privacy with on-demand meeting rooms.",features:["Fully furnished, lockable suites with branding options","Enterprise-grade Wi-Fi & wired connectivity","Daily housekeeping, utilities, and security included","Access to event spaces, townhall zones & lounges"],extras:["Optional in-suite meeting room & phone booths","Seats can be added as you grow"]},{id:"enterprise",name:"Enterprise Floor",tag:"Custom layouts & programs",highlight:!1,seats:"50–500+ seats",priceMonthly:null,priceYearly:null,unitLabel:"custom proposals",description:"Entire floors or multi-floor programs planned with your IT, HR, and workplace teams.",idealFor:"Growth-stage and enterprise teams that want BlueSky as their workspace partner.",features:["Custom layouts, zones, and collaboration patterns","Dedicated BlueSky workspace success & facilities teams","Integrations with your SSO, security & access policies","Multi-city rollout and migration planning support"],extras:["Townhall, launch & event support","Quarterly workspace health reviews"]}],P=["High-speed Wi-Fi and power-backup supported zones","Front-desk team for check-ins, guidance, and mail handling","Common kitchens, tea/coffee stations, and breakout areas","Access to community events, talks, and curated meetups"],F=()=>{const[i,d]=n.useState("monthly"),p=n.useMemo(()=>S.map(o=>{if(o.id==="enterprise")return{...o,displayPrice:"Talk to us"};const s=i==="monthly"?o.priceMonthly:o.priceYearly,t=i==="monthly"?"per month":"per month (effective)",m=`₹${s.toLocaleString("en-IN")}`;return{...o,displayPrice:m,displaySuffix:t}}),[i]),x=()=>{d(o=>o==="monthly"?"yearly":"monthly")};return e.jsx(r.PageWrap,{children:e.jsxs(r.Inner,{children:[e.jsxs(r.HeaderSection,{children:[e.jsxs(r.HeaderLeft,{children:[e.jsxs(r.Overline,{children:[e.jsx(g,{}),"BlueSky workspace pricing"]}),e.jsx(r.PageTitle,{children:"Transparent plans, designed around workspace outcomes."}),e.jsx(r.Subtitle,{children:"Start small or move your entire team – with BlueSky you only pay for the seats and services you actually use, while we handle the space, amenities, and day-to-day operations."}),e.jsxs(r.MetaRow,{children:[e.jsxs(r.MetaItem,{children:[e.jsx("span",{className:"icon",children:e.jsx(h,{})}),e.jsx("span",{className:"label",children:"Typical onboarding window"}),e.jsx("span",{className:"value",children:"7–21 days from sign-off"})]}),e.jsxs(r.MetaItem,{children:[e.jsx("span",{className:"icon",children:e.jsx(u,{})}),e.jsx("span",{className:"label",children:"Locations"}),e.jsx("span",{className:"value",children:"Prime business districts only"})]})]})]}),e.jsx(r.HeaderRight,{children:e.jsxs(r.BillingToggleCard,{children:[e.jsxs(r.BillingLabelRow,{children:[e.jsx("span",{className:"label",children:"Choose how you'd like to view prices"}),e.jsx("span",{className:"hint",children:"Yearly view includes long-term partnership benefits for select plans."})]}),e.jsxs(r.ToggleRow,{children:[e.jsx(r.ModeLabel,{$active:i==="monthly",children:"Monthly"}),e.jsxs(r.ToggleSwitch,{type:"button",onClick:x,"aria-label":"Toggle billing mode",children:[e.jsx("span",{className:"icon left",children:e.jsx(f,{})}),e.jsx(r.ToggleThumb,{$mode:i}),e.jsx("span",{className:"icon right",children:e.jsx(y,{})})]}),e.jsx(r.ModeLabel,{$active:i==="yearly",children:"Yearly"})]}),e.jsxs(r.BillingNote,{children:[e.jsx(l,{}),e.jsx("span",{children:"Yearly billing typically unlocks relationship-based benefits on select plans. Enterprise floors are always custom proposals."})]})]})})]}),e.jsxs(r.PlansSection,{children:[e.jsxs(r.SectionHeaderRow,{children:[e.jsx(r.SectionTitle,{children:"Workspace plans at a glance"}),e.jsx(r.SectionSubtitle,{children:"Pick a starting format for your team. You can always mix multiple plans across pods, departments, or cities as you grow."})]}),e.jsx(r.PlansGrid,{children:p.map(o=>e.jsxs(r.PlanCard,{$highlight:o.highlight,children:[o.highlight&&e.jsxs(r.RecommendedTag,{children:[e.jsx(b,{}),"Recommended for most teams"]}),e.jsxs(r.PlanHeader,{children:[e.jsxs(r.PlanNameRow,{children:[e.jsx(r.PlanName,{children:o.name}),e.jsx(r.PlanTag,{children:o.tag})]}),e.jsxs(r.PlanSeatMeta,{children:[e.jsx(v,{}),e.jsx("span",{children:o.seats})]})]}),e.jsxs(r.PlanPriceBlock,{children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"label",children:o.id==="enterprise"?"Engagement model":"Starting from"}),e.jsx("span",{className:"value",children:o.displayPrice}),e.jsx("span",{className:"unit",children:(o.id==="enterprise",o.unitLabel)})]}),o.id!=="enterprise"&&e.jsx(r.PlanBillingHint,{children:i==="yearly"?"Indicative effective monthly price.":"Extend to yearly to explore long-term benefits."})]}),e.jsx(r.PlanDescription,{children:o.description}),e.jsxs(r.PlanIdealFor,{children:[e.jsx("span",{className:"label",children:"Best for"}),e.jsx("span",{className:"value",children:o.idealFor})]}),e.jsx(r.FeatureList,{children:o.features.map((s,t)=>e.jsxs("li",{children:[e.jsx(c,{}),e.jsx("span",{children:s})]},t))}),e.jsx(r.ExtrasList,{children:o.extras.map((s,t)=>e.jsx("li",{children:s},t))}),e.jsxs(r.PlanActionRow,{children:[e.jsx(r.PrimaryBtn,{type:"button",children:o.id==="enterprise"?e.jsxs(e.Fragment,{children:[e.jsx(j,{}),e.jsx("span",{children:"Discuss a custom floor plan"})]}):e.jsxs(e.Fragment,{children:[e.jsx(w,{}),e.jsx("span",{children:"Explore this plan for my team"})]})}),e.jsxs(r.SecondaryLink,{type:"button",children:[e.jsx(k,{}),e.jsx("span",{children:"Share this plan by email"})]})]})]},o.id))})]}),e.jsxs(r.IncludedSection,{children:[e.jsxs(r.SectionHeaderRow,{children:[e.jsx(r.SectionTitle,{children:"Included across all BlueSky plans"}),e.jsx(r.SectionSubtitle,{children:"Every plan is built on the same BlueSky workspace foundation, so your team gets a consistent experience as you scale across pods, cities, or formats."})]}),e.jsx(r.IncludedGrid,{children:P.map((o,s)=>e.jsxs(r.IncludedItem,{children:[e.jsx("span",{className:"icon",children:e.jsx(c,{})}),e.jsx("p",{children:o})]},s))})]}),e.jsxs(r.NoteStrip,{children:[e.jsx("span",{className:"icon",children:e.jsx(l,{})}),e.jsx("p",{children:"All prices shown are indicative and may vary by city, micro-market, and building. Share your seat count and preferred locations and we'll respond with a clean, line-item proposal – no hidden charges."})]})]})})};export{F as default};
