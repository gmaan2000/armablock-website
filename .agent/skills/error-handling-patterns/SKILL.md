---
name: error-handling-patterns
description: Master error handling patterns for building resilient tools. Use when writing Python scripts in tools/ or designing robust architectures.
---
# Error Handling Patterns

## When to use this skill
- When writing a new tool script in `tools/`.
- When dealing with external APIs (rate limits, timeouts).
- When validating complex user input.

## Core Patterns

### 1. Circuit Breaker (For External APIs)
Prevent cascading failures when an API is down.
*   **State**: Closed (Normal), Open (Failing), Half-Open (Testing).
*   **Action**: If API fails X times, stop calling it for Y seconds.

### 2. Error Aggregation (For Validation)
Collect all errors before failing, rather than failing on the first one.
*   **Use Case**: Validating a configuration file or form.
*   **Pattern**: Create a `list` of errors, append to it, and raise an `AggregateError` at the end if the list is not empty.

### 3. Graceful Degradation (For Reliability)
If a primary method fails, fall back to a safer alternative.
*   **Example**: If the database is down, try the local cache.
*   **Example**: If the LLM fails, return a static default response.

## Instructions
1.  **Do not swallow errors**: Always log them or re-raise them.
2.  **Use specific exceptions**: `ValueError`, `ConnectionError`, not just `Exception`.
3.  **Fail Fast**: Validate inputs at the start of the function.
