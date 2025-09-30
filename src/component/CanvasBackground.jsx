import React from 'react';
import './CanvasBackgroundStyle.css';

export function CanvasBackground({ children, className = '', ...props }) {
	return (
		<>
			<div className={`${className} canvas-background w-full h-dvh p-20 bg-amber-50`} {...props}>
				{children}
			</div>
		</>
	);
}

export default CanvasBackground;
