---
name: test-driven-development
description: Enforces the Red-Green-Refactor cycle for writing robust code. Use when writing any new logic or fixing bugs.
---
# Test-Driven Development (Superpower)

## When to use this skill
- When writing a new tool script in `tools/`.
- When fixing a bug (first write a test that reproduces the bug).
- When the user asks for "robust" or "reliable" code.

## Workflow
- [ ] **Red**: Write a failing test case that defines the desired behavior.
- [ ] **Run Test**: Confirm it fails (and fails for the right reason).
- [ ] **Green**: Write the minimal amount of code to make the test pass.
- [ ] **Refactor**: Clean up the code while keeping the test passing.

## Instructions
1.  **Framework**: Use `unittest` or simple assert scripts for Python.
2.  **Location**: Place tests in `tests/` or alongside tools in `tools/test_*.py`.
3.  **Atomic**: One test should test one behavior.
4.  **No Exceptions**: Do not write production code without a test.

## Example
```python
# test_math.py
def test_addition():
    assert add(1, 2) == 3
```
