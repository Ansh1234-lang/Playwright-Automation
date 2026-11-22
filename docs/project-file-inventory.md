# erpFarm Playwright Automation — Project File Report

**Reviewed:** 2026-10-21  
**Scope:** Project files under the workspace, excluding dependency package contents (`node_modules`). This report describes what the files currently do, not what their names alone imply. No tests were run while preparing it.

## Project overview

This is a TypeScript project using Playwright Test to check ERP Farm pages and workflows. The active suite currently mixes ERP-specific tests, login checks, a default Playwright example, an empty placeholder test, and planning documents. The configured base URL is the ERP host `https://erp.globalbooks.in`; the shared browser context also loads `.auth/purchase-executive.json` by default. Tests that use `/po/create` therefore navigate against that host unless the config is changed.

The repository has no page-object/helper layer: the tests locate controls directly. The module guides now live under `docs/modules/`; `docs/bugs/` is absent even though the Copilot instructions reference it.

## Root configuration and package files

| File | Purpose and actual behavior |
|---|---|
| `package.json` | Declares the npm package and development dependencies (`@playwright/test`, TypeScript, Node types, dotenv). It defines **no npm scripts**, so commands such as `npm test` or `npm run build` are not configured here. |
| `package-lock.json` | Locks exact npm dependency versions and dependency metadata so `npm ci` can install a reproducible dependency tree. |
| `playwright.config.ts` | Loads `.env`, sets `tests/` as the test directory, a 30-second timeout, no retries, HTML reporting, the ERP base URL, purchase-executive storage state, trace-on-first-retry and failure screenshots. It defines a Desktop Chrome project. A commented local URL is an inactive alternative. |
| `tsconfig.json` | Enables strict TypeScript checking with ES2022/NodeNext settings, no emitted JS, and includes TypeScript tests plus the Playwright config. |
| `.gitignore` | Excludes `.env`, `.auth/`, `node_modules/`, Playwright result/report/cache directories, and related auth output from version control. |
| `.env` | Local environment variables consumed by dotenv and the auth setup test. It is ignored and may contain credentials; this report intentionally does not reproduce its keys or values. |

## Test files

| File | Purpose and actual behavior |
|---|---|
| `tests/auth.setup.spec.ts` | Iterates over Purchase Executive and Security Guard credential variables, logs each role in through `/login`, verifies the home task page, then saves browser storage state under `.auth/`. It fails when credentials are missing. |
| `tests/auth.verify.spec.ts` | Opens `/po/create` and prints the resulting URL, title, and first 1,500 characters of body text. It is a diagnostic that has no assertions. |
| `tests/example.spec.ts` | Unmodified-style Playwright sample: visits `playwright.dev`, checks the title, then follows “Get started” and checks for an Installation heading. It is unrelated to ERP Farm. |
| `tests/login.spec.ts` | Checks that the login page and form load, then submits a hard-coded email/password pair and expects to remain on the login route. The credentials are in source code rather than environment variables, so this file contains a credential-management concern. |
| `tests/smoke.spec.ts` | Checks that `/login` responds with HTTP 200 and shows the expected login title, heading, email/password fields, and Login button. |
| `tests/reject-invalid-email-address.spec.ts` | Enters malformed email and password values on `/login`, submits, and checks for a specific email-validation message and continued login route. |
| `tests/seed.spec.ts` | Empty placeholder test (“generate code here”); it performs no setup or useful assertion. |
| `tests/non-grain-po-required-field-validation.spec.ts` | Opens `/po/create`, checks its title and five required fields (Agent, Supplier, Category, Payment Status, Remarks), then verifies each is visible, has the HTML `required` attribute, and currently fails native validity. |
| `tests/non-grain-po/required-fields-read-only-20261020.spec.ts` | Opens `/po/create` and checks the same five fields are visible and expose `required=true`. Despite the filename’s “read-only” label, it only reads page state, and does not attempt submission. |
| `tests/non-grain-po/dropdown-options-selection.spec.ts` | Opens the Create PO form, checks the four dropdowns are visible and each has more than one option. It does not select an option. |
| `tests/non-grain-po/agent-dropdown-selection.spec.ts` | Checks Agent is visible/enabled, then skips unless `ERP_TEST_AGENT_OPTION` is set. With that value it checks the option exists and selects it, but does not save or submit a PO. |
| `tests/grain-po/create-po-grain-product.spec.ts` | Checks the Create PO page, several required controls, the payment-status options and product table headers. Three broader cases are explicitly skipped because approved data, behavior, environment, and/or validation evidence are missing. |
| `tests/grain-po/create-grain-po-paddy.spec.ts` | Defines a helper to normalize dropdown options; checks the grain PO form, key fields, and availability of requested Agent, Supplier, and Prepaid options. The full Paddy PO submission case is skipped and contains no submission action. |

## Test plans and scenario documents

| File | Purpose and actual behavior |
|---|---|
| `tests/plans/create-po-agent-dropdown-selection.plan.md` | Planning document for safely selecting an approved Agent option. It records observed option labels, but states that live values are not approved test data and that no dependent behavior is established. |
| `tests/plans/create-po-dropdown-options-selection.plan.md` | Read-only plan to inspect the Agent, Supplier, Category, and Payment Status lists, optionally select approved choices in a non-production environment, and avoid saving. It records observed labels while warning they may vary. |
| `tests/plans/create-po-grain-product-test-cases.md` | Large, evidence-conscious Grain PO case set (PO-GRAIN-001–022), including form controls, dropdowns, product hierarchy, sample details, validation, creation, persisted evidence, repeat behavior, and role access. Cases requiring unverified requirements, fixtures, or non-production approval are marked as blocked/not executed. |
| `docs/test-cases/non-grain-po-test-plan-20261020-210459.md` | Planning-only Non-Grain PO scenarios NGPO-001–012 covering access, form fields, product selection, dependencies, validation/boundaries, create/read-back, duplicate handling, errors, and roles. It says its authenticated form/requirements were inaccessible and marks unknown behavior for confirmation. |
| `docs/test-cases/grain-po-creation-test-cases.md` | Current, source-grounded Grain PO case design for form access, approved product entry, sequential product rows, authorized non-production PO creation, and saved-record verification. It identifies unverified validation/field behavior and keeps actual record creation gated on approved environment and test data. |
| `docs/workflows/create-po-non-grain.md` | Short role-oriented workflow outline from Purchase Executive PO creation through vehicle entry, truck approval, weighing, warehouse/store assignment, unloading, then accountant invoice creation/reporting. |
| `docs/reference/ERP Navigation Guide - 2 .md` | Longer operational navigation guide for ERP Farm workflows. It documents role handoffs and menu paths from purchase orders through gate entry, lab checks, weights, warehouse/unloading, and finance. |
| `docs/modules/grain-flow.md` | Grain end-to-end guide covering supplier purchases, supplier returns, customer sales, and customer returns. Summarizes stage owners, menu paths, grain lab work, direction-specific weighing order, stock movement, invoices and exit checks from the supplied PDFs. |
| `docs/modules/non-grain-flow.md` | Non-grain end-to-end guide covering those four journeys with the simplified lab and weighing behavior called out, alongside the required physical stock movement and billing steps. |
| `specs/README.md` | States that `specs/` is intended for test plans. No other file currently appears in that folder. |

## GitHub automation and agent instructions

| File | Purpose and actual behavior |
|---|---|
| `.github/workflows/playwright.yml` | GitHub Actions workflow on pushes and pull requests to `main`/`master`. Installs Node LTS, npm dependencies and Playwright browsers, runs `npx playwright test`, then uploads `playwright-report/`. It does not provision ERP credentials or auth state, so tests needing the ignored `.auth/purchase-executive.json` may not be ready in CI. |
| `.github/workflows/copilot-setup-steps.yml` | Copilot environment setup workflow: installs Node/dependencies and Playwright browsers. Its final step runs `npx run build`, but the package has no `build` script; this command is likely misconfigured and should be reviewed. |
| `.github/copilot-instruction.md` | Repository-specific instructions for test work: consult workflow/case/bug docs, inspect actual UI before locator changes, avoid guessed rules, secrets, unsafe ERP actions, and report actual test outcomes. It references `docs/modules/` (now populated) and `docs/bugs/` (not present). |
| `.github/agents/playwright-test-planner.agent.md` | Defines a planning-only agent for creating scenario documents. Allows read-only page inspection and prohibits running tests, writing test code, shell commands, credentials, and business-record mutations. |
| `.github/agents/playwright-test-generator.agent.md` | Defines an agent to turn an existing test plan into one TypeScript Playwright test. It requires source evidence and read-only UI inspection; it prohibits executing the generated test and business-record submission. |
| `.github/agents/playwright-test-healer.agent.md` | Defines an agent for diagnosing/fixing failing Playwright tests using test execution/debug tools and code edits. Its permission scope is broader than the planner/generator and includes running tests. |

## Editor and MCP configuration

| File | Purpose and actual behavior |
|---|---|
| `.vscode/settings.json` | Enables `python.terminal.useEnvFile`; this project is TypeScript, so the setting appears unrelated unless Python tooling is also used. |
| `.vscode/mcp.json` | Registers a stdio MCP server named `playwright-test`, launched through `npx playwright run-test-mcp-server`; no MCP inputs are declared. |

## Runtime-only and sensitive files

| Path/pattern | Purpose and actual behavior |
|---|---|
| `.auth/purchase-executive.json` | Playwright saved browser storage state for the Purchase Executive role, used by the global test configuration. It can contain active session cookies/tokens; contents are intentionally not reproduced. |
| `.auth/security-guard.json` | Saved browser state for the Security Guard role, created by the auth setup test. Sensitive session material; contents are intentionally not reproduced. |
| `.playwright-mcp/page-*.yml` | Timestamped Playwright MCP page snapshots, typically accessibility/DOM observations from prior browser inspection. They are evidence/debug artifacts, not test source. |
| `.playwright-mcp/console-*.log` | Timestamped browser-console captures paired with prior MCP inspections; useful for investigating page errors, not used by tests directly. |
| `playwright-report/index.html` | Generated HTML test report output. The report exists locally; its presence alone does not establish that the latest tests passed. |
| `test-results/` | Generated per-test result artifacts and folders (877 files at review time), including traces/screenshots or attachments as produced by Playwright. These are outputs rather than maintained source. |
| `node_modules/` | Locally installed npm dependency tree. It contains third-party package files and is excluded from the source-file descriptions above. `package-lock.json` defines its reproducible inputs. |

## Observations from the inventory

- The test suite has no npm scripts and no shared page-object/helper architecture.
- The project config uses authenticated state globally, while CI does not create that ignored state or show how credentials are provided.
- `tests/login.spec.ts` includes a literal password-like value; it should be treated as test credential data and moved out of source if it is real or reusable.
- Two files claim overlapping non-grain required-field coverage, while grain PO test files also overlap in basic page/control checks.
- Several test plans correctly distinguish observed UI from confirmed requirements, and submission-heavy cases are skipped or planning-only.
- Setup/CI commands should be reviewed against actual package scripts and environment requirements before relying on them as a reproducible pipeline.

