import React, { useState, useEffect, useRef } from 'react';
import { translations } from './i18n';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    ArrowRight,
    Globe,
    Activity,
    ShieldCheck,
    Box,
    Menu,
    X,
    ArrowUpRight,
    Zap,
    MapPin,
    Clock,
    Recycle,
} from 'lucide-react';
import { NumberTicker } from './components/magicui/number-ticker';

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────
   NAVBAR
   ───────────────────────────────────── */
const Navbar = ({ lang, setLang }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const t = translations[lang].nav;

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${isScrolled
                    ? 'w-[92%] md:w-[80%] max-w-5xl glass rounded-2xl py-4 px-6 shadow-lg'
                    : 'w-full max-w-7xl py-6 px-6 md:px-10'
                    }`}
            >
                <div className="flex items-center justify-between">
                    <div className="h-12 md:h-24 overflow-hidden flex items-start">
                        <img
                            src="/assets/logo_transparent.png"
                            alt="Armablock Logo"
                            className="h-14 md:h-28 object-contain object-top"
                        />
                    </div>

                    {/* Desktop Links */}
                    <div
                        className={`hidden md:flex items-center gap-8 ${isScrolled ? 'text-black' : 'text-white'
                            }`}
                    >
                        {['system', 'projects', 'process', 'franchise'].map((key) => (
                            <a
                                key={key}
                                href={`#${key}`}
                                className="text-sm font-medium hover:text-accent transition-colors duration-200 cursor-pointer"
                            >
                                {t[key]}
                            </a>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
                            className={`flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer ${isScrolled
                                ? 'border-black/20 text-black hover:bg-black/5'
                                : 'border-white/30 text-white hover:bg-white/10'
                                }`}
                        >
                            <Globe className="w-4 h-4" />
                            <span>{lang.toUpperCase()}</span>
                        </button>

                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center justify-center bg-accent text-white px-6 py-2.5 rounded-full font-medium text-sm hover:scale-105 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 cursor-pointer">
                            {t.contact}
                        </a>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${isScrolled ? 'text-black' : 'text-white'
                                }`}
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 z-[90] bg-black flex flex-col items-center justify-center gap-8 text-white">
                    {['system', 'projects', 'process', 'franchise'].map((key) => (
                        <a
                            key={key}
                            href={`#${key}`}
                            onClick={() => setMobileOpen(false)}
                            className="text-3xl font-bold tracking-tight hover:text-accent transition-colors cursor-pointer"
                        >
                            {t[key]}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className="mt-4 bg-accent flex justify-center text-white px-8 py-3 rounded-full font-medium text-lg cursor-pointer"
                    >
                        {t.contact}
                    </a>
                </div>
            )}
        </>
    );
};

/* ─────────────────────────────────────
   HERO
   ───────────────────────────────────── */
const Hero = ({ lang }) => {
    const containerRef = useRef(null);
    const t = translations[lang].hero;

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from('.hero-subtext', { y: 30, opacity: 0, duration: 1, delay: 0.3 })
                .from('.hero-h1-top', { y: 60, opacity: 0, duration: 1.2 }, '-=0.7')
                .from('.hero-h1-bottom', { y: 60, opacity: 0, duration: 1.2 }, '-=0.9')
                .from('.hero-btn', { y: 30, opacity: 0, duration: 0.8 }, '-=0.7')
                .from(
                    '.hero-scroll',
                    { opacity: 0, duration: 0.6 },
                    '-=0.3'
                );
        }, containerRef);
        return () => ctx.revert();
    }, [lang]);

    return (
        <section
            ref={containerRef}
            className="relative h-[100dvh] w-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 overflow-hidden bg-black"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/assets/hero-bg.jpg"
                    alt="Armablock Construction"
                    className="w-full h-full object-cover opacity-50"
                    style={{ objectPosition: '0% 60%', transform: 'scale(1.3)', transformOrigin: 'left center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/60"></div>
                {/* Extra overlay to hide old logo in top-right corner */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl">
                <p className="hero-subtext text-white/60 font-mono text-xs md:text-sm mb-6 tracking-[0.3em] uppercase">
                    {t.subtext}
                </p>
                <h1 className="hero-h1-top text-white text-5xl md:text-7xl lg:text-[6.5rem] font-bold leading-[0.9] tracking-tight uppercase">
                    {t.headlinePart1}
                </h1>
                <h1 className="hero-h1-bottom text-accent text-drama text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] mt-2 mb-10">
                    {t.headlinePart2}
                </h1>

                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hero-btn group inline-flex max-w-max items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-semibold text-base md:text-lg hover:bg-accent hover:text-white hover:scale-[1.03] transition-all duration-300 cursor-pointer shadow-2xl shadow-white/10">
                    <span>{t.cta}</span>
                    <div className="bg-black text-white p-2 rounded-full group-hover:bg-white group-hover:text-accent transition-colors duration-300">
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </a>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white/40"></div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────
   FEATURE CARDS
   ───────────────────────────────────── */
const DiagnosticShuffler = ({ t }) => {
    const [items, setItems] = useState([
        { id: 1, label: t.f1_1, icon: <Activity className="w-5 h-5 text-accent" /> },
        { id: 2, label: t.f1_2, icon: <Box className="w-5 h-5 text-accent" /> },
        { id: 3, label: t.f1_3, icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
    ]);

    useEffect(() => {
        setItems([
            { id: 1, label: t.f1_1, icon: <Activity className="w-5 h-5 text-accent" /> },
            { id: 2, label: t.f1_2, icon: <Box className="w-5 h-5 text-accent" /> },
            { id: 3, label: t.f1_3, icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
        ]);
    }, [t]);

    useEffect(() => {
        const interval = setInterval(() => {
            setItems((current) => {
                const newArr = [...current];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr;
            });
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-paper border border-black/8 rounded-3xl p-8 h-full min-h-[340px] flex flex-col justify-between shadow-sm card-hover cursor-pointer relative overflow-hidden">
            <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1">{t.title1}</h3>
                <p className="text-black/50 text-sm font-mono">{t.sub1}</p>
            </div>
            <div className="relative h-44 mt-6">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className="absolute left-0 right-0 bg-offWhite border border-black/5 rounded-2xl p-4 flex items-center gap-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-sm"
                        style={{
                            transform: `translateY(${index * 24}px) scale(${1 - index * 0.04})`,
                            opacity: 1 - index * 0.25,
                            zIndex: 10 - index,
                        }}
                    >
                        {item.icon}
                        <span className="font-medium text-sm">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TelemetryTypewriter = ({ t }) => {
    const [text, setText] = useState('');
    const fullText = t.f2_feed;
    const intervalRef = useRef(null);

    useEffect(() => {
        let i = 0;
        setText('');

        const startTyping = () => {
            intervalRef.current = setInterval(() => {
                setText(fullText.slice(0, i));
                i++;
                if (i > fullText.length) {
                    clearInterval(intervalRef.current);
                    setTimeout(() => {
                        i = 0;
                        setText('');
                        startTyping();
                    }, 4000);
                }
            }, 40);
        };

        startTyping();
        return () => clearInterval(intervalRef.current);
    }, [fullText]);

    return (
        <div className="bg-[#0A0A0A] text-white border border-white/5 rounded-3xl p-8 h-full min-h-[340px] flex flex-col shadow-sm card-hover cursor-pointer">
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">{t.title2}</h3>
                    <p className="text-white/40 text-sm font-mono mt-1">{t.sub2}</p>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-data text-xs text-green-400">LIVE</span>
                </div>
            </div>
            <div className="mt-auto bg-black/60 p-5 rounded-2xl border border-white/8 flex-1 flex items-start overflow-hidden">
                <pre className="text-data text-xs md:text-sm text-green-400/90 leading-relaxed whitespace-pre-wrap font-mono">
                    {text}
                    <span className="inline-block w-2 bg-accent ml-0.5 animate-pulse h-4 align-middle"></span>
                </pre>
            </div>
        </div>
    );
};

const ProtocolScheduler = ({ t }) => {
    const containerRef = useRef(null);
    const steps = [t.f3_step1, t.f3_step2, t.f3_step3];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.to('.cursor-dot', { x: 30, y: 60, duration: 0.6, ease: 'power2.inOut', delay: 0.5 })
                .to('.sched-btn-0', { scale: 0.95, duration: 0.15, yoyo: true, repeat: 1, backgroundColor: '#E63B2E', color: 'white' })
                .to('.cursor-dot', { x: 130, y: 60, duration: 0.6, ease: 'power2.inOut', delay: 0.3 })
                .to('.sched-btn-1', { scale: 0.95, duration: 0.15, yoyo: true, repeat: 1, backgroundColor: '#E63B2E', color: 'white' })
                .to('.cursor-dot', { x: 230, y: 60, duration: 0.6, ease: 'power2.inOut', delay: 0.3 })
                .to('.sched-btn-2', { scale: 0.95, duration: 0.15, yoyo: true, repeat: 1, backgroundColor: '#E63B2E', color: 'white' })
                .to('.cursor-dot', { opacity: 0, duration: 0.3 })
                .to(['.sched-btn-0', '.sched-btn-1', '.sched-btn-2'], { backgroundColor: 'transparent', color: '#111111', duration: 0.3 })
                .set('.cursor-dot', { x: 0, y: 0, opacity: 1 });
        }, containerRef);
        return () => ctx.revert();
    }, [t]);

    return (
        <div className="bg-paper border border-black/8 rounded-3xl p-8 h-full min-h-[340px] flex flex-col justify-between shadow-sm card-hover cursor-pointer">
            <div>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-1">{t.title3}</h3>
                <p className="text-black/50 text-sm font-mono">{t.sub3}</p>
            </div>

            <div className="relative h-36 flex items-center justify-around" ref={containerRef}>
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className={`sched-btn-${i} px-4 py-2.5 rounded-xl border border-black/15 text-xs font-mono font-medium transition-colors duration-200`}
                    >
                        {step}
                    </div>
                ))}
                <div className="cursor-dot absolute top-0 left-0 w-5 h-5 z-10 pointer-events-none">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 2L19 14L12 14L15 22L11 22L8 14L5 16Z" fill="#111" stroke="white" strokeWidth="1.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

const Features = ({ lang }) => {
    const t = translations[lang].features;
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power2.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [lang]);

    return (
        <section id="system" ref={sectionRef} className="py-20 md:py-28 px-6 md:px-16 bg-offWhite w-full">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="feature-card"><DiagnosticShuffler t={t} /></div>
                    <div className="feature-card"><TelemetryTypewriter t={t} /></div>
                    <div className="feature-card"><ProtocolScheduler t={t} /></div>
                </div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────
   PHILOSOPHY
   ───────────────────────────────────── */
const Philosophy = ({ lang }) => {
    const t = translations[lang].philosophy;
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.phil-text', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 65%',
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.25,
                ease: 'power2.out',
            });
        }, containerRef);
        return () => ctx.revert();
    }, [lang]);

    return (
        <section
            ref={containerRef}
            className="relative py-32 md:py-44 px-6 md:px-16 bg-black text-white overflow-hidden"
        >
            <div className="absolute inset-0 opacity-15 pointer-events-none">
                <img src="/assets/cutaway.jpg" alt="" className="w-full h-full object-cover grayscale" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                <p className="phil-text text-lg md:text-xl text-white/40 leading-relaxed font-light max-w-2xl">
                    {t.neutral}
                </p>
                <p className="phil-text text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                    {t.bold1} <span className="text-accent text-drama">{t.accent}</span>:
                    <br />
                    {t.bold2}
                </p>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────
   PROTOCOL — Stacking Cards
   ───────────────────────────────────── */
const Protocol = ({ lang }) => {
    const t = translations[lang].protocol;
    const sectionRef = useRef(null);

    const cards = [
        { title: t.card1Title, desc: t.card1Desc, img: '/assets/technical.jpg' },
        { title: t.card2Title, desc: t.card2Desc, img: '/assets/construction.jpg' },
        { title: t.card3Title, desc: t.card3Desc, img: '/assets/hero-bg-2.jpg' },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.protocol-header', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
            });

            // Entrance animation — all screen sizes
            const cardEls = gsap.utils.toArray('.protocol-card');
            cardEls.forEach((card) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                });
            });

            // Stacking sticky effect — desktop only via matchMedia
            ScrollTrigger.matchMedia({
                "(min-width: 768px)": function () {
                    const desktopCards = gsap.utils.toArray('.protocol-card');
                    desktopCards.forEach((card, i) => {
                        gsap.to(card, {
                            scrollTrigger: {
                                trigger: card,
                                start: `top ${15 + (i * 5)}%`,
                                endTrigger: ".protocol-end",
                                end: "bottom bottom",
                                pin: true,
                                pinSpacing: false,
                                scrub: true,
                            },
                            scale: 1 - ((desktopCards.length - i) * 0.03),
                            opacity: i === desktopCards.length - 1 ? 1 : 0.6,
                        });
                    });
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [lang]);

    return (
        <section id="process" ref={sectionRef} className="py-20 md:py-28 px-6 md:px-16 bg-offWhite">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 max-w-2xl">
                    <h2 className="protocol-header text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                        {t.sectionTitle}
                    </h2>
                    <p className="protocol-header text-black/50 text-base md:text-lg font-mono">
                        {t.sectionSub}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 relative pb-20 protocol-end">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="protocol-card group flex flex-col md:flex-row bg-paper border border-black/8 rounded-[2rem] overflow-hidden shadow-xl"
                        >
                            <div className="md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 group-hover:text-accent transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-black/60 text-lg leading-relaxed max-w-md">
                                    {card.desc}
                                </p>
                            </div>
                            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────
   STATS
   ───────────────────────────────────── */
const parseValue = (val) => {
    if (typeof val !== 'string') return { num: null, prefix: '', suffix: '' };
    const match = val.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
    if (match) {
        return {
            prefix: match[1] || "",
            num: parseFloat(match[2]),
            suffix: match[3] || ""
        };
    }
    return { num: null, prefix: '', suffix: '' };
};

const StatItem = ({ value, label, icon }) => {
    const ref = useRef(null);
    const { prefix, num, suffix } = parseValue(value);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(ref.current, {
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 85%',
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div ref={ref} className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent mb-4">
                {icon}
            </div>
            <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2 flex items-center justify-center">
                {num !== null ? (
                    <>
                        {prefix && <span>{prefix}</span>}
                        <NumberTicker value={num} className="text-black dark:text-white" />
                        {suffix && <span>{suffix}</span>}
                    </>
                ) : (
                    <span>{value}</span>
                )}
            </div>
            <div className="text-black/50 text-sm font-mono uppercase tracking-wider">{label}</div>
        </div>
    );
};

const Stats = ({ lang }) => {
    const t = translations[lang].stats;

    return (
        <section className="py-20 md:py-28 px-6 md:px-16 bg-paper border-y border-black/8">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                <StatItem value={t.stat1} label={t.label1} icon={<Zap className="w-5 h-5" />} />
                <StatItem value={t.stat2} label={t.label2} icon={<MapPin className="w-5 h-5" />} />
                <StatItem value={t.stat3} label={t.label3} icon={<Clock className="w-5 h-5" />} />
                <StatItem value={t.stat4} label={t.label4} icon={<Recycle className="w-5 h-5" />} />
            </div>
        </section>
    );
};

/* ─────────────────────────────────────
   PROJECTS
   ───────────────────────────────────── */
const Projects = ({ lang }) => {
    const t = translations[lang].projects;
    const containerRef = useRef(null);

    const projects = [
        { id: '01', title: t.p1Title, desc: t.p1Desc, image: '/assets/construction.jpg' },
        { id: '02', title: t.p2Title, desc: t.p2Desc, image: '/assets/technical.jpg' },
        { id: '03', title: t.p3Title, desc: t.p3Desc, image: '/assets/hero-bg-2.jpg' },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.proj-heading', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
            });

            gsap.from('.proj-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });
        }, containerRef);
        return () => ctx.revert();
    }, [lang]);

    return (
        <section id="projects" ref={containerRef} className="py-24 md:py-32 px-6 md:px-16 bg-offWhite border-t border-black/8 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <h2 className="proj-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                            {t.sectionTitle}
                        </h2>
                        <p className="proj-heading text-black/50 text-base md:text-lg font-mono">
                            {t.sectionSub}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((proj, i) => (
                        <div key={i} className="proj-card group relative">
                            <div className="relative h-80 md:h-[28rem] rounded-[2rem] overflow-hidden bg-black mb-6">
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-sm px-4 py-2 rounded-full">
                                    PRJ-{proj.id}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
                                {proj.title}
                            </h3>
                            <p className="text-black/60 leading-relaxed text-sm">
                                {proj.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────
   FRANCHISE
   ───────────────────────────────────── */
const Franchise = ({ lang }) => {
    const t = translations[lang].franchise;
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.fran-text', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 70%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            });

            gsap.from('.fran-img', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                },
                scale: 1.1,
                opacity: 0,
                duration: 1.5,
                ease: 'power2.out',
            });
        }, containerRef);
        return () => ctx.revert();
    }, [lang]);

    return (
        <section id="franchise" ref={containerRef} className="py-0 bg-black text-white relative z-10 w-full overflow-hidden border-t border-white/10">
            <div className="flex flex-col lg:flex-row min-h-[80vh]">
                {/* Text Content */}
                <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-24 flex flex-col justify-center relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <h2 className="fran-text text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                        {t.sectionTitle}
                    </h2>
                    <p className="fran-text text-white/60 text-lg md:text-xl font-light mb-12 max-w-lg">
                        {t.sectionSub}
                    </p>

                    <div className="space-y-10">
                        <div className="fran-text">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[1px] bg-accent"></div>
                                <h4 className="text-sm font-mono tracking-widest uppercase text-accent">{t.opportunity}</h4>
                            </div>
                            <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-md">
                                {t.oppDesc}
                            </p>
                        </div>

                        <div className="fran-text">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-[1px] bg-accent"></div>
                                <h4 className="text-sm font-mono tracking-widest uppercase text-accent">{t.support}</h4>
                            </div>
                            <p className="text-white/70 leading-relaxed text-base md:text-lg max-w-md">
                                {t.supportDesc}
                            </p>
                        </div>
                    </div>

                    <div className="fran-text mt-14">
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent border-2 border-white/20 hover:border-white rounded-full overflow-hidden cursor-pointer">
                            <span className="relative z-10 flex items-center gap-3">
                                {t.button} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-100 group-hover:bg-white/5"></div>
                        </a>
                    </div>
                </div>

                {/* Image Content */}
                <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
                    <img
                        src="/assets/cutaway.jpg"
                        alt="Armablock Manufacturing"
                        className="fran-img absolute inset-0 w-full h-full object-cover grayscale opacity-60"
                        style={{ transformOrigin: 'center center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black via-black/40 to-transparent"></div>

                    {/* Decorative Schematics overlay */}
                    <div className="absolute bottom-10 right-10 border border-white/10 bg-black/40 backdrop-blur-md p-6 rounded-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                            <span className="text-xs font-mono text-white/50 tracking-widest">GLOBAL DEPLOYMENT</span>
                        </div>
                        <div className="text-3xl font-bold font-mono">24/7</div>
                        <div className="text-xs text-white/40 mt-1 uppercase">Active Monitoring</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────
   CTA
   ───────────────────────────────────── */
const CTA = ({ lang }) => {
    const t = translations[lang].cta;
    const ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.cta-content', {
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top 70%',
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
            });
        }, ref);
        return () => ctx.revert();
    }, [lang]);

    return (
        <section ref={ref} className="relative py-32 md:py-44 px-6 md:px-16 bg-black text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/5 pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="cta-content text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                    {t.headline}
                </h2>
                <p className="cta-content text-white/50 text-lg md:text-xl mb-10 max-w-xl mx-auto">
                    {t.sub}
                </p>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="cta-content group inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 cursor-pointer">
                    <span>{t.button}</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </div>
        </section>
    );
};

/* ─────────────────────────────────────
   FOOTER
   ───────────────────────────────────── */
const Footer = ({ lang }) => {
    const t = translations[lang].footer;

    const linkClass = 'text-white/40 text-sm hover:text-white transition-colors duration-200 cursor-pointer block py-1';
    const colHeadClass = 'text-white/70 text-xs font-mono uppercase tracking-widest mb-4';

    return (
        <footer className="bg-[#0A0A0A] text-white pt-20 pb-8 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="h-28 overflow-hidden mb-6">
                            <img
                                src="/assets/logo_transparent.png"
                                alt="Armablock"
                                className="h-32 object-contain object-top mb-6"
                            />
                        </div>
                        <p className="text-white/30 text-sm leading-relaxed max-w-xs">
                            {t.tagline}
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className={colHeadClass}>{t.colProduct}</h4>
                        <a href="#system" className={linkClass}>{t.linkSystem}</a>
                        <a href="#process" className={linkClass}>{t.linkProcess}</a>
                        <a href="#projects" className={linkClass}>{t.linkProjects}</a>
                        <a href="#" className={linkClass}>{t.linkSpecs}</a>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className={colHeadClass}>{t.colCompany}</h4>
                        <a href="#" className={linkClass}>{t.linkAbout}</a>
                        <a href="#franchise" className={linkClass}>{t.linkFranchise}</a>
                        <a href="#" className={linkClass}>{t.linkCareers}</a>
                        <a href="#" className={linkClass}>{t.linkPress}</a>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className={colHeadClass}>{t.colConnect}</h4>
                        <a href="#" className={linkClass}>{t.linkContact}</a>
                        <a href="#" className={linkClass}>{t.linkLinkedIn}</a>
                        <a href="#" className={linkClass}>{t.linkInstagram}</a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/25 text-xs">{t.copyright}</p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-white/30 text-xs font-mono">{t.status}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

/* ─────────────────────────────────────
   WhatsApp Floating Button
   ───────────────────────────────────── */
const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Chat on WhatsApp"
        >
            <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.47-1.761-1.643-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
            </svg>
        </a>
    );
};

/* ─────────────────────────────────────
   MAIN APP
   ───────────────────────────────────── */
function App() {
    const [lang, setLang] = useState('en');
    const bgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(bgRef.current, {
                y: '20vh',
                ease: 'none',
                scrollTrigger: {
                    trigger: document.documentElement,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true,
                },
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="relative w-full bg-offWhite min-h-screen">
            {/* Parallax Blueprint Image 
                Place your generated image at public/assets/blueprint-bg.jpg 
                Opacity is set very low (0.04) so it doesn't distract from content. 
            */}
            <div
                ref={bgRef}
                className="fixed top-[-20vh] left-0 w-full h-[140vh] z-0 pointer-events-none opacity-[0.15] mix-blend-multiply"
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: 'url(/assets/blueprint-bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: 'scale(1.05)',
                        transformOrigin: 'center center'
                    }}
                ></div>
            </div>

            <div className="noise-overlay"></div>

            <div className="relative z-10 flex flex-col w-full h-full">
                <Navbar lang={lang} setLang={setLang} />
                <Hero lang={lang} />
                <Features lang={lang} />
                <Philosophy lang={lang} />
                <Protocol lang={lang} />
                <Stats lang={lang} />
                <Projects lang={lang} />
                <Franchise lang={lang} />
                <CTA lang={lang} />
                <Footer lang={lang} />
            </div>
            <FloatingWhatsApp />
        </div>
    );
}

export default App;
