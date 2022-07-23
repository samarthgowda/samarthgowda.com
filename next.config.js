/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/lens",
        destination: "https://www.lensfrens.xyz/samarthgowda.lens",
        permanent: true,
      },
      {
        source: "/ahta",
        destination: "https://ahta.live",
        permanent: true,
      },
      {
        source: "/skube",
        destination: "https://skube.xyz",
        permanent: true,
      },
      {
        source: "/web4",
        destination: "https://web4.lol",
        permanent: true,
      },
      {
        source: "/pralent",
        destination: "https://pralent.com",
        permanent: true,
      },
      {
        source: "/profile",
        destination: "https://pralent.com/@samarthgowda",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/samarthgowda",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/iamsamarthgowda",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/gowdasamarth",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/channel/UCuflS_zf0urGDQ9cVGxSWWQ",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "https://blog.samarthgowda.com",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
