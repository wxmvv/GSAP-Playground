import React from 'react';
import CanvasBackground from '../component/CanvasBackground';
// import { gsap } from 'gsap';

export function CanvasTest() {
	const canvasRef = React.useRef(null);
	const ctx = React.useRef(null);

	const [drawing, setDrawing] = React.useState(false);
	const [startPoint, setStartPoint] = React.useState({ x: 0, y: 0 });
	const [info, setInfo] = React.useState({ x: 0, y: 0 });
	// const [canvasPoint, setCanvasPoint] = React.useState({ x: 0, y: 0 });

	React.useEffect(() => {
		if (canvasRef.current === null) return;
		ctx.current = canvasRef.current.getContext('2d');
		console.log('canvas', canvasRef.current, ctx.current);
		canvasRef.current.width = canvasRef.current.clientWidth;
		canvasRef.current.height = canvasRef.current.clientHeight;
	}, [canvasRef]);

	const getCanvasPoint = (e) => {
		const rect = canvasRef.current.getBoundingClientRect();
		return {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		};
	};

	const onmousedown = (e) => {
		console.log('mousedown', e);
		const point = getCanvasPoint(e);
		setStartPoint({ x: point.x, y: point.y });
		setDrawing(true);
	};
	const onmousemove = (e) => {
		// console.log('mousemove', e);
		const currentPoint = getCanvasPoint(e);
    setInfo({ x: currentPoint.x, y: currentPoint.y });
		if (!drawing) return;
		ctx.current.beginPath();
		ctx.current.moveTo(startPoint.x, startPoint.y);
		ctx.current.lineTo(currentPoint.x, currentPoint.y);
		ctx.current.stroke();
		setStartPoint(currentPoint);
	};
	const onmouseup = (e) => {
		console.log('mouseup', e);
		setDrawing(false);
	};

	const handleReset = () => {
		console.log('reset canvas');
		ctx.current.clearRect(
			0,
			0,
			canvasRef.current.width,
			canvasRef.current.height
		);
	};

  const handleSetColor = () => {
    console.log('set color');
    ctx.current.strokeStyle = '#ff0000';
  }

  const handleSetWidth = () => {
    console.log('set width');
    ctx.current.lineWidth = 10;
  }
	return (
		<>
			<CanvasBackground>
				<div className="relative border border-gray-800">
					<div className="absolute top-0 right-0 z-10">
						<button onClick={handleReset} type="button" className="btn">
							重置画布
						</button>
						<button onClick={handleSetColor} type="button" className="btn">
							颜色
						</button>
						<button onClick={handleSetWidth} type="button" className="btn">
							宽度
						</button>
					</div>
					<div className="absolute top-10 right-0 z-10">
						InfoBox: {JSON.stringify(info)}
					</div>
					<canvas
						onMouseUp={onmouseup}
						onMouseDown={onmousedown}
						onMouseMove={onmousemove}
						ref={canvasRef}
						className="w-full h-96 bg-cyan-500"
					>
						<div>换个浏览器吧,球球了！</div>
					</canvas>
				</div>
			</CanvasBackground>
		</>
	);
}
