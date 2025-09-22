import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      number: 1,
      title: "VIRTUALIZATION",
      description: [
        "What is virtualization?",
        "Virtualization and cloud computing",
        "Types of virtualizations",
        "Virtualization terminologies",
        "Hypervisor Concepts",
        "Benefits",
        "Vendors",
      ],
    },
    {
      number: 2,
      title: "LINUX",
      description: [
        "All-important Linux commands",
        "The Linux filesystem",
        "File permissions",
        "Process management",
        "User account management",
        "Software management",
        "Networking in Linux",
      ],
    },
    {
      number: 3,
      title: "CLOUD INSTANCE MANAGEMENT (AWS, Azure, GCP)",
      description: [
        "Instance Launch (Windows and Linux OS)",
        "Instance Types",
        "Key Pair Management",
        "Security Groups & Firewalls",
        "Storage and Snapshots",
        "User Data and Metadata",
        "Load Balancers",
        "Billing and Monitoring Alarms",
        "Auto Scaling",
        "Scaling Types and Policies",
        "AWS, Azure and GCP Auto-scaling lifecycle",
      ],
    },
    {
      number: 4,
      title: "AWS EBS (Elastic Block Storage)",
      description: [
        "Create EBS volumes",
        "Delete EBS Volumes",
        "Attach and detach EBS volumes",
        "Mounting and unmounting EBS volume",
        "Creating and deleting snapshots",
        "Creating volumes from snapshots",
      ],
    },
    {
      number: 5,
      title: "NETWORKING (AWS, Azure, GCP)",
      description: [
        "Networking Basics",
        "Public IPs & Private IPs",
        "CIDR Range",
        "Subnet Calculations",
        "Creating custom VPCs and custom Subnets",
        "Network ACLs",
        "Route Tables & IGW",
      ],
    },
    {
      number: 6,
      title: "CLOUD STORAGE SERVICES (AWS, Azure, GCP)",
      description: [
        "What is S3, Blob storage, Cloud storage",
        "Storage Classes",
        "Versioning",
        "S3 bucket ACL and permissions",
        "S3 data partition",
        "Data copying and moving",
        "Cross-region replication",
        "Lifecycle Management",
        "Security & Encryption",
        "KMS (Key Management Service)",
        "Static Webhosting",
        "Events configuration",
        "Cross account access",
        "Data management & backup with 3rd party apps",
        "Pre-Signed URLs",
        "Storage Gateway",
      ],
    },
    {
      number: 7,
      title: "IDENTITY & ACCESS MANAGEMENT",
      description: [
        "Root Account Vs IAM user",
        "Multi Factor Authentication",
        "IAM Password Policies",
        "Keys & access approaches",
        "User, Groups, Roles",
        "Customer Managed Policies",
        "Auditing User Activity",
      ],
    },
    {
      number: 8,
      title: "DATABASES (AWS RDS & DynamoDB)",
      description: [
        "Launching RDS Instances (MySQL, MSSQL, Aurora)",
        "Multi-AZ & Read Replicas",
        "High Availability in RDS",
        "DB on EC2 vs Managed RDS",
        "RDS Proxy",
        "Elasticache Overview",
        "RDS connectivity (EC2, Local Workbench)",
        "Creating DB, tables, queries",
        "Read Replica setup",
        "DynamoDB overview",
        "Data Import from S3 to RDS",
        "Database Migration Service",
        "DB costings & reserved nodes",
      ],
    },
    {
      number: 9,
      title: "AWS SECURITY SERVICES",
      description: [
        "Secret Manager",
        "Key Management Services",
        "AWS Certificate Manager",
        "AWS Inspector",
        "AWS Trusted Advisor",
        "AWS Global Accelerator",
        "CloudFront (CDN)",
        "AWS Shield and WAF",
        "AWS Config",
      ],
    },
    {
      number: 10,
      title: "AWS SERVERLESS (Lambda)",
      description: [
        "Lambda Overview",
        "Configuration with services",
        "Automation with boto3",
        "Environment setup",
        "Lambda Layers",
        "Limitations",
      ],
    },
    {
      number: 11,
      title: "AMAZON ROUTE 53",
      description: [
        "DNS Records",
        "Routing Policies",
        "Hosting Website with Policies",
        "Simple / Weighted / Failover / Geo / Latency RP",
        "Cross region high availability",
        "A & CNAME Records",
        "Alias configuration (ELB, S3, CloudFront)",
      ],
    },
    {
      number: 12,
      title: "OVERVIEW OF DEVOPS",
      description: [
        "What is DevOps?",
        "DevOps Market Trends",
        "DevOps Engineer Skills",
        "DevOps Delivery Pipeline",
        "DevOps Ecosystem",
      ],
    },
    {
      number: 13,
      title: "SHELL SCRIPTING",
      description: [
        "Introduction",
        "Types of shells",
        "Variables & Types",
        "Operators",
        "Input arguments",
        "String & Arithmetic comparison",
        "File conditions",
        "If, loops, case, functions",
        "Examples",
      ],
    },
    {
      number: 14,
      title: "WEB APP SERVERS",
      description: [
        "Apache webserver installation & configuration",
        "Tomcat installation & configuration",
        "Tomcat Manager",
        "Application management",
      ],
    },
    {
      number: 15,
      title: "VERSION CONTROL (Git)",
      description: [
        "Git Introductions",
        "Git Workflow",
        "Installing & Setup Git",
        "Working Directory, Staging, Local/Remote Repository",
        "Recording Changes",
        "Commit History",
        "Undoing Changes",
        "Git Forking",
        "Working with Remotes",
        "Branching & Merging",
        "Rebasing",
      ],
    },
    {
      number: 16,
      title: "BUILD TOOL (Maven)",
      description: [
        "Maven Installation",
        "Maven Build requirements",
        "POM Builds (pom.xml)",
        "Build Life Cycle",
        "Local & Global Repository",
        "Group ID, Artifact ID, Snapshot",
        "Dependencies",
        "Plugins",
      ],
    },
    {
      number: 17,
      title: "SONARQUBE",
      description: [
        "Installation & Configuration",
        "Code scan initiation",
        "Dashboard usage",
        "Sample project analysis",
        "Maven integration",
        "Real-time use cases",
      ],
    },
    {
      number: 18,
      title: "CI/CD WITH JENKINS",
      description: [
        "Introduction to Jenkins",
        "Continuous Integration",
        "Jenkins Management",
        "Build Scheduling (POLL SCM)",
        "Master & Slave Node Config",
        "Workspace Management",
        "Securing Jenkins",
        "Plugins",
        "Integrations (EC2, Lambda, S3, GitHub, Docker, Jfrog, SonarQube, Kubernetes, Trivy, ArgoCD, Azure, GitLab)",
      ],
    },
    {
      number: 19,
      title: "DOCKER",
      description: [
        "Introduction",
        "Docker Images",
        "Installation",
        "Containers & Engine",
        "Docker CLI",
        "Docker Compose",
        "Docker Hub",
        "Docker Trusted Registry",
        "Docker Swarm",
        "Docker attach",
        "Dockerfile & Commands",
      ],
    },
    {
      number: 20,
      title: "KUBERNETES & ORCHESTRATION",
      description: [
        "Kubernetes Architecture",
        "Cluster setup on EC2",
        "YAML Deployment & Services",
        "Dashboard",
        "Rolling Updates",
        "Helm Charts",
        "Schedulers",
        "Metric Server",
        "Volumes",
        "RBAC",
      ],
    },
    {
      number: 21,
      title: "HELM",
      description: [
        "Installation",
        "Configuration",
        "Deployment",
      ],
    },
    {
      number: 22,
      title: "EFK STACK",
      description: [
        "Configuration",
        "K8s Logs",
      ],
    },
    {
      number: 23,
      title: "ARGO CD",
      description: [
        "Installation",
        "Configuration",
        "CD Overview",
      ],
    },
    {
      number: 24,
      title: "CONTINUOUS MONITORING (Grafana)",
      description: [
        "Introduction",
        "Installing Grafana",
        "Prometheus Integration",
        "Kubernetes Monitoring",
      ],
    },
    {
      number: 25,
      title: "ANSIBLE",
      description: [
        "Introduction",
        "Server Configuration",
        "SSH Connection",
        "YAML Scripts",
        "Inventory & Groups",
        "Variables",
        "Ad-hoc Commands",
        "Playbooks",
        "Modules (Core & Extra)",
        "Roles",
      ],
    },
    {
      number: 26,
      title: "TERRAFORM",
      description: [
        "Introduction",
        "Installation",
        "Providers & Resources",
        "Variables, Outputs",
        "Terraform State",
        "Modules",
        "Workspaces",
        "Functions",
        "Troubleshooting & Testing",
        "Best Practices",
        "Terraform with AWS (VPC, EC2, S3, Networking)",
      ],
    },
    {
      number: 27,
      title: "PYTHON BOTO3",
      description: [
        "Introduction to Python",
        "Lists, Ranges, Tuples",
        "Input & Output",
        "OOP in Python",
        "Regular Expressions",
        "Boto3 for DevOps",
      ],
    },
  ];



  return (
    <section id="curriculum" className="py-20 bg-muted">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            12-Weeks Training Agenda
          </h2>
          <p className="text-lg text-muted-foreground">
            Click each module to explore its details
          </p>
        </div>

        {/* Accordion FAQ */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.number}
              value={`faq-${faq.number}`}
              className="border rounded-xl bg-card shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-semibold hover:bg-muted/50 transition-all">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {faq.number}
                  </span>
                  {faq.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground text-base leading-relaxed">
                <ul className="list-disc pl-6 space-y-2">
                  {faq.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
