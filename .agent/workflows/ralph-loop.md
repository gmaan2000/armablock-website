---
description: Run the Ralph Autonomous Loop using Antigravity
---

# Ralph Loop (Antigravity Edition)

Use this workflow to execute features autonomously using the Ralph methodology, without needing external tools like `claude-code` or `jq`.

## Phase 1: Preparation

1.  **Create/Update PRD**:
    -   Use the `ralph-prd` skill to generate a `tasks/prd-[feature].md`.
    -   *Trigger*: "Plan feature [name]" or "Create PRD for [name]".

2.  **Convert to JSON**:
    -   Use the `ralph-loop` skill to convert the markdown PRD into `tools/ralph/prd.json`.
    -   *Trigger*: "Convert PRD to Ralph format".

## Phase 2: The Loop

Repeat these steps until all stories in `prd.json` are marked `passes: true`.

1.  **Read Context**:
    -   Read `tools/ralph/prd.json` to identify the next failing story (highest priority).
    -   Read `tools/ralph/progress.txt` to check for "Codebase Patterns" and recent learnings.

2.  **Execute Story**:
    -   **Task**: Implement the selected story (ID: `US-XXX`).
    -   **Standard**: Update code, run tests, and verify requirements.
    -   **Constraint**: Do not work on other stories. Focus on one.

3.  **Verify**:
    -   Run typechecks/linters.
    -   If UI, use `browser_subagent` to visually verify.

4.  **Update State**:
    -   **Code**: Commit changes (if applicable) or save files.
    -   **Learnings**: Append a new entry to `tools/ralph/progress.txt` with:
        -   What was built.
        -   Files changed.
        -   **Crucial**: Any new patterns or "gotchas" discovered.
    -   **PRD**: Update `tools/ralph/prd.json` to set `passes: true` for the story.

5.  **Loop or Stop**:
    -   If more stories exist, proceed to the next iteration.
    -   If all are `passes: true`, report **COMPLETE**.
