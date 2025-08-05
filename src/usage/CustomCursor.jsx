import { gsap } from 'gsap';
import React, { useRef, useState, useEffect } from 'react';
import { LiveDemo } from '../component/LiveDemo';

// DOC
// https://gsap.com/resources/getting-started/timelines

// code
const scope = { React, gsap, useRef, useState, useEffect };
const code = `
    function App() {
        const tlRef = useRef(null);
        
        return (
            <>
                <h1 className="menu-title">GSAP Staggers</h1>
                <button className="btn w-30" onClick={()=>tlRef.current?.play()}>play</button>
                <div class="flair flair--3 bg-amber-100"></div>
            </>
        )
    }

`;

export const CustomCursorLiveDemo = () => {
	return <LiveDemo code={code} scope={scope} title={'CustomCursor'}></LiveDemo>;
};
