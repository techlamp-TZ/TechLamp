export interface DataService {
  name: string;
  description: string;
}

export interface DataServiceFamily {
  id: string;
  n: string;
  name: string;
  summary: string;
  /** Empty for the bridge family, which links out instead. */
  services: DataService[];
  bridge?: {
    text: string;
    links: { label: string; href: string }[];
  };
}

export const DATA_SERVICE_FAMILIES: DataServiceFamily[] = [
  {
    id: "data-strategy-governance",
    n: "01",
    name: "Data Strategy & Governance",
    summary: "Set the direction before you build: a practical roadmap, and the ownership, security and policy that keep data trustworthy.",
    services: [
      { name: "Data Strategy & Analytics Consulting", description: "Assess your data landscape, business objectives and analytics ambitions, then set a practical roadmap and target architecture." },
      { name: "Data Maturity Assessment", description: "Evaluate data quality, ownership, integration, security and reporting maturity to identify gaps and priorities." },
      { name: "Data Platform Advisory", description: "Choose between warehouses, lakes, lakehouses and hybrid architectures based on your actual requirements." },
      { name: "Data Governance Frameworks", description: "Define ownership, stewardship, standards, policies and accountability for enterprise data." },
      { name: "Data Security & Privacy", description: "Apply classification, access controls, encryption and privacy safeguards appropriate to each use case." },
      { name: "Data Catalogues & Lineage", description: "Make data discoverable and traceable, from where it originates to where it's consumed." },
    ],
  },
  {
    id: "data-engineering-integration",
    n: "02",
    name: "Data Engineering & Integration",
    summary: "Connect fragmented systems and build the pipelines that move data reliably, on schedule or in real time.",
    services: [
      { name: "Data Architecture Design", description: "Design scalable, secure architectures for collecting, storing, integrating and distributing enterprise data." },
      { name: "Data Integration & ETL/ELT Engineering", description: "Build automated pipelines that extract, transform, validate and load data from ERP, CRM, APIs and files." },
      { name: "Real-Time & Batch Data Pipelines", description: "Develop scheduled and streaming pipelines suited to each data source's freshness requirements." },
      { name: "Cloud Data Engineering & Migration", description: "Build and migrate data platforms across AWS, Azure and Google Cloud." },
      { name: "Data Quality Engineering", description: "Create automated rules and controls that check completeness, validity and accuracy continuously." },
      { name: "Pipeline Monitoring & Observability", description: "Track pipeline freshness, failures, schema changes and reliability across the data platform." },
    ],
  },
  {
    id: "data-warehousing-lakes-lakehouses",
    n: "03",
    name: "Data Warehousing, Lakes & Lakehouses",
    summary: "The storage foundation itself: centralized, governed environments for structured and unstructured data.",
    services: [
      { name: "Enterprise Data Warehousing", description: "Build centralized analytical repositories that combine finance, ERP, CRM, HR and operational data." },
      { name: "Cloud Data Warehousing", description: "Implement scalable cloud-native analytical platforms for secure storage, transformation and analysis." },
      { name: "Data Lake Engineering", description: "Create governed environments for large volumes of raw and curated enterprise data." },
      { name: "Lakehouse Engineering", description: "Combine the flexibility of a data lake with the analytical structure of a warehouse." },
      { name: "Departmental Data Marts", description: "Develop focused analytical datasets for finance, sales, customers, HR and operations." },
    ],
  },
  {
    id: "analytics-engineering",
    n: "04",
    name: "Analytics Engineering",
    summary: "Turn raw warehouse data into tested, documented and reusable analytical models the business can trust.",
    services: [
      { name: "Dimensional & Semantic Modelling", description: "Structure warehouse data into fact and dimension tables that map to how the business actually thinks." },
      { name: "Reusable Transformation Pipelines", description: "Build tested, version-controlled transformations instead of one-off spreadsheet logic." },
      { name: "Metric Definitions & Testing", description: "Define KPIs once, test them, and reuse them consistently across every report." },
      { name: "Documentation & Lineage", description: "Document every model so analysts and stakeholders can trust and trace what they're looking at." },
    ],
  },
  {
    id: "business-intelligence-reporting",
    n: "05",
    name: "Business Intelligence & Reporting",
    summary: "Modern BI environments and dashboards that turn integrated data into management information people actually use.",
    services: [
      { name: "Business Intelligence Platforms", description: "Build modern BI environments that turn integrated data into accessible management information." },
      { name: "Executive & Operational Dashboards", description: "Give leadership and frontline teams the views of performance, targets and service levels they each need." },
      { name: "Self-Service Analytics", description: "Let authorized users safely explore data without depending on technical teams for every report." },
      { name: "Automated Reporting", description: "Replace manual spreadsheet consolidation with automated, scheduled reporting pipelines." },
      { name: "Embedded Analytics", description: "Integrate analytics directly into applications, portals and business workflows." },
    ],
  },
  {
    id: "real-time-big-data-engineering",
    n: "06",
    name: "Real-Time & Big Data Engineering",
    summary: "For data that arrives fast or at scale: streaming analytics, alerting and large-scale processing.",
    services: [
      { name: "Real-Time Analytics & Streaming", description: "Analyze operational events as they happen to support faster intervention." },
      { name: "Event-Driven Alerts & Monitoring", description: "Trigger alerts and workflows automatically when defined conditions or anomalies occur." },
      { name: "Big Data Engineering & Processing", description: "Design distributed systems for processing very large or high-velocity datasets." },
      { name: "Big Data Analytics & Visualization", description: "Extract patterns from large, complex datasets and present them in understandable form." },
    ],
  },
  {
    id: "business-analytics-decision-intelligence",
    n: "07",
    name: "Business Analytics & Decision Intelligence",
    summary: "This is where the data platform meets decisions and action.",
    services: [],
    bridge: {
      text: "Business analytics, forecasting and operations research are already established TechLamp capabilities with their own pages — go there directly rather than a duplicate summary here.",
      links: [
        { label: "Business Analytics & Performance Intelligence", href: "/capabilities/business-analytics" },
        { label: "Operations Research & Optimization", href: "/capabilities/operations-research" },
      ],
    },
  },
  {
    id: "managed-data-platforms",
    n: "08",
    name: "Managed Data Platforms",
    summary: "After go-live: ongoing operation, monitoring and optimization of the platform you've built.",
    services: [
      { name: "Managed Data Platform Services", description: "Operate and support your warehouse, lakehouse and analytics pipelines as an ongoing managed service." },
      { name: "Data Platform Monitoring", description: "Monitor availability, performance, ingestion and transformation processes continuously." },
      { name: "Data Lifecycle Management", description: "Manage data from ingestion through retention, archiving and disposal." },
      { name: "Data Platform Optimization", description: "Continuously improve pipeline performance, storage architecture and analytical workloads." },
    ],
  },
];

export const DATA_JOURNEY_STEPS = [
  "Data Strategy",
  "Data Architecture",
  "Data Integration",
  "Data Engineering",
  "Warehouse / Lakehouse",
  "Analytics Engineering",
  "Business Intelligence",
  "Business Analytics",
  "Predictive Analytics",
  "Operations Research",
  "Decision Intelligence",
  "Agentic Engineering",
  "Business Action",
  "Continuous Improvement",
];
