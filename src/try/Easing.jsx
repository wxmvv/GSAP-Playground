import { gsap } from "gsap";
import React, { useRef, useState, useEffect } from "react";
import { LiveDemo } from "../component/LiveDemo";

import { GSDevTools } from "gsap/GSDevTools";

// DOC
// https://gsap.com/docs/v3/Eases/CustomEase

// TODO 使用svg 绘制曲线
// code
const scope = { React, gsap, useRef, useState, useEffect, GSDevTools };
const code = `
	function App() {
		const GsapToRef = useRef(null);
		const [points , setPoints] = useState([]) // 储存easing曲线
		const easingList = ["power1.inOut","power2.inOut","power3.inOut","power4.inOut","back.inOut(4)","bounce.inOut","circ.inOut","elastic.inOut(1,0.3)","expo.inOut","sine.inOut","steps(10)","rough({ strength: 1, points: 20, template: none.out, taper: none, randomize: true, clamp: false })","slow(0.7,0.7,false)","expoScale(0.5,7,none)"]
		const [easing, setEasing] = useState("power1.inOut") // 默认缓动函数
		
		const startAnimation = () => {
 	    	setPoints([]); // 重置曲线数据
			const tl = gsap.timeline({
	 	      onComplete: () => {
	 	        console.log("动画完成，缓动曲线数据:", points);
	 	      }
	 	    });
			
	 	    tl.fromTo(GsapToRef.current, {
				x:0,
			},{
	 	      duration: 2.5,
	 	      x: 500,
	 	      ease: easing, // 显示的easing
 			  onUpdate: function() {
 			    const progress = this.progress(); // 当前线性进度 [0, 1]
 			    const easedProgress = this.ratio; // 应用缓动后的进度值 [0, 1]
				setPoints(prev => [...prev, { x: progress, y: easedProgress }]);
 			  }
	 	    });
	 	  };
	
		return (
			<>
				<h1 className="menu-title">GSAP Easing</h1>
				<button className="btn w-30" onClick={startAnimation}>按我</button>
				<select className="select select-bordered" onChange={(e)=>{setEasing(e.target.value)}}>
					{easingList.map((item,index)=>{
						return <option key={index} value={item}>{item}</option>
					})}
				</select>
				<div className="outline-2 grid grid-cols-10 grid-rows-10 w-[500px] h-[500px] relative">

					{ /* 绘制方格 */}
					{
						[...Array(100)].map((item, index) => <div key={index} className="outline w-[50px] h-[50px]"></div>)
					}

					{ /* 绘制曲线 */}
					{points.map((point, index) => {
			          const left = point.x * 500 + "px";
			          const top = (500 - (point.y * 500)) + "px";
			          return (
			            <div
			              key={index}
			              className="absolute w-1 h-1 bg-red-500 rounded-full"
			              style={{
			                left: left,
			                top: top,
			                transform: "translate(-50%, -50%)"
			              }}
			            />
			          );
			        })}

					{ /* 需要移动的元素 */}
					<div ref={GsapToRef} className="outline absolute bottom-0 left-0">GSAP</div>
				</div>
			</>
		)
	}

`;

export const EasingLiveDemo = () => {
	return <LiveDemo code={code} scope={scope} title={"GSAP Easing"}></LiveDemo>;
};
