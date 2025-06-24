import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Base from "./try/Base.jsx";
import { BaseLiveDemo } from "./try/Base.jsx";
import { EasingLiveDemo } from "./try/Easing.jsx";
import { StaggersLiveDemo } from "./try/Staggers.jsx";

import { HashRouter, BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter basename="/GSAP-Playground">
			{/* <HashRouter> */}
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/GSAP-Playground/base" element={<BaseLiveDemo />} />
				<Route path="/GSAP-Playground/easing" element={<EasingLiveDemo />} />
				<Route path="/GSAP-Playground/staggers" element={<StaggersLiveDemo />} />
			</Routes>
			{/* </HashRouter> */}
		</BrowserRouter>
	</StrictMode>
);
