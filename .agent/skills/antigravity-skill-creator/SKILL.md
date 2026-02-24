---
name: antigravity-skill-creator
description: Creates new skills for the Antigravity agent environment. Use when the user asks to create a new skill or defining how the agent should handle a specific type of task.
---
# Antigravity Skill Creator
## When to use this skill
- When the user asks to create a new skill.
- When the user wants to define a standardized way of handling a task.
- When the user mentions "skill" or "B.L.A.S.T." in the context of creating a new capability.

## Workflow
- [ ] **Analyze Request**: Identify the goal, triggers, and necessary steps for the new skill.
- [ ] **Draft SKILL.md**: Create the SKILL.md file with the required YAML frontmatter and sections.
- [ ] **Create Folder Structure**: Create the .agent/skills/[skill-name] directory and subdirectories (scripts/, examples/, resources/) if needed.
- [ ] **Write Content**: Fill in the SKILL.md with clear, third-person instructions, checklists, and workflows.

## Instructions
1. **Naming**: The skill name must be a **gerund** (e.g., `testing-code`, `managing-databases`). Max 64 chars. Lowercase, numbers, and hyphens only.
2. **Structure**: 
   - `SKILL.md` is mandatory. 
   - `scripts/`, `examples/`, `resources/` are optional but recommended for complex skills.
3. **Writing Style**: 
   - Concise, third-person, progressive disclosure.
   - Use absolute paths (starting with `/`) or relative paths within the skill folder.
4. **Frontmatter**:
   - `name`: [gerund-name]
   - `description`: [3rd-person description]. Max 1024 chars.

## Template
```markdown
---
name: [gerund-name]
description: [3rd-person description]
---
# [Skill Title]
## When to use this skill
- [Trigger 1]
- [Trigger 2]
## Workflow
[Insert checklist or step-by-step guide here]
## Instructions
[Specific logic, code snippets, or rules]
## Resources
- [Link to scripts/ or resources/]
```
