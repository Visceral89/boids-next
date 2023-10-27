"use client";

import { useState, useRef, useEffect } from "react";
import Boid from "@/scripts/Boid.js";

const Canvas = () => {
	const canvasRef = useRef(null);
	const [boids, setBoids] = useState([]);

	useEffect(() => {
		const canvas = canvasRef.current;
		const c = canvas.getContext("2d");

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		// Add eventlistener to window, for resizing.
		window.addEventListener("resize", resizeCanvas);

		// Initialize Canvas
		resizeCanvas();
	});

	return <canvas></canvas>;
};

export default Canvas;
