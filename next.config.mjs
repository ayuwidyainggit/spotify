const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co", // Matches all subdomains of fna.fbcdn.net
        port: "",
        pathname: "/**", // Allows all paths
      },
    ],
  },
};

export default nextConfig;
