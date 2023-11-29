/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "www.ryanscomputers.com",
      "adminapi.applegadgetsbd.com",
      "www.applegadgetsbd.com",
      "core.bdassistant.com",
    ],
  },
};

module.exports = nextConfig;
