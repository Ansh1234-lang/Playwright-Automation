# Security Guard — Manage Vehicle Entry Read-Only Test Plan

## Application Overview

Read-only coverage for ERP → Inward → Manage Vehicle → Manage Vehicle Entry using the existing security-guard Playwright project and .auth/security-guard.json state. Reuse tests/manage-vehicle-entry.security-guard.spec.ts for initial page access and lookup-control coverage; do not create duplicate test code. Do not create, edit, submit, approve, or delete ERP records. Do not search using an arbitrary or guessed PO number. Vehicle Details inspection is blocked until an explicitly approved PO reference is supplied.

## Test Scenarios

### 1. Security Guard — Manage Vehicle Entry

**Seed:** `tests/auth.setup.spec.ts`

#### 1.1. SG-VE-001 — Existing coverage: authenticated access and initial PO lookup controls (read-only)

**File:** `tests/manage-vehicle-entry.security-guard.spec.ts`

**Steps:**
  1. Run the existing test with the security-guard Playwright project, which uses the configured Security Guard authentication state at .auth/security-guard.json; navigate to /po/vehicle.
    - expect: The Manage Vehicle Entry route loads for the authenticated Security Guard session.
  2. Check the page heading and initial PO lookup controls without entering a PO number or clicking Search.
    - expect: The exact heading Manage Vehicle Entry is visible.
    - expect: The input with placeholder Search PO Number is visible and enabled.
    - expect: The Search button is visible and enabled.
    - expect: No PO search or ERP record mutation is performed.

#### 1.2. SG-VE-002 — BLOCKED: inspect PO result and Vehicle Details after approved lookup

**File:** `tests/manage-vehicle-entry.security-guard.spec.ts`

**Steps:**
  1. Before any lookup, obtain an explicitly approved PO reference intended for read-only inspection. Do not discover or select a PO by browsing arbitrary live records.
    - expect: No approved PO reference is currently documented; this scenario remains blocked until one is confirmed.
  2. Once a reference is approved, search only that PO and inspect the resulting PO information and any Vehicle Details controls without filling fields or submitting.
    - expect: Record only information and controls actually displayed; do not assume result fields or exact values.
    - expect: Workflow documentation mentions vehicle/driver, supplier invoice number, and actual arrived quantity, but these have not been verified on the live post-lookup form.
    - expect: Do not create or change an entry, approve/reject, or submit anything.
