# Create PO — dropdown options and selection behavior

## Application Overview

One read-only inspection-based scenario for ERP Farm Create PO at /po/create. Current authenticated browser snapshot confirmed the form and visible native comboboxes; no options were selected and no form was changed. Verified controls and observed options: Agent * has Select Agent, Ruby Agent, jagdish kumar naveen kumar, MANAY INTERPRISES; Supplier * has Select Supplier, Rohit Suppliers, Prashant Enterprise, Siri firm, test 2 customer firm, Jagdish lal Naveen Kumar, jagdish kumar naveen kumar, himanshu and associate, Tanya firm, Aman Interprises, and firm1 listed twice; Category * has Select Category, raw material paddy, finished product rice, packing material, machines, by - products, category 123, category xyz; Payment Status * has Select Payment Status, Prepaid, Postpaid. No project requirements defining exact dropdown membership, dependent filtering, cross-field constraints, or changeable selection behavior were accessible in this session. These behaviors are therefore verification targets, not established requirements. No save/create/submit actions are part of this scenario. Use tests/non-grain-po-required-field-validation.spec.ts as the supplied existing scenario reference; its detailed contents were not available to this planning workflow. Future execution that changes dropdown selection should use an approved non-production/test context and must not submit/create a PO.

## Test Scenarios

### 1. Create PO dropdown controls

**Seed:** `tests/non-grain-po-required-field-validation.spec.ts`

#### 1.1. Create PO — dropdown options and selection behavior

**File:** `tests/non-grain-po-dropdown-options-selection.spec.ts`

**Steps:**
  1. Open /po/create using the project baseURL and inspect the Create PO page without entering data.
    - expect: The Create PO form loads and the four controls are visible as comboboxes with accessible names Agent *, Supplier *, Category *, and Payment Status *.
  2. Read each dropdown's currently exposed option labels without selecting an option. Record the observed labels and any initially selected option.
    - expect: Agent * exposes Select Agent, Ruby Agent, jagdish kumar naveen kumar, and MANAY INTERPRISES.
    - expect: Supplier * exposes Select Supplier, Rohit Suppliers, Prashant Enterprise, Siri firm, test 2 customer firm, Jagdish lal Naveen Kumar, jagdish kumar naveen kumar, himanshu and associate, Tanya firm, Aman Interprises, and firm1 twice.
    - expect: Category * exposes Select Category, raw material paddy, finished product rice, packing material, machines, by - products, category 123, and category xyz.
    - expect: Payment Status * exposes Select Payment Status, Prepaid, and Postpaid.
    - expect: Current browser inspection showed each Select ... placeholder initially selected. Do not infer that the option list is complete or stable; the option values are live-data-dependent.
  3. In an approved non-production/test environment only, select one available non-placeholder option in each dropdown, one at a time, and inspect the displayed selection. Do not save, create, or submit the PO; do not infer a dependency unless the page visibly demonstrates it.
    - expect: Each control accepts a choice and reflects the chosen option in that control; this is a proposed behavioral check, not a verified requirement.
    - expect: No requirement or evidence currently establishes specific choices, cross-dropdown dependencies, filtered option lists, or permitted Agent/Supplier/Category/Payment Status combinations. Record any observed behavior without treating it as expected unless confirmed by project requirements.
    - expect: Stop before any business-action control; no ERP record is created or changed.
