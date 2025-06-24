import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

import { CustomEase } from "gsap/CustomEase";
// CustomBounce requires CustomEase
import { CustomBounce } from "gsap/CustomBounce";
// CustomWiggle requires CustomEase
import { CustomWiggle } from "gsap/CustomWiggle";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";

import { Draggable } from "gsap/Draggable";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { Flip } from "gsap/Flip";
import { GSDevTools } from "gsap/GSDevTools";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { Observer } from "gsap/Observer";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

import { useState, useEffect, useRef } from "react";
gsap.registerPlugin(
	useGSAP,
	Draggable,
	DrawSVGPlugin,
	EaselPlugin,
	Flip,
	GSDevTools,
	InertiaPlugin,
	MotionPathHelper,
	MotionPathPlugin,
	MorphSVGPlugin,
	Observer,
	Physics2DPlugin,
	PhysicsPropsPlugin,
	PixiPlugin,
	ScrambleTextPlugin,
	ScrollTrigger,
	ScrollSmoother,
	ScrollToPlugin,
	SplitText,
	TextPlugin,
	RoughEase,
	ExpoScaleEase,
	SlowMo,
	CustomEase,
	CustomBounce,
	CustomWiggle
);

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Highlight, themes } from "prism-react-renderer";
// https://gsap.com/docs/v3/Installation
export function Base() {
	const GsapRef = useRef(null);
	const handleCick = () => {
		gsap.to(GsapRef.current, {
			duration: 1,
			x: 100,
			ease: "power1.inOut",
		});
	};
	return (
		<div className="w-full bg-transparent flex flex-col">
			<h1>GSAP Base</h1>
			<button className="btn" onClick={handleCick}>
				按我
			</button>
			<div id="test" ref={GsapRef}>
				<h1>GSAP</h1>
			</div>
			;
		</div>
	);
}

// React Live 的作用域（scope），传入所有需要的依赖
const scope = { React, gsap, Base, useRef };

// 要渲染的代码
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

// React Live 组件
export const BaseLiveDemo = () => {
	return (
		<LiveProvider code={code} scope={scope} theme={themes.dracula}>
			<div className="flex flex-col w-full h-lvh">
				<a className="btn h-[30px]" href="/">
					回首页
				</a>
				<h1 className="menu-title h-[30px]">BASE Usage</h1>
				<div className="p-8 gap-8 flex flex-row w-full h-[calc(100%-60px)]">
					<div className="mockup-window border border-base-300 w-full">
						<LiveEditor className="flex-1/2 overflow-scroll bg-green-50 " />
						<LiveError className="flex-1/12" />
					</div>
					<div className="mockup-window border border-base-300 w-full">
						<LivePreview className="flex-1 flex flex-col p-8" />
					</div>
				</div>
			</div>
		</LiveProvider>
	);
};

export default Base;
