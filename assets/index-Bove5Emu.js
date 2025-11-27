import{d as a,r as t,j as e,B as x,C as h,D as y,e as w,f as k,l as c,E as S,g as F,c as z,G as N}from"./index-DXdF140q.js";const r={PageWrap:a.main`
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
        margin-bottom: 28px;

        @media (min-width: 960px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2.2fr);
            gap: 32px;
        }
    `,HeaderText:a.div`
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
        font-size: 0.9rem;
        max-width: 40rem;
        color: var(--color-text);
        opacity: 0.94;
    `,HeaderSide:a.div`
        display: flex;
        align-items: stretch;
    `,InfoCard:a.div`
        border-radius: 16px;
        padding: 14px 14px 12px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border-strong);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    `,InfoRow:a.div`
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
    `,MainLayout:a.section`
        display: grid;
        grid-template-columns: minmax(0, 3fr);
        gap: 22px;
        align-items: flex-start;

        @media (min-width: 980px) {
            grid-template-columns: minmax(0, 3.2fr) minmax(0, 2.1fr);
            gap: 26px;
        }
    `,FormSection:a.div`
        display: flex;
        flex-direction: column;
        gap: 12px;
    `,SideSection:a.div`
        display: flex;
        flex-direction: column;
        gap: 14px;
    `,SuccessBanner:a.div`
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
    `,Form:a.form`
        border-radius: 16px;
        padding: 14px 14px 12px;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,FieldRow:a.div`
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 10px;

        @media (min-width: 720px) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    `,Field:a.div`
        display: flex;
        flex-direction: column;
        gap: 4px;
    `,Label:a.label`
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
    `,Input:a.input`
        border-radius: 8px;
        padding: 7px 9px;
        border: 1px solid
            ${({$error:o})=>o?"rgba(220, 38, 38, 0.9)":"var(--color-border)"};
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
    `,Select:a.select`
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
    `,Textarea:a.textarea`
        border-radius: 8px;
        padding: 7px 9px;
        border: 1px solid
            ${({$error:o})=>o?"rgba(220, 38, 38, 0.9)":"var(--color-border)"};
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
    `,ErrorText:a.span`
        font-size: 0.76rem;
        color: rgba(248, 113, 113, 0.94);
    `,FormFooter:a.div`
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 4px;

        @media (min-width: 720px) {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    `,SubmitBtn:a.button`
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
    `,PrivacyNote:a.p`
        font-size: 0.76rem;
        color: var(--color-text);
        margin: 0;
        max-width: 18rem;
    `,ImageCard:a.div`
        border-radius: 16px;
        overflow: hidden;
        background: var(--color-card-soft);
        border: 1px solid var(--color-border);
        box-shadow: var(--shadow-sm);
        display: flex;
        flex-direction: column;
    `,Image:a.img`
        width: 100%;
        height: 190px;
        object-fit: cover;
        display: block;
    `,ImageCaption:a.p`
        margin: 6px 9px 8px;
        font-size: 0.78rem;
        color: var(--color-text);
    `,QuickList:a.div`
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
    `,QuickTitle:a.h2`
        font-size: 0.9rem;
        color: var(--color-heading);
        margin: 0;
    `},I="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",C=()=>{const[o,u]=t.useState({name:"",email:"",company:"",teamSize:"",topic:"visit",message:""}),[i,m]=t.useState({}),[g,d]=t.useState(!1),f=t.useCallback(s=>{s.currentTarget.src=I},[]),l=s=>n=>{const j=n.target.value;u(p=>({...p,[s]:j})),m(p=>({...p,[s]:""})),d(!1)},b=()=>{const s={};return o.name.trim()||(s.name="Please share your name."),o.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email.trim())||(s.email="This doesn’t look like a valid email."):s.email="We use this to reply to you.",o.message.trim()||(s.message="A few lines about your requirement really help."),s},v=s=>{s.preventDefault();const n=b();if(Object.keys(n).length>0){m(n),d(!1);return}d(!0)};return e.jsx(r.PageWrap,{children:e.jsxs(r.Inner,{children:[e.jsxs(r.HeaderSection,{children:[e.jsxs(r.HeaderText,{children:[e.jsxs(r.Overline,{children:[e.jsx(x,{}),"Talk to the BlueSky team"]}),e.jsx(r.PageTitle,{children:"Share how your team works today, and what a better workspace would feel like."}),e.jsx(r.Subtitle,{children:"Whether you're exploring a single project room, a managed floor, or a phased multi-city plan, this form lands directly with our workspace specialists."})]}),e.jsx(r.HeaderSide,{children:e.jsxs(r.InfoCard,{children:[e.jsxs(r.InfoRow,{children:[e.jsx("div",{className:"icon",children:e.jsx(h,{})}),e.jsxs("div",{className:"text",children:[e.jsx("span",{className:"label",children:"Email us"}),e.jsx("span",{className:"value",children:"hello@blueskyworkspace.com"})]})]}),e.jsxs(r.InfoRow,{children:[e.jsx("div",{className:"icon",children:e.jsx(y,{})}),e.jsxs("div",{className:"text",children:[e.jsx("span",{className:"label",children:"Weekday workspace line"}),e.jsx("span",{className:"value",children:"+91 80 0000 0000  ·   9:30am – 7:00pm"})]})]}),e.jsxs(r.InfoRow,{children:[e.jsx("div",{className:"icon",children:e.jsx(w,{})}),e.jsxs("div",{className:"text",children:[e.jsx("span",{className:"label",children:"Showcase centre"}),e.jsx("span",{className:"value",children:"BlueSky Floor, Business District, Bengaluru"})]})]}),e.jsxs(r.InfoRow,{children:[e.jsx("div",{className:"icon",children:e.jsx(k,{})}),e.jsxs("div",{className:"text",children:[e.jsx("span",{className:"label",children:"Preferred visit slots"}),e.jsx("span",{className:"value",children:"Weekdays · 11:00am, 3:00pm, 5:30pm"})]})]})]})})]}),e.jsxs(r.MainLayout,{children:[e.jsxs(r.FormSection,{children:[g&&e.jsxs(r.SuccessBanner,{children:[e.jsx("span",{className:"icon",children:e.jsx(c,{})}),e.jsxs("div",{className:"text",children:[e.jsx("span",{className:"title",children:"Thanks – your note is with us now."}),e.jsx("span",{className:"body",children:"A BlueSky workspace specialist will typically reply within one business day with a short, non-pushy email and a couple of starting options."})]})]}),e.jsxs(r.Form,{onSubmit:v,noValidate:!0,children:[e.jsxs(r.FieldRow,{children:[e.jsxs(r.Field,{children:[e.jsxs(r.Label,{htmlFor:"name",children:[e.jsx("span",{className:"icon",children:e.jsx(S,{})}),e.jsx("span",{children:"Your name"})]}),e.jsx(r.Input,{id:"name",type:"text",value:o.name,onChange:l("name"),placeholder:"How should we address you?",$error:!!i.name}),i.name&&e.jsx(r.ErrorText,{children:i.name})]}),e.jsxs(r.Field,{children:[e.jsxs(r.Label,{htmlFor:"email",children:[e.jsx("span",{className:"icon",children:e.jsx(h,{})}),e.jsx("span",{children:"Work email"})]}),e.jsx(r.Input,{id:"email",type:"email",value:o.email,onChange:l("email"),placeholder:"you@company.com",$error:!!i.email}),i.email&&e.jsx(r.ErrorText,{children:i.email})]})]}),e.jsxs(r.FieldRow,{children:[e.jsxs(r.Field,{children:[e.jsxs(r.Label,{htmlFor:"company",children:[e.jsx("span",{className:"icon",children:e.jsx(F,{})}),e.jsx("span",{children:"Company / team name"})]}),e.jsx(r.Input,{id:"company",type:"text",value:o.company,onChange:l("company"),placeholder:"Optional, but helpful for context",$error:!!i.company})]}),e.jsxs(r.Field,{children:[e.jsxs(r.Label,{htmlFor:"teamSize",children:[e.jsx("span",{className:"icon",children:e.jsx(z,{})}),e.jsx("span",{children:"Approx. seats"})]}),e.jsx(r.Input,{id:"teamSize",type:"text",value:o.teamSize,onChange:l("teamSize"),placeholder:"e.g. 12, 35–40, 120",$error:!!i.teamSize})]})]}),e.jsxs(r.Field,{children:[e.jsxs(r.Label,{htmlFor:"topic",children:[e.jsx("span",{className:"icon",children:e.jsx(x,{})}),e.jsx("span",{children:"What would you like to explore?"})]}),e.jsxs(r.Select,{id:"topic",value:o.topic,onChange:l("topic"),children:[e.jsx("option",{value:"visit",children:"Plan a walkthrough or showcase visit"}),e.jsx("option",{value:"quick-call",children:"15–20 minute exploratory call"}),e.jsx("option",{value:"floor-plan",children:"Share floor-plans & current lease info"}),e.jsx("option",{value:"multi-city",children:"Multi-city or multi-floor program"}),e.jsx("option",{value:"other",children:"Something else (tell us below)"})]})]}),e.jsxs(r.Field,{children:[e.jsxs(r.Label,{htmlFor:"message",children:[e.jsx("span",{className:"icon",children:e.jsx(x,{})}),e.jsx("span",{children:"A few lines about your team and workspace needs"})]}),e.jsx(r.Textarea,{id:"message",value:o.message,onChange:l("message"),placeholder:"Example: We’re a 25-person product team working hybrid from Bengaluru and want a quieter, flexible floor with 3 meeting rooms and some focus pods.",rows:6,$error:!!i.message}),i.message&&e.jsx(r.ErrorText,{children:i.message})]}),e.jsxs(r.FormFooter,{children:[e.jsxs(r.SubmitBtn,{type:"submit",children:[e.jsx(N,{}),e.jsx("span",{children:"Send this to BlueSky"})]}),e.jsx(r.PrivacyNote,{children:"We don't add you to any mailing lists. Expect one concise reply, and you decide the next step."})]})]})]}),e.jsxs(r.SideSection,{children:[e.jsxs(r.ImageCard,{children:[e.jsx(r.Image,{src:"https://images.unsplash.com/photo-1529424301806-4be0bb154e3b?q=80&w=1200&auto=format&fit=crop",alt:"BlueSky workspace showcase",loading:"lazy",onError:f}),e.jsx(r.ImageCaption,{children:"A typical BlueSky floor: focus pods, quiet desks, collaboration corners – all fully managed so your team can simply plug in and work."})]}),e.jsxs(r.QuickList,{children:[e.jsx(r.QuickTitle,{children:"Before we talk, it helps if you know:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(c,{}),e.jsx("span",{children:"Approximate seat count and target move-in date."})]}),e.jsxs("li",{children:[e.jsx(c,{}),e.jsx("span",{children:"Your preferred micro-markets or business districts."})]}),e.jsxs("li",{children:[e.jsx(c,{}),e.jsx("span",{children:"Any non-negotiables – like secure zones, IT policies, or long client calls."})]})]})]})]})]})]})})};export{C as default};
