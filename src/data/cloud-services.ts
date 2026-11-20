export interface CloudService {
  name: string;
  description: string;
}

export interface CloudServiceGroup {
  id: string;
  n: string;
  name: string;
  summary: string;
  services: CloudService[];
}

export const CLOUD_SERVICE_GROUPS: CloudServiceGroup[] = [
  {
    id: "cloud-infrastructure",
    n: "01",
    name: "Cloud & Infrastructure",
    summary: "Move to the cloud, keep it governed, and keep costs under control as it grows.",
    services: [
      { name: "Cloud Migration Services", description: "Move workloads, databases and applications from on-premise or legacy environments to the cloud." },
      { name: "Cloud Managed Services", description: "Ongoing operation of your cloud environment, so infrastructure stays available, current and secure." },
      { name: "Cloud Governance", description: "Policies, guardrails and access controls that keep a growing cloud estate under control." },
      { name: "FinOps & Cost Optimization", description: "Track and reduce cloud spend by right-sizing resources and eliminating waste." },
      { name: "DevOps Services", description: "Build the CI/CD pipelines and automation that let teams ship changes safely and often." },
      { name: "DevSecOps", description: "Bring security checks into the delivery pipeline instead of bolting them on afterward." },
      { name: "Kubernetes Management", description: "Operate containerized workloads reliably, from cluster setup to day-to-day maintenance." },
    ],
  },
  {
    id: "managed-it",
    n: "02",
    name: "Managed IT Services",
    summary: "Day-to-day IT operations, support and security, run so your team doesn't have to.",
    services: [
      { name: "Managed IT", description: "Ongoing management of core IT systems, so issues are caught and resolved before they disrupt work." },
      { name: "Managed Security Services", description: "Continuous monitoring and response to keep systems and data protected." },
      { name: "Infrastructure Management", description: "Day-to-day administration of servers, networks and infrastructure." },
      { name: "Remote IT Support", description: "Responsive technical support for distributed and hybrid teams." },
      { name: "Helpdesk Services", description: "A single point of contact for employees to log and resolve IT issues." },
      { name: "Data Management & Security", description: "Protect and maintain the data that operational systems depend on." },
    ],
  },
  {
    id: "workplace-services",
    n: "03",
    name: "Workplace Services",
    summary: "The tools, devices and support that keep people productive day to day.",
    services: [
      { name: "Digital Workplace", description: "A connected set of tools and services for how your teams actually work." },
      { name: "Device Management", description: "Provisioning, security and lifecycle management for laptops, phones and other devices." },
      { name: "Collaboration Solutions", description: "Set up and support the tools teams use to communicate and work together." },
      { name: "End User Support", description: "Direct support for the people using these systems every day." },
    ],
  },
];

/** Platforms these services are designed to work across. Named as examples; no partnership implied. */
export const CLOUD_PLATFORMS = ["Microsoft Azure", "AWS", "Google Cloud"];
