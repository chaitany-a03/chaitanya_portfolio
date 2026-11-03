import { useEffect, useRef, useState, type PointerEvent, type WheelEvent } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, FileText, Code2, Database, Globe2, Terminal, GraduationCap, BriefcaseBusiness, MapPin, Cpu, Layers3, Phone } from 'lucide-react';
import * as SimpleIcons from 'simple-icons';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const email = 'patilchaitanya2710@gmail.com';
const github = 'https://github.com/chaitany-a03';
const linkedin = 'https://linkedin.com/in/chaitanya-patil03';
const leetcode = 'https://leetcode.com/u/chaitany_a03';

const projects = [
    { n: '01', name: 'IDRO', sub: 'INTELLIGENT DISASTER RESOURCE OPTIMIZER', type: 'AI · SOCIAL IMPACT', desc: 'A disaster-response platform designed to help teams prioritize urgent locations and coordinate resources across relief camps.', bullets: ['Built an XGBoost prediction module to forecast camp resource requirements from incoming disaster reports.', 'Designed a priority-based ranking algorithm to surface high-urgency locations for response coordinators.', 'Secured a Top 5 finish at PU Code Hackathon.'], stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'XGBoost'], visual: 'idro' },
    { n: '02', name: 'ERP & CRM', sub: 'OPERATIONS MANAGEMENT SYSTEM', type: 'FULL-STACK · ENTERPRISE', desc: 'A full-stack operations platform for customers, products, inventory, sales challans and stock movement across a multi-role organization.', bullets: ['Implemented JWT authentication and role-based access for Admin, Sales, Warehouse and Accounts.', 'Built sales challan workflows with automatic stock deduction and stock movement tracking.', 'Deployed with Vercel, Render and Neon PostgreSQL.'], stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma'], visual: 'erp' },
    { n: '03', name: 'TradeTrust', sub: 'AI-POWERED DEAL ANALYZER', type: 'AI · COMPUTER VISION', desc: 'An AI application that evaluates second-hand electronics deals through visual condition assessment and predictive recommendations.', bullets: ['Implemented EfficientNet-B3 for image-based damage detection.', 'Trained a Random Forest classifier to generate BUY / HOLD / AVOID recommendations.', 'Designed a trust-scoring system to quantify seller reliability.'], stack: ['React', 'Node.js', 'FastAPI', 'PyTorch', 'EfficientNet-B3', 'Random Forest'], visual: 'trade' },
    { n: '04', name: 'Traveloop', sub: 'SMART TRAVEL PLANNING PLATFORM', type: 'FULL-STACK · TRAVEL TECHNOLOGY', desc: 'A travel-planning platform that turns a destination and travel mood into a structured, time-aware itinerary with hidden-gem discovery.', bullets: ['Built a mood-aware trip planner and itinerary engine to generate personalized day plans.', 'Used geographic clustering and distance scoring to organize nearby places into practical routes.', 'Developed hidden-gem discovery and time-aware scheduling for a smoother travel experience.'], stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'Tailwind CSS'], visual: 'traveloop' }
];

const groups = [
    { title: 'LANGUAGES', icon: Code2, items: ['Java', 'JavaScript', 'Python'] },
    { title: 'FRONTEND', icon: Layers3, items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { title: 'BACKEND', icon: Terminal, items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT Authentication'] },
    { title: 'DATABASES', icon: Database, items: ['MongoDB', 'PostgreSQL', 'Prisma ORM'] },
    { title: 'TOOLS & PLATFORMS', icon: Globe2, items: ['Git', 'GitHub', 'Vercel', 'Render', 'Neon'] },
    { title: 'CORE CS', icon: Cpu, items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Computer Networks'] }
];

function Portrait({ className = '' }) { return <div className={'portrait ' + className}><img src="/images/particle-portrait.png" alt="Folded-arm human silhouette made of white particles" /></div> }

function Header() {
    const [open, setOpen] = useState(false);
    return <header className="header"><a className="logo" href="#home">CP</a><span className="header-specialty">DESIGN · ENGINEERING · EXPERIENCE</span><nav className={open ? 'nav open' : 'nav'}>{[['ABOUT', '#about'], ['WORK', '#work'], ['CONTACT', '#contact']].map(([t, h]) => <a href={h} key={t} onClick={() => setOpen(false)}>{t}</a>)}</nav><button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></header>
}

function Hero() {
    return <section className="hero" id="home">
        <div className="intro"><p>Hello! I'm</p><h1>CHAITANYA PATIL</h1></div>
        <div className="hero-code-atmosphere" aria-hidden="true">
            <span className="hero-code code-one"><i>const</i> creativity = <b>true</b>;</span>
            <span className="hero-code code-two"><i>function</i> buildIdeas() {'{ }'}</span>
            <span className="hero-code code-three"><em>01</em> &nbsp; DESIGN → BUILD → REFINE</span>
            <span className="hero-code code-four">&lt;interface <i>future</i> /&gt;</span>
            <span className="hero-code code-five"><b>while</b> (curious) {'{'} create(); {'}'}</span>
        </div>
        <Portrait className="hero-person" />
        <div className="hero-title"><p>A</p><div><span className="creative">CREATIVE</span><span className="developer">DEVELOPER</span></div></div>
        <div className="social-rail"><a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a><a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href={leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 /></a><a href={'mailto:' + email} aria-label="Email"><Mail /></a></div>
        <a className="scroll-link" href="#about">SCROLL <ArrowDown /></a><a className="resume-link" href="/Chaitanya_Patil_Resume.pdf" target="_blank" rel="noreferrer">RESUME <FileText /></a>
    </section>
}

function About() {
    const aboutRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const section = aboutRef.current;
        if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const intro = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top 72%',
                toggleActions: 'play none none reverse'
            }
        });

        intro
            .from('.about-art', {
                opacity: 0,
                x: -55,
                scale: 0.96,
                duration: 1.05,
                ease: 'power3.out'
            })
            .from('.about-copy .eyebrow', {
                opacity: 0,
                y: 18,
                duration: 0.55,
                ease: 'power2.out'
            }, '-=0.72')
            .from('.about-copy h2', {
                opacity: 0,
                y: 42,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.3')
            .from('.about-copy > p:not(.eyebrow)', {
                opacity: 0,
                y: 22,
                stagger: 0.14,
                duration: 0.62,
                ease: 'power2.out'
            }, '-=0.35')
            .from('.facts > div, .stats > div, .about-focus-item', {
                opacity: 0,
                y: 18,
                stagger: 0.09,
                duration: 0.5,
                ease: 'power2.out'
            }, '-=0.2');

        gsap.to('.about-art .orbit', {
            rotation: '+=360',
            duration: 34,
            repeat: -1,
            ease: 'none',
            transformOrigin: '50% 50%'
        });

        gsap.to('.about-art .about-person', {
            y: -9,
            duration: 3.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }, { scope: aboutRef });

    return <section className="section about" id="about" ref={aboutRef}>
        <div className="section-label"><span>01 / ABOUT ME</span><span>THE PERSON BEHIND THE PIXELS</span></div>
        <div className="about-grid"><div className="about-art"><Portrait className="about-person" /><span className="orbit o1" /><span className="orbit o2" /><div className="about-art-stamp"><span>01</span><b>IDEAS INTO<br />EXPERIENCES</b><i>SCROLL TO EXPLORE</i></div></div>
            <div className="about-copy"><p className="eyebrow">A LITTLE INTRODUCTION</p><h2>Engineering mind.<br /><em>Product curiosity.</em></h2>
                <p className="lead">I'm Chaitanya, a Computer Science undergraduate who enjoys turning real-world problems into useful digital products.</p>
                <p>My work spans frontend experiences, full-stack applications and applied machine learning. I care about the details that make software feel clear, reliable and effortless to use — from a thoughtful interface to the system behind it.</p>
                <p>I'm pursuing my B.Tech in Computer Science Engineering at Parul Institute of Engineering and Technology, and looking for opportunities to contribute, learn and build with strong product teams.</p>
                <div className="facts"><div><MapPin /><span><small>LOCATION</small><b>Vadodara, Gujarat, India</b></span></div><div><GraduationCap /><span><small>EDUCATION</small><b>B.Tech · Computer Science · Expected 2027</b></span></div><div><BriefcaseBusiness /><span><small>EXPERIENCE</small><b>TCS iON · IT Support & System Administrator (On-call)</b></span></div></div>
                <div className="stats"><div><b>7.8</b><small>CGPA</small></div><div><b>300+</b><small>DSA PROBLEMS</small></div><div><b>TOP 5</b><small>PU CODE HACKATHON</small></div></div>
                <div className="about-focus"><span className="about-focus-label">CURRENT FOCUS</span><div className="about-focus-items"><span className="about-focus-item">FRONTEND CRAFT</span><span className="about-focus-item">PRODUCT THINKING</span><span className="about-focus-item">BUILDING WITH AI</span></div><span className="about-focus-mark">↗</span></div>
            </div></div></section>
}

function Visual({ p }: { p: { visual: string } }) {
    if (p.visual === 'idro') return <div className="art idro"><div className="art-meta"><span>FIELD INTELLIGENCE / 01</span><span>RESPONSE NETWORK</span></div><div className="contour-map"><i /><i /><i /><b>+</b><b>+</b><b>+</b></div><div className="art-copy"><small>INTELLIGENT DISASTER RESOURCE OPTIMIZER</small><strong>Prioritize.<br /><em>Coordinate.</em><br />Respond.</strong><label>TOP 5 <small>PU CODE HACKATHON</small></label></div><div className="art-foot"><span>RESOURCE ALLOCATION</span><span>INDIA / DISASTER RESPONSE</span></div></div>;
    if (p.visual === 'erp') return <div className="art erp"><div className="art-meta"><span>OPERATIONS SUITE / 02</span><span>ERP & CRM</span></div><div className="dashboard"><aside><b>CP<span>.</span></b><i>OVERVIEW</i><i>INVENTORY</i><i>SALES ORDERS</i><i>STOCK MOVEMENT</i></aside><div className="dash-main"><small>WORKSPACE / OPERATIONS</small><h3>Business overview</h3><div className="kpis"><div><small>PRODUCTS</small><b>Inventory</b><i>Stock visibility</i></div><div><small>SALES</small><b>Orders</b><i>Challan workflow</i></div><div><small>ACCESS</small><b>Role-based</b><i>JWT protected</i></div></div><div className="bars"><span>STOCK MOVEMENT</span><div>{[30, 55, 42, 76, 50, 88, 63, 70, 48, 95, 65, 82].map((v, i) => <i key={i} style={{ height: v + '%' }} />)}</div></div></div></div><div className="art-foot"><span>WORKFLOW GOVERNANCE</span><span>ADMIN · SALES · WAREHOUSE · ACCOUNTS</span></div></div>;
    if (p.visual === 'traveloop') return <div className="art traveloop"><div className="art-meta"><span>JOURNEY PLANNER / 04</span><span>TRAVELOOP</span></div><div className="travel-sky"><span className="travel-sun" /><span className="travel-route route-one" /><span className="travel-route route-two" /><span className="travel-pin pin-one">01</span><span className="travel-pin pin-two">02</span><span className="travel-pin pin-three">03</span><div className="travel-copy"><small>PLAN A TRIP THAT FEELS LIKE YOU</small><strong>Find your<br /><em>own way.</em></strong><span>MOOD-AWARE ITINERARIES · HIDDEN GEMS</span></div><div className="travel-panel"><small>YOUR NEXT ESCAPE</small><b>Explore somewhere new</b><div><i /><i /><i /></div><span>DISCOVER · PLAN · GO</span></div></div><div className="art-foot"><span>SMART ITINERARY ENGINE</span><span>TIME + DISTANCE AWARE</span></div></div>;
    return <div className="art trade"><div className="art-meta"><span>DEAL INTELLIGENCE / 03</span><span>TRADETRUST</span></div><div className="trade-content"><div className="phone"><div className="phone-screen"><small>DEVICE CONDITION</small><i /><b>Visual assessment</b><small>IMAGE ANALYSIS / EFFICIENTNET-B3</small></div></div><div className="trade-copy"><small>DEAL RECOMMENDATION</small><strong>BUY <i>/ HOLD / AVOID</i></strong><div className="meter"><i /></div><small>SELLER TRUST SCORE</small><b>Trust, made visible.</b></div></div><div className="art-foot"><span>COMPUTER VISION + PREDICTIVE MODELLING</span><span>AI / PRODUCT DECISIONS</span></div></div>
}

function Work() {
    const [activeIndex, setActiveIndex] = useState(1);
    const railRef = useRef<HTMLDivElement>(null);
    const dragState = useRef<{ pointerId: number; startX: number; startScrollLeft: number; moved: boolean } | null>(null);
    const suppressClick = useRef(false);

    const centerCard = (index: number, behavior: ScrollBehavior = 'smooth') => {
        const rail = railRef.current;
        const card = rail?.querySelectorAll<HTMLElement>('.project')[index];
        if (!rail || !card) return;
        const railRect = rail.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const targetLeft = rail.scrollLeft
            + (cardRect.left - railRect.left)
            - (rail.clientWidth - card.clientWidth) / 2;
        rail.scrollTo({ left: targetLeft, behavior });
    };

    useEffect(() => {
        // Start with project 02 centred so project 01 is already visible on the left
        // and project 03 is visible on the right—without an empty leading gutter.
        const frame = requestAnimationFrame(() => centerCard(1, 'auto'));
        return () => cancelAnimationFrame(frame);
    }, []);

    const syncActiveCard = () => {
        const rail = railRef.current;
        if (!rail) return;
        const cards = Array.from(rail.querySelectorAll<HTMLElement>('.project'));
        const center = rail.getBoundingClientRect().left + rail.clientWidth / 2;
        let nearestIndex = 0;
        let nearestDistance = Number.POSITIVE_INFINITY;
        cards.forEach((card, index) => {
            const cardCenter = card.getBoundingClientRect().left + card.clientWidth / 2;
            const distance = Math.abs(center - cardCenter);
            if (distance < nearestDistance) {
                nearestDistance = distance;
                nearestIndex = index;
            }
        });
        setActiveIndex(current => current === nearestIndex ? current : nearestIndex);
    };

    const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
        // Mouse dragging supplements native touch/trackpad scrolling; it is not a separate carousel mode.
        if (event.pointerType !== 'mouse' || event.button !== 0) return;
        const rail = railRef.current;
        if (!rail) return;
        dragState.current = {
            pointerId: event.pointerId,
            startX: event.clientX,
            startScrollLeft: rail.scrollLeft,
            moved: false
        };
        event.currentTarget.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
        const drag = dragState.current;
        const rail = railRef.current;
        if (!drag || !rail || drag.pointerId !== event.pointerId) return;
        const delta = event.clientX - drag.startX;
        if (Math.abs(delta) > 4) drag.moved = true;
        if (drag.moved) rail.scrollLeft = drag.startScrollLeft - delta;
    };

    const finishPointerDrag = (event: PointerEvent<HTMLDivElement>) => {
        if (dragState.current?.pointerId !== event.pointerId) return;
        const wasDragged = dragState.current.moved;
        dragState.current = null;
        suppressClick.current = wasDragged;
        if (wasDragged) requestAnimationFrame(syncActiveCard);
    };

    const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
        const rail = railRef.current;
        if (!rail) return;
        // Convert a regular mouse-wheel gesture into horizontal movement while over the project track.
        const dominantDelta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
        if (dominantDelta !== 0) {
            event.preventDefault();
            rail.scrollBy({ left: dominantDelta, behavior: 'auto' });
        }
    };

    return <section className="section work" id="work">
        <div className="section-label"><span>02 / SELECTED WORK</span><span>THOUGHTFUL SOLUTIONS, BUILT END TO END</span></div>
        <div className="work-heading">
            <div className="work-heading-main">
                <p className="eyebrow">A FEW THINGS I'VE BUILT</p>
                <h2>My <em>Projects.</em></h2>
            </div>
            <p className="work-heading-copy">Four projects. Different problems.<br />One focus: building useful things.</p>
        </div>
        <div
            className="work-carousel-window"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishPointerDrag}
            onPointerCancel={finishPointerDrag}
            onWheel={handleWheel}
        >
            <div className="rail" ref={railRef} onScroll={syncActiveCard}>
                {projects.map((p, index) => <article
                    className={'project' + (index === activeIndex ? ' project-active' : index === activeIndex - 1 ? ' project-before' : index === activeIndex + 1 ? ' project-after' : '')}
                    key={p.n}
                    onClick={() => {
                        if (suppressClick.current) { suppressClick.current = false; return; }
                        centerCard(index);
                    }}
                    aria-current={index === activeIndex ? 'true' : undefined}
                >
                    <Visual p={p} />
                    <div className="project-meta"><span>{p.n} / 04</span><span>{p.type}</span></div>
                    <div className="project-title">
                        <div>
                            <h3>{p.name}</h3>
                            <small>{p.sub}</small>
                        </div>
                        <ArrowUpRight aria-hidden="true" />
                    </div>
                    <p className="project-desc">{p.desc}</p>
                    <ul>{p.bullets.map(x => <li key={x}>{x}</li>)}</ul>
                    <div className="tags">{p.stack.map(x => <span key={x}>{x}</span>)}</div>
                </article>)}
            </div>
        </div>
        <div className="work-progress" aria-label={`Project ${activeIndex + 1} of ${projects.length}`}>
            <div className="work-progress-track"><span style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }} /></div>
            <span>{String(activeIndex + 1).padStart(2, '0')} <i>/</i> 04</span>
        </div>
    </section>;
}

function Stack() {
    const stackRef = useRef<HTMLElement>(null);
    const stackItems = groups.flatMap(group =>
        group.items.map(name => ({ name, category: group.title }))
    );
    // A deliberately centered, tapering layout: 8 / 6 / 5 / 3 / 2 tiles.
    const rowSizes = [8, 6, 5, 3, 2];
    const stackRows: typeof stackItems[] = [];
    let rowStart = 0;
    rowSizes.forEach(size => {
        stackRows.push(stackItems.slice(rowStart, rowStart + size));
        rowStart += size;
    });
    const iconLibrary = SimpleIcons as unknown as Record<string, { path: string; hex: string }>;
    const brandIcons: Record<string, { path: string; hex: string } | undefined> = {
        Java: iconLibrary.siJava,
        JavaScript: iconLibrary.siJavascript,
        Python: iconLibrary.siPython,
        'React.js': iconLibrary.siReact,
        HTML5: iconLibrary.siHtml5,
        CSS3: iconLibrary.siCss3,
        'Tailwind CSS': iconLibrary.siTailwindcss,
        'Node.js': iconLibrary.siNodedotjs,
        'Express.js': iconLibrary.siExpress,
        FastAPI: iconLibrary.siFastapi,
        MongoDB: iconLibrary.siMongodb,
        PostgreSQL: iconLibrary.siPostgresql,
        'Prisma ORM': iconLibrary.siPrisma,
        Git: iconLibrary.siGit,
        GitHub: iconLibrary.siGithub,
        Vercel: iconLibrary.siVercel
    };
    const fallbackMarks: Record<string, string> = {
        'REST APIs': 'API',
        'JWT Authentication': 'JWT',
        Render: 'R',
        Neon: 'N',
        'Data Structures & Algorithms': '</>',
        OOP: '◇',
        DBMS: '▤',
        'Computer Networks': '⌘'
    };

    useGSAP(() => {
        const tiles = gsap.utils.toArray<HTMLElement>(".stack-tile");
        gsap.from(".stack-title-wrap > *", {
            y: 35,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: stackRef.current,
                start: "top 72%",
                toggleActions: "play none none reverse"
            }
        });
        gsap.from(tiles, {
            y: 42,
            opacity: 0,
            scale: 0.88,
            stagger: { each: 0.055, from: "center" },
            duration: 0.75,
            ease: "back.out(1.45)",
            scrollTrigger: {
                trigger: ".stack-grid",
                start: "top 82%",
                toggleActions: "play none none reverse"
            }
        });
        gsap.to(".stack-ambient-orb", {
            y: -22,
            x: 14,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, { scope: stackRef });

    return <section className="section stack" id="stack" ref={stackRef}>
        <div className="stack-atmosphere" aria-hidden="true">
            <span className="stack-ambient-orb" />
            <span className="stack-star star-one" />
            <span className="stack-star star-two" />
            <span className="stack-star star-three" />
            <span className="stack-network" />
        </div>
        <div className="section-label"><span>03 / TOOLKIT</span><span>THE TOOLS BEHIND THE WORK</span></div>
        <div className="stack-title-wrap">
            <p className="eyebrow">ALWAYS LEARNING, ALWAYS BUILDING</p>
            <h2 className="stack-display-title">TECH <em>STACK</em></h2>
            <p className="stack-subtitle">A curated toolkit for turning ideas into useful digital products.</p>
        </div>
        <div className="stack-stage">
            <div className="stack-side-notes stack-side-notes-left" aria-hidden="true">
                <div className="stack-side-note stack-side-note-one"><span>01 / CORE</span><strong>LANGUAGES</strong><i>Java · JavaScript · Python</i></div>
                <div className="stack-side-note stack-side-note-two"><span>02 / BUILD</span><strong>DEVELOPMENT</strong><i>Frontend · Backend · APIs</i></div>
                <div className="stack-side-note stack-side-note-three"><span>03 / SYSTEMS</span><strong>DATA & TOOLS</strong><i>Databases · Platforms · CS</i></div>
            </div>
            <div className="stack-side-notes stack-side-notes-right" aria-hidden="true">
                <span className="stack-focus-kicker">ENGINEERING FOCUS</span>
                <strong>From idea<br /><em>to impact.</em></strong>
                <span className="stack-focus-copy">Thoughtful interfaces.<br />Reliable systems.<br />Useful products.</span>
                <span className="stack-focus-index">CP / 2026</span>
            </div>
            <div className="stack-grid" aria-label="Technologies and skills">
                <svg className="stack-connections" viewBox="0 0 1000 720" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                        <linearGradient id="stackConnectionGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#b98af0" stopOpacity=".08" />
                            <stop offset="48%" stopColor="#c99af4" stopOpacity=".62" />
                            <stop offset="100%" stopColor="#a8ff4c" stopOpacity=".12" />
                        </linearGradient>
                    </defs>
                    <g className="stack-connection-paths" fill="none" stroke="url(#stackConnectionGradient)" strokeWidth="1.25" strokeLinecap="round">
                        <path d="M62 68 L186 68 L310 68 L434 68 L558 68 L682 68 L806 68 L930 68" />
                        <path d="M186 68 L250 214 L374 214 L498 214 L622 214 L746 214 L810 68" />
                        <path d="M310 68 L374 214 L374 360 L498 360 L622 360 L746 214 L682 68" />
                        <path d="M434 68 L498 214 L498 360 L498 506 L622 360 L622 506" />
                        <path d="M558 68 L622 214 L746 214 L746 360 L622 506 L498 650" />
                        <path d="M250 214 L250 360 L374 506 L498 650 L622 650" />
                        <path d="M810 68 L746 214 L748 360 L622 506 L622 650" />
                        <path d="M374 214 L498 360 L622 506" />
                    </g>
                    <g className="stack-connection-nodes">
                        {[[62, 68], [186, 68], [310, 68], [434, 68], [558, 68], [682, 68], [806, 68], [930, 68], [250, 214], [374, 214], [498, 214], [622, 214], [746, 214], [250, 360], [374, 360], [498, 360], [622, 360], [746, 360], [374, 506], [498, 506], [622, 506], [498, 650], [622, 650]].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r="2.2" />)}
                    </g>
                </svg>
                {stackRows.map((row, rowIndex) => <div className="stack-row" key={`row-${rowIndex}`}>
                    {row.map(item => {
                        const brand = brandIcons[item.name];
                        return <article className={'stack-tile' + (item.name === 'React.js' ? ' stack-tile-featured' : '')} key={item.name} title={item.category}>
                            <span className="stack-tile-mark" aria-hidden="true">
                                {brand
                                    ? <svg viewBox="0 0 24 24" role="img" aria-label={`${item.name} logo`}><path d={brand.path} fill={`#${brand.hex}`} /></svg>
                                    : <span className="stack-fallback-mark">{fallbackMarks[item.name] || item.name.slice(0, 2).toUpperCase()}</span>}
                            </span>
                            <span className="stack-tile-name">{item.name}</span>
                            <span className="stack-tile-category">{item.category}</span>
                        </article>;
                    })}

                </div>)}
            </div>
        </div>
        <div className="stack-workflow" aria-label="Design, develop, integrate, deploy">
            <span className="stack-workflow-line" aria-hidden="true" />
            <span className="stack-workflow-step">DESIGN</span><i>→</i>
            <span className="stack-workflow-step">DEVELOP</span><i>→</i>
            <span className="stack-workflow-step">INTEGRATE</span><i>→</i>
            <span className="stack-workflow-step">DEPLOY</span>
        </div>
        <p className="stack-note">Technologies shown are grounded in my current resume and project experience.</p>
    </section >;
}

function Contact() {
    const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    const mapLink = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Vadodara, Gujarat, India');
    const links = [
        { name: 'GitHub', handle: 'chaitany-a03', url: github, Icon: Github, note: 'CODE & PROJECTS' },
        { name: 'LinkedIn', handle: 'chaitanya-patil03', url: linkedin, Icon: Linkedin, note: 'PROFESSIONAL NETWORK' },
        { name: 'LeetCode', handle: 'chaitany_a03', url: leetcode, Icon: Code2, note: 'DSA PRACTICE' }
    ];

    return <section className="section contact" id="contact">
        <div className="section-label"><span>04 / CONTACT</span><span>THE NEXT GOOD THING STARTS WITH A CONVERSATION</span></div>

        <div className="contact-main">
            <div className="contact-copy">
                <p className="eyebrow">HAVE A PROJECT OR ROLE IN MIND?</p>
                <h2>LET'S BUILD<br /><em>WHAT'S NEXT.</em></h2>
                <p className="contact-lead">I'm always interested in thoughtful teams, meaningful problems and opportunities to build products that make a difference.</p>
                <div className="contact-actions">
                    <a className="contact-primary" href={gmailCompose} target="_blank" rel="noreferrer" aria-label="Start an email to Chaitanya">
                        <Mail /> LET'S TALK <ArrowUpRight />
                    </a>
                    <a className="contact-secondary" href="/Chaitanya_Patil_Resume.pdf" target="_blank" rel="noreferrer" aria-label="Open Chaitanya's resume">
                        <FileText /> VIEW RESUME <ArrowUpRight />
                    </a>
                </div>
            </div>

            <div className="contact-presence">
                <div className="presence-orbit" aria-hidden="true"><span /></div>
                <p className="presence-kicker"><span className="status-dot" /> OPEN TO OPPORTUNITIES</p>
                <p className="presence-statement">Looking for the right place to <em>contribute & grow.</em></p>
                <div className="presence-meta">
                    <div><small>BASED IN</small><a href={mapLink} target="_blank" rel="noreferrer">Vadodara, Gujarat, India <ArrowUpRight /></a></div>
                    <div><small>INTERESTED IN</small><p>Frontend · Full-stack · Software Engineering</p></div>
                </div>
            </div>
        </div>

        <div className="contact-directory">
            <div className="contact-details">
                <div className="contact-detail contact-detail-email">
                    <small><Mail /> EMAIL</small>
                    <a href={gmailCompose} target="_blank" rel="noreferrer">{email}<ArrowUpRight /></a>
                </div>
                <div className="contact-detail">
                    <small><Phone /> PHONE</small>
                    <a href="tel:+918263081008">+91 8263081008 <ArrowUpRight /></a>
                </div>
                <div className="contact-detail">
                    <small><MapPin /> LOCATION</small>
                    <a href={mapLink} target="_blank" rel="noreferrer">Vadodara, Gujarat, India <ArrowUpRight /></a>
                </div>
                <div className="contact-detail contact-detail-availability">
                    <small><BriefcaseBusiness /> AVAILABILITY</small>
                    <a href={gmailCompose} target="_blank" rel="noreferrer">Open to good opportunities <ArrowUpRight /></a>
                </div>
            </div>

            <div className="contact-socials">
                <div className="social-heading"><small>FIND ME AROUND THE WEB</small><span>ELSEWHERE / 03</span></div>
                {links.map(({ name, handle, url, Icon, note }) =>
                    <a href={url} target="_blank" rel="noreferrer" key={name} aria-label={`Open Chaitanya's ${name} profile`}>
                        <span className="social-name"><Icon /><span><b>{name}</b><small>{note}</small></span></span>
                        <span className="social-handle">{handle}<ArrowUpRight /></span>
                    </a>
                )}
            </div>
        </div>

        <footer>
            <a className="contact-mark" href="#home" aria-label="Back to homepage">CP<span>.</span></a>
            <small>DESIGNED WITH CURIOSITY. BUILT WITH INTENTION.</small>
            <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight /></a>
        </footer>
    </section>;
}

export default function App() { return <><Header /><main><Hero /><About /><Work /><Stack /><Contact /></main></> }
