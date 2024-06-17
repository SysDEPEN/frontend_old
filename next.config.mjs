/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/envio-documentos",
        destination: "/sendform",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
