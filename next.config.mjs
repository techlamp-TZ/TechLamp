/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/products/knowledge-ai", destination: "/products/ai-knowledge-agentic", permanent: true },
      { source: "/products/analytics", destination: "/products/business-intelligence-analytics", permanent: true },
      { source: "/products/automation", destination: "/products/automation-integration-apps", permanent: true },
      { source: "/products/learning", destination: "/products/learning-skills", permanent: true },
      { source: "/products/cloud-operations", destination: "/products/cloud-operations-observability", permanent: true },
      { source: "/products/digital-workplace", destination: "/products/digital-workplace-portals", permanent: true },
    ];
  },
};

export default nextConfig;
