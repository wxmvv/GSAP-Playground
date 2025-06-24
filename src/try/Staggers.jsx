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
// https://gsap.com/docs/v3/Eases/CustomEase

// React Live 的作用域（scope），传入所有需要的依赖
const scope = { React, gsap, useRef, useState, useEffect };

// 要渲染的代码
const code = `
	function App() {
		const startAnimation = () => {
	 	    gsap.to(".box", {
				backgroundColor: "red",
 				duration: 0.5,   // 每个动画持续0.5秒
 				stagger: {
					// wrap advanced options in an object
						// amount: 0.5,  //总时间
						each: 0.1, //每个动画时间  each 和 amount 选一个即可
						axis: null,  // 'x' or 'y' or null
						from: 'random',  // center end edges random 11(index)
						grid: 'auto', 
						ease: 'power2.inOut',
						repeat: -1 // 立刻重复
					}  
			})
	 	  };
	
		return (
			<>
				<h1 className="menu-title">GSAP Staggers</h1>
				<button className="btn w-30" onClick={startAnimation}>按我</button>
				<div className="outline-2 grid grid-cols-10 grid-rows-10 w-[500px] h-[500px] relative">
					{ /* 绘制方格 */}
					{
						[...Array(100)].map((item, index) => <div key={index} className="box outline w-[50px] h-[50px]"></div>)
					}
				</div>
			</>
		)
	}

`;

// React Live 组件
export const StaggersLiveDemo = () => {
	return (
		<LiveProvider code={code} scope={scope} theme={themes.dracula}>
			<div className="flex flex-col w-full h-lvh">
				<a className="btn h-[30px]" href="/">
					回首页
				</a>
				<h1 className="menu-title h-[30px]">Staggers Usage</h1>
				<div className="p-8 gap-8 flex flex-row w-full h-[calc(100%-60px)]">
					<div className="mockup-window border border-base-300 w-full">
						<LiveEditor className="flex-1/2 overflow-scroll bg-green-50" />
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
