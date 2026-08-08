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
      // Covers cdn.shopify.com plus any other Shopify-hosted image subdomain.
      {
        protocol: 'https',
        hostname: '**.shopify.com',
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