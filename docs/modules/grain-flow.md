# Grain Module: End-to-End Purchase, Sale, and Return Flows

This guide summarizes the grain workflows in the supplied **Complete Flow Guide — Buying and Selling (Grain and Non-Grain)**. It covers four journeys: buying grain, returning grain to a supplier, selling grain, and receiving grain back from a customer. Menu labels below follow that guide; labels can vary by ERP version.

## Roles at a glance

| Stage | Main role |
|---|---|
| Orders and return documents | Purchase, Sales, or office team |
| Gate and vehicle movement | Gate team / gate manager |
| Quality checks | Lab supervisor and testing staff |
| Weighbridge | Weighbridge operator |
| Stock assignment and storage | Warehouse manager |
| Physical loading or unloading | Assigned store keeper |
| Invoices | Accounts team |

## 1. Buy grain from a supplier

**Direction:** supplier → mill. The loaded truck is weighed first; after unloading, the empty truck is weighed again.

1. **Create the Purchase Order** — `Inward → Manage PO → Create PO` (Purchase team). Choose the supplier, grain category and product/variety. Enter actual ordered bags, quantity, agreed rate and any applicable grain quality range. Submit each product row before adding another, then create and confirm the PO. Record the PO number. The guide warns that editing may be restricted after a vehicle entry exists.
2. **Record truck arrival** — `Inward → Manage Vehicles → Manage Vehicle Entry` (Gate team). Search by the exact PO number. Enter vehicle and driver details, supplier invoice number, and the quantity that actually arrived. Submit. A later consignment should be recorded separately against the remaining order.
3. **Assign sample to the lab supervisor** — `Inward → Manage Vehicles → Vehicle Items Details`. Open the truck item, choose the lab supervisor, and assign the sample.
4. **Test and decide sample quality** — `Quality Check → Inward Quality Check → Manage Lab Test`, then `PO Lab Reports` (Quality team). Assign a tester; the tester accepts the sample, records real measured readings and creates the sample input. The supervisor reviews the report and selects Approved, Reject, or Review. If a vendor price adjustment is agreed on a reviewed sample, record it through the documented settlement step; the guide says a negative cut-off reduces the rate and flows into the invoice.
5. **Approve the truck** — `Inward → Manage Vehicles → Vehicle Items Details` (Gate manager). Approve only after each sample has a final decision. Confirm the truck status is Approved; pending samples can keep approval unavailable.
6. **First weigh: loaded truck** — `Weight → Weight Measurement → Inward Wt Measure → Add Measured Wt` (Weighbridge). Check the truck identity. Record supplier-paperwork values separately from the mill's measured gross weight, along with the matching supplier invoice number, item quantity/bags, bag type, and units. Submit before warehouse assignment.
7. **Assign destination warehouse and responsible manager** — `Weight → Weight Measurement → Inward Wt Measure → Manage Wt Jobs` (Warehouse manager). Select the appropriate destination type, godown, and responsible manager, then assign.
8. **Assign storage space and unloader** — `Truck → Inward Unloading → Manage Items` (Warehouse manager). Choose the correct partition, stack, and available store keeper. Ensure the location can hold the quantity; split across locations when required.
9. **Unload and record actual placement** — `Truck → Inward Unloading → Unload Items` (Assigned store keeper). Enter the actual quantity per stack, task, labour vendor and a useful remark. Submit and confirm the save. The quantities across rows should reconcile to the delivered quantity.
10. **Second weigh: empty truck** — `Weight → Weight Measurement → Inward Wt Measure → Add Measured Wt` (Weighbridge). Open the same truck's job after unloading. Keep the carried-forward before-unload reading unchanged; record the after-unload reading, actual bag count, bag type and weight per empty bag. Let the system calculate net/item weight; submit.
11. **Create and review the purchase invoice** — `Finance → Accounting → Purchase Order → Create Purchase Invoice` (Accounts). Select the same supplier and PO; use the supplier invoice number consistently. Check item, measured quantity, any agreed cut-off/charges and calculated total before submitting. A “Weight Job Pending” message means a weighing or unloading step is unfinished. Review/print from Purchase Invoices Report.
12. **Record truck exit** — `Inward → Manage Vehicles → Vehicle Items Details` (Gate team). Record Exit only after the invoice exists; confirm the truck is shown as exited.

## 2. Return purchased grain to the supplier

**Direction:** mill → supplier. Because the truck starts empty and leaves loaded, weigh empty first and loaded second. This guide's supplier-return flow does not list a lab-test stage.

1. **Create a Purchase Return Order** — `Return Order → Manage RO → Create RO` (Purchase/office team). Set type to Purchase, find the original purchase invoice, and enter the return quantity within its remaining balance. Save and verify the return order.
2. **Create the movement slip** — `Return Order → Manage TO For RO → Create PRO TO`. Select the return order, fetch its items, enter the quantity to move, create/confirm the Return PO TO, and keep its number.
3. **Arrange truck and transporter** — `Return Order → Manage TO For RO → Add PRO TO Vehicle`. Select the movement slip; enter transporter, vehicle, driver, capacity and agreed freight details. Save.
4. **Record truck entry** — `Return Order → Manage TO For RO → Add PRO TO Vehicle Details` (Gate team). Record Action → IN and check the entry status.
5. **First weigh: empty truck** — `Weight → Weight Measurement → Outward Wt Measure → Add Return PO Measured Wt` (Weighbridge). Verify truck identity, record its actual empty/tare reading and unit, and submit. Goods cannot be assigned until this is saved.
6. **Assign return quantity and source warehouse** — `Weight → Weight Measurement → Outward Wt Measure → Manage Return PO Wt Jobs` (Warehouse manager). Select the return order, fetch items, enter quantity within balance, choose grain bag type, source godown and manager, then assign.
7. **Assign source stack and loader** — `Truck → Outward loading → Manage Return PO Items` (Warehouse manager). Choose the partition and stack holding the correct grain/bag type and assign an available loader.
8. **Load and record actual count** — `Truck → Outward loading → Load Return PO Items` (Assigned store keeper). Record bags taken per stack, loading task/vendor and remark. Submit; reconcile actual loaded quantity before billing.
9. **Second weigh: loaded truck** — `Weight → Weight Measurement → Outward Wt Measure → Manage Return PO Wt Jobs` (Weighbridge). Keep the earlier empty reading, record the after-loading reading and actual bag count/type/empty-bag weight, then submit. Do not overwrite calculated net item weight.
10. **Create and review Purchase Return Invoice** — `Finance → Accounting → Return Order → Create Purchase Return Invoice` (Accounts). Select the supplier and correct return order; check returned quantity/weight, rate, charges and total before saving. Review/print from Return PO Invoices Report. A pending-weight message means the final weigh or loading step is incomplete.
11. **Complete movement and truck exit** — `Return Order → Manage TO For RO → Add PRO TO Vehicle Details`. Mark Transferred when the movement is complete, then record Action → OUT as the truck leaves.

## 3. Sell grain to a customer

**Direction:** mill → customer. Weigh the empty truck first, then weigh it loaded after stock is loaded.

1. **Create the Sales Order** — `Outward → Manage SO → Create SO` (Sales/office team). Choose the buyer, grain category, agreed payment status/term and date. Add the product and any applicable variety hierarchy; enter bags, quantity, agreed rate, grain bag type and documented physical parameters. Submit each product row, create/confirm the order and keep its number.
2. **Create the Transfer Order** — `Outward → Manage TO → Create TO` (Sales/godown team). Select the sales order and quantity for this truck without exceeding the available order balance. Create/confirm and record the TO number.
3. **Arrange truck and transporter** — `Outward → Manage Vehicle → Add Vehicle`. Select TO and transporter; enter truck, driver, capacity and agreed freight details, then save.
4. **Record and approve truck entry** — `Outward → Manage Vehicle → Vehicle Details` (Gate team/manager). Record the truck's IN entry, verify details, then approve. Approval alone does not complete the transfer; loading and second weighing are still required.
5. **First weigh: empty truck** — `Weight → Weight Measurement → Outward Wt Measure → Add Measured Wt` (Weighbridge). Verify truck, record actual tare reading and unit, then submit.
6. **Assign sales quantity and warehouse** — `Weight → Weight Measurement → Outward Wt Measure → Assign Truck` (Warehouse manager). Select the correct sales order(s), fetch items, enter bags/quantity and grain bag type, choose a warehouse containing the stock and its manager, then assign.
7. **Assign storage location and loader** — `Truck → Outward loading → Manage Items` (Warehouse manager). Choose a section and stack matching the grain and bag type and assign an available store keeper.
8. **Load and record actual count** — `Truck → Outward loading → Load Items` (Assigned store keeper). Enter actual bags per stack plus task/vendor and remark. Submit. Do not exceed stock available in the selected stacks.
9. **Second weigh: loaded truck** — `Weight → Weight Measurement → Outward Wt Measure → Manage Wt Jobs` (Weighbridge). Preserve the first reading; record loaded reading, actual bag count, bag type and empty-bag weight. Submit and let the system calculate net item weight.
10. **Create and review Sales Invoice** — `Finance → Accounting → Sales Order → Create Sales Invoice` (Accounts). Select buyer and correct sales order; verify invoice number, measured item values, agreed charges and total. Submit, then view/print from Sales Invoices Report. “Weight Job Pending” means the second weigh has not been saved.
11. **Record truck exit** — `Outward → Manage Vehicle → Vehicle Details` (Gate team). Record Exit only after the sales bill has been created.

## 4. Receive grain returned by a customer

**Direction:** customer → mill. The truck arrives loaded; weigh it before unloading and again when empty.

1. **Create a Sales Return Order** — `Return Order → Manage RO → Create RO` (Sales/office team). Set type to Sales, select the correct customer and original sales invoice, and enter returned bags within the remaining balance. Save and verify the RO.
2. **Record truck arrival and assign sample** — `Return Order → Manage SRO Vehicle → Manage SRO Vehicle Entry` (Gate team). Search by invoice, record truck/driver and actual returned quantity, then submit. The system creates grain samples. In SRO Vehicle Items Details, assign a lab supervisor; do not approve while samples are pending.
3. **Test and decide quality** — `Quality Check → Inward Quality Check → RO Lab Test`, then `RO Lab Reports` (Quality team). Assign tester, record actual readings, create sample input and choose Approved, Reject, or Review. If an agreed adjustment is needed, use the documented review settlement and ensure it carries to the return invoice.
4. **Approve truck after the quality decision** — `Return Order → Manage SRO Vehicle → SRO Vehicle Items Details` (Gate manager). Approve after all grain samples have a final quality decision; verify the status before proceeding.
5. **First weigh: loaded truck** — `Weight → Weight Measurement → Inward Wt Measure → Add RO Measured Wt` (Weighbridge). Confirm the truck; enter the paperwork values separately from the actual loaded reading, invoice number, returned quantity, units and any supporting note. Submit.
6. **Assign receiving warehouse and manager** — `Weight → Weight Measurement → Inward Wt Measure → Manage RO Wt Jobs` (Warehouse manager). Select the receiving godown and responsible manager, then assign.
7. **Assign storage space and unloader** — `Return Order → Manage RO Unloading → Manage RO Items`. Choose a suitable partition, stack and available store keeper; assign.
8. **Unload and record actual placement** — `Return Order → Manage RO Unloading → Unload RO Items` (Assigned store keeper). Enter actual bags per stack, task/vendor and remark. Submit and reconcile the recorded count.
9. **Second weigh: empty truck** — `Weight → Weight Measurement → Inward Wt Measure → Manage RO Wt Jobs` (Weighbridge). Keep the first reading; record the after-unload reading, actual bags, bag type and empty-bag weight. Submit and retain calculated net weight.
10. **Create and review Sales Return Invoice** — `Finance → Accounting → Return Order → Create Sales Return Invoice` (Accounts). Select the customer and correct RO; review returned quantity/weight, any agreed cut-off and total. Save and view/print from Return Order Invoices Report. An invoice lock indicates unfinished weight jobs.
11. **Mark complete and record exit** — `Return Order → Manage SRO Vehicle → SRO Vehicle Items Details` (Gate team). Mark Done after unloading and weighing are complete, then record Action → OUT as the vehicle leaves.

## Grain checkpoints

- **Purchase / customer return:** loaded first, empty after unloading.
- **Supplier purchase return / sale:** empty first, loaded after loading.
- Keep the same supplier/customer, source invoice, order, vehicle and invoice references aligned across steps.
- Enter actual quantities and readings. Keep units consistent; do not replace system-calculated net weight with a guess.
- Complete quality decisions before approving grain purchase trucks or grain sales-return trucks.
- Create and verify the invoice before allowing the truck to exit.

Examples in the source guide are illustrative only. Confirm live menu labels, permissions, business rules and approved test data before using this guide to perform transactions or automate them.

## Sources

- `Complete_Flow_Guide_Purchase_Sales_Grain_NonGrain.pdf` (client guide dated 2026-10-12), Parts 1, 3, 5 and 7; quick reference and final checklist.
- `ERP Navigation Guide - 2 .pdf`, Operations / Accounts sections. This guide provides the high-level role sequence; detailed screen instructions above follow the complete flow guide.
