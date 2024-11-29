// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import { useEffect, useRef } from "react";
import * as THREE from "three";
// UTILS //

// STYLES //
import styles from "@/styles/components/ThreeJs.module.scss";

// IMAGES //

// DATA //

/** ThreeJs Component */
/* eslint-disable require-jsdoc */

const ThreeBox = () => {
	const containerRef = useRef();

	useEffect(() => {
		// Set up the scene, camera, and renderer
		const container = containerRef.current;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			100,
			window.innerWidth / window.innerHeight,
			1,
			1000
		);
		camera.position.z = 2;

		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);

		// Texture loader
		const loader = new THREE.TextureLoader();
		const texture = loader.load(
			"/img/HomeBroadcast/world.jpg",
			() => console.log("Texture loaded successfully"),
			undefined,
			(error) => console.error("Error loading texture:", error)
		);

		// Sphere geometry and material
		const geometry = new THREE.SphereGeometry(1, 33, 25);
		const material = new THREE.MeshLambertMaterial({
			map: texture,
			emissive: 11060,
		});
		const sphere = new THREE.Mesh(geometry, material);
		scene.add(sphere);

		// Light
		const pointLight = new THREE.SpotLight(0xffffff, 100, 0);
		pointLight.position.set(1, 5, 5);
		scene.add(pointLight);

		// Interaction state

		// Animation loop
		const animate = () => {
			requestAnimationFrame(animate);
			renderer.render(scene, camera);
		};

		animate();

		// Resize handling
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener("resize", handleResize);

		// Cleanup on unmount
		return () => {
			renderer.dispose();
			
		};
	}, []);

	return <div className={styles.Model} ref={containerRef} />;
};

export default ThreeBox;
