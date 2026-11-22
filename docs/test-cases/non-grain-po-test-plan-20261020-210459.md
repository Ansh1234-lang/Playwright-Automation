# ERP Farm — Non-Grain Purchase Order Test Plan

## Application Overview

Planning-only, read-only test plan for ERP Farm's Inward → Manage PO → Create PO workflow, scoped to Non-Grain purchase orders and the Purchase Executive role. The only verified UI in this session was the login page at https://erp.globalbooks.in/login. The authenticated form and supporting requirements were inaccessible, so field names, validations, calculations, and success behavior are marked for confirmation. Do not execute PO creation or other mutating business actions as part of planning.

## Test Scenarios

### 1. Non-Grain Purchase Order — access, form, validation, and workflow readiness

**Seed:** `No authenticated workflow seed was available; the planning session inspected the login page only.`

#### 1.1. NGPO-001 — Purchase Executive can access Create PO (P1, Positive, Easy; precondition: approved authenticated Purchase Executive test account; source: user-provided navigation, access behavior unverified)

**File:** `tests/non-grain-po.spec.ts`

**Steps:**
  1. Open Inward, then Manage PO, then Create PO.
    - expect: Create PO page opens without an authorization error.
    - expect: Exact route, title, and role access need verification against the authenticated application and permissions requirements.

#### 1.2. NGPO-002 — Verify Create PO form controls and initial state (P1, UI, Medium; precondition: authenticated Purchase Executive; clarification required)

**File:** `tests/non-grain-po.spec.ts`

**Steps:**
  1. Inspect the form sections, field labels, required indicators, dropdowns, buttons, and initial enabled/disabled states without submitting.
    - expect: Visible controls and initial states match approved Non-Grain PO requirements.
    - expect: Do not infer Non-Grain fields or rules from the Grain form; record each observed control for review.

#### 1.3. NGPO-003 — Select an eligible Non-Grain item (P1, Positive, Medium; precondition: approved isolated Non-Grain test item exists; clarification required for selector and eligibility)

**File:** `tests/non-grain-po.spec.ts`

**Steps:**
  1. After confirming the actual selector label, open it, choose an approved Non-Grain test item, then inspect the selected value and any displayed item details.
    - expect: The approved item is selected and displayed accurately.
    - expect: Eligibility criteria and displayed item details match documented requirements; no item criteria are presumed here.

#### 1.4. NGPO-004 — Verify dependent controls when Non-Grain selection changes (P1, Business Rule, Medium; precondition: two eligible isolated test items if supported; clarification required)

**File:** `tests/non-grain-po.spec.ts`

**Steps:**
  1. Select one approved Non-Grain item and record dependent controls/options. Select another eligible item and compare options and retained values.
    - expect: Dependent options and fields update as documented.
    - expect: No stale or incompatible values remain unless the requirements explicitly permit them.

#### 1.5. NGPO-005 — Required-field validation prevents incomplete submission (P1, Validation, Medium; precondition: required fields confirmed; execute only in authorized isolated test environment)

**File:** `tests/non-grain-po.spec.ts`

**Steps:**
  1. Leave all confirmed required fields blank and attempt submission only in an approved test run. Then test each required field omitted individually while other required values are valid.
    - expect: Each missing required field prevents creation and displays the documented field-specific validation.
    - expect: No PO is created for invalid input.
    - expect: Exact fields and message text/placement require confirmation; do not submit during this planning task.

#### 1.6. NGPO-006 — Numeric boundaries for applicable fields (P1, Boundary, Medium; precondition: numeric fields and limits documented; isolated test environment)

**File:** `tests/non-grain-po.spec.ts`

**Steps:**
  1. For each confirmed numeric field, test a valid ordinary value, zero, negative value, decimal precision, and documented lower/upper boundaries as applicable; submit only in an authorized test run.
    - expect: Acceptance, rejection, precision, and boundary behavior match documented rules.
    - expect: Invalid values prevent PO creation and provide clear validation.
    - expect: Do not assume fields or numeric rules that have not been verified.

#### 1.7. NGPO-007 — Date boundaries and cross-field rules, if applicable (P2, Boundary, Medium; precondition: date fields and rules confirmed)

**File:** `tests/non-grain-po.spec.ts`

**Steps:**
  1. For each confirmed date field, enter a valid date, documented boundary dates, and invalid input; check documented relationships with other fields.
    - expect: Date acceptance and cross-field behavior match documented requirements.
    - expect: Invalid dates or combinations are rejected with clear validation.
    - expect: If no date field exists, mark this case not applicable after confirming the form.

#### 1.8. NGPO-008 — Create a valid Non-Grain PO with approved test data (P1, Positive, Medium; precondition: isolated environment, approved test supplier/item and complete required values; planning only)

**File:** `tests/non-grain-po.spec.ts`

**Steps:**
  1. In a future authorized test run only, complete the confirmed required fields with approved isolated test data, select an eligible Non-Grain item, review values, and submit once.
    - expect: Application confirms success and creates exactly one PO.
    - expect: Generated identifier is captured dynamically, not hardcoded; saved values match submitted values.
    - expect: This action is explicitly not to be executed during planning.

#### 1.9. NGPO-009 — Find created PO and verify saved values (P1, Positive, Medium; precondition: NGPO-008 completed in an approved test run and listing flow confirmed)

**File:** `tests/non-grain-po.spec.ts`

**Steps:**
  1. Use the identifier captured dynamically in that run to search the confirmed PO listing; open the matching record if permitted and compare displayed values with submitted test inputs.
    - expect: The intended PO is findable using the captured identifier and displayed saved values match the submitted values.
    - expect: Listing location, search mechanism, and record visibility require confirmation.

#### 1.10. NGPO-010 — Prevent unintended duplicate creation on repeat submission (P1, Business Rule, Complex; precondition: isolated test environment and approved duplicate-safe test strategy)

**File:** `tests/non-grain-po.spec.ts`

**Steps:**
  1. In an approved test run, prepare valid test data, submit once, observe pending state, and verify documented repeat-click/retry behavior only through a safe controlled strategy.
    - expect: Application prevents an unintended duplicate or follows its documented duplicate-handling rule.
    - expect: Verify resulting record count by an approved safe method.
    - expect: Never create duplicate records or test this behavior against production-like business data; idempotency and retry rules need clarification.

#### 1.11. NGPO-011 — Handle validation/server error while preserving safe input state (P2, Negative, Complex; precondition: safe documented error trigger in isolated environment)

**File:** `tests/non-grain-po.spec.ts`

**Steps:**
  1. Enter approved test values and trigger only a documented safe error condition in an authorized test run; observe error and form state.
    - expect: The error is communicated clearly, no PO is created on failure, and entered values are preserved or cleared as documented.
    - expect: Do not deliberately cause errors in production; error trigger and expected state need clarification.

#### 1.12. NGPO-012 — Restrict PO actions for unauthorized role, if in scope (P2, Negative, Medium; precondition: approved non-authorized test role and role matrix)

**File:** `tests/non-grain-po.spec.ts`

**Steps:**
  1. Using an approved non-authorized test role, navigate through normal UI to the Create PO route and inspect available actions.
    - expect: Access and available actions match the approved role-permission matrix; no PO action is available if that role is not authorized.
    - expect: Role matrix and whether alternate-role testing is in scope require clarification.
