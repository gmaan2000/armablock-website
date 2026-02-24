---
name: blueprint-creation
description: Automates the B.L.A.S.T. Protocol Phase 1 (Blueprint) - creating task plans and defining architecture before coding.
---
# Blueprint Creation (Superpower)

## When to use this skill
- When starting a new feature or task.
- When the user says "Plan this out" or "Create a blueprint".
- When you need to break down a complex request into atomic steps.

## Workflow
- [ ] **Discovery**: Ask the 5 Core Questions (if new project) or clarify requirements.
- [ ] **Brainstorming**: Briefly explore options and select the best approach (don't code yet!).
- [ ] **Update Memory**:
    - Update `task_plan.md` with new phases/goals.
    - Update `findings.md` with any research.
- [ ] **Define Architecture**:
    - If new logic is needed, draft an SOP in `architecture/`.
    - If a new schema is needed, update `gemini.md`.

## Instructions
1.  **Stop & Think**: Do not rush to `tools/`.
2.  **Granularity**: Break tasks into 5-15 minute chunks.
3.  **Atomic Steps**: Each checklist item in `task_plan.md` should be one tool call or one logical unit of work.
4.  **Review**: Ask the user to approve the plan before executing.

## Template for task_plan.md updates
```markdown
## 🆕 [Feature Name] - Blueprint
- [ ] Research/Discovery
- [ ] Define Schema/SOP
- [ ] Link/Test Environment
- [ ] Build Tools
- [ ] Verify & Deliver
```
