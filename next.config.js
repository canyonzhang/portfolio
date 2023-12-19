/** @type {import('next').NextConfig} */
const nextConfig = {

    experimental: {
        serverActions: true
    }
}

module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
  
      return config;
    },
  };
