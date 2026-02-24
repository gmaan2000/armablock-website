# SOP 001: New Project Setup
**Last Updated:** Phase 3 Initialization

## Goal
To initialize a new Agentic project using the B.L.A.S.T. framework from this template.

## Inputs
* Project Name
* Goal (North Star)

## Procedure
1.  **Clone & Rename**: Copy this entire folder to a new location.
2.  **Initialize Memory**:
    *   Clear `progress.md` and `findings.md`.
    *   Update `gemini.md` with the new project's North Star.
    *   Reset `task_plan.md`.
3.  **Link Phase**:
    *   Copy `.env.example` to `.env`.
    *   Run `python3 tools/check_environment.py`.
4.  **Discovery**:
    *   Execute Protocol 0 (Ask the 5 Questions).

## Edge Cases
*   **Missing Keys**: Do not proceed past Phase 2 until `.env` is valid.
*   **Schema Changes**: If the new project requires a database, create `architecture/SOP_002_Database.md` before coding.
