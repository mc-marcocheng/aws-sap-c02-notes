# SAP-C02 Obsidian Vault Conventions

This file defines the strict style guide and standard operating procedures for generating or modifying notes within this SAP-C02 AWS study vault. Any new notes, practice questions, or modifications must adhere to these rules.

## 1. Topic Notes (`content/<Category>/<Service>.md`)

- **Frontmatter**: Must use inline array formatting.
  ```yaml
  ---
  tags: [aws, sap-c02, <service-tag>]
  ---
  ```
- **Structure**:
  - `# Service Name` (H1) for the main title.
  - Brief introductory paragraph defining the service.
  - `## Sections` (H2/H3) for Features, Architecture, and Use Cases.
  - Use Markdown tables for comparing related services or features.
  - **Callouts**: Use Obsidian blockquotes to highlight critical information:
    - `> [!info]` for general definitions and facts.
    - `> [!exam]` for specific exam tips, "gotchas", or high-probability scenarios.
    - `> [!important]` for critical rules, limits, or dependencies.
  - **Strategic Scenarios (SAP-C02)**: Include a section that maps business requirements (e.g., cost vs. performance, RTO/RPO) to specific architectural choices.
  - **Footer**: Must be exactly formatted with a horizontal rule and a direct wikilink to the practice questions.
  ```markdown
  ---
  **Practice:** [[<Service> - Practice Questions|<Service> Practice Questions]]
  ```

## 2. Practice Questions (`content/Practice Questions/<Service> - Practice Questions.md`)

- **Frontmatter**: Must include the `practice-questions` tag.
  ```yaml
  ---
  tags: [aws, sap-c02, <service-tag>, practice-questions]
  ---
  ```
- **Structure**:
  - `# <Service> - Practice Questions` (H1) for the title.
  - **Question Block**: Use the `> [!question]` callout. Options must be numbered (1. 2. 3. 4.).
  - **Answer Block**: Must be *nested* within the question block using `> > [!success]- Answer & Rationale`.

**Example Practice Question Format:**
```markdown
> [!question]
> A scenario description goes here. What is the most cost-effective solution?
>
> 1. Option one.
> 2. Option two.
> 3. Option three.
> 4. Option four.
>
> > [!success]- Answer & Rationale
> > **Answer: 2**
> > **Rationale:** Detailed explanation of why 2 is correct and the others are incorrect. Include internal links to topic notes like [[Topic Name]].
```

## 3. General Workflow Rules

- **Wikilinks**: Always use `[[Topic Name]]` for internal linking.
- **No Orphans**: Never create a topic note without also linking it from the main index (`content/index.md`). Place it under the appropriate Domain and sub-category.
- **Sourcing**: When generating content for SAP-C02, rely on professional-level internal knowledge of AWS architecture, emphasizing multi-account strategies, hybrid networking, disaster recovery, and cost optimization.
