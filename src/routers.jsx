import { BaseLiveDemo } from './try/Base.jsx';
import { EasingLiveDemo } from './try/Easing.jsx';
import { StaggersLiveDemo } from './try/Staggers.jsx';
import { TimelinesLiveDemo } from './try/Timelines.jsx';
import { ControlAndCallbacksLiveDemo } from './try/ControlAndCallbacks.jsx';
import { Plugin_ScrollTriggerLiveDemo } from './try/Plugin_ScrollTrigger.jsx';
import { CanvasTest } from './try/CanvasTest.jsx'
import { CustomCursorLiveDemo } from './usage/CustomCursor.jsx';

import { CesiumTest } from './try/CesiumTest.jsx';

const basename = '/GSAP-Playground';

export const routers = [
	{
		path: '/base',
		href: `${basename}/base`,
		title: 'Base',
		desc: 'to from fromTo set 4最基础方法',
		component: <BaseLiveDemo />,
		imgSrc: './images/GSAP_Logo.png'
	},
	{
		path: '/easing',
		href: `${basename}/easing`,
		title: 'Easing',
		desc: '动画的缓动曲线',
		component: <EasingLiveDemo />,
		imgSrc: './images/GSAP_Logo.png'
	},
	{
		path: '/staggers',
		href: `${basename}/staggers`,
		title: 'Staggers',
		desc: '分级动画，让你的元素一个一个依次出现',
		component: <StaggersLiveDemo />,
		imgSrc: './images/GSAP_Logo.png'
	},
	{
		path: '/timelines',
		href: `${basename}/timelines`,
		title: 'Timelines',
		desc: '时间序列动画',
		component: <TimelinesLiveDemo />,
		imgSrc: './images/GSAP_Logo.png'
	},
	{
		path: '/ControlAndCallbacks',
		href: `${basename}/ControlAndCallbacks`,
		title: 'ControlAndCallbacks',
		desc: '控制器和回调函数',
		component: <ControlAndCallbacksLiveDemo />,
		imgSrc: './images/GSAP_Logo.png'
	},
	{
		path: '/Plugin_ScrollTrigger',
		href: `${basename}/Plugin_ScrollTrigger`,
		title: 'Plugin_ScrollTrigger',
		desc: '插件-滚动触发',
		component: <Plugin_ScrollTriggerLiveDemo />,
		imgSrc: './images/GSAP_Logo.png'
	},
	{
		path: '/CustomCursor',
		href: `${basename}/CustomCursor`,
		title: 'CustomCursor',
		desc: '自定义光标',
		component: <CustomCursorLiveDemo />,
		imgSrc: './images/GSAP_Logo.png'
	},
	{
		path: '/cesium_test',
		href: `${basename}/cesium_test`,
		title: 'cesium_test',
		desc: '测试地图框架 cesium',
		component: <CesiumTest />,
		imgSrc: './images/cesium.png'
	},
	{
		path: '/canvas',
		href: `${basename}/canvas`,
		title: 'canvas 2D',
		desc: 'canvas画板基础实现',
		component: <CanvasTest />,
		imgSrc: './images/Canvas.jpg'
	}
];

export default routers;
