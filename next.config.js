/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["img.youtube.com"],
	},
};

module.exports = nextConfig;
