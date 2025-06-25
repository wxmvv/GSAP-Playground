import { gsap } from "gsap";
import React, { useRef, useState, useEffect } from "react";
import { LiveDemo } from "../component/LiveDemo";

// DOC
// https://gsap.com/docs/v3/Installation

// code
const scope = { React, gsap, useRef };
const code = `
	function App() {
		const GsapToRef = useRef(null);
		const GsapFromRef = useRef(null);
		const GsapFromToRef = useRef(null);
		const GsapSetRef = useRef(null);
		const handleTo = () => {
			gsap.to(GsapToRef.current, {
				duration: 1,
				x: 100,
				ease: "power1.inOut"
			})
		}
		const handleFrom = () => {
			gsap.from(GsapFromRef.current, {
				duration: 1,
				x: 100,
				ease: "power1.inOut"
			})
		}
		const handleFromTo = () => {
			gsap.fromTo(GsapFromToRef.current, {
				duration: 5,
				x: 100,
			},{
				duration: 5,
				x: 0,
			})
		}
		const handleSet = () => {
			gsap.set(GsapSetRef.current, {
				x: 100,
				color:'blue',
			})
		}
		return (
			<>
				<h1 className="menu-title">GSAP Base</h1>
				<button className="btn w-30" onClick={handleTo}>
					按我 to
				</button>
				<div ref={GsapToRef} className="border w-20">GSAP</div>
				<button className="btn w-30" onClick={handleFrom}>
					按我 from
				</button>
				<div ref={GsapFromRef} className="border w-20">GSAP</div>
				<button className="btn w-30" onClick={handleFromTo}>
					按我 fromTo
				</button>
				<div ref={GsapFromToRef} className="border w-20">GSAP</div>
				<button className="btn w-30" onClick={handleSet}>
					按我 Set
				</button>
				<div ref={GsapSetRef} className="border w-20">GSAP</div>
			</>
		)
	}

`;

export const BaseLiveDemo = () => {
	return <LiveDemo code={code} scope={scope} title={"BASE Usage"}></LiveDemo>;
};
