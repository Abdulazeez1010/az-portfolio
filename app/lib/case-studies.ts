export type WhatIDidItem = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  status: "In progress" | "Shipped";
  summary: string;
  metaDescription: string;
  ogDescription: string;
  problem: {
    intro: string[];
    callouts?: string[];
  };
  whatIDid: WhatIDidItem[];
  whatCameOfIt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "property-listing",
    title: "Property Listing Site — Figma to React",
    status: "In progress",
    summary:
      "A startup redesign — move an existing Airbnb-style property listing platform from its old UI to a new Figma design system, on a week-by-week sprint plan, while fixing what was already broken along the way.",
    metaDescription:
      "Case study: redesigning a property listing platform from Figma to React — fixing broken behavior, building the mobile layout nobody designed, and catching a spec conflict before it shipped.",
    ogDescription:
      "Figma to React: an active redesign of a property listing platform, bugs fixed and spec conflicts caught along the way.",
    problem: {
      intro: [
        "The old site worked, technically. It also had a search filter that ignored what you filtered for, a guest counter you could click infinitely past the actual max occupancy, and a sign-out button that didn't sign you out.",
        "On top of the bug list: a full UI overhaul to new Figma files, on a sprint schedule — with two catches nobody flagged up front.",
      ],
      callouts: [
        "No mobile designs existed anywhere in the Figma file.",
        "The sprint plan called for Stripe/Flutterwave payments, while the Figma files showed a manual payment-upload flow that matched neither the plan nor the old site.",
      ],
    },
    whatIDid: [
      {
        heading: "Fixed what was broken.",
        bullets: [
          "Amenities filter now filters by what's actually selected.",
          "Guest stepper caps at max occupancy, greys out, and announces the max to screen readers — not just a visual cue for sighted users.",
          "Sign-out button signs out.",
        ],
      },
      {
        heading: "Built the responsive layout nobody designed.",
        body: "No mobile frames in Figma, but the site still had to work on one. I used the old site's responsive behavior as the reference point and rebuilt it for the new design: hamburger nav, card grid at 4 columns / 2 columns / 1 column across breakpoints, search container stacking and shrinking on mobile.",
      },
      {
        heading: "Caught a spec conflict before writing the wrong code.",
        body: "The sprint plan said wire up Stripe and Flutterwave. The Figma files showed a manual payment-upload flow instead. Rather than pick one and hope, I flagged the mismatch to the project manager. Direction came back: keep the existing Stripe/Flutterwave integration, just restyle those pages — new brand colors, button styles, typography — to match the redesign.",
      },
      {
        heading: "Built in accessibility that doesn't show up in a screenshot.",
        body: "Keyboard-operable filters, visible focus states on every interactive element, alt text on listing images, plus the guest-stepper screen reader announcement above. Contrast ratios weren't formally verified.",
      },
    ],
    whatCameOfIt:
      "The filter fix, stepper fix, and sign-out fix are all confirmed working. Sprint 2 ran Monday to Friday — I finished it Wednesday. The redesign is still in progress, so this isn't a shipped-and-done case study; it's an active one.",
  },
];