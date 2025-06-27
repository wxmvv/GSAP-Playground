import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Highlight, themes } from "prism-react-renderer";

export function LiveDemo({ code, scope, theme = themes.dracula, title }) {
	return (
		<LiveProvider code={code} scope={scope} theme={theme}>
			<div className="flex flex-col w-full h-lvh">
				<a className="btn h-[30px]" href="/">
					回首页
				</a>
				<h1 className="menu-title h-[30px]">{title}</h1>
				<div className="p-8 gap-8 flex flex-row w-full h-[calc(100%-60px)]">
					<div className="mockup-window border border-base-300 w-full text-sm font-mono">
						<LiveEditor className="flex-1/2 overflow-scroll bg-accent/40" />
						<LiveError className="flex-1/12 bg-accent/40" />
					</div>
					<div className="mockup-window border border-base-300 w-full">
						<LivePreview className="flex-1 flex flex-col bg-transparent" />
					</div>
				</div>
			</div>
		</LiveProvider>
	);
}
