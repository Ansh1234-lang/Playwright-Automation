# ERP Farm — Purchase Order Creation Test Plan

## Application Overview

Planning-only coverage for ERP Farm Inward > Manage PO > Create PO, with Grain and Non-Grain product cases. Project documentation identifies the Purchase Executive as the PO creator and describes the flow: choose the supplier/category (and Grain product hierarchy where applicable), enter item values, submit each product row, create/confirm the PO, and retain its PO number. Non-Grain uses quantity, unit, and agreed rate and leaves Lab Sample Range blank; Grain uses ordered bags, quantity, agreed rate, and applicable quality range. Existing code checks the Non-Grain header controls Agent *, Supplier *, Category *, Payment Status *, and Remarks * for required attributes; this is prior-art evidence, not live verification. No browser inspection was needed because project docs and prior plans cover the workflow. No ERP records were created and no tests were run. All record-creation scenarios below are blocked until an explicitly authorized non-production environment, authorized Purchase Executive account, approved fixtures, and Create/confirmation behavior are confirmed. Grain/non-grain field rules are from project workflow docs; exact validations, allowed values, calculations, dependent dropdown behavior, permissions, and confirmation/success UI remain unverified. Do not invent assertions for these. Existing related plans: docs/test-cases/grain-po-creation-test-cases.md; tests/plans/create-po-dropdown-options-selection.plan.md; tests/plans/create-po-agent-dropdown-selection.plan.md. Existing baseline: tests/non-grain-po-required-field-validation.spec.ts.

## Test Scenarios

### 1. PO Create — access, product entry, and saved-record verification

**Seed:** `tests/non-grain-po-required-field-validation.spec.ts`

#### 1.1. POC-001 [P1] Purchase Executive can open the Create PO form

**File:** `tests/plans/create-po-creation-test-plan.md`

**Steps:**
  1. Precondition: use an authorized test account and a non-production environment. Navigate through Inward > Manage PO > Create PO as the Purchase Executive; do not enter data or invoke business actions.
    - expect: The Create PO page opens for the intended role. The Purchase Executive role and menu path are documented; actual access behavior must be confirmed in the target environment.
    - expect: Record the displayed PO identifier area and product-entry controls without assuming whether the PO number is generated or editable.
    - expect: No PO or other ERP record is created or changed.

#### 1.2. POC-002 [P1] Non-Grain PO header required controls are present

**File:** `tests/plans/create-po-creation-test-plan.md`

**Steps:**
  1. Precondition: POC-001 passes. Open the Non-Grain Create PO form and inspect the existing baseline controls without entering values, triggering validation, or submitting the form.
    - expect: Agent *, Supplier *, Category *, Payment Status *, and Remarks * are visible and carry the required attribute, matching the existing baseline test.
    - expect: No exact error text or submit-time behavior is asserted; the baseline only checks control visibility and required attributes.
    - expect: No PO is created or changed.

#### 1.3. POC-003 [P1] Add approved Non-Grain product row(s) before PO creation

**File:** `tests/plans/create-po-creation-test-plan.md`

**Steps:**
  1. Precondition: POC-001 passes; use an authorized non-production environment and approved supplier, Non-Grain category, product, quantity, unit, and agreed rate. Complete the documented header fields, then enter one product row and submit that row using the product-row action only. For the multi-row variation, repeat with a second distinct approved product after the first row is represented in the submitted-products area.
    - expect: The chosen supplier and Non-Grain category precede product selection, as documented.
    - expect: The submitted-products area shows each entered product and the approved quantity, unit, and rate; exact layout and calculations are not specified and must be confirmed.
    - expect: Lab Sample Range remains blank for Non-Grain.
    - expect: No PO-level Create PO or confirmation action is used; only form state is changed.

#### 1.4. POC-004 [P1] Add approved Grain product row(s) before PO creation

**File:** `tests/plans/create-po-creation-test-plan.md`

**Steps:**
  1. Precondition: POC-001 passes; use an authorized non-production environment and approved supplier, Grain category, product/variety, applicable hierarchy values, ordered bags, quantity, rate, and quality range. Complete the documented header fields, enter a product row, and submit that row. For the multi-row variation, repeat with a second approved Grain product only after the first row is submitted.
    - expect: The selected Grain product and only applicable hierarchy levels are represented in the row.
    - expect: The submitted-products area reflects the entered product and approved values, including bags, quantity, rate, and applicable quality range; exact labels, calculations, and range formatting remain unverified.
    - expect: Each product row is represented separately. No PO-level Create PO or confirmation action is used.

#### 1.5. POC-005 [P1] Create and verify a valid Non-Grain PO

**File:** `tests/plans/create-po-creation-test-plan.md`

**Steps:**
  1. Preconditions: POC-001 and POC-003 pass; use approved non-production test data and a Purchase Executive account. Confirm the environment is safe for record creation and the target form's Create PO and confirmation behavior before proceeding. Complete the header and at least one approved Non-Grain product row; review all submitted values.
    - expect: The PO is not submitted unless the environment, role, data, and expected confirmation flow have been approved.
  2. In the explicitly authorized non-production environment only, invoke Create PO and complete the documented confirmation step once. Capture the generated/displayed PO number and visible success evidence.
    - expect: The application provides observable evidence of creation and a PO identifier; exact success text and identifier format are not specified and must be observed rather than assumed.
    - expect: Do not repeat submission to test duplicates.
  3. Use Inward > Manage PO > PO Details to locate the newly created PO by the captured identifier and compare its supplier, products, quantity, unit, rate, and other approved inputs.
    - expect: The saved PO is findable by its captured identifier and the displayed saved values match approved inputs.
    - expect: A successful button click alone is insufficient; confirm the saved record.

#### 1.6. POC-006 [P1] Create and verify a valid Grain PO

**File:** `tests/plans/create-po-creation-test-plan.md`

**Steps:**
  1. Preconditions: POC-001 and POC-004 pass; use approved non-production test data and a Purchase Executive account. Confirm the environment is safe for record creation and the target form's Create PO and confirmation behavior before proceeding. Complete the header and at least one approved Grain product row; review all submitted values.
    - expect: The PO is not submitted unless the environment, role, data, and expected confirmation flow have been approved.
  2. In the explicitly authorized non-production environment only, invoke Create PO and complete the documented confirmation step once. Capture the generated/displayed PO number and visible success evidence.
    - expect: The application provides observable evidence of creation and a PO identifier; exact success text and identifier format are not specified and must be observed rather than assumed.
    - expect: Do not repeat submission to test duplicates.
  3. Use Inward > Manage PO > PO Details to locate the newly created PO by the captured identifier and compare its supplier, Grain products, bags, quantity, rate, quality range, and other approved inputs.
    - expect: The saved PO is findable by its captured identifier and displayed saved values match approved inputs.
    - expect: A successful button click alone is insufficient; confirm the saved record.

#### 1.7. POC-007 [P2] Verify Create PO role access against an approved permission matrix

**File:** `tests/plans/create-po-creation-test-plan.md`

**Steps:**
  1. Precondition: obtain the approved role-to-permission matrix and authorized accounts for the target test environment. For each documented role, navigate to Inward > Manage PO > Create PO without changing permissions or attempting to create a PO.
    - expect: The Purchase Executive and any explicitly authorized roles have the documented access outcome.
    - expect: Unauthorized roles have the documented denial or absence-of-access outcome; exact denial UI is not established and must follow the approved permission matrix.
    - expect: Do not infer role permissions from the workflow guide alone, and do not modify any role or permission.
