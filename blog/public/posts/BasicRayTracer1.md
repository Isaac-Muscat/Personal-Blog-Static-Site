---
title: "Basic Ray Tracer in C++"
date: "2022-11-01"
coverImage: "/images/RayTracingDark1.png"
tags: [
	"project",
	"Graphics",
	"C++"
]
---

## Inspiration
I read through Physically Based Rendering, Real Time Rendering, and the Raytracing in One Weekend series and I was inspired to make a small raytracer as a first prototype in C++. I am hoping to create another one with glossy BRDFs and dielectric materials in the future as this one is lacking some features and it's a little slow. 

The image is currently rendered on the CPU to an array and then it is loaded to a texture and rendered on an OpenGL quad to view the results as it is being rendered to disk.

## The Code
You can view the github repository for this basic ray tracer here at [github.com/Isaac-Muscat/BasicRayTracer](https://github.com/Isaac-Muscat/BasicRayTracer).