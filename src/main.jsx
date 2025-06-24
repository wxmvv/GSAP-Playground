import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Base from "./try/Base.jsx";
import { BaseLiveDemo } from "./try/Base.jsx";
import { EasingLiveDemo } from "./try/Easing.jsx";
import { StaggersLiveDemo } from "./try/Staggers.jsx";

import { HashRouter, BrowserRouter, Route, Routes } from "react-router";
// import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter basename="/GSAP-Playground">
			{/* <HashRouter basename="/GSAP-Playground"> */}
			<Routes>
				<Route basename="/GSAP-Playground" path="/" element={<App />} />
				<Route basename="/GSAP-Playground" path="/base" element={<BaseLiveDemo />} />
				<Route basename="/GSAP-Playground" path="/easing" element={<EasingLiveDemo />} />
				<Route basename="/GSAP-Playground" path="/staggers" element={<StaggersLiveDemo />} />
			</Routes>
			{/* </HashRouter> */}
		</BrowserRouter>
	</StrictMode>
);
