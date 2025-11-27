// src/pages/contact/index.jsx
import React, { useCallback, useState } from "react";
import { Styled } from "./styled";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiClock,
    FiSend,
    FiCheckCircle,
    FiUser,
    FiBriefcase,
    FiUsers,
    FiMessageCircle,
} from "react-icons/fi";

const fallbackImg =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        teamSize: "",
        topic: "visit",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const onImgError = useCallback((e) => {
        e.currentTarget.src = fallbackImg;
    }, []);

    const handleChange = (field) => (e) => {
        const value = e.target.value;
        setForm((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => ({ ...prev, [field]: "" }));
        setSubmitted(false);
    };

    const validate = () => {
        const nextErrors = {};

        if (!form.name.trim()) nextErrors.name = "Please share your name.";
        if (!form.email.trim()) {
            nextErrors.email = "We use this to reply to you.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            nextErrors.email = "This doesn’t look like a valid email.";
        }

        if (!form.message.trim()) {
            nextErrors.message =
                "A few lines about your requirement really help.";
        }

        return nextErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nextErrors = validate();

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
            setSubmitted(false);
            return;
        }

        // No backend yet – just show a success state
        setSubmitted(true);
    };

    return (
        <Styled.PageWrap>
            <Styled.Inner>
                {/* Hero */}
                <Styled.HeaderSection>
                    <Styled.HeaderText>
                        <Styled.Overline>
                            <FiMessageCircle />
                            Talk to the BlueSky team
                        </Styled.Overline>
                        <Styled.PageTitle>
                            Share how your team works today, and what a better
                            workspace would feel like.
                        </Styled.PageTitle>
                        <Styled.Subtitle>
                            Whether you&apos;re exploring a single project
                            room, a managed floor, or a phased multi-city plan,
                            this form lands directly with our workspace
                            specialists.
                        </Styled.Subtitle>
                    </Styled.HeaderText>

                    <Styled.HeaderSide>
                        <Styled.InfoCard>
                            <Styled.InfoRow>
                                <div className="icon">
                                    <FiMail />
                                </div>
                                <div className="text">
                                    <span className="label">Email us</span>
                                    <span className="value">
                                        hello@blueskyworkspace.com
                                    </span>
                                </div>
                            </Styled.InfoRow>

                            <Styled.InfoRow>
                                <div className="icon">
                                    <FiPhone />
                                </div>
                                <div className="text">
                                    <span className="label">
                                        Weekday workspace line
                                    </span>
                                    <span className="value">
                                        +91 80 0000 0000 &nbsp;· &nbsp;
                                        9:30am – 7:00pm
                                    </span>
                                </div>
                            </Styled.InfoRow>

                            <Styled.InfoRow>
                                <div className="icon">
                                    <FiMapPin />
                                </div>
                                <div className="text">
                                    <span className="label">
                                        Showcase centre
                                    </span>
                                    <span className="value">
                                        BlueSky Floor, Business District,
                                        Bengaluru
                                    </span>
                                </div>
                            </Styled.InfoRow>

                            <Styled.InfoRow>
                                <div className="icon">
                                    <FiClock />
                                </div>
                                <div className="text">
                                    <span className="label">
                                        Preferred visit slots
                                    </span>
                                    <span className="value">
                                        Weekdays · 11:00am, 3:00pm, 5:30pm
                                    </span>
                                </div>
                            </Styled.InfoRow>
                        </Styled.InfoCard>
                    </Styled.HeaderSide>
                </Styled.HeaderSection>

                {/* Main layout: form + image/side note */}
                <Styled.MainLayout>
                    <Styled.FormSection>
                        {submitted && (
                            <Styled.SuccessBanner>
                                <span className="icon">
                                    <FiCheckCircle />
                                </span>
                                <div className="text">
                                    <span className="title">
                                        Thanks – your note is with us now.
                                    </span>
                                    <span className="body">
                                        A BlueSky workspace specialist will
                                        typically reply within one business day
                                        with a short, non-pushy email and a
                                        couple of starting options.
                                    </span>
                                </div>
                            </Styled.SuccessBanner>
                        )}

                        <Styled.Form onSubmit={handleSubmit} noValidate>
                            <Styled.FieldRow>
                                <Styled.Field>
                                    <Styled.Label htmlFor="name">
                                        <span className="icon">
                                            <FiUser />
                                        </span>
                                        <span>Your name</span>
                                    </Styled.Label>
                                    <Styled.Input
                                        id="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange("name")}
                                        placeholder="How should we address you?"
                                        $error={Boolean(errors.name)}
                                    />
                                    {errors.name && (
                                        <Styled.ErrorText>
                                            {errors.name}
                                        </Styled.ErrorText>
                                    )}
                                </Styled.Field>

                                <Styled.Field>
                                    <Styled.Label htmlFor="email">
                                        <span className="icon">
                                            <FiMail />
                                        </span>
                                        <span>Work email</span>
                                    </Styled.Label>
                                    <Styled.Input
                                        id="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange("email")}
                                        placeholder="you@company.com"
                                        $error={Boolean(errors.email)}
                                    />
                                    {errors.email && (
                                        <Styled.ErrorText>
                                            {errors.email}
                                        </Styled.ErrorText>
                                    )}
                                </Styled.Field>
                            </Styled.FieldRow>

                            <Styled.FieldRow>
                                <Styled.Field>
                                    <Styled.Label htmlFor="company">
                                        <span className="icon">
                                            <FiBriefcase />
                                        </span>
                                        <span>Company / team name</span>
                                    </Styled.Label>
                                    <Styled.Input
                                        id="company"
                                        type="text"
                                        value={form.company}
                                        onChange={handleChange("company")}
                                        placeholder="Optional, but helpful for context"
                                        $error={Boolean(errors.company)}
                                    />
                                </Styled.Field>

                                <Styled.Field>
                                    <Styled.Label htmlFor="teamSize">
                                        <span className="icon">
                                            <FiUsers />
                                        </span>
                                        <span>Approx. seats</span>
                                    </Styled.Label>
                                    <Styled.Input
                                        id="teamSize"
                                        type="text"
                                        value={form.teamSize}
                                        onChange={handleChange("teamSize")}
                                        placeholder="e.g. 12, 35–40, 120"
                                        $error={Boolean(errors.teamSize)}
                                    />
                                </Styled.Field>
                            </Styled.FieldRow>

                            <Styled.Field>
                                <Styled.Label htmlFor="topic">
                                    <span className="icon">
                                        <FiMessageCircle />
                                    </span>
                                    <span>What would you like to explore?</span>
                                </Styled.Label>
                                <Styled.Select
                                    id="topic"
                                    value={form.topic}
                                    onChange={handleChange("topic")}
                                >
                                    <option value="visit">
                                        Plan a walkthrough or showcase visit
                                    </option>
                                    <option value="quick-call">
                                        15–20 minute exploratory call
                                    </option>
                                    <option value="floor-plan">
                                        Share floor-plans & current lease info
                                    </option>
                                    <option value="multi-city">
                                        Multi-city or multi-floor program
                                    </option>
                                    <option value="other">
                                        Something else (tell us below)
                                    </option>
                                </Styled.Select>
                            </Styled.Field>

                            <Styled.Field>
                                <Styled.Label htmlFor="message">
                                    <span className="icon">
                                        <FiMessageCircle />
                                    </span>
                                    <span>
                                        A few lines about your team and
                                        workspace needs
                                    </span>
                                </Styled.Label>
                                <Styled.Textarea
                                    id="message"
                                    value={form.message}
                                    onChange={handleChange("message")}
                                    placeholder="Example: We’re a 25-person product team working hybrid from Bengaluru and want a quieter, flexible floor with 3 meeting rooms and some focus pods."
                                    rows={6}
                                    $error={Boolean(errors.message)}
                                />
                                {errors.message && (
                                    <Styled.ErrorText>
                                        {errors.message}
                                    </Styled.ErrorText>
                                )}
                            </Styled.Field>

                            <Styled.FormFooter>
                                <Styled.SubmitBtn type="submit">
                                    <FiSend />
                                    <span>Send this to BlueSky</span>
                                </Styled.SubmitBtn>
                                <Styled.PrivacyNote>
                                    We don&apos;t add you to any mailing lists.
                                    Expect one concise reply, and you decide the
                                    next step.
                                </Styled.PrivacyNote>
                            </Styled.FormFooter>
                        </Styled.Form>
                    </Styled.FormSection>

                    <Styled.SideSection>
                        <Styled.ImageCard>
                            <Styled.Image
                                src="https://images.unsplash.com/photo-1529424301806-4be0bb154e3b?q=80&w=1200&auto=format&fit=crop"
                                alt="BlueSky workspace showcase"
                                loading="lazy"
                                onError={onImgError}
                            />
                            <Styled.ImageCaption>
                                A typical BlueSky floor: focus pods, quiet
                                desks, collaboration corners – all fully
                                managed so your team can simply plug in and
                                work.
                            </Styled.ImageCaption>
                        </Styled.ImageCard>

                        <Styled.QuickList>
                            <Styled.QuickTitle>
                                Before we talk, it helps if you know:
                            </Styled.QuickTitle>
                            <ul>
                                <li>
                                    <FiCheckCircle />
                                    <span>
                                        Approximate seat count and target
                                        move-in date.
                                    </span>
                                </li>
                                <li>
                                    <FiCheckCircle />
                                    <span>
                                        Your preferred micro-markets or
                                        business districts.
                                    </span>
                                </li>
                                <li>
                                    <FiCheckCircle />
                                    <span>
                                        Any non-negotiables &ndash; like secure
                                        zones, IT policies, or long client
                                        calls.
                                    </span>
                                </li>
                            </ul>
                        </Styled.QuickList>
                    </Styled.SideSection>
                </Styled.MainLayout>
            </Styled.Inner>
        </Styled.PageWrap>
    );
};

export default Contact;
