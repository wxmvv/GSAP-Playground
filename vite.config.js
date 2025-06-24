import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	// build文件 放置在doc文件夹
	build: {
		outDir: "docs",
	},
	//静态资源路径
	assetsDir: "assets",
	//使用相对路径
	// base: "/GSAP-Playground/",
	// base: "https://wxmvv.github.io/GSAP-Playground/",
	base: "./",
	//插件
	plugins: [react(), tailwindcss()],
});
