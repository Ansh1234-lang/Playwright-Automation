# Create PO — Agent dropdown selection

## Application Overview

Single scenario for the Inward > Manage PO > Create PO Agent dropdown. Module path and role (Purchase Executive) were supplied by the user; the visible navigation confirmed Inward > Manage PO > Create PO and the /po/create route. The current read-only planner snapshot showed Agent * as a combobox with Select Agent initially selected and options Ruby Agent, jagdish kumar naveen kumar, and MANAY INTERPRISES. These are observed live values, not approved test data or proof of which option is valid. No requirements or approved test data identifying the intended valid Agent option, dependent-field behavior, or selection-specific expected outcome were available. Before authorized execution, supply an approved non-production/test Agent choice and environment. The planned test action may select the approved option only in that authorized context; this planning session did not select any option or modify records. Priority: Medium. Dependencies: approved test data and authorized environment; no upstream business-record dependency has been established. Role assignment is user-specified and has not been independently verified in the live session.

## Test Scenarios

### 1. Create PO Agent dropdown

**Seed:** `tests/non-grain-po/dropdown-options-selection.spec.ts`

#### 1.1. Create PO — Agent dropdown selection

**File:** `tests/non-grain-po/agent-dropdown-selection.spec.ts`

**Steps:**
  1. Precondition: use an authorized non-production/test environment and a Purchase Executive account with access to Inward > Manage PO > Create PO. Navigate to /po/create.
    - expect: Create PO page is displayed at /po/create.
    - expect: The Purchase Executive access and environment are confirmed before proceeding; these were user-specified, not independently verified in planning.
  2. Locate the Agent * dropdown and inspect it without changing its value. Confirm it is visible and enabled. Review the currently available option labels against approved test data or documented requirements to identify the intended valid option.
    - expect: Agent * is visible and enabled as a combobox.
    - expect: The current read-only inspection observed the placeholder Select Agent and options Ruby Agent, jagdish kumar naveen kumar, and MANAY INTERPRISES; the live options may change.
    - expect: No intended valid Agent option is established by the available requirements or approved data. Do not proceed to selection until an approved option is provided; do not guess based on the observed labels.
  3. After the intended valid Agent value has been confirmed from approved test data, select that option. Do not save or submit the PO.
    - expect: The selected Agent value is displayed in the Agent * control. This is the scenario's expected UI behavior, not a behavior verified during planning.
    - expect: No PO is created or submitted.
  4. Observe any other form fields after the Agent choice without changing them. Compare behavior with documented requirements, if any.
    - expect: No dependent-field behavior is documented or verified. Record any observed change as an observation only; do not treat it as required behavior without a documented requirement.
    - expect: No additional field is modified and no PO is submitted.
