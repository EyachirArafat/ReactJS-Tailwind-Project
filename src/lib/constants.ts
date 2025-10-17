import {
    BarChart,
    Clock,
    Cloud,
    Code,
    Facebook,
    Globe,
    Instagram,
    Layers,
    Linkedin,
    Lock,
    Palette,
    Shield,
    Smartphone,
    Twitter,
    Users,
    Youtube,
    Zap
} from "lucide-react";

// footer
export const FOOTER_LINKS = {
    Product: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Templates", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Changelog", href: "#" },
    ],
    Company: [
        { label: "About Us", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Partners", href: "#" },
    ],
    Resources: [
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Webinars", href: "#" },
        { label: "API Reference", href: "#" },
    ],
    Legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "GDPR", href: "#" },
        { label: "Security", href: "#" },
    ],
};

export const SOCIALS_LINKS = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
];


// navbar
export const PRODUCTS = [
    { title: "Analytics", href: "#", description: "Get detailed insights" },
    { title: "Engagement", href: "#", description: "Boost user interaction" },
    {
        title: "Security",
        href: "#",
        description: "Enterprise-grade protection",
    },
    { title: "Integrations", href: "#", description: "Connect your tools" },
];

export const RESOURCES = [
    { title: "Documentation", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Case Studies", href: "#" },
    { title: "API Reference", href: "#" },
];

// comparison section
export const COMPETITORS = [
    { name: "Degic", isUs: true },
    { name: "Competitor A", isUs: false },
    { name: "Competitor B", isUs: false },
    { name: "Competitor C", isUs: false },
];

export const COMPARISON_FEATURES = [
    {
        feature: "Unlimited Presentations",
        us: true,
        others: [false, true, false],
    },
    { feature: "AI-Powered Design", us: true, others: [false, false, false] },
    {
        feature: "Real-time Collaboration",
        us: true,
        others: [true, false, true],
    },
    { feature: "Advanced Analytics", us: true, others: [false, true, false] },
    { feature: "Custom Templates", us: true, others: [true, true, false] },
    { feature: "24/7 Support", us: true, others: [false, false, true] },
    { feature: "White Labeling", us: true, others: [false, false, false] },
    { feature: "API Access", us: true, others: [true, false, false] },
    { feature: "Offline Mode", us: true, others: [false, false, false] },
    { feature: "Version History", us: true, others: [true, true, true] },
];

// 
export const STATS = [
    { value: 10000000, suffix: "+", label: "Active Users", description: "Trusted by millions worldwide" },
    { value: 50000000, suffix: "+", label: "Presentations Created", description: "And counting every day" },
    { value: 99.9, suffix: "%", label: "Uptime SLA", description: "Enterprise-grade reliability" },
    { value: 4.9, suffix: "/5", label: "Customer Rating", description: "Based on 10,000+ reviews" },
]


export const FAQS = [
    {
        question: "How does the free trial work?",
        answer:
            "You get 14 days of unlimited access to all features. No credit card required. After the trial, you can choose a plan that suits your needs.",
    },
    {
        question: "Can I change my plan later?",
        answer:
            "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle, and we'll prorate any differences.",
    },
    {
        question: "Do you offer discounts for nonprofits?",
        answer:
            "We offer 50% discount for registered nonprofits and educational institutions. Contact our sales team with your verification documents.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Absolutely. We use bank-level encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We're also SOC 2 Type II certified.",
    },
    {
        question: "Can I export my presentations?",
        answer:
            "Yes, you can export your presentations in multiple formats including PDF, PowerPoint, and as a shareable link. Video export is available on Pro plans.",
    },
    {
        question: "Do you have an API?",
        answer:
            "Yes, we offer a comprehensive REST API for Enterprise customers. This allows you to integrate our platform with your existing tools and workflows.",
    },
    {
        question: "What kind of support do you offer?",
        answer:
            "We offer email support for all plans, priority support for Pro users, and 24/7 phone support for Enterprise customers. We also have extensive documentation and video tutorials.",
    },
    {
        question: "Can I collaborate with my team?",
        answer:
            "Yes! Real-time collaboration is available on all paid plans. You can work together on presentations, leave comments, and track changes.",
    },
];




export const FEATURES = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description:
            "Optimized performance ensures your presentations load instantly.",
        color: "from-yellow-500 to-orange-500",
    },
    {
        icon: Shield,
        title: "Secure & Private",
        description:
            "Enterprise-grade security keeps your data safe and encrypted.",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Work together in real-time with your team members.",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: BarChart,
        title: "Advanced Analytics",
        description:
            "Get insights into how your audience engages with your content.",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: Clock,
        title: "Save Time",
        description: "AI-powered tools help you create presentations 10x faster.",
        color: "from-red-500 to-rose-500",
    },
    {
        icon: Globe,
        title: "Global CDN",
        description: "Your content delivered quickly anywhere in the world.",
        color: "from-indigo-500 to-purple-500",
    },
];

export const TAB_FEATURES = {
    design: {
        title: "Beautiful Design Tools",
        description:
            "Create stunning presentations with our intuitive design tools",
        features: [
            { icon: Palette, text: "1000+ professionally designed templates" },
            { icon: Layers, text: "Advanced layering and positioning" },
            { icon: Code, text: "Custom CSS and animations" },
        ],
        image: "🎨",
    },
    collaborate: {
        title: "Seamless Collaboration",
        description: "Work together with your team in real-time",
        features: [
            { icon: Users, text: "Real-time collaboration" },
            { icon: Lock, text: "Role-based permissions" },
            { icon: Cloud, text: "Cloud sync across devices" },
        ],
        image: "👥",
    },
    analytics: {
        title: "Powerful Analytics",
        description: "Understand your audience with detailed insights",
        features: [
            { icon: BarChart, text: "Engagement tracking" },
            { icon: Globe, text: "Geographic analytics" },
            { icon: Smartphone, text: "Device analytics" },
        ],
        image: "📊",
    },
};
