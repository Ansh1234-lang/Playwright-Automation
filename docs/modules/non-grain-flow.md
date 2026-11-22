# Non-Grain Module: End-to-End Purchase, Sale, and Return Flows

This guide summarizes the non-grain workflows in the supplied **Complete Flow Guide — Buying and Selling (Grain and Non-Grain)**. Non-grain examples include packaging, empty bags, consumables, machine parts and spares. It covers buying, returning goods to a supplier, selling, and receiving customer returns.

## How non-grain differs from grain

| Area | Non-grain handling in the guide |
|---|---|
| Quality testing | No manual lab assignment/readings; software handles sample/approval steps. |
| Purchase weighing | Record delivered quantity at the first weighbridge step; no second weighing after unloading. Leave grain-specific gross/tare/bag-weight fields blank or as shown. |
| Sales weighing | No empty-truck or loaded-truck weighing entries; assignment marks the weighing work complete. |
| Purchase-return weighing | No separate second grain weighing; assignment marks the weighing work complete. Goods must still be picked and loaded. |
| Sales-return weighing | No lab and no grain bag type; assignment marks the weighing work complete. The goods must still be physically unloaded and counted. |
| Bag type / quality range | Do not force a grain bag type or lab sample range onto non-grain lines. A unit is required where the form asks for one. |

## Roles at a glance

| Stage | Main role |
|---|---|
| Orders and return documents | Purchase, Sales, or office team |
| Gate and vehicle movement | Gate team / gate manager |
| Quantity/warehouse assignment | Weighbridge operator and warehouse manager, as applicable |
| Stock location and movement | Warehouse manager and assigned store keeper |
| Invoices | Accounts team |

## 1. Buy non-grain goods from a supplier

**Direction:** supplier → mill. Record quantity at the weighbridge before warehouse assignment. Physical unloading and counting are still required; there is no second weighing entry.

1. **Create the Purchase Order** — `Inward → Manage PO → Create PO` (Purchase team). Choose supplier and non-grain category before adding the product. Enter quantity, unit and agreed rate. Leave Lab Sample Range blank. Submit each product row, then create and confirm the PO; keep its number.
2. **Record truck arrival** — `Inward → Manage Vehicles → Manage Vehicle Entry` (Gate team). Search the exact PO, enter vehicle/driver and supplier invoice number, and record what actually arrived. Submit. Record a partial delivery as its actual quantity.
3. **Approve the truck** — `Inward → Manage Vehicles → Vehicle Items Details` (Gate manager). Approve the non-grain truck; the guide says the system handles sample/quality approval automatically, so do not assign a lab tester or enter lab readings.
4. **Record delivered quantity** — `Weight → Weight Measurement → Inward Wt Measure → Add Measured Wt` (Weighbridge). Open the truck row and enter the same supplier invoice number and actual item quantity. Leave grain-specific weight/bag fields blank or as shown. Submit this quantity entry before warehouse assignment.
5. **Assign warehouse and manager** — `Weight → Weight Measurement → Inward Wt Measure → Manage Wt Jobs` (Warehouse manager). Choose a suitable warehouse/godown and responsible manager, then assign. Non-grain items should not be directed to a Paddy Tank.
6. **Assign storage section, stack and unloader** — `Truck → Inward Unloading → Manage Items` (Warehouse manager). Choose a section/stack in the selected godown that can hold the goods and assign an available store keeper.
7. **Unload and confirm count** — `Truck → Inward Unloading → Unload Items` (Assigned store keeper). Record quantity placed per stack, unloading task, labour vendor and a clear remark. Submit and confirm. This physical count is required even though no second weighing is needed.
8. **Create and review purchase invoice** — `Finance → Accounting → Purchase Order → Create Purchase Invoice` (Accounts). Select the same supplier and PO; keep the supplier invoice number consistent. Check item, unit, received quantity, agreed charges and total before submitting. Review/print from Purchase Invoices Report.
9. **Record truck exit** — `Inward → Manage Vehicles → Vehicle Items Details` (Gate team). Record Exit after the invoice is created.

## 2. Return non-grain goods to the supplier

**Direction:** mill → supplier. No grain bag type is required. Assignment completes the weighing work in software, but stock must still be picked and loaded.

1. **Create a Purchase Return Order** — `Return Order → Manage RO → Create RO` (Purchase/office team). Set type to Purchase, find the original purchase invoice, and enter quantity within the available return balance. Save and verify the RO.
2. **Create movement slip** — `Return Order → Manage TO For RO → Create PRO TO`. Select the RO, fetch items, enter the movement quantity, create/confirm the Return PO TO, and keep its number.
3. **Add truck and transporter** — `Return Order → Manage TO For RO → Add PRO TO Vehicle`. Select the movement slip and enter transporter, truck, driver, capacity and agreed freight. Save.
4. **Record truck entry** — `Return Order → Manage TO For RO → Add PRO TO Vehicle Details` (Gate team). Record Action → IN and confirm status.
5. **Complete any required truck entry** — `Weight → Weight Measurement → Outward Wt Measure → Add Return PO Measured Wt` (Weighbridge). If the system requires this entry, enter only actual known readings and units. The guide says a separate second grain-weigh step is not required; do not invent weights.
6. **Assign return quantity and source warehouse** — `Weight → Weight Measurement → Outward Wt Measure → Manage Return PO Wt Jobs` (Warehouse manager). Select the return order and fetch items, enter quantity within balance, leave Bag Type blank, choose the source warehouse and manager, then assign. The software marks non-grain weighing complete here.
7. **Assign storage source and loader** — `Truck → Outward loading → Manage Return PO Items`. Choose the partition and stack holding the goods and an available store keeper.
8. **Load and confirm quantity** — `Truck → Outward loading → Load Return PO Items` (Assigned store keeper). Record actual quantity taken from each stack, task/vendor and remark. Submit and reconcile the count; loading is still mandatory.
9. **Create and review Purchase Return Invoice** — `Finance → Accounting → Return Order → Create Purchase Return Invoice` (Accounts). Select the correct supplier and RO, verify quantity, price and total, then save. Review/print from Return PO Invoices Report. If grain is also on the same return, its grain weighing must finish before the combined bill can be completed.
10. **Complete movement and truck exit** — `Return Order → Manage TO For RO → Add PRO TO Vehicle Details`. Mark Transferred only after loading completes; then record Action → OUT as the truck leaves.

## 3. Sell non-grain goods to a customer

**Direction:** mill → customer. No empty-truck or loaded-truck weighing entry is required; assignment marks weighing work complete. Loading and billing are still required.

1. **Create the Sales Order** — `Outward → Manage SO → Create SO` (Sales/office team). Select buyer and non-grain category, set agreed payment status/term, then add product quantity, unit and rate. Leave grain bag type and grain-only fields blank. Submit each row, create/confirm the order and keep its number.
2. **Create Transfer Order** — `Outward → Manage TO → Create TO`. Select the sales order, enter quantity assigned to this movement without exceeding balance, create/confirm and keep the TO number.
3. **Add truck and transporter** — `Outward → Manage Vehicle → Add Vehicle`. Select TO and transporter; enter truck, driver, capacity and agreed freight; save.
4. **Record and approve truck entry** — `Outward → Manage Vehicle → Vehicle Details` (Gate team/manager). Record IN, check details and approve. No lab steps are needed.
5. **Assign quantity and warehouse** — `Weight → Weight Measurement → Outward Wt Measure → Assign Truck` (Warehouse manager). Select sales order(s), fetch items, enter actual quantity, leave Bag Type blank, choose a warehouse containing stock and its manager, then assign. This marks non-grain weighing complete; do not add empty/loaded weight records.
6. **Assign storage location and loader** — `Truck → Outward loading → Manage Items`. Choose a suitable section/stack and assign an available store keeper.
7. **Load and confirm quantity** — `Truck → Outward loading → Load Items` (Assigned store keeper). Record quantity loaded per row, task/vendor and remark. Submit and confirm; do not exceed stock available in the selected stack(s).
8. **Create and review Sales Invoice** — `Finance → Accounting → Sales Order → Create Sales Invoice` (Accounts). Select buyer and correct order; check invoice number, item/unit/quantity, agreed charges and total. Submit, then view/print from Sales Invoices Report.
9. **Record truck exit** — `Outward → Manage Vehicle → Vehicle Details` (Gate team). Record Exit only after the sales invoice is created.

## 4. Receive non-grain goods returned by a customer

**Direction:** customer → mill. No lab, grain bag type or separate grain weighing is required. Physical unloading and counting remain part of the flow.

1. **Create a Sales Return Order** — `Return Order → Manage RO → Create RO` (Sales/office team). Set type to Sales, select the correct customer and original sales invoice, and enter the quantity within the remaining return balance. Save and verify the RO.
2. **Record truck arrival** — `Return Order → Manage SRO Vehicle → Manage SRO Vehicle Entry` (Gate team). Search the invoice, record truck/driver and quantity actually returned, and submit.
3. **Approve the truck** — `Return Order → Manage SRO Vehicle → SRO Vehicle Items Details` (Gate manager). Approve; there is no lab sample for non-grain.
4. **Complete any required truck entry** — `Weight → Weight Measurement → Inward Wt Measure → Add RO Measured Wt`. If the system requests an entry, complete it using actual known details. Leave gross/tare/bag-weight fields blank as indicated; a non-grain-only return does not need a second grain weighing.
5. **Assign quantity and receiving warehouse** — `Weight → Weight Measurement → Inward Wt Measure → Manage RO Wt Jobs` (Warehouse manager). Choose receiving godown and manager, leave Bag Type blank and assign. The software marks weighing complete at this point.
6. **Assign storage location and unloader** — `Return Order → Manage RO Unloading → Manage RO Items`. Choose a suitable partition/stack and available store keeper; assign.
7. **Unload and count** — `Return Order → Manage RO Unloading → Unload RO Items` (Assigned store keeper). Record actual quantity per location, task/vendor and remark. Submit and verify the unload.
8. **Create and review Sales Return Invoice** — `Finance → Accounting → Return Order → Create Sales Return Invoice` (Accounts). Select the customer and correct RO; check quantity, price and total, then save. View/print from Return Order Invoices Report. If grain is included on the same return, complete grain quality, unloading and final weighing before finishing the combined bill.
9. **Mark complete and record exit** — `Return Order → Manage SRO Vehicle → SRO Vehicle Items Details` (Gate team). Mark Done after unloading; then record Action → OUT as the truck leaves.

## Non-grain checkpoints

- Non-grain skips manual grain lab work and grain-specific bag/quality fields.
- Record actual quantity; do not enter weight where the non-grain screen expects quantity.
- Purchase requires the first quantity entry, then storage assignment and physical unloading; there is no post-unload second weigh.
- Sales assignment marks weighing complete, but stock still needs location assignment, physical loading, invoice and gate exit.
- Returns also require the physical load/unload and count even where assignment completes weighing automatically.
- Keep supplier/customer, original invoice, order, vehicle and final invoice aligned. Check bills and complete billing before truck exit.

Examples in the source guide are illustrative only. Confirm live menu labels, permissions, business rules and approved test data before using this guide to perform transactions or automate them.

## Sources

- `Complete_Flow_Guide_Purchase_Sales_Grain_NonGrain.pdf` (client guide dated 2026-10-12), Parts 2, 4, 6 and 8; quick reference and final checklist.
- `ERP Navigation Guide - 2 .pdf`, Operations / Accounts sections. This guide provides the high-level role sequence; detailed screen instructions above follow the complete flow guide.
