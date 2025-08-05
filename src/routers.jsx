import { BaseLiveDemo } from "./try/Base.jsx";
import { EasingLiveDemo } from "./try/Easing.jsx";
import { StaggersLiveDemo } from "./try/Staggers.jsx";
import { TimelinesLiveDemo } from "./try/Timelines.jsx";
import { ControlAndCallbacksLiveDemo } from "./try/ControlAndCallbacks.jsx";
import { Plugin_ScrollTriggerLiveDemo } from "./try/Plugin_ScrollTrigger.jsx";

import { CustomCursorLiveDemo } from "./usage/CustomCursor.jsx";

const basename = "/GSAP-Playground";

export const routers = [
	{
		path: "/base",
		href: `${basename}/base`,
		title: "Base",
		desc: "to from fromTo set 4最基础方法",
		component: <BaseLiveDemo />,
	},
	{
		path: "/easing",
		href: `${basename}/easing`,
		title: "Easing",
		desc: "动画的缓动曲线",
		component: <EasingLiveDemo />,
	},
	{
		path: "/staggers",
		href: `${basename}/staggers`,
		title: "Staggers",
		desc: "分级动画，让你的元素一个一个依次出现",
		component: <StaggersLiveDemo />,
	},
	{
		path: "/timelines",
		href: `${basename}/timelines`,
		title: "Timelines",
		desc: "时间序列动画",
		component: <TimelinesLiveDemo />,
	},
	{
		path: "/ControlAndCallbacks",
		href: `${basename}/ControlAndCallbacks`,
		title: "ControlAndCallbacks",
		desc: "控制器和回调函数",
		component: <ControlAndCallbacksLiveDemo />,
	},
	{
		path: "/Plugin_ScrollTrigger",
		href: `${basename}/Plugin_ScrollTrigger`,
		title: "Plugin_ScrollTrigger",
		desc: "插件-滚动触发",
		component: <Plugin_ScrollTriggerLiveDemo />,
	},
	{
		path: "/CustomCursor",
		href: `${basename}/CustomCursor`,
		title: "CustomCursor",
		desc: "自定义光标",
		component: <CustomCursorLiveDemo />,
	},
];

export default routers;
