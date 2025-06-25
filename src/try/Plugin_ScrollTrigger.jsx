import { gsap } from "gsap";
import React, { useRef, useState, useEffect } from "react";
import { LiveDemo } from "../component/LiveDemo";

// DOC
// https://gsap.com/docs/v3/Plugins/ScrollTrigger/

// code
// TODO Plugin_ScrollTrigger
const scope = { React, gsap, useRef, useState, useEffect };
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

export const Plugin_ScrollTriggerLiveDemo = () => {
	return <LiveDemo code={code} scope={scope} title={"Plugin_ScrollTrigger"}></LiveDemo>;
};
