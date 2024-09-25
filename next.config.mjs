/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ hostname: 'panels-cdn.imgix.net' }],
	},
}

export default nextConfig
