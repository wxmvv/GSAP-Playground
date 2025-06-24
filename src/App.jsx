import { Card } from "./component/Card";

function App() {
	return (
		<>
			<div className="p-20 flex flex-col gap-8">
				<h1 className="menu-title">GSAP Try</h1>
				<div className="flex flex-row flex-wrap gap-8">
					<Card title="Base" desc="to from fromTo set 4最基础方法" href="/base"></Card>
					<Card title="Easing" desc="动画的缓动曲线" href="/easing"></Card>
					<Card title="Staggers" desc="分级动画，让你的元素一个一个依次出现" href="/staggers"></Card>
				</div>
			</div>
		</>
	);
}

export default App;
