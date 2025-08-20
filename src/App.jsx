import { Card } from './component/Card';
import routers from './routers.jsx';

function App() {
	return (
		<>
			<div className="p-20 flex flex-col gap-8">
				<h1 className="menu-title">GSAP Try</h1>
				<div className="flex flex-row flex-wrap gap-8">
					{routers.map((item, index) => {
						return <Card key={index} imgSrc={item.imgSrc} title={item.title} desc={item.desc} href={item.href}></Card>;
					})}
				</div>
			</div>
		</>
	);
}

export default App;
