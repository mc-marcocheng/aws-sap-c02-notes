# AWS Certified Solutions Architect - Professional (SAP-C02) Study Notes

Study notes for AWS Solutions Architect - Professional certification, published as a searchable website using [Quartz](https://quartz.jzhao.xyz/).

**[https://mc-marcocheng.github.io/aws-sap-c02-notes/](https://mc-marcocheng.github.io/aws-sap-c02-notes/)**

## Use as an Obsidian Vault

You can use these notes directly in [Obsidian](https://obsidian.md/):

### Option A: Clone the entire repo

```bash
git clone https://github.com/mc-marcocheng/aws-sap-c02-notes.git
```

Then open the `content/` folder as an Obsidian vault:

1. Open Obsidian
2. Click **Open folder as vault**
3. Select the `content/` folder

### Option B: Download only the notes

1. Go to the [`content/`](./content) folder
2. Download it as a ZIP ([direct link](https://download-directory.github.io/?url=https://github.com/mc-marcocheng/aws-sap-c02-notes/tree/main/content))
3. Extract and open in Obsidian

> The notes use standard Obsidian features (wikilinks, callouts, tags). No community plugins are required.

## Vault Structure

```
content/
├── index.md                   ← Start here
├── Analytics/                 ← Athena, Glue, Kinesis, EMR, etc.
├── Architecture Patterns/     ← HA, Resilience Hub
├── Compute/                   ← EC2, Lambda, ECS, EKS, Fargate
├── Database/                  ← RDS, Aurora, DynamoDB, ElastiCache
├── Developer Tools/           ← CodePipeline, CodeBuild, CodeDeploy
├── Disaster Recovery/         ← DR strategies
├── Integration/               ← SQS, SNS, EventBridge, Step Functions
├── Management/                ← CloudWatch, CloudFormation, Organizations
├── Migration/                 ← DMS, DataSync, Snow Family
├── Networking/                ← VPC, ELB, Route 53, CloudFront
├── Practice Questions/        ← Exam-style questions per topic
├── Security/                  ← IAM, KMS, WAF, GuardDuty
└── Storage/                   ← S3, EBS, EFS, FSx
```

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- npm >= 10

### Local preview

```bash
npm ci
npx quartz build --serve
```

Open [http://localhost:8080](http://localhost:8080)

### Project layout

```
├── content/             ← Obsidian vault (Markdown notes)
├── quartz/              ← Quartz engine (with custom patches)
│   ├── plugins/
│   │   └── transformers/
│   │       └── ofm.ts   ← Patched for nested callout support
│   └── styles/
│       └── custom.scss  ← Dracula/Alucard theme
├── quartz.config.ts     ← Site configuration
├── quartz.layout.ts     ← Page layout components
└── .github/workflows/   ← Auto-deploy on push
```

## Contributing

We welcome contributions! Please read our [Contributing Guide](./CONTRIBUTING.md) before submitting changes.

Quick summary:
- Follow the [Vault Conventions](./VAULT_CONVENTIONS.md) strictly
- Always test locally with `npx quartz build --serve`
- Open a PR with the provided checklist

## License

Notes content is provided for educational purposes. Quartz is licensed under the [MIT License](https://github.com/jackyzha0/quartz/blob/v4/LICENSE.txt).
