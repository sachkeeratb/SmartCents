import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'images.unsplash.com'
			},
			{
				hostname: 'assets.aceternity.com'
			},
			{
				hostname: 'pbs.twimg.com'
			}
		]
	}
};

export default nextConfig;
