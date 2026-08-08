export default {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'cdn.shopify.com',
    },
    {
      protocol: 'https',
      hostname: '**.frontend.co',
    },
  ], 
  }, 
  experimental: { 
    reactDebugChannel: false 
  }, 
  webpack: (config, { isServer }) => { 
    config.cache = { type: "memory" }; 
    if (isServer) { 
      config.optimization = config.optimization || {}; 
      config.optimization.splitChunks = false; 
    } return config; 
  } 
};