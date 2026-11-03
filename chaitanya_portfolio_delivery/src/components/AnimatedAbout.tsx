import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./AnimatedAbout.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
    { number: "300+", label: "DSA problems solved" },
    { number: "03", label: "Major projects built" },
    { number: "TOP 5", label: "PU Code Hackathon" },
];

export default function AnimatedAbout() {
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const intro = gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-animated",
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
            });

            intro
                .from(".about-kicker", {
                    y: 25,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                })
                .from(
                    ".about-heading-line",
                    {
                        y: 90,
                        opacity: 0,
                        rotateX: -35,
                        stagger: 0.16,
                        duration: 1,
                        ease: "power4.out",
                    },
                    "-=0.25"
                )
                .from(
                    ".about-copy",
                    {
                        y: 35,
                        opacity: 0,
                        stagger: 0.18,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.45"
                )
                .from(
                    ".about-stat",
                    {
                        y: 45,
                        opacity: 0,
                        scale: 0.92,
                        stagger: 0.14,
                        duration: 0.7,
                        ease: "back.out(1.5)",
                    },
                    "-=0.35"
                );

            gsap.to(".about-orbit", {
                rotation: 360,
                duration: 32,
                repeat: -1,
                ease: "none",
            });

            gsap.to(".about-core", {
                y: -14,
                duration: 2.2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".about-glow", {
                scale: 1.25,
                opacity: 0.65,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            className="about-animated"
            id="about"
            ref={sectionRef}
        >
            <div className="about-topline">
                <span className="about-kicker">01 / ABOUT ME</span>
                <span className="about-kicker">THE PERSON BEHIND THE CODE</span>
            </div>

            <div className="about-layout">
                <div className="about-visual">
                    <div className="about-glow" />

                    <div className="about-orbit">
                        <span className="orbit-dot orbit-dot-one" />
                        <span className="orbit-dot orbit-dot-two" />
                        <span className="orbit-dot orbit-dot-three" />
                    </div>

                    <div className="about-core">
                        <span className="core-initial">C</span>
                        <span className="core-caption">BUILD · CREATE · REPEAT</span>
                    </div>

                    <span className="visual-coordinate">21°08' N / 73°06' E</span>
                    <span className="visual-index">CP — 001</span>
                </div>

                <div className="about-content">
                    <span className="about-kicker">A LITTLE INTRODUCTION</span>

                    <h2 className="about-heading">
                        <span className="about-heading-line">Engineering</span>
                        <span className="about-heading-line">
                            mind. <em>Creative</em>
                        </span>
                        <span className="about-heading-line">execution.</span>
                    </h2>

                    <p className="about-copy">
                        I'm Chaitanya Patil, a Computer Science student and
                        frontend-focused developer who enjoys turning complex
                        ideas into thoughtful digital experiences.
                    </p>

                    <p className="about-copy">
                        I work across React, TypeScript and modern web
                        technologies, building products that bring together
                        clean interfaces, practical problem-solving and
                        meaningful functionality.
                    </p>

                    <p className="about-copy">
                        From disaster resource optimisation to travel planning
                        and business management systems, I enjoy taking an idea
                        from concept to a working product.
                    </p>

                    <div className="about-stats">
                        {stats.map((stat) => (
                            <div className="about-stat" key={stat.label}>
                                <strong>{stat.number}</strong>
                                <span>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}