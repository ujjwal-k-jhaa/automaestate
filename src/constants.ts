import { 
  Zap, 
  Calendar, 
  RefreshCw, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Clock, 
  TrendingUp, 
  DollarSign, 
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  ChevronDown
} from "lucide-react";

export const CONTENT = {
  brand: {
    name: "AutomaEstate",
    tagline: "We Turn Real Estate Agencies Into Self-Running Machines",
    email: "mail@ckjha.com",
    bookingLink: "https://cal.com/ck-jha/30min",
    phone: "+1 (555) 123-4567", // Placeholder
    address: "London, UK", // Placeholder based on testimonial
  },
  hero: {
    badge: "⚡ Done-For-You Automation · Built for Real Estate Agencies",
    headline: "Stop Paying Agents to Do Admin. Start Closing More Deals.",
    subheadline: "We build and install custom automation systems inside your agency — so your team spends 100% of their time on what actually makes money: closing deals.",
    ctaPrimary: "Book Your FREE Automation Audit",
    ctaSecondary: "See How It Works",
    trustBar: [
      { icon: Clock, text: "25+ Hours Saved Per Agent Weekly" },
      { icon: Zap, text: "60-Second Lead Response" },
      { icon: TrendingUp, text: "40% More Deals Closed" },
      { icon: DollarSign, text: "ROI In 30 Days" },
    ]
  },
  problem: {
    label: "THE REALITY",
    headline: "Your Agents Are Working Hard. But Working on the Wrong Things.",
    body: "The average real estate agent spends over 3 hours every day on tasks that have nothing to do with selling property. Manual follow-ups. Updating the CRM. Chasing paperwork. Sending reminders. The result? Leads go cold. Deals fall through. And your best agents burn out.\n\nIt's not a people problem. It's a systems problem.",
    stats: [
      { value: "60%", label: "of leads are lost", subtext: "due to slow or missed follow-up" },
      { value: "3hrs", label: "wasted every day", subtext: "per agent on admin & data entry" },
      { value: "$42K", label: "in revenue lost yearly", subtext: "per agent due to pipeline leakage" },
    ]
  },
  solution: {
    label: "WHAT WE DO",
    headline: "We Install a Complete Automation Engine Inside Your Agency. In 2 Weeks.",
    body: "No new software to learn. No disruption to your team. We build everything inside the tools you already use — and hand you a fully automated agency that runs itself.",
    pillars: [
      { 
        icon: Zap, 
        title: "Instant Lead Response", 
        description: "Every new lead gets an automatic, personalised reply in under 60 seconds — day or night. No lead ever goes cold again." 
      },
      { 
        icon: Calendar, 
        title: "Smart Appointment Booking", 
        description: "Prospects book viewings themselves via automated calendar links. Confirmation and reminder messages sent automatically. No-shows cut by 70%." 
      },
      { 
        icon: RefreshCw, 
        title: "Self-Updating CRM", 
        description: "Your pipeline updates itself. Deals move stages automatically. Tasks get created and assigned without anyone touching the CRM manually." 
      },
      { 
        icon: FileText, 
        title: "Contract & Document Automation", 
        description: "Contracts auto-generated and sent for e-signature the moment a deal is agreed. Files stored and organised automatically. Zero admin." 
      },
      { 
        icon: MessageSquare, 
        title: "Client Communication Sequences", 
        description: "Automated updates on listing progress, price changes, and next steps keep clients informed and agents off the phone." 
      },
      { 
        icon: BarChart3, 
        title: "Automated Reporting", 
        description: "Weekly performance dashboards delivered straight to your inbox every Monday. Know exactly what's working — without pulling a single report." 
      },
    ]
  },
  process: {
    label: "OUR PROCESS",
    headline: "From Chaos to Automated in 3 Steps",
    steps: [
      {
        step: "01",
        title: "Discovery & Audit",
        description: "We spend 30 minutes understanding your current workflows, tools, and the exact points where time and money are leaking from your business. No guesswork — just clarity."
      },
      {
        step: "02",
        title: "Build & Install",
        description: "Our team builds your custom automation system and installs it inside your existing CRM, inbox, and tools. You don't need to learn anything new. We handle everything."
      },
      {
        step: "03",
        title: "Launch, Train & Scale",
        description: "We go live in 2 weeks. We train your team (it takes about an hour), monitor performance for 30 days, and optimise until results exceed targets."
      }
    ],
    badge: "✅ Fully live in 14 days or less. Guaranteed."
  },
  results: {
    label: "WHAT TO EXPECT",
    headline: "Real Results. Real Agencies.",
    cards: [
      { metric: "3X", label: "Faster Lead Response", detail: "Respond in 60 sec, not 6 hours" },
      { metric: "25+", label: "Hours Saved Weekly", detail: "Per agent, every single week" },
      { metric: "40%", label: "More Deals Closed", detail: "From better lead nurturing & follow-up" },
      { metric: "30", label: "Day ROI", detail: "Most clients break even in month 1" },
    ],
    testimonials: [
      {
        quote: "We were losing deals we didn't even know about. Within the first month of going live, our response rate doubled and we closed 3 extra deals we would have otherwise missed.",
        author: "Sarah M.",
        role: "Director, [Agency Name], London"
      },
      {
        quote: "I was sceptical about automation but the team made it completely painless. My agents now spend almost no time on admin. It's transformed how we operate.",
        author: "James K.",
        role: "Principal, [Agency Name], Manchester"
      }
    ]
  },
  offer: {
    label: "GET STARTED",
    headline: "Book Your Free 30-Minute Automation Audit Today",
    subheadline: "We'll show you exactly how many hours and dollars your agency is leaking — and hand you a custom roadmap to fix it. No pitch. No obligation. Just clarity.",
    benefits: [
      "A full audit of your current workflows",
      "Identification of your top 3 automation opportunities",
      "A custom roadmap with estimated time and revenue impact",
      "Honest advice — even if we're not the right fit"
    ],
    cta: "Claim Your Free Audit",
    urgency: "⏳ We only take 5 new agency clients per month. Spots are limited."
  },
  faq: [
    {
      q: "Do we need to change our current tools or CRM?",
      a: "No. We build everything inside the tools you already use — whether that's HubSpot, Salesforce, Follow Up Boss, or any other platform. No new software required."
    },
    {
      q: "How long does it take to go live?",
      a: "Most agencies are fully automated within 14 days. The process is hands-off for your team — we handle all the technical setup."
    },
    {
      q: "Do our agents need to be tech-savvy?",
      a: "Not at all. We design every automation to be invisible to your team. They'll just notice that their workload has dropped dramatically."
    },
    {
      q: "What if we already have some automations in place?",
      a: "Great — we build on top of what's working and fix what isn't. Our audit will identify exactly where the gaps are."
    },
    {
      q: "How do you charge?",
      a: "We charge a one-time setup fee to build and install your automation system, plus an optional monthly retainer for ongoing management and optimisation. We'll give you full pricing transparency on the audit call."
    },
    {
      q: "What if it doesn't work for us?",
      a: "We offer a results guarantee. If you don't save at least 15 hours per agent per week within the first 30 days, we'll continue working for free until you do."
    }
  ],
  services: {
    headline: "Everything We Automate For Your Agency",
    intro: "We don't offer generic automation. Every system we build is designed specifically for real estate agencies, mapped to your exact workflows, and installed inside your existing tools.",
    items: [
      {
        title: "Lead Automation Suite",
        description: "Turn your lead pipeline into a 24/7 sales machine. The moment a lead comes in — from your website, Rightmove, Zoopla, or any other source — our system springs into action. An instant, personalised message goes out within 60 seconds. A nurture sequence begins. Tasks are created for your agents. And everything is logged in your CRM automatically.",
        includes: "Instant lead response, multi-channel follow-up sequences, lead scoring, automatic CRM logging, dead lead re-engagement campaigns."
      },
      {
        title: "Appointment & Viewing Automation",
        description: "Your prospects book viewings themselves. Your agents never play phone tag again. Our smart booking system syncs with your agents' calendars, handles confirmations, sends reminders, and even follows up after the viewing to capture feedback — automatically.",
        includes: "Self-booking calendar integration, confirmation & reminder sequences, post-viewing follow-up, no-show re-booking triggers."
      },
      {
        title: "CRM & Pipeline Automation",
        description: "Your CRM becomes a living, breathing sales machine that updates itself. Deals move stages when specific actions happen. Tasks are assigned to the right agent at the right time. Nothing gets forgotten. Nothing slips through the cracks.",
        includes: "Automatic stage progression, task creation & assignment, deal health scoring, pipeline reporting, stale deal alerts."
      },
      {
        title: "Document & Contract Automation",
        description: "The paperwork nightmare ends. The moment a deal progresses, the right document is generated, personalised, and sent for e-signature — all automatically. Completed documents are filed in the right folder without anyone touching them.",
        includes: "Auto-generated offer letters & contracts, e-signature integration, document filing & organisation, compliance checklist automation."
      },
      {
        title: "Client Communication Automation",
        description: "Keep every client feeling like a VIP — without your agents spending hours on the phone. Our communication sequences automatically send the right update at the right time, keeping clients informed and happy throughout the entire transaction.",
        includes: "Listing update notifications, price change alerts, transaction milestone messages, post-sale review requests, referral request sequences."
      },
      {
        title: "Reporting & Analytics Automation",
        description: "Stop manually pulling reports. Every Monday morning, a clean, comprehensive performance dashboard lands in your inbox — covering lead volume, conversion rates, agent performance, pipeline health, and revenue forecasts.",
        includes: "Weekly performance reports, agent activity dashboards, lead source analysis, revenue forecasting, monthly executive summaries."
      }
    ]
  },
  about: {
    headline: "We're On a Mission to End Admin in Real Estate",
    body: [
      "We started AutomaEstate after watching talented real estate professionals spend half their working day on tasks that had nothing to do with selling property.",
      "The technology to fix this has existed for years. The problem was that nobody had packaged it specifically for real estate agencies — in a way that was fast to deploy, easy to use, and actually delivered results.",
      "That's what we do.",
      "We're a specialist automation team with deep experience in real estate workflows. We've mapped the exact points where agencies leak time and money, and we've built a proven system to fix them — typically in under two weeks.",
      "We're not a software company selling you a subscription. We're an implementation partner. We build your automation system, install it, train your team, and stay on hand to optimise it as your agency grows."
    ],
    values: [
      { title: "Results over promises", desc: "We're judged on the hours you save and the deals you close, nothing else." },
      { title: "Simplicity first", desc: "If your agents notice the automation, we've done it wrong." },
      { title: "Speed to value", desc: "Most clients see meaningful results in their first week." }
    ],
    stats: [
      { label: "Automations Built", value: "500+" },
      { label: "Agencies Helped", value: "40+" },
      { label: "Hours Saved", value: "10k+" },
      { label: "ROI Generated", value: "£2M+" }
    ],
    team: [
      {
        name: "Alex Chen",
        role: "Founder & Lead Architect",
        bio: "Former real estate agent turned automation engineer. Alex experienced the admin pain firsthand and built AutomaEstate to solve it."
      },
      {
        name: "Sarah Johnson",
        role: "Head of Implementation",
        bio: "Specialist in CRM architecture. Sarah ensures every system we build fits perfectly into an agency's existing workflow."
      },
      {
        name: "Marcus Thorne",
        role: "Client Success Director",
        bio: "Ensures your team actually adopts the new systems. Marcus handles training, onboarding, and ongoing optimisation."
      }
    ]
  },
  caseStudies: [
    {
      client: "London Boutique Agency",
      location: "Kensington, London",
      problem: "This high-end agency was generating plenty of leads but losing 60% of them due to slow response times. Agents were often in viewings and couldn't reply instantly, causing prospects to go elsewhere.",
      solution: "We implemented our 'Instant Lead Response' system. Now, every lead receives a personalized WhatsApp and email within 60 seconds. If they don't reply, a 7-day nurture sequence kicks in automatically.",
      results: [
        { metric: "40%", label: "Increase in Viewings Booked" },
        { metric: "60s", label: "Average Response Time" },
        { metric: "3", label: "Extra Deals Closed in Month 1" }
      ],
      testimonial: {
        quote: "We were losing deals we didn't even know about. Within the first month of going live, our response rate doubled and we closed 3 extra deals we would have otherwise missed.",
        author: "Sarah M.",
        role: "Director"
      }
    },
    {
      client: "Manchester High-Volume Agency",
      location: "Manchester City Centre",
      problem: "With 15 agents and hundreds of listings, the admin burden was crushing. Agents spent 3+ hours daily on data entry, contract generation, and chasing signatures, leaving little time for selling.",
      solution: "We installed a complete 'Document & Contract Automation' suite. Now, offer letters and tenancy agreements are generated instantly from the CRM and sent for e-signature. Completed files are automatically saved to the correct property folder.",
      results: [
        { metric: "25+", label: "Hours Saved Per Agent/Week" },
        { metric: "100%", label: "Reduction in Contract Errors" },
        { metric: "2 Days", label: "Faster Deal Completion" }
      ],
      testimonial: {
        quote: "I was sceptical about automation but the team made it completely painless. My agents now spend almost no time on admin. It's transformed how we operate.",
        author: "James K.",
        role: "Principal"
      }
    },
    {
      client: "Regional Lettings Specialist",
      location: "Birmingham & Midlands",
      problem: "The agency had a database of 5,000+ old leads that were sitting dormant. They knew there was gold in there but didn't have the manpower to call everyone to check if they were still looking.",
      solution: "We deployed a 'Dead Lead Re-engagement' campaign. The system automatically reached out to leads older than 60 days with a conversational check-in. Positive replies were instantly flagged to agents.",
      results: [
        { metric: "15%", label: "Revenue Boost in 30 Days" },
        { metric: "450", label: "Dormant Leads Reactivated" },
        { metric: "12", label: "New Instructions Won" }
      ],
      testimonial: {
        quote: "We unlocked revenue that was just sitting in our database. The system paid for itself in the first week just from reactivating old leads.",
        author: "David R.",
        role: "Branch Manager"
      }
    }
  ]
};
