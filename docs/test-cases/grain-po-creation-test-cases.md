# Grain Purchase Order Creation — Test Cases

**Scope:** Create a Grain Purchase Order (PO) only, from opening the form through verifying the saved PO. Truck arrival, lab work after receipt, weighing, storage, and invoicing are outside this document's scope.

**Workflow source:** [Grain module guide](../modules/grain-flow.md), “Buy grain from a supplier.” Its process is based on the supplied Complete Flow Guide PDF and high-level ERP Navigation Guide. The guides provide business steps, not a complete field specification or approved test fixture.

**Status:** Test design only. No PO was created and no test was executed while writing these cases.

## Preconditions and test data

- Run creation cases only in an explicitly authorized non-production environment, using an authorized Purchase Executive account.
- Obtain approved values for supplier, grain category, product/variety and any applicable hierarchy, bags, quantity, rate, quality range, and any other fields the actual form requires.
- Confirm whether an Agent, payment status, date/time, unit, product-level remarks, or PO-level remarks are required for the intended scenario. The workflow guide does not specify their exact requirements.
- Use realistic approved test data only. Example names, quantities, prices, and quality values in the source PDFs are illustrations, not fixtures.
- Record the generated PO number and use it to verify the saved record. Avoid duplicate submission or repeat-creation behavior unless there is a separately approved test case and documented expectation.

## Cases

### GRPO-001 — Open the Grain PO form

**Priority:** High · **Type:** UI / access · **Data change:** No

**Steps**

1. Sign in with the authorized Purchase Executive test account.
2. Open **Inward → Manage PO → Create PO**.
3. Observe the page title, PO number area, product entry area, and available create controls without submitting data.

**Expected results**

- The Create PO form opens for the authorized role.
- The form provides a PO identifier area and controls for selecting the grain category and product/variety and entering order details, as described by the workflow guide.
- Record the actual labels and whether the PO number is generated or editable. The guide does not specify those UI details, so do not assert a particular format or behavior without further evidence.

### GRPO-002 — Add an approved Grain product row

**Priority:** High · **Type:** Positive / product entry · **Data change:** Form state only, before PO creation

**Precondition:** GRPO-001 passes; approved non-production fixture and all applicable product-level values are available.

**Steps**

1. Select the approved supplier and Grain category.
2. Select the approved Grain product/variety and only the hierarchy levels shown for it.
3. Enter the approved ordered bags, quantity, agreed rate, and applicable quality range. Fill other fields only when their purpose and expected value are confirmed.
4. Submit the current product row before starting another row.
5. Inspect the product entry summary/table.

**Expected results**

- The approved choices and values are displayed in the current product row.
- After the row is submitted, a corresponding product entry appears in the form's submitted-products area and reflects the entered product and approved values.
- The exact row labels, columns, calculations, range format, and error messages remain to be confirmed from the target form; do not invent assertions for them.
- No PO is created by this case.

### GRPO-003 — Add multiple Grain product rows in sequence

**Priority:** Medium · **Type:** Positive / multi-item · **Data change:** Form state only, before PO creation

**Precondition:** GRPO-002 is understood and at least two distinct approved Grain product fixtures are available.

**Steps**

1. Enter and submit the first approved product row.
2. Enter and submit the second approved product row only after the first row has been submitted.
3. Review all submitted rows and their values.

**Expected results**

- Each submitted row remains represented separately with its approved product and values.
- The form follows the documented sequence of submitting one item before adding the next.
- If the actual form prevents a second row or changes row details, record the observed behavior; assert only behavior confirmed by the requirements or application evidence.
- No PO is created by this case.

### GRPO-004 — Create a valid Grain PO and verify the saved record

**Priority:** High · **Type:** End-to-end positive · **Data change:** Creates a PO; authorized non-production only

**Preconditions:** GRPO-001 through GRPO-002 pass; the environment and role are confirmed as authorized; all header and product data are approved; Create PO and confirmation behavior are verified in the target form.

**Steps**

1. Complete the PO header using approved values.
2. Enter and submit each approved Grain product row; review the submitted products and all values.
3. Review the completed PO before using **Create PO**.
4. Create the PO and complete the form's confirmation step.
5. Capture the PO number and any visible success evidence.
6. Open **Inward → Manage PO → PO Details**, locate the new PO by its identifier, and verify the saved supplier, products, quantities, and other documented values.

**Expected results**

- The application confirms creation and provides a PO identifier.
- The same PO can be found in PO Details, and its saved values match the approved inputs.
- A successful click alone is insufficient evidence; confirm the saved record.
- If the generated identifier, success message, or PO Details layout differs, record the observed result and update the test expectation from verified application behavior.

## Deferred cases

Do not automate or assert the following until their expected behavior is sourced and approved:

- Required-field omissions, invalid values, and boundary limits for rate, quantity, bags, dates, and sample ranges.
- Exact dropdown membership, product hierarchy dependencies, and whether changing a parent resets child values.
- Default or editable behavior of the PO number and date/time.
- Exact quality-range units/format, derived calculations, and rounding.
- Duplicate creation, repeat-submit, edit-after-create, and role-denial behavior.

## Implementation note

The current Playwright baseline is `tests/grain-po/create-po-grain-product.spec.ts`. Its page and option checks may support the non-mutating cases, but selectors must be checked against the actual target UI before being added or changed. Keep the end-to-end creation case disabled until authorized non-production access and approved fixtures are available. The repository's Playwright config currently points to `https://erp.globalbooks.in`; do not run a creation case against that host without explicit confirmation that it is a safe, authorized test environment.

