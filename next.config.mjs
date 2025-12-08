/** @type {import('next').NextConfig} */
const nextConfig = {
	// Image optimization for better performance on Vercel
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [],
		// Optimize images for Vercel
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	
	// Enable React strict mode for better development experience
	reactStrictMode: true,
	
	// Optimize production builds (SWC minification is enabled by default in Next.js 14)
	swcMinify: true,
	
	// Compression is enabled by default on Vercel
	compress: true,
	
	// Optimize for production
	poweredByHeader: false,
	
	// Enable static page generation where possible
	generateEtags: true,
};

export default nextConfig;
