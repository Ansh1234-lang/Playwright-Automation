# ERP Farm Playwright Automation Instructions

## Project context
This project automates approved UI workflows for ERP Farm using Playwright with TypeScript.

## Before writing or modifying tests
1. Read the relevant module document in `docs/modules/`.
2. Read the exact workflow in `docs/workflows/`.
3. Read the related scenarios in `docs/test-cases/`.
4. Check `docs/bugs/` for known issues.
5. Inspect existing tests, page objects, configuration and test-data files.
6. Inspect the actual application UI before creating or changing locators.

## Automation rules
- Use TypeScript and `@playwright/test`.
- Reuse existing page objects and helpers where appropriate.
- Prefer accessible locators and stable test IDs when available.
- Never invent selectors, business rules, validation messages or expected results.
- Do not treat a successful click as proof that a record was saved.
- Verify visible outcomes and persisted records wherever the UI supports it.
- Keep test data separate from test logic.
- Never hardcode passwords, tokens or other secrets.
- Do not weaken assertions simply to make a failing test pass.
- Do not modify existing passing tests unnecessarily.
- Use only the approved test environment and authorized test data.
- Do not perform destructive or financial/stock-changing actions without authorization.

## Handling missing information
If the workflow or expected result is unclear, list the missing information and ask for clarification. Do not guess.

## Reporting
After implementation, report:
- Files created or changed
- Scenarios covered
- Commands used
- Actual test results
- Failures and likely causes
- Any unresolved questions

Never claim tests passed unless they were actually executed and passed.