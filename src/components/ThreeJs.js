/* eslint-disable require-jsdoc */
import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "@/styles/components/ThreeJs.module.scss";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeBox = () => {
	const containerRef = useRef();

	useEffect(() => {
		if (!containerRef.current) return;

		// Set up scene, camera, and renderer
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.set(1, 1, 3);

		const renderer = new THREE.WebGLRenderer({ alpha: true });

		renderer.setSize(window.innerWidth, window.innerHeight);

		containerRef.current.appendChild(renderer.domElement);

		// Add lighting
		// const ambientLight = new THREE.Light(0xffffff, 10);
		// scene.add(ambientLight);

		const directionalLight = new THREE.HemisphereLight(0xffffff, 2);
		directionalLight.position.set(1, 1, 2);
		scene.add(directionalLight);

		// Prevent scrolling behavior
		const handleWheel = (event) => {
			event.preventDefault();
		};
		renderer.domElement.addEventListener("wheel", handleWheel);

		// OrbitControls setup
		const orbit = new OrbitControls(camera, renderer.domElement);
		orbit.enableZoom = false;
		orbit.enablePan = false;
		orbit.enableDamping = true;
		orbit.autoRotate = true;
		orbit.autoRotateSpeed = 0.4;

		// Add a basic sphere
		const geometry = new THREE.SphereGeometry(2, 32, 32);
		const textureLoader = new THREE.TextureLoader(); // Create a new instance of TextureLoader

		const material = new THREE.MeshMatcapMaterial({
			map: textureLoader.load("/img/HomeBroadcast/world.jpg"), // Use the loaded texture
		});
		const sphere = new THREE.Mesh(geometry, material);
		scene.add(sphere);
		sphere.scale.set(1, 1, 1);

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);
			orbit.update(); // Necessary for damping to work
			renderer.render(scene, camera);
		};
		animate();

		// Handle window resize
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener("resize", handleResize);

		// Cleanup
		return () => {
			renderer.dispose();
			containerRef.current.removeChild(renderer.domElement);

			// window.removeEventListener("resize", handleResize);
		};
	}, []);

	return <div className={`${styles.model} resize`} ref={containerRef} />;
};

export default ThreeBox;
