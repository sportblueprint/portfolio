---
title: Building the Suricata Design System
description: Scaling quality, accessibility, and efficiency at comparethemarket.com
role: UX Engineering & UI Systems
order: 1
date: 2026-06-16
---
# Building the Suricata Design System
Scaling Quality, Accessibility, and Efficiency at comparethemarket.com

## Overview &amp; Metadata
* **Role:** Lead Product Designer / Core Design System Designer
* **Organization:** comparethemarket.com (CtM)
* **Scope:** Web, Mobile Apps, and Customer Experience Management (CXM)
* **Tools &amp; Foundations:** Figma, Semantic HTML, Design Tokens, In-House Documentation

## 1. Executive Summary
A design system is fundamentally a set of standards designed to manage design at scale—reducing redundant effort while establishing a unified language and visual consistency across all customer touchpoints.

At comparethemarket.com, the **Suricata Design System** was conceived as an essential company-wide initiative to:
* **Deliver quality and consistency** across distinct insurance, financial products, and business pillars.
* **Increase organizational delivery efficiency** across squads.
* **Establish a unified language** between cross-functional teams (Design, Engineering, Product, and Research).
* **Serve as an educational onboarding guide** and reference tool for new team members.
* **Provide an authoritative single source of truth** for designers, developers, and stakeholders.

## 2. The Legacy Challenge &amp; Fragmented Systems
Prior to establishing Suricata, comparethemarket.com faced critical structural, visual, and architectural debt accumulated over a decade.

### Legacy Agency Architecture
The public-facing website had historically been built by an external agency. Core high-traffic conversion flows—including the flagship car insurance journey—had remained fundamentally unchanged for over ten years.

### The "DS-C" Disconnect
An initial internal attempt at creating a design system, dubbed **DS-C**, was deployed within the Home Insurance question set. However, DS-C was narrowly built to service web question sets using a specific JavaScript library. It lacked any broader architectural vision for site-wide, multi-platform adoption, leading to severe fragmentation:
* **Mismatched Visual Elements:** Basic UI controls diverged radically between squads. Action buttons lacked visual hierarchy, exhibiting inconsistent gradients, border radii, padding, and colors across primary tasks (e.g., *Find vehicle*, *Help me find my vehicle*, *Next*, *Back*, *View quotes*, *Cinema details*, *Showtimes*).
* **Inconsistent Form Patterns:** Question sets varied wildly in how they collected user information. Different product squads used contradictory patterns for identical inputs—such as customer names and titles—varying layout density, tooltips, and page chunking.
* **Confusing Form Affordances:** Form components routinely mimicked each other, resulting in a disorienting user experience that forced designers to continually invent bespoke patterns from scratch.

## 3. The Accessibility &amp; Usability Audit
To establish an objective baseline, we conducted comprehensive accessibility audits using evaluation tools like the **ARC Toolkit**. The audit uncovered deep structural and compliance failures:

* **Summary Metrics:** 16 Errors, 41 Alerts, and 0 Best Practices met.
* **Color Contrast Failures:** 1 error for insufficient large text contrast, 2 errors for normal text contrast, and 7 alerts where contrast against background imagery could not be determined.
* **Semantic &amp; Form Violations:** 9 duplicate form labels, inputs lacking accessible names, multiple-label conflicts, and missing `<legend>` tags within `<fieldset>` containers.
* **Markup &amp; ARIA Defects:** Duplicate element IDs, missing input IDs, absence of explicit image roles, and unassociated label elements.

These systemic defects degraded the browsing experience for both able-bodied visitors and assistive-technology users alike.

## 4. Architectural Strategy &amp; Collaborative Process

### Back to Basics
Rather than creating fragile, overly complex UI widgets, we stripped the interface back to fundamentals. We anchored our core patterns in battle-tested, semantic HTML form controls, ensuring native browser accessibility, keyboard navigability, and device responsiveness by default.

### Taking Back Control of Documentation
Our component documentation had previously been split across third-party tools like **zeroheight** and **Storybook**. Learning from established global design systems (such as **GOV.UK**, **Material Design**, and **Nord**), we decided to engineer an in-house documentation platform that was pure Suricata:
* **Cost Efficiency:** Eliminated recurring third-party SaaS subscription fees.
* **Full Governance:** Maintained unrestricted control over domain routing, user permissions, published content, and release cadences.
* **Single Source of Truth:** Guaranteed that documentation was always live, self-referencing, and up to date with our production standards.

### Core Visual Craft
We focused strategic effort on resolving our foundational design challenges:
* Simplifying complex form UI into intuitive, digestible question flows.
* Harmonizing the digital brand palette for accessibility compliance.
* Standardizing typography hierarchy across all responsive viewports.

### The Collaborative Process (Mosaic &amp; Tokens)
Product Designers partnered directly with user researchers, product managers, and our core engineering platform team (**Mosaic**). Mosaic incorporated documented components into the codebase, implementing **design tokens** to unify styling values, streamline theming, and ensure platform-agnostic consistency across web, mobile, and CXM touchpoints.

## 5. Measured Impact &amp; The Efficiency Curve

### The Design System Efficiency Curve
Suricata clearly demonstrated the classic design system investment model: an upfront investment of time and resources followed by an exponential gain in team velocity.

```

Productivity ▲ / (With Suricata Design System) │ / │ / │ / ────┼───────────────────────────────────/────── (Without Design System Baseline) │ \\ / │ \_\_\_ (Initial Build Dip) / │ └──────────────────────────────────────────► Time

```

* **Halving Delivery Effort:** Foundational groundwork initially required double the hours compared to legacy speeds. However, as soon as the Car and Loans journeys were built using Suricata, production velocity surged dramatically across both design and engineering.
* **Scaling with a Lean Team:** The design system was initiated when the organization had 20 product designers supported by 2 dedicated design system designers. Through centralized tokens, shared libraries, and reusable components, our design team now operates at high leverage with **6 designers**.
* **Accelerated Research Turnarounds:** Standardized components enabled teams to construct high-fidelity prototypes significantly faster, dramatically reducing the time required to conduct usability testing and gather user insights.

## 6. Current Deployment &amp; Future Roadmap

### Current Footprint
* **Core Product Journeys:** Deployed across end-to-end question sets for Car Insurance, Loans, and Credit Cards.
* **Results Pages:** Powering the comparison results dashboards for Car, Loans, and Credit Cards.
* **Multi-Platform Consistency:** Fully integrated into Customer Experience Management (CXM) tools and the native Mobile Application.
* **Multi-Theme Support:** Production-ready theming capabilities supporting product and non-product experiences alike.

### Future Roadmap
* **Live-Data Rapid Prototyping:** Moving beyond static screen transitions in Figma and Axure to build interactive prototypes powered by live production APIs. This facilitates deeper quantitative and behavioral analytics during user testing, allowing validated concepts to be fast-tracked directly into production code.
* **Framework Agnosticism:** Ensuring Suricata web components remain fully agnostic of underlying front-end frameworks and programming languages across CtM's tech stack.