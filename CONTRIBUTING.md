# Contributing

Thank you for your interest in contributing to the AWS SAP-C02 Study Notes! This guide covers everything you need to know to add or improve content.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Content Guidelines](#content-guidelines)
- [Adding a New Topic Note](#adding-a-new-topic-note)
- [Adding Practice Questions](#adding-practice-questions)
- [Modifying Existing Notes](#modifying-existing-notes)
- [Submitting Changes](#submitting-changes)
- [Local Development](#local-development)
- [Style Reference](#style-reference)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- npm >= 10
- Basic familiarity with Markdown and [Obsidian](https://obsidian.md/) syntax
- Understanding of AWS services at the Solutions Architect Professional level

### Setup

```bash
git clone https://github.com/mc-marcocheng/aws-sap-c02-notes.git
cd aws-sap-c02-notes
npm ci
```

### Branch naming

```
feat/add-<service-name>          # New topic + practice questions
fix/update-<service-name>        # Corrections to existing content
fix/typo-<short-description>     # Minor typo or formatting fixes
```

---

## Content Guidelines

All contributions must follow the [Vault Conventions](./VAULT_CONVENTIONS.md). The key rules are summarized below.

### Guiding principles

| Principle | Description |
|-----------|-------------|
| Exam-focused | Content should target SAP-C02 scenarios — multi-account, hybrid, DR, cost optimization |
| Self-contained | Each note should be understandable on its own with links for deeper dives |
| No orphans | Every note must be linked from `index.md` and cross-linked where relevant |
| Consistent format | Follow the templates exactly — structure enables both Obsidian and web rendering |

### Callout usage

| Callout | Purpose | Example |
|---------|---------|---------|
| `> [!info]` | Definitions, facts, general knowledge | Service limits, default behaviors |
| `> [!exam]` | Exam tips, gotchas, high-probability scenarios | "If you see X in the question, think Y" |
| `> [!important]` | Critical rules, hard limits, dependencies | "Maximum 5 VPCs per Transit Gateway attachment" |
| `> [!question]` | Practice questions (in Practice Questions files only) | Exam-style scenario questions |
| `> [!success]` | Answers & rationales (nested inside `[!question]`) | Correct answer + explanation |

---

## Adding a New Topic Note

### 1. Create the topic note

**Path:** `content/<Category>/<Service Name>.md`

```markdown
---
tags: [aws, sap-c02, <service-tag>]
---

# Service Name

Brief introductory paragraph defining the service and its primary use case at the professional level.

## Key Features

- Feature one
- Feature two

## Architecture

Description of how the service fits into larger architectures.

> [!info]
> Key architectural fact or default behavior.

## Use Cases

| Scenario | Solution |
|----------|----------|
| Need X with constraint Y | Use Service with configuration Z |

## Strategic Scenarios (SAP-C02)

> [!exam]
> When the question mentions [business requirement], this maps to [specific configuration].

### Cost vs. Performance

- **Optimize for cost:** Use configuration A
- **Optimize for performance:** Use configuration B

### RTO/RPO Mapping

| Requirement | Architecture |
|-------------|-------------|
| RPO < 1 min | Multi-region active-active |
| RPO < 1 hour | Cross-region read replicas |

---
**Practice:** [[Service Name - Practice Questions|Service Name Practice Questions]]
```

### 2. Create the practice questions file

**Path:** `content/Practice Questions/<Service Name> - Practice Questions.md`

```markdown
---
tags: [aws, sap-c02, <service-tag>, practice-questions]
---

# Service Name - Practice Questions

> [!question]
> A company is migrating their on-premises application to AWS. The application requires [specific requirement]. The solutions architect must design a solution that [constraint]. Which approach meets these requirements?
>
> 1. First option with specific AWS services and configurations.
> 2. Second option with specific AWS services and configurations.
> 3. Third option with specific AWS services and configurations.
> 4. Fourth option with specific AWS services and configurations.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Explanation of why option 2 is correct. [[Related Service]] provides [capability] which satisfies the [requirement]. Option 1 is incorrect because [reason]. Option 3 fails due to [reason]. Option 4 would work but [does not meet constraint].
```

### 3. Link from the index

Edit `content/index.md` and add the new note under the appropriate domain/category section.

### 4. Add cross-links

Add `[[Service Name]]` wikilinks in any related topic notes where the service is mentioned or compared.

---

## Adding Practice Questions

When adding questions to an **existing** practice questions file:

### Question quality checklist

- [ ] Scenario is realistic and professional-level (not associate-level)
- [ ] Includes a clear business constraint (cost, performance, compliance, timeline)
- [ ] Has exactly 4 options (unless "Choose 2/3" is specified)
- [ ] Only ONE option is unambiguously correct (or exactly N for "Choose N")
- [ ] Distractors are plausible but have clear disqualifying reasons
- [ ] Rationale explains **why each wrong answer is wrong**
- [ ] Includes `[[wikilinks]]` to relevant topic notes in the rationale

### Formatting rules

```markdown
> [!question]
> Scenario text. Constraint. What should the architect do?
>
> 1. Option text.
> 2. Option text.
> 3. Option text.
> 4. Option text.
>
> > [!success]- Answer & Rationale
> > **Answer: X**
> > **Rationale:** Explanation with [[Links to Topic Notes]].
```

### Common mistakes to avoid

```markdown
<!-- ❌ WRONG: Using lettered options -->
> A. Some option
> B. Some option

<!-- ✅ CORRECT: Using numbered options -->
> 1. Some option
> 2. Some option
```

```markdown
<!-- ❌ WRONG: Plain text answer reference -->
> > Option B is correct because...

<!-- ✅ CORRECT: Bold answer with number -->
> > **Answer: 2**
> > **Rationale:** Option 2 is correct because...
```

---

## Modifying Existing Notes

### Corrections

- Fix factual errors, outdated information, or typos
- Update AWS service limits/features if they've changed
- Improve clarity without changing the overall structure

### Enhancements

- Add missing `> [!exam]` tips for known exam scenarios
- Add strategic scenario sections if missing
- Add cross-links (`[[wikilinks]]`) to related services
- Expand rationales in practice questions

### Do NOT

- Change the file/folder naming convention
- Remove the footer practice link from topic notes
- Merge multiple topic notes into one file
- Add content unrelated to SAP-C02

---

## Submitting Changes

### Pull request process

1. **Fork** the repository (or create a branch if you have write access)
2. **Create** your branch from `master`:
   ```bash
   git checkout -b feat/add-service-name
   ```
3. **Make** your changes following the conventions above
4. **Test** locally:
   ```bash
   npx quartz build --serve
   ```
   Verify at `http://localhost:8080`:
   - Note renders correctly
   - Callouts collapse/expand properly
   - Wikilinks resolve (no broken links)
   - Practice question answers are hidden when collapsed
5. **Commit** with a descriptive message:
   ```bash
   git commit -m "feat: add AWS Service Name topic and practice questions"
   ```
6. **Push** and open a Pull Request against `master`

### Commit message format

```
feat: add <service> topic and practice questions
fix: correct <service> throughput limits
fix: typo in <service> practice question 3
docs: update README with new section
style: fix callout formatting in <service>
```

---

## Local Development

### Preview the site

```bash
npx quartz build --serve
```

### Build only (no server)

```bash
npx quartz build
```

### Validate links (optional)

```bash
# Find potential broken wikilinks
grep -roh '\[\[[^]]*\]\]' content/ | sort -u | while read link; do
  target=$$(echo "$$link" | sed 's/\[\[//;s/\]\]//;s/|.*//')
  if ! find content/ -name "${target}.md" | grep -q .; then
    echo "⚠️  Broken: $link"
  fi
done
```

### Open vault in Obsidian

Open the `content/` folder as a vault for the best editing experience with live preview of callouts, wikilinks, and graph view.

---

## Style Reference

### Quick reference card

| Element | Format |
|---------|--------|
| Internal link | `[[Service Name]]` |
| Aliased link | `[[Service Name\|Display Text]]` |
| Tags (frontmatter) | `tags: [aws, sap-c02, service-tag]` |
| H1 title | `# Service Name` (one per file) |
| Exam tip | `> [!exam]` callout |
| Practice Q | `> [!question]` with nested `> > [!success]-` |
| Footer link | `**Practice:** [[Service - Practice Questions\|Service Practice Questions]]` |
| Separator | `---` (horizontal rule before footer) |

### File naming

| Type | Pattern | Example |
|------|---------|---------|
| Topic note | `<Service Name>.md` | `Aurora Serverless.md` |
| Subfolder topic | `<Category>/<Sub>/<Note>.md` | `Kinesis/Kinesis Overview.md` |
| Practice questions | `<Service> - Practice Questions.md` | `Aurora - Practice Questions.md` |
| Comparison note | `<A> vs <B>.md` | `Aurora vs DynamoDB Global.md` |

### Wikilink targets

When linking, use the **file name without extension** as it appears on disk:

```markdown
<!-- Simple link -->
[[Aurora Serverless]]

<!-- With alias -->
[[Aurora Serverless|Aurora Serverless v2]]

<!-- To a heading -->
[[Aurora Overview#Global Database]]
```

---

## Questions?

Open an [issue](https://github.com/mc-marcocheng/aws-sap-c02-notes/issues) for:

- Requests for new topics
- Clarification on conventions
- Reporting incorrect content
- Suggestions for improvement
