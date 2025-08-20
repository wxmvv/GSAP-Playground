// https://cesium.com/downloads/

import { Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer } from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import React, { useEffect, useRef } from 'react';

// Configuring CESIUM_BASE_URL

// CesiumJS requires a few static files to be hosted on your server, like web workers and SVG icons. Configure your module bundler to copy the following four directories and serve them as static files:

// node_modules/cesium/Build/Cesium/Workers
// node_modules/cesium/Build/Cesium/ThirdParty
// node_modules/cesium/Build/Cesium/Assets
// node_modules/cesium/Build/Cesium/Widgets

export function CesiumTest() {
	const initCesium = async () => {
		// const Cesium = await import('cesium');
		// const { Viewer, Ion, Cartesian3, Color, Math, Cartographic, ScreenSpaceEventHandler, ScreenSpaceEventType, KeyboardEventModifier } = Cesium;
		// const viewer = new Viewer('cesiumContainer');
		// const scene = viewer.scene;
		// const camera = scene.camera;
		// const ellipsoid = scene.globe.ellipsoid;
		Ion.defaultAccessToken =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2Y2ExNzEzMy1hMmM2LTQzNzktOTViYS03N2M3NjIxMzhlOTMiLCJpZCI6MzMzNjQ5LCJpYXQiOjE3NTU2NzYyNDZ9.pqUhjElAMra1_6lcAUWK4nwRyz4iDHXkMTM68lIPrTg';
		const viewer = new Viewer('cesiumContainer', {
			terrain: Terrain.fromWorldTerrain()
		});
		viewer.camera.flyTo({
			destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
			orientation: {
				heading: CesiumMath.toRadians(0.0),
				pitch: CesiumMath.toRadians(-15.0)
			}
		});
		const buildingTileset = await createOsmBuildingsAsync();
		viewer.scene.primitives.add(buildingTileset);
		window.CESIUM_BASE_URL = '/static/Cesium/';
	};
	useEffect(() => {
		initCesium();
	}, []);

	return <div id="cesiumContainer">Hello world Cesium!</div>;
}
