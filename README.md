# HTML5 Canvas Basics

This repository provides examples and explanations of using the native HTML5 `<canvas>` tag to create dynamic graphics and visualizations.

## Introduction

This code defines a JavaScript class Circle that represents a circle object on an HTML5 canvas. The purpose of the code is to create multiple circles with random positions, velocities, and sizes, animate them, and handle their movement within the canvas.

Here's a breakdown of the code:

## Circle Class Definition:

The Circle class has a constructor that initializes properties such as x, y (position), radius (size), dx, and dy (velocity components).
It has two methods: draw and update.
The draw method draws the circle on the canvas using the arc method of the canvas context (c).
The update method updates the position of the circle based on its velocity (dx and dy), and it also handles collision detection with the canvas boundaries.

## Circle Array Initialization:

An array circleArr is initialized to hold instances of the Circle class.
A loop creates 100 circles with random positions (x and y), velocities (dx and dy), and sizes (radius). These circles are then pushed into the circleArr.

## Animation Loop:

The animate function is defined using requestAnimationFrame to create a continuous animation loop.
Inside the animation loop, the canvas is cleared (clearRect) to remove previous frames.
For each circle in the circleArr, the update method is called to update its position and draw it on the canvas.
Overall, the purpose of this code is to demonstrate how to create and animate multiple circles on an HTML5 canvas using object-oriented programming principles in JavaScript. The circles move around the canvas, bouncing off its boundaries, creating a visually dynamic and interactive animation.
