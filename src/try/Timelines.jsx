import { gsap } from "gsap";
import React, { useRef, useState, useEffect } from "react";
import { LiveDemo } from "../component/LiveDemo";

// DOC
// https://gsap.com/resources/getting-started/timelines

// code
const scope = { React, gsap, useRef, useState, useEffect };
const code = `
	function App() {
		const tlRef = useRef(null);
		const [tlLog,setTlLog] = useState("");
		const startAnimation = () => {
			let tl = gsap.timeline({onComplete: handleOnComplete, onStart: handleOnStart, onUpdate: handleOnUpdate, onRepeat: handleOnRepeat, onReverseComplete: handleOnReverseComplete});
			tlRef.current = tl;
			tl.to("#green", { x: 400, duration: 2 });
			tl.to("#purple", { x: 400, duration: 1 });
			tl.to("#orange", { x: 400, duration: 1 });
		};
		function handleOnComplete() {
			console.log("onComplete");
			setTlLog("onComplete");
		}
		function handleOnStart() {
			console.log("onStart");
			setTlLog("onStart");
		}
		function handleOnUpdate() {
			console.log("onUpdate");
			setTlLog("onUpdate");
		}
		function handleOnRepeat() {
			console.log("onRepeat");
			setTlLog("onRepeat");
		}
		function handleOnReverseComplete() {
			console.log("onReverseComplete");
			setTlLog("onReverseComplete");
		}
		return (
			<>
				<h1 className="menu-title">GSAP Staggers</h1>
				<div>{tlLog}</div>
				<div className="flex flex-row w-[500px] flex-wrap">
					<button className="btn w-30" onClick={startAnimation}>startAnimation</button>
					<button className="btn w-30" onClick={()=>tlRef.current?.play()}>play</button>
					<button className="btn w-30" onClick={()=>tlRef.current?.pause()}>pause</button>
					<button className="btn w-30" onClick={()=>tlRef.current?.resume()}>resume</button>
					<button className="btn w-30" onClick={()=>tlRef.current?.reverse()}>reverse</button>
					<button className="btn w-30" onClick={()=>tlRef.current?.seek(0.5)}>seek(0.5)</button>
					<button className="btn w-30" onClick={()=>tlRef.current?.progress(0.25)}>progress(0.25)</button>
					<button className="btn w-30" onClick={()=>tlRef.current?.timeScale(0.5)}>timeScale(0.5)</button>
					<button className="btn w-30" onClick={()=>tlRef.current?.timeScale(2)}>timeScale(2)</button>
					<button className="btn w-30" onClick={()=>tlRef.current?.kill()}>kill</button>
					<button className="btn w-30" onClick={()=>tlRef.current?.timeScale(2).reverse()}>timeScale(2).reverse()</button>
				</div>
				
				<div className="outline-2 w-[500px] h-[150px] relative">
					<div id="green" className="bg-green-600 w-[50px] h-[50px]">green</div>
					<div id="purple" className="bg-purple-600 w-[50px] h-[50px]">purple</div>
					<div id="orange" className="bg-orange-600 w-[50px] h-[50px]">orange</div>
				</div>
			</>
		)
	}

`;

export const TimelinesLiveDemo = () => {
	return <LiveDemo code={code} scope={scope} title={"Timeline Usage"}></LiveDemo>;
};
