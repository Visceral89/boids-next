"use client";

import { useState, useRef, useEffect } from "react";
import Boid from "@/scripts/Boid.js";
import Victor from "victor";

const Canvas = () => {
	const canvasRef = useRef(null);
	const [boids, setBoids] = useState([]);

	useEffect(() => {
		const canvas = canvasRef.current;
		const c = canvas.getContext("2d");

		// Resize Canvas function.
		const resizeCanvas = () => {
			var size = {
				width: window.innerWidth,
				height: window.innerHeight,
			};

			var center = new Victor(size.width / 2, size.height / 2);

			canvas.width = size.width;
			canvas.height = size.height;
		};
		// Add eventlistener to window, for resizing.
		window.addEventListener("resize", resizeCanvas);

		// Initialize Canvas
		resizeCanvas();
	});

	return <canvas></canvas>;
};

export default Canvas;


