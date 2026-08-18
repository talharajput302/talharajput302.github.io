export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  tech: string[];
  link: string | null;
  github: string | null;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "payback",
    name: "PayBack",
    tagline: "Digital loyalty & rewards wallet",
    summary:
      "A product-based company where I work as a Technical Associate, building features and fixing bugs on a digital loyalty and rewards wallet used by 20+ partner businesses.",
    tech: ["React", "Next.js", "Node.js", "Express", "+ more"],
    link: "https://payback.pk",
    github: null,
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "PayBack is a digital loyalty and rewards wallet. It lets users earn and track cashback or rewards when shopping at participating retail stores, cafés, restaurants, and lifestyle brands, using a single app instead of carrying multiple physical loyalty cards.",
        ],
      },
      {
        heading: "How it works",
        bullets: [
          "Shop: buy items at partner stores and brands",
          "Earn: receive instant cashback or rewards in your in-app wallet",
          "Redeem: scan an in-store QR code at the same brand to use your rewards on your next visit",
        ],
      },
      {
        heading: "Key features",
        bullets: [
          "All-in-one wallet: rewards, transaction history, and vouchers in one place",
          "Closed-loop system: rewards are issued by specific partner brands and can only be redeemed within those same brands",
          "Not a bank: rewards are not real cash and can't be withdrawn to a bank account",
        ],
      },
      {
        heading: "My role",
        paragraphs: [
          "I've been working here as a Technical Associate for 5 months and counting, building new features across the app, fixing bugs, and helping take the product from development to production.",
          "20+ businesses are onboarded on the platform so far, with more being added.",
          "The codebase is private, so I can't share implementation details or source, but the stack includes React, Next.js, Node.js, Express, and more.",
        ],
      },
    ],
  },
  {
    slug: "discord-job-automation",
    name: "Discord Job Automation",
    tagline: "Automated Upwork job alerts delivered to Discord",
    summary:
      "A bot that continuously monitors Upwork job listings and automatically posts new, keyword-filtered postings into the right Discord channels within seconds, so no one has to manually keep refreshing Upwork.",
    tech: ["Python", "MySQL"],
    link: null,
    // TODO: add your GitHub repo link
    github: null,
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This project automates job hunting on Upwork. Instead of people manually checking Upwork every few hours for new postings, a Discord server was set up with separate channels for different categories, like Software Engineering, Data Science, and others, and the bot posts matching jobs there automatically as they appear.",
        ],
      },
      {
        heading: "How it works",
        bullets: [
          "Pulls job listings directly from Upwork's GraphQL API",
          "Authenticates using cookies extracted from Upwork, with a refresh token flow to keep the session alive since cookies expire over time",
          "Polls for new jobs roughly every 10 seconds",
          "Filters incoming jobs by category-specific keywords, then posts each match to the matching Discord channel",
        ],
      },
      {
        heading: "Why it's useful",
        paragraphs: [
          "Instead of someone opening Upwork and checking for new jobs every 6 to 10 hours, relevant listings show up automatically in the right Discord channel almost as soon as they're posted.",
        ],
      },
      {
        heading: "Tech stack",
        bullets: ["Python", "MySQL as the database"],
      },
    ],
  },
  {
    slug: "spotify-automation",
    name: "Spotify Automation",
    tagline: "Remote-control Spotify via Android accessibility",
    summary:
      "A personal SaaS-style project that lets you control the Spotify app on an Android device remotely from a website, by pairing the device through a generated token.",
    tech: ["React", "FastAPI", "Java", "Kotlin"],
    link: null,
    // TODO: add your GitHub repo link
    github: null,
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Spotify Automation started as an accessibility experiment: a way for people with limited mobility to control Spotify on their phone from a website, without needing to physically operate the device.",
          "It was an early proof of concept, built before working toward a fuller phone control system. It's a personal project and isn't deployed publicly.",
        ],
      },
      {
        heading: "How it works",
        bullets: [
          "Install the companion Android app, which generates a unique device token",
          "Paste that token into the website's Devices section to connect the device over a WebSocket connection",
          "Once connected, control the Spotify app on that device in real time from the website",
          "The Android app uses Accessibility Services to drive Spotify's UI on the device",
        ],
      },
      {
        heading: "Tech stack",
        bullets: [
          "Frontend: React",
          "Backend: Python (FastAPI), with WebSocket for real-time device communication",
          "Android app: Java and Kotlin",
        ],
      },
    ],
  },
  {
    slug: "crypto-sentry",
    name: "Crypto Sentry",
    tagline: "Real-time crypto price drop alerts",
    summary:
      "A personal project that tracks cryptocurrency prices and alerts you when a coin drops beyond a set range, with a configurable check interval from 2 minutes up to 24 hours.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    link: null,
    // TODO: add your GitHub repo link
    github: null,
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Crypto Sentry tracks the live status of cryptocurrencies and warns you when a coin drops beyond a range you define, instead of you having to watch prices manually.",
          "It's a personal project and was never publicly deployed.",
        ],
      },
      {
        heading: "Key features",
        bullets: [
          "Live status tracking for cryptocurrencies",
          "Configurable check interval, from every 2 minutes up to every 24 hours",
          "Custom drop-range alerts: get notified when a coin falls beyond a set threshold",
        ],
      },
      {
        heading: "Tech stack",
        bullets: ["Frontend: React", "Backend: Node.js and Express", "Database: PostgreSQL"],
      },
    ],
  },
];
