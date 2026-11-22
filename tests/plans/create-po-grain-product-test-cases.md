# Create PO — Grain Product Test Cases

> **Superseded:** This earlier planning draft predates review of the workflow PDFs and current module guide. For current Grain PO creation cases and source-grounded steps, use [`docs/test-cases/grain-po-creation-test-cases.md`](../../docs/test-cases/grain-po-creation-test-cases.md). The 22-case draft below is retained as historical planning material and its statements that those sources were unavailable no longer describe the project.

## Application Overview

# Scope and objective
Plan complete coverage for Inward → Manage PO → Create PO, Grain Product only. Planning is based on the workflow and visible-control inventory supplied in the task; required project documentation, source PDF, existing test plans, and supplied screenshot could not be read in this session. No ERP business record was created or changed, no Create PO action was taken, and no tests were executed.

## Preconditions, role, environment, and test data
- Required role: an authorized Purchase Executive (role supplied as workflow context; actual permissions require confirmation).
- Live ERP is treated as production. All cases involving form interaction, validation, product-row addition, or PO creation must run only in an explicitly authorized non-production environment with approved test data. Do not execute against live production.
- Required approved fixture values: Agent, Supplier, Category, grain Product and applicable hierarchy values, Payment Status, Date & Time, product details (including bags, quantity, unit price, GST and product-level remark only if supported), Unit, grain sample data, and PO Remarks. None were supplied or verified; do not select arbitrary live business data.
- Starting records, options, field requirements, hierarchy applicability, role access, and generated identifier behavior are unverified.

## Evidence classification and source references
- **User brief (UB):** workflow and listed controls supplied in the task; not independently verified.
- **Application observation (AO):** only the login redirect was observed at https://erp.globalbooks.in/login. No authenticated Create PO page or dropdown was inspected.
- **Required project sources (not read / unavailable in this session):** `docs/navigation-guide/README-INDEX.md`; `docs/navigation-guide/TEST-PLANNER-INSTRUCTIONS.md`; `docs/navigation-guide/00-common-rules-and-reference.md` (existence unverified); Grain Purchase Order overview and PO-creation step chunks (file names and page references unverified); original PDF *Complete Flow Guide — Buying and Selling (Grain and Non-Grain)* (page references unverified); supplied Create PO screenshot (actual image unavailable; only task's control inventory is available); `playwright.config.ts`; relevant tests and existing test plans. Accordingly, no PDF page citations or regression defect references can be asserted.
- Control inventory supplied in UB: PO Number, Agent, Supplier, Category, Payment Status, Date & Time, Product, Sub-Product, Child, Sub-Child, Sub-Sub-Child, Details, Unit, Lab Sample Range, Add Product, Remarks, Submitted Products, Create PO. A separate top-right **+ Add Product** is mentioned in UB, but its purpose is unverified.

## Dropdown coverage matrix
| Control | Required coverage | Available options / approved values | Status |
| Agent | Enumerate available options read-only; choose only approved test value in authorized environment | Not inspected / not supplied | Blocked; Needs confirmation |
| Supplier | Enumerate available options read-only; choose only approved value | Not inspected / not supplied | Blocked; Needs confirmation |
| Category | Enumerate available options read-only; choose only approved value | Not inspected / not supplied | Blocked; Needs confirmation |
| Payment Status | Cover both Prepaid and Postpaid | Values supplied by UB; availability and selection behavior unverified | Not tested; Needs confirmation |
| Product | Enumerate options; cover approved grain product(s) only | Not inspected / not supplied | Blocked; Needs confirmation |
| Sub-Product, Child, Sub-Child, Sub-Sub-Child | Enumerate applicable options at each level; test only levels relevant to approved product | Applicability/options unverified | Blocked; Needs confirmation |
| Unit | Enumerate options and cover approved unit(s), e.g. kg or quintal only if documented/approved | Examples only from UB; actual options unverified | Blocked; Needs confirmation |

## Field-validation coverage matrix
| Field/group | Planned check | Expected rule / boundaries | Status |
| PO Number | Presence, generated/manual behavior, uniqueness evidence | Not documented; Needs confirmation |
| Agent, Supplier, Category, Payment Status, Date & Time, Product | Omission and valid selection | Requiredness, messages and rules not documented; Needs confirmation |
| Product hierarchy | Applicable/omitted hierarchy levels and parent changes | Requiredness, dependencies, reset behavior not documented; Needs confirmation |
| Product details: bags, quantity, unit price, GST, product remark | Presence only when shown for selected grain; valid, blank, invalid and boundaries per approved rules | Fields, formats, limits, rounding and requiredness not verified; Needs confirmation |
| Unit | Valid approved option and mismatch/blank only when specified | Rules not documented; Needs confirmation |
| Grain lab sample | Grain size/length-to-width ratio, foreign matter, moisture; verify actual presentation under Lab Sample Range | Formats, units, ranges and requiredness not documented; Needs confirmation |
| PO Remarks | Blank and approved text; length/character boundaries only if documented | Rules not documented; Needs confirmation |
| Add Product / Submitted Products | Correct row and values after row action; error handling | Observable target is supplied in UB; exact columns and duplicate behavior unverified |
| Create PO / repeat submission | Authorized-environment success and duplicate handling only against documented requirement | Creation evidence and repeat behavior not verified; mutation cases blocked |

## Test case table conventions
Each suite entry below is one test case; the ID and case title are in its name. The first step records Preconditions, Test Data, Source Reference, Test Data Approval Status, and Execution Status to preserve the requested case fields. **Approval:** not supplied. **Execution:** Not executed for every case. Source references use UB/AO unless explicitly stated; required source files and PDF pages remain unread/unverified. All mutation or form-interaction cases require authorization for non-production and approved data.

## Open questions / blockers
1. Provide access to project documentation/PDF/screenshot and existing plans for exact page citations, navigation evidence, and duplicate/regression avoidance.
2. Authentication stopped at login; do not enter credentials or bypass it. No application form, live options, visual layouts, or row/top-right Add Product behavior could be inspected.
3. Confirm authorized non-production environment, authorized role, approved fixtures, exact field formats/ranges/requiredness, messages, product hierarchy applicability, success evidence, generated PO identifier, and documented duplicate behavior.
4. Cases marked Needs confirmation are specifications to resolve before execution, not assumed behavior.

## Coverage summary
22 test cases: navigation/rendering, PO number, Agent/Supplier/Category options, both payment statuses, date/time, grain product and hierarchy, product commercial details, Unit, grain sample fields, row Add Product, Submitted Products, distinct top-right + Add Product control, PO Remarks, required validation, invalid/boundary values, end-to-end creation, post-create identifier/evidence, duplicate repeat behavior, and role access. Dropdown option enumeration and all field rules remain blocked/unverified. No test was executed.

## Test Scenarios

### 1. Create PO — Grain Product

**Seed:** `Not used — planning only; no test code or seed test created.`

#### 1.1. PO-GRAIN-001 — Navigate to Create PO and verify page rendering

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production environment and Purchase Executive access; confirm navigation path Inward → Manage PO → Create PO. Test Data: none. Source: UB; AO login redirect only. Approval: N/A. Execution: Not executed.
    - expect: After authentication and navigation, the Create PO page and Grain Product workflow render. Exact route, landmarks, and evidence must be confirmed against the guide/application; no authenticated page was observed.
  2. Navigate by the approved documented path without changing or submitting any business data.
    - expect: Record visible page title, navigation location, and available controls. Any mismatch is reported, not inferred.

#### 1.2. PO-GRAIN-002 — Verify PO Number control and behavior

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production form access. Test Data: approved fixture if manual entry is confirmed; otherwise none. Source: UB control inventory; creation behavior undocumented. Approval: not supplied. Execution: Not executed.
    - expect: PO Number control is present as documented in the supplied inventory. Whether it is generated, editable, prepopulated, or required is Needs confirmation; record actual behavior without assuming a rule.

#### 1.3. PO-GRAIN-003 — Enumerate and select an approved Agent

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production access; approved Agent fixture. Test Data: approved Agent only. Source: UB; option list unavailable. Approval: not supplied. Execution: Not executed.
    - expect: Enumerate and record available Agent options read-only before selection. Confirm the approved value is present and selection is displayed; no names are presupposed.

#### 1.4. PO-GRAIN-004 — Enumerate and select an approved Supplier

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production access; approved Supplier fixture and any documented Agent prerequisite. Test Data: approved Supplier only. Source: UB; option list/dependency unavailable. Approval: not supplied. Execution: Not executed.
    - expect: Enumerate available Supplier options read-only; select only approved value in authorized testing. Verify displayed selection and any documented Agent dependency. Dependency behavior is otherwise Needs confirmation.

#### 1.5. PO-GRAIN-005 — Enumerate and select an approved Category

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production access; approved Category fixture. Test Data: approved Category only. Source: UB; options unavailable. Approval: not supplied. Execution: Not executed.
    - expect: Enumerate available Category options and record them; verify the approved value can be selected and displayed. Actual values and relationship rules are Needs confirmation.

#### 1.6. PO-GRAIN-006 — Cover Prepaid and Postpaid payment statuses

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production form access. Test Data: Payment Status values Prepaid and Postpaid as supplied by UB; other fixture data only if required to reach the field. Source: UB; option list and implications unavailable. Approval: not supplied. Execution: Not executed.
    - expect: Verify both Prepaid and Postpaid are available and each can be selected in separate controlled iterations; record the displayed selection. Any additional fields or behavior is Needs confirmation; do not infer financial effects.

#### 1.7. PO-GRAIN-007 — Inspect Date & Time field behavior

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production form access and documented approved test date/time if setting it is required. Test Data: approved date/time only. Source: UB; format/rules unavailable. Approval: not supplied. Execution: Not executed.
    - expect: Verify the field is present and document its displayed format, default, picker/manual interaction, and accepted values without assuming timezone or range. Requiredness and boundary expectations are Needs confirmation.

#### 1.8. PO-GRAIN-008 — Select an approved grain Product

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production access and approved grain Product fixture. Test Data: approved grain product only; do not choose an arbitrary live product. Source: UB; product options unavailable. Approval: not supplied. Execution: Not executed.
    - expect: Enumerate available Product options read-only; confirm approved fixture is identified as grain from documented evidence and select only in authorized test. Product names and classification are not assumed.

#### 1.9. PO-GRAIN-009 — Verify applicable dependent product hierarchy dropdowns

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: approved grain product and its approved hierarchy fixtures in authorized non-production. Test Data: only documented applicable Sub-Product/Child/Sub-Child/Sub-Sub-Child values. Source: UB; applicability and dependencies unavailable. Approval: not supplied. Execution: Not executed.
    - expect: For the selected product, record which hierarchy controls appear, their available options, and whether selection of a parent changes descendants. Verify only documented applicable levels. Requiredness, clearing/reset behavior, and option lists are Needs confirmation until sourced.

#### 1.10. PO-GRAIN-010 — Verify displayed product-detail fields and numeric handling

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production environment, approved product and approved numeric fixtures. Test Data: bags, quantity, unit price, GST and product-level remark only where the actual form supports them; no values supplied. Source: UB mentions these fields conditionally; screenshot inventory does not enumerate them. Approval: not supplied. Execution: Not executed.
    - expect: Record which detail fields are actually displayed for the selected grain product. For supported fields, verify approved valid values are accepted and displayed as entered/normalized. Do not assume fields, format, precision, range, rounding, requiredness, or error messages; each is Needs confirmation absent documentation.

#### 1.11. PO-GRAIN-011 — Enumerate and select approved Unit options

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production access, approved grain fixture, and approved Unit. Test Data: documented approved unit; kg/quintal are examples from UB only. Source: UB; actual option list unavailable. Approval: not supplied. Execution: Not executed.
    - expect: Enumerate and record Unit options; verify approved unit can be selected and displayed. Do not assert kg or quintal are available unless observed/documented. Compatibility rules are Needs confirmation.

#### 1.12. PO-GRAIN-012 — Inspect grain Lab Sample Range fields and validation

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production access and approved lab sample fixture; grain size/length-to-width ratio, foreign matter, moisture values approved. Source: UB names sample details and Lab Sample Range control; visual layout and formats unavailable. Approval: not supplied. Execution: Not executed.
    - expect: Verify how the form presents each documented sample detail (separate inputs, range control, or other documented representation) and record units and accepted approved values. Requiredness, ranges, precision, invalid-value handling, and messages are Needs confirmation; do not invent thresholds.

#### 1.13. PO-GRAIN-013 — Add a product using the product-row Add Product control

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production environment; approved complete grain product fixture; confirm control location from application before acting. Test Data: approved product details and sample values. Source: UB says product-level Add Product should add the product to Submitted Products; not independently verified. Approval: not supplied. Execution: Not executed.
    - expect: Use only the product-row Add Product action (not top-right + Add Product) in authorized testing. Verify observable row appears in Submitted Products and matches the entered approved product values; capture exact fields and feedback. Error behavior is Needs confirmation.

#### 1.14. PO-GRAIN-014 — Verify Submitted Products table content

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production; one approved grain product added using the product-row action. Test Data: same approved product fixture. Source: UB; columns and rendering unavailable. Approval: not supplied. Execution: Not executed.
    - expect: Verify an observable submitted row represents the added product and its documented values. Record actual columns, formatting, and any edit/remove controls without activating business actions. Exact table schema is Needs confirmation.

#### 1.15. PO-GRAIN-015 — Distinguish top-right + Add Product from row Add Product

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production access; read-only inspection first; approved fixture required before any state-changing interaction. Source: UB mentions distinct top-right + Add Product and product-row Add Product; actual placement/purpose unverified. Approval: not supplied. Execution: Not executed.
    - expect: Identify the two controls separately by location/label. Determine purpose only from documentation or safe authorized non-production observation; do not activate the top-right control if its behavior could add/change business data. Purpose is Needs confirmation until evidenced.

#### 1.16. PO-GRAIN-016 — Enter and verify PO-level Remarks

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production form access and approved PO remark data. Test Data: approved text only. Source: UB; limits and validation unavailable. Approval: not supplied. Execution: Not executed.
    - expect: Verify PO-level Remarks is distinct from any product-level remark, accept and display approved text according to documented behavior. Blank handling, length, character restrictions, and messages are Needs confirmation.

#### 1.17. PO-GRAIN-017 — Check documented mandatory-field validation

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production environment and source-verified required-field list/error behavior. Never trigger submission on live ERP. Test Data: controlled approved omissions one field at a time. Source: required documentation not read; UB supplies no mandatory rules. Approval: not supplied. Execution: Not executed.
    - expect: For each field documented as mandatory, verify the documented validation outcome and that no PO is created when required input is omitted. Until source rules/messages are confirmed, this case is blocked and no specific field or message is asserted.

#### 1.18. PO-GRAIN-018 — Check documented invalid, blank, boundary, and unusual values

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: authorized non-production environment and source-verified formats, constraints and boundaries for each applicable field. Test Data: approved invalid/boundary set derived from those rules; none supplied. Source: project guide/PDF unavailable. Approval: not supplied. Execution: Not executed.
    - expect: For documented fields only, check blank, invalid, minimum, maximum, precision, and unusual values against documented expected handling. Do not fabricate test values, limits, or errors. Block until rules and safe fixtures are approved.

#### 1.19. PO-GRAIN-019 — Create a valid Grain PO end to end (authorized test environment only)

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: explicitly authorized non-production environment; authorized role; approved Agent, Supplier, Category, Payment Status, Date & Time, grain Product/hierarchy, supported product details, Unit, sample data, and PO Remarks; source-verified creation procedure. Source: UB workflow; PDF/pages and application success criteria unavailable. Approval: not supplied. Execution: Not executed; blocked.
    - expect: Complete documented workflow: navigate; select approved header values; choose approved grain product and only applicable hierarchy levels; enter supported approved detail/sample data; use product-row Add Product; verify Submitted Products; enter PO-level Remarks; invoke Create PO only in authorized test environment. Verify success only by source-documented observable evidence. No creation was attempted here.

#### 1.20. PO-GRAIN-020 — Verify created PO evidence and resulting identifier

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: successful authorized non-production run of PO-GRAIN-019 with captured evidence. Test Data: identifier generated by the application; no identifier supplied. Source: UB suggests success message/generated details/listing as possible evidence, not verified outcomes. Approval: required. Execution: Not executed; blocked.
    - expect: Capture the actual success evidence specified by the guide/application and resulting PO identifier; confirm it corresponds to the created test record in the relevant documented listing/details view. Exact message, identifier format, and listing route are Needs confirmation.

#### 1.21. PO-GRAIN-021 — Verify duplicate/repeat submission behavior only when documented

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: source documents an expected duplicate/repeat behavior and explicitly authorized non-production environment with approved fixtures. Test Data: controlled repeat action against an approved test record. Source: none available; no behavior supplied. Approval: not supplied. Execution: Not executed; blocked.
    - expect: Apply only the documented repeat action in authorized test environment and compare with the documented expected result. No assertion that duplicates are prevented/allowed, no repeat action on live ERP, and no inferred duplicate policy.

#### 1.22. PO-GRAIN-022 — Verify Create PO role access using documented permissions

**File:** `tests/plans/create-po-grain-product-test-cases.md`

**Steps:**
  1. Preconditions: source-verified role matrix and approved non-production test accounts; do not alter permissions. Test Data: authorized test accounts only. Source: role requirements not provided; Purchase Executive is workflow context only. Approval: not supplied. Execution: Not executed; blocked.
    - expect: Verify documented authorized/unauthorized access outcomes for Create PO without changing permissions or creating records. Exact roles, route behavior, and denied-access evidence are Needs confirmation.
