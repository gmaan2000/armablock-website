# gemini.md - Project Constitution

## 1. Project Identity
* **North Star**: [Define the main goal of the project here]
* **Integrations**: Standard Agentic Tools (OpenAI/Anthropic).
* **Tech Stack & MCPs**:
    *   [List necessary tech stack and MCPs here]
* **Source of Truth**: Local File System (Markdown Memory: `gemini.md`, `task_plan.md`).
* **Delivery Payload**: [Define the complete file structure and expected output here]

## 2. Data Schemas
* **Input Schema**: User Prompt / Request.
* **Output Payload**: Structured Project Folder (B.L.A.S.T. compliant).

## 3. Behavioral Rules
* **Standard Rules**:
    *   Prioritize safety and reliability.
    *   "Data-First": Define schemas before tools.
    *   Atomic changes: One tool, one specific purpose.
    *   No guessing: Ask if unsure.

## 4. Architectural Invariants
* **The "Data-First" Rule**: No coding until "Payload" shape is confirmed.
* **The "Tools-First" Rule**: Check `tools/` for existing scripts before building new ones. reusing is better than rebuilding.
*   **The Self-Improvement Loop**:
    1.  Identify what broke.
    2.  Fix the tool or process.
    3.  Verify the fix.
    4.  **Update the Architecture (SOP)** so the error never happens again.
* **Layered Architecture**: 
    * Layer 1: Architecture (SOPs)
    * Layer 2: Navigation (Decision Making)
    * Layer 3: Tools (Deterministic scripts)
* **Single Source of Truth**: `gemini.md` is law. `task_plan.md` is memory.
* **File Structure**:
    *   `.tmp/` -> Trash (Disposable).
    *   Cloud -> Treasure (Final Deliverables).

## 5. Maintenance Log
* [Date]: Project Initialized.
