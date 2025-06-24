import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	// build文件 放置在doc文件夹
	build: {
		outDir: "docs",
	},
	//使用相对路径
	base: "./",
	plugins: [react(), tailwindcss()],
});
