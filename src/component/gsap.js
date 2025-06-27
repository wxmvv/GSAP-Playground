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

// 全部插件
gsap.registerPlugin(
	useGSAP,
	Draggable,
	DrawSVGPlugin,
	EaselPlugin,
	Flip,
	GSDevTools, // https://gsap.com/docs/v3/Plugins/GSDevTools 可以在浏览器中调试动画
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

// 全局默认值，也可以单独给每个动画添加
gsap.defaults({
	// overwrite: true,  // https://gsap.com/resources/conflict 多个动画冲突时的处理方式
	// ease: "power1.inOut",
	// duration: 1,
});
