const Victor = require("victor");

class Boid {
	constructor(boid) {
		// Positioning
		this.id = boid.id;
		this.position = new Victor(boid.x, boid.y);

		// Physics
		this.radius = boid.radius;
		this.mass = (4 / 3) * Math.PI * Math.pow(this.radius, 3);

		// Colors
		this.color = boid.color;
		this.racismCoefficient = boid.racismCoefficient;
		this.racism = boid.racism * this.racismCoefficient;

		// Speed
		this.quicknessCoefficient = boid.quicknessCoefficient;
		this.quickness = boid.quickness * this.quicknessCoefficient;

		// Introversion
		this.introversionCoefficient = boid.introversionCoefficient;
		this.introversion = boid.introversion * this.introversionCoefficient;

		// Velocity Calculations

		this.maxSpeed = speedIndex * this.quickness;
		this.speed = this.maxSpeed * 0.5;
		var radians = (Math.PI * getRandomInt(-99, 100)) / 100;
		this.velocity = new Victor(
			this.speed * Math.cos(radians),
			this.speed * Math.sin(radians)
		);
		this.maxForce = 0.5;
	}
}
