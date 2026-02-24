# SOP 000: The Self-Improvement Loop
**Rule**: Every failure is an opportunity to harden the system.

## Trigger
*   A tool fails execution.
*   An API returns an unexpected error (Rate limit, 500, etc.).
*   Logic output is incorrect.

## Procedure
1.  **Stop**: Do not blindly retry.
2.  **Analyze**: Read the full error trace.
3.  **Fix**: correcting the code in `tools/` or value in `.env`.
4.  **Verify**: Run the tool again to confirm success.
5.  **Codify (CRITICAL)**:
    *   If it was a logic error -> Update the relevant `architecture/SOP_*.md`.
    *   If it was a rate limit -> Add a wait/retry logic to the tool and document it in `findings.md`.
    *   **Goal**: The same error must NEVER happen twice.

## Example
*   **Error**: API call failed with 429 (Too Many Requests).
*   **Fix**: Added retry logic with exponential backoff.
*   **Architecture Update**: Updated `SOP_API_Calls.md` to state "All external calls must wrap in retry logic."
