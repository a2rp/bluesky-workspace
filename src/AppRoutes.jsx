// src/AppRoutes.jsx
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Services = lazy(() => import("./pages/services"));
const Pricing = lazy(() => import("./pages/pricing"));
const Projects = lazy(() => import("./pages/projects"));
const Contact = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/notFound"));

export default function AppRoutes() {
    const location = useLocation();

    return (
        <Suspense
            fallback={<div className="routeLoader" role="status" aria-label="Loading page"><span /></div>}
        >
            <Routes location={location} key={location.pathname}>
                {/* Redirect root to /home */}
                <Route path="/" element={<Navigate to="/home" replace />} />

                {/* Main brochure pages */}
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />

                {/* Catch-all */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
}
