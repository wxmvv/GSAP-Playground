import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "./component/gsap.js";

import { BrowserRouter, Route, Routes } from "react-router";

import routers from "./routers.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter basename="/GSAP-Playground">
			<Routes>
				<Route path="/" element={<App />} />
				{routers.map((router) => (
					<Route key={router.path} path={router.path} element={router.component} />
				))}
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
