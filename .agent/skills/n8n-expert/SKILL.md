---
name: n8n-expert
description: The ultimate guide for building, validating, and debugging n8n workflows using MCP tools. Handles expression syntax, node configuration, architectural patterns, and code nodes.
---
# n8n Expert Skill

## When to use this skill
- When the user asks to "create a workflow" or "build an agent" in n8n.
- When validating n8n node configurations or expressions.
- When debugging workflow errors.
- When writing JavaScript/Python code for n8n Code nodes.

## Workflow
1.  **Search**: `search_templates` (try first!) -> `search_nodes`.
2.  **Configure**: `get_node(detail='standard')` -> Configure parameters (NEVER defaults).
3.  **Validate**: `validate_node` -> Fix errors.
4.  **Build**: Connect nodes -> Layout on canvas -> `n8n_create_workflow`.
5.  **Verify**: `n8n_test_workflow` or `n8n_validate_workflow`.

## 1. Expression Syntax
*   **Variables**: `$json`, `$node["Node Name"].json`, `$now`, `$env`.
*   **Access**: `$json.body` (Webhook), `$json.text` (Slack).
*   **Fixes**: Ensure `{{ }}` wrapping for all dynamic values.

## 2. MCP Tools Guide
*   **Search**: `search_nodes({query: "slack"})`
*   **Inspect**: `get_node({nodeType: "n8n-nodes-base.slack", detail: "standard"})`
*   **Validate**: `validate_node({nodeType: "...", config: {...}})`
*   **Deploy**: `n8n_create_workflow({name: "...", nodes: [...], connections: {...}})`

## 3. Workflow Patterns (Architectural SOPs)
*   **Webhook**: Webhook -> Filter/Auth -> Process -> Respond.
*   **API Polling**: Schedule -> HTTP Request -> SplitInBatches -> Process.
*   **AI Agent**: Agent Node -> Retriver/Tools -> Memory -> Output.

## 4. Coding Standards (Code Node)
### JavaScript (Preferred)
```javascript
// Access input
const items = $input.all();
// Return format
return items.map(item => ({ json: { ...item.json, processed: true } }));
```
### Python
```python
# Access input
items = _input.all()
# Return format
return [{'json': {**item.json, 'processed': True}} for item in items]
```

## 5. Validation Rules
*   **Never trust defaults**: Explicitly set `authentication`, `operation`, `resource`.
*   **Error Handling**: Always add an "Error Trigger" workflow or proper `catch` logic.
*   **Credentials**: Do NOT hardcode secrets. Use n8n credentials system.
