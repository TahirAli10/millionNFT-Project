import React, { Component, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { text } from '@fortawesome/fontawesome-svg-core';
import { CheckBox } from '@mui/icons-material';



const Table = () => {
    const [Data, setData] = useState(
        [
            {
                
            Sn : "1",
        brandBuyer:"Brand/Buyer",
        department: "Department",
        season: "Season",
        image: "https://aeon.regulatedadvices.com/storage/uploads/pogarments/file_16755888431.jpg",
        fabricType : "Fabrics",
        block : "BLOCK(Repeat or initial)",
            fabricQuality : "Fabric Quality",
            vendor: "Vendor",
            manufacturingUnit : "Manufacturing Unit",
            plmNumber: "PLM Number",
            purchaseOrderNumber : "Purchase Order number", 
            styleNumber : "Style Number", 
            orderQuantity: "Order Quantity",
            suplier: "Supplier Price/Prodcut cost/Vendor PO Price",
              total : "Total Value=[Order Quantity*Supplier Price/Prodcut cost/Vendor PO Price]",
            
            styleDescrpition: "Style Description",
            color: "Color",
            careLabelDate : "Care Label date", 
            fabricReference : "Fabric Refernece",
            fabrication : "Fabrication/ Fabric Content",
            fabricWeight : "Fabric Weight",
            fabricMill : "Fabric Mill",
            leadTimes : "Lead Times",
            treated : "Treated as a priority order",
            officialPlan : "Official Pos sent (Plan)",
            officialactual : "Official Pos sent (Actual)",
            colorplan :"Color std/print artwork sent to supplier (plan)",
            colorActual :"Color std/print artwork sent to supplier (Actual)",
            labPlan : "Lab dip Aapproval (Plan)",
            labActual : "Lab dip Approval (Actual)",
            labDetailsDate : "Lab Dip Dispatch Details",
            labDetailsAWS : "Lab Dip Dispatch Details",
            labImage : "Lab Dip Image Upload",
            printPlan : "Print/ EMBELLISHMENT - S/O Approval (Plan)",
            printActual : "Print/ EMBELLISHMENT - S/O Approval (Actual)",
            printDetails : "Print/ EMBELLISHMENT - S/O Dispatch Details",
            printImage : "Print/ EMBELLISHMENT - S/O Image Upload ",
            fabricPlan : "Fabric Ordered (plan)",
            fabricActual : "Fabric Ordered (actual)",
            bulkPlan : "Bulk Fabric/ Knit down Approval (Plan) ",
            bulkActual : "Bulk fabric/ Knit down Approval (Actual)",
            bulkDetailsDate : "Bulk fabric/ Knit down Dispatch Details",
            bulkDetailsAWS : "Bulk fabric/ Knit down Dispatch Details",
            bulkUpload : "Bulk fabric/ Knit down Image(Upload)",
            bulkPlan : "Bulk Yarn / Fabric Inhouse (Plan)",
            bulkInhouseActual : "Bulk Yarn/ Fabric Inhouse (Actual)",
            developmentPlan : "Development/ Photo sample sent (plan)",
            developmentActual : "Development/ Photo sample sent (Actual) ",
            developmentReviewMeeting: "Development/Photo Sample(Review Meeting)",
            developmentDetailsDate : "Development/Photo Sample dispatch details ",
            developmentDetailsAWS : "Development/Photo Sample dispatch details ",
            developmentUpload: "Development/ Photo sample image Upload ",
            fitPlan : "Fit -Approval (plan) ",
            fitActual : "Fit -Approval (Actual) ",
            fitReviewMeeting : "Fit Sample (Review Meeting) ",
            fitDispatchDetailsDate : "Fit Sample dispatch details ",
            fitDispatchDetailsAWS : "Fit Sample dispatch details ",
            fitImageUpload : "Fit sample Image Upload",
            sizePlan : "Size set Approval (Plan)",
            sizeActual: "Size set Approval (Actual) ",
            sizeReviewMeeting: "Size Set Sample(Review Meeting) ",
            sizeDispatchDetailsDate : "Size Set Sample dispatch details ",
            sizeDispatchDetailsAWS : "Size Set Sample dispatch details ",
            sizeImageUpload: "Size Set sample image Upload ",
            ppPlan :" PP Approval (Plan)",
            ppactual: "PP approval (Actual) ",
            ppReviewMeeting : "PP Sample(Review Meeting) ",
            ppDispatchDetailsDate : "PP Sample dispatch details ",
            ppDispatchDetailsAWS : "PP Sample dispatch details ",
            ppImageUpload : "PP sample image Upload ",
            carePlan : "Care label approval(Plan) ",
            careActual : "Care label approval(Actual) ",
            meterialPlan: "Material Inhouse date (Plan) ",
            meterialActual: "Material Inhouse date (Actual)",
            ppDateActual: "PP Meeting Date (Actual)",
            ppSchedule : "PP Meeting Schedule",
            ppReportUpload : "PP Meeting Report Upload ",
            cuttingPlan: "Cutting date (Plan)",
            cuttingActual: " Cutting date (Actual) ",
            embishmentPlan: "Emblishment (Plan)",
            emblishmentActual: "Emblishment (Actual)",
            sewingPlan: "Sewing Start date (Plan)",
            sewingActual : "Sewing Start date (Actual)",
            sewingPlan: "Sewing complete date (Plan) ",
            sewingActual : "Sewing complete date (Actual)",
            washingPlan: "Washing complete date (Plan)",
            washingActual:" Washing complete date (Actual)",
            finishPlan: "Finishing complete date (Plan)",
            finishActual :"Finishing complete date (Actual) ",
            sewingPlan : "Sewing Inline Inspection date (Plan)",
            sewingActual : "Sewing Inline Inspection date (Actual)",
            sewingSchedule: "Sewing Inline Inspection Schedule",
            sewingUpload :"Sewing Inline Inspection Report Upload",
            finishPlan: "Finishing Inline Inspection date (Plan)",
            finishingActual: "Finishing Inline Inspection date (Actual)",
            finishingSchedule: "Finishing Inline Inspection Schedule",
            finishingUpload: "Finishing Inline Inspection Report Upload",
            prePlan: "Pre Final Date(Plan)",
            preActual: "Pre Final Date(Actual)",
            preSchedule: "Pre Final AQL Meeting Schedule",
            preUpload: "Pre Final AQL Report Upload",
            finalPlan: "Final AQL Date(Plan)",
            finalActual: "Final AQL Date(Actual)",
            FinalSchedule: "Final AQL Meeting Schedule",
            finalReportUpload: "Final AQL Report Upload",
            productionPlan: "Production sample Approval (Plan)",
            productionActual: "Production Sample Approval (Actual)",
            productionSchedule: "Production Sample Review Schedule",
            productionDispatchDetails: "Production sample Dispatch Details ",
            productionImageUpload: "Production sample Image Upload",
            shipmentPlan: "Shipment Booking with ACS (Plan)",
            shipmentActual: "Shipment Booking with ACS (Actual)",
            saPlan : "SA approval (Plan)",
            saActual : " SA approval (Actual)",
            exDataPo: "Ex factory Date PO",
            revisedData: "Revised Ex fty Date ",
            actualDate: "Actual Ex fty Date ",
            shippedEx: "Shipped Units Ex Fty",
            originalSa: "Original ETA SA date ",
            revisedSaDate: "Revised ETA SA date ",
            shipAir: "Ship mode Sea/Air",
            forwardAwb: "Forwarder ref /Vessel name or AWB ",
            LateCrp: "Late Delivery Discounts - CRP(if any)",
            InvoiceNumebr: "Invoice Number",
            InvoiceCreateDate: "Invoice Create Date",
            paymentReceiveDate: "Payment Receive Date",
            lastUpdated: "Payment Receive Date",
            reasonInput : "",
            aeonInput: "",
            vendorInput: "",
            actions: "Actions"
            },
           
        ])
    const columns = useMemo(
        ()=>[
            {
                accessorKey: "Sn",
                header : "S.N"
            },
            {
                accessorKey: "brandBuyer",
                header : "Brand/Buyer"
            },
            {
                accessorKey: "department",
                header : "Department"
            },
            {
                accessorKey: "season",
                header : "Season"
            },
            {
                accessorKey: "image",
                header : "Image",
                Cell: ({ cell }) => <img src={cell.getValue()} width={70}/>,
            },
            {
                accessorKey: "fabricType",
                header : "Fabric Type",
                Cell: ({ cell }) => <select >
                <option value="select Fabrics">Select Fabrics</option>
                <option value="import">Import</option>
                
              </select>,
            },
            {
                accessorKey: "block",
                header : "BLOCK(Repeat or initial)",
                Cell: ({ cell }) => <select >
                <option value="Select Block">Select Block</option>
                <option value="Initial">Initial</option>
                <option value="Repeat">Repeat</option>
                
              </select>,
            },
            {
                accessorKey: "fabricQuality",
                header : "Fabric Quality"
            },
            {
                accessorKey: "vendor",
                header : "Vendor"
            },
            
            {
                accessorKey: "manufacturingUnit",
                header : "Manufacturing Unit"
            },
            {
                accessorKey: "plmNumber",
                header : "PLM Number"
            },
            {
                accessorKey: "purchaseOrderNumber",
                header : "Purchase Order number"
            },
            
            {
                accessorKey: "styleNumber",
                header : "Style Number"
            },
            
            {
                accessorKey: "orderQuantity",
                header : "Order Quantity"
            },
            
            
            {
                accessorKey: "suplier",
                header : "Supplier Price/Prodcut cost/Vendor PO Price"
            },
            
            
            {
                accessorKey: "total",
                header : "Total Value=[Order Quantity*Supplier Price/Prodcut cost/Vendor PO Price]"
            },
            
            {
                accessorKey: "styleDescrpition",
                header : "Style Description"
            },
            
            {
                accessorKey: "color",
                header : "Color"
            },
            
            {
                accessorKey: "fabricReference",
                header : "Fabric Refernece"
            },
            
            {
                accessorKey: "fabrication",
                header : "Fabrication/ Fabric Content"
            },
            
            {
                accessorKey: "fabricWeight",
                header : "Fabric Weight"
            },
            
            {
                accessorKey: "fabricMill",
                header : "Fabric Mill",
                Cell: ({ cell }) => <select >
                <option value="select Mill">Select Mill</option>
                <option value="Own">Own</option>
                <option value="China">China</option>
                
              </select>,
            },
            
            {
                accessorKey: "leadTimes",
                header : "Lead Times"
            },
            
            {
                accessorKey: "treated",
                header : "Treated as a priority order"
            },
            
            {
                accessorKey: "officialPlan",
                header : "Official Pos sent (Plan)"
            },
            
            {
                accessorKey: "officialactual",
                header : "Official Pos sent (Actual)"
            },
            
            {
                accessorKey: "colorplan",
                header : "Color std/print artwork sent to supplier (plan)",
                
            },
            
            {
                accessorKey: "colorActual",
                header : "Color std/print artwork sent to supplier (Actual)",
                Cell: ({ cell }) => <input type="date"/>
            },
            
            {
                accessorKey: "labPlan",
                header : "Lab dip Aapproval (Plan)",
                
            },
            
            {
                accessorKey: "labActual",
                header : "Lab dip Approval (Actual)",
                Cell: ({ cell }) => <input type="date"/>
            },
            
            {
                accessorKey: "labDetailsDate",
                header : "Lab Dip Dispatch Details",
                Cell: ({ cell }) => <input type="date" />,
              

            },
            {
                accessorKey: "labDetailsAWS",
                header : "Lab Dip Dispatch Details",
                Cell: ({ cell }) => <input type="number"/>,
              

            },
            
           
            
            {
                accessorKey: "labImage",
                header : "Lab Dip Image Upload",
                Cell: ({ cell }) => <><img width={120} height={120} /> <input type="file"/> </> ,
            },
            
            {
                accessorKey: "printPlan",
                header : "Print/ EMBELLISHMENT - S/O Approval (Plan)",

            },
            
            {
                accessorKey: "printActual",
                header : "Print/ EMBELLISHMENT - S/O Approval (Actual)",
                Cell: ({ cell }) => <input type="date" />,
            },
            
            {
                accessorKey: "printDetails",
                header : "Print/ EMBELLISHMENT - S/O Dispatch Details",
                
                Cell: ({ cell }) => <><img width={120} height={120} /> <input type="file"/> </> ,
            },
            
            {
                accessorKey: "printImage",
                header : "Print/ EMBELLISHMENT - S/O Image Upload "
            },
            
            {
                accessorKey: "fabricPlan",
                header : "Fabric Ordered (plan)"
            },
            
            {
                accessorKey: "fabricActual",
                header : "Fabric Ordered (actual)",
                Cell: ({ cell }) => <input type="date" />,
            },
            
            {
                accessorKey: "bulkPlan",
                header : "Bulk Fabric/ Knit down Approval (Plan) "
            },
            
            {
                accessorKey: "bulkActual",
                header : "Bulk fabric/ Knit down Approval (Actual)",
                Cell: ({ cell }) => <input type="date" />
            },
            {
                accessorKey: "bulkDetailsDate",
                header : "Bulk fabric/ Knit down Dispatch Details",
                Cell: ({ cell }) => <input type="date" />
            },
            {
                accessorKey: "bulkDetailsAWS",
                header : "Bulk fabric/ Knit down Dispatch Details",
                
                Cell: ({ cell }) => <><input type="number" placeholder='AWS'/> </> ,
            },
            
            {
                accessorKey: "bulkUpload",
                header : "Bulk fabric/ Knit down Image(Upload)",
                
                Cell: ({ cell }) => <><img width={120} height={120} /> <input type="file"/> </> ,
            },
            
            {
                accessorKey: "bulkPlan",
                header : "Bulk Yarn / Fabric Inhouse (Plan)"
            },
            
            {
                accessorKey: "bulkInhouseActual",
                header : "Bulk Yarn/ Fabric Inhouse (Actual)",
                
                Cell: ({ cell }) => <input type="date" />
            },
            
            {
                accessorKey: "developmentPlan",
                header : "Development/ Photo sample sent (plan)"
            },
            
            {
                accessorKey: "developmentActual",
                header : "Development/ Photo sample sent (Actual) ",
                
                Cell: ({ cell }) => <input type="date" />
            },
            
            {
                accessorKey: "developmentReviewMeeting",
                header : "Development/Photo Sample(Review Meeting)"
            },
            
            {
                accessorKey: "developmentDetailsDate",
                header : "Development/Photo Sample dispatch details ",
                Cell: ({ cell }) => <input type="date" />
            },
            
            {
                accessorKey: "developmentDetailsAWS",
                header : "Development/Photo Sample dispatch details ",
                Cell: ({ cell }) => <input type="number" />
            },
            
            {
                accessorKey: "developmentUpload",
                header : "Development/ Photo sample image Upload ",
                
                Cell: ({ cell }) => <><img width={120} height={120} /> <input type="file"/> </> ,
            },
            
            {
                accessorKey: "fitPlan",
                header : "Fit -Approval (plan) "
            },
            
            {
                accessorKey: "fitActual",
                header : "Fit -Approval (Actual) ",
                Cell: ({ cell }) => <input type="Date" />
            },
            
            {
                accessorKey: "fitReviewMeeting",
                header : "Fit Sample (Review Meeting) "
            },
            
            {
                accessorKey: "fitDispatchDetailsDate",
                header : "Fit Sample dispatch details ",
                Cell: ({ cell }) => <input type="Date" />
            },
            {
                accessorKey: "fitDispatchDetailsAWS",
                header : "Fit Sample dispatch details ",
                Cell: ({ cell }) => <input type="number" />
            },
            
            {
                accessorKey: "fitImageUpload",
                header : "Fit sample Image Upload",
                
                Cell: ({ cell }) => <><img width={120} height={120} /> <input type="file"/> </> ,
            },
            
            {
                accessorKey: "sizePlan",
                header : "Size set Approval (Plan)",
             
            },
            
            {
                accessorKey: "sizeActual",
                header : "Size set Approval (Actual) ",
                Cell: ({ cell }) => <input type="Date" />
            },
            
            {
                accessorKey: "sizeReviewMeeting",
                header : "Size Set Sample(Review Meeting) "
            },
            
            {
                accessorKey: "sizeDispatchDetailsDate",
                header : "Size Set Sample dispatch details ",
                Cell: ({ cell }) => <input type="Date" />
            },
            {
                accessorKey: "sizeDispatchDetailsAWS",
                header : "Size Set Sample dispatch details ",
                Cell: ({ cell }) => <input type="number" placeholder='AWS' />
            },
            
            {
                accessorKey: "sizeImageUpload",
                header : "Size Set sample image Upload ",
                Cell: ({ cell }) => <><img width={120} height={120} /> <input type="file"/> </> ,
            },
            
            {
                accessorKey: "ppPlan",
                header : " PP Approval (Plan)",
            },
            
            {
                accessorKey: "ppactual",
                header : "PP approval (Actual) ",
                Cell: ({ cell }) => <><input type="Date"/> </> ,

            },
            
            {
                accessorKey: "ppReviewMeeting",
                header : "PP Sample(Review Meeting) "
            },
            
            {
                accessorKey: "ppDispatchDetailsDate",
                header : "PP Sample dispatch details ",
                Cell: ({ cell }) => <><input type="Date"/> </> ,
                
            },
            {
                accessorKey: "ppDispatchDetailsAWS",
                header : "PP Sample dispatch details ",
                Cell: ({ cell }) => <><input type="number" placeholder='AWS'/> </> ,


            },
            
            {
                accessorKey: "ppImageUpload",
                header : "PP sample image Upload ",
                Cell: ({ cell }) => <><img width={120} height={120} /> <input type="file"/> </> ,
          
            },
            
            {
                accessorKey: "carePlan",
                header : "Care label approval(Plan) "
            },
            
            {
                accessorKey: "careActual",
                header : "Care label approval(Actual) ",
                Cell: ({ cell }) => <><input type="date"/> </> ,
          
            },
            
            {
                accessorKey: "meterialActual",
                header : "Material Inhouse date (Actual)"
            },
            
            {
                accessorKey: "ppDateActual",
                header : "PP Meeting Date (Actual)",
                Cell: ({ cell }) => <><input type="date"/> </> ,

            },
            
            {
                accessorKey: "ppSchedule",
                header: "PP Meeting Schedule"
            },
            
            {
                accessorKey: "ppReportUpload",
                header: "PP Meeting Report Upload"
            },
            
            {
                accessorKey: "cuttingPlan",
                header: "Cutting date (Plan)"
            },
            
            {
                accessorKey: "cuttingActual",
                header: " Cutting date (Actual) ",
                Cell: ({ cell }) => <><input type="date"/> </> ,

            },
            
            {
                accessorKey: "embishmentPlan",
                header: "Emblishment (Plan)"
            },
            
            {
                accessorKey: "emblishmentActual",
                header: "Emblishment (Actual)",
                Cell: ({ cell }) => <><input type="date"/> </> ,

            },
            
            {
                accessorKey: "sewingPlan",
                header: "Sewing Start date (Plan)"
            },
            
            {
                accessorKey: "sewingActual",
                header: "Sewing Start date (Actual)",
                Cell: ({ cell }) => <><input type="date"/> </> ,

            },
            
            {
                accessorKey: "sewingPlan",
                header: "Sewing complete date (Plan)"
            },
            
            {
                accessorKey: "sewingActual",
                header: "Sewing complete date (Actual)",
                Cell: ({ cell }) => <><input type="date"/> </> ,
            },
            
            {
                accessorKey: "washingPlan",
                header: "Washing complete date (Plan)"
            },
            
            {
                accessorKey: "washingActual",
                header: "Washing complete date (Actual)",
                Cell: ({ cell }) => <><input type="date"/> </> ,
            },
            
            {
                accessorKey: "finishPlan",
                header: "Finishing complete date (Plan)"
            },
            
            {
                accessorKey: "finishActual",
                header: "Finishing complete date (Actual)",
                Cell: ({ cell }) => <><input type="date"/> </> ,
            },
            
            {
                accessorKey: "sewingPlan",
                header: "Sewing Inline Inspection date (Plan)"
            },
            
            {
                accessorKey: "sewingActual",
                header: "Sewing Inline Inspection date (Actual)",
                Cell: ({ cell }) => <><input type="date"/> </> 
            },
            
            {
                accessorKey: "sewingSchedule",
                header: "Sewing Inline Inspection Schedule"
            },
            
            {
                accessorKey: "sewingUpload",
                header: "Sewing Inline Inspection Report Upload",
                Cell: ({ cell }) => <><img width={120} height={120} /> <input type="file"/> </> ,
          
            },
            
            {
                accessorKey: "finishPlan",
                header: "Finishing Inline Inspection date (Plan)"
            },
            
            {
                accessorKey: "finishingActual",
                header: "Finishing Inline Inspection date (Actual)",
                Cell: ({ cell }) => <> <input type="date"/> </> ,
          
            },
            
            {
                accessorKey: "finishingSchedule",
                header: "Finishing Inline Inspection Schedule"
            },
            
            {
                accessorKey: "finishingUpload",
                header: "Finishing Inline Inspection Report Upload",
                Cell: ({ cell }) => <><img width={120} height={120} /> <input type="file"/> </> ,
          
            },
            
            {
                accessorKey: "prePlan",
                header: "Pre Final Date(Plan)"
            },
            
            {
                accessorKey: "preActual",
                header: "Pre Final Date(Actual)",
                Cell: ({ cell }) => <> <input type="date"/> </> ,
          
            },
            
            {
                accessorKey: "preUpload",
                header: "Pre Final AQL Report Upload",
                Cell: ({ cell }) => <><img width={120} height={120} /> <input type="file"/> </> ,
          
            },
            
            {
                accessorKey: "finalPlan",
                header: "Final AQL Date(Plan)",
          
            },
            
            {
                accessorKey: "finalActual",
                header: "Final AQL Date(Actual)",
                Cell: ({ cell }) => <> <input type="date"/> </> ,

            },
            
            {
                accessorKey: "FinalSchedule",
                header: "Final AQL Meeting Schedule"
            },
            
            {
                accessorKey: "finalReportUpload",
                header: "Final AQL Report Upload",
                Cell: ({ cell }) => <><img width={120} height={120} /> <input type="file"/> </> ,
          
            },
            
            {
                accessorKey: "productionPlan",
                header: "Production Sample Approval (Plan)"
            },
            {
                accessorKey: "productionActual",
                header: "Production Sample Approval (Actual)",
                Cell: ({ cell }) => <> <input type="date"/> </> ,
          
            },
            
            {
                accessorKey: "productionDispatchDetailsDate",
                header: "Production sample Dispatch Details ",
                Cell: ({ cell }) => <> <input type="date"/> </> ,
          
            },
            
            {
                accessorKey: "productionDispatchDetailsAWS",
                header: "Production sample Dispatch Details ",
                Cell: ({ cell }) => <> <input type="number"/> </> ,
          
            },
            
            {
                accessorKey: "productionImageUpload",
                header: "Production sample Image Upload",
                Cell: ({ cell }) => <><img width={120} height={120} /> <input type="file"/> </> ,
          
            },
            
            {
                accessorKey: "shipmentPlan",
                header: "Shipment Booking with ACS (Plan)"
            },
            
            {
                accessorKey: "shipmentActual",
                header: "Shipment Booking with ACS (Actual)",
                Cell: ({ cell }) => <><input type="date"/> </> ,
          
            },
            
            {
                accessorKey: "saPlan",
                header: "SA approval (Plan)"
            },
            
            {
                accessorKey: "saActual",
                header: " SA approval (Actual)"
            },
            
            {
                accessorKey: "exDataPo",
                header: "Ex factory Date PO"
            },
            
            {
                accessorKey: "revisedData",
                header: "Revised Ex fty Date "
            },
            
            {
                accessorKey: "actualDate",
                header: "Actual Ex fty Date "
            },
            
            {
                accessorKey: "shippedEx",
                header: "Shipped Units Ex Fty"
            },
            
            {
                accessorKey: "originalSa",
                header: "Original ETA SA date "            
            },
            
            {
                accessorKey: "revisedSaDate",
                header: "Revised ETA SA date "            
            },
            
            {
                accessorKey: "shipAir",
                header: "Ship mode Sea/Air"          
            },
            
            {
                accessorKey: "forwardAwb",
                header: "Forwarder ref /Vessel name or AWB "         
            },
            
            {
                accessorKey: "LateCrp",
                header: "Late Delivery Discounts - CRP(if any)"       
            },
            
            {
                accessorKey: "InvoiceNumebr",
                header: "Invoice Number"
            },
            
            {
                accessorKey: "InvoiceCreateDate",
                header: "Invoice Create Date"
            },
            
            {
                accessorKey: "paymentReceiveDate",
                header:"Payment Receive Date"
            },
            
            {
                accessorKey: "lastUpdated",
                header:"Last Updated"
            },
            
            {
                accessorKey: "reasonInput",
                header:"Reason for major change likely to affect shipment: INPUT",
                Cell:({cell})=>{
                    if (cell) {
                    return (
                        <input
                            type="text"
                            value={cell.getValue()}
                            onChange={(e) => {
                                const index = Data.findIndex((d) => d.Sn === cell.row.original.Sn);
        const newData = [...Data];
          newData[index].reasonInput = e.target.value;
          setData(newData);
          
                            }}
                        />
                    );}
                }

            },
            
            {
                accessorKey: "aeonInput",
                header:"AEON Comments :",
                Cell:({cell})=>{
                    if (cell) {
                    return (
                        <input
                            type="text"
                            value={cell.getValue()}
                            onChange={(e) => {
                                const index = Data.findIndex((d) => d.Sn === cell.row.original.Sn);
        const newData = [...Data];
          newData[index].aeonInput = e.target.value;
          setData(newData);
                            }}
                        />
                    );}
                }
            },
            
            {
                accessorKey: "vendorInput",
                header:"Vendor Comments - Date 14 Dec 22: INPUT ",
                Cell:({cell})=>{
                    if (cell) {
                    return (
                        <input
                            type="text"
                            value={cell.getValue()}
                            onChange={(e) => {
                                const index = Data.findIndex((d) => d.Sn === cell.row.original.Sn);
        const newData = [...Data];
          newData[index].vendorInput = e.target.value;
          setData(newData);
          
                            }}
                        />
                    );}
                }
            },
            
            {
                accessorKey: "actions",
                header:"Actions",
                Cell: ({ cell }) => <><button className='btn btn-success'>Update</button> </> ,
          
            },
            
            
             
            
        ]
        ,[]
    )
    return ( <>
        <MaterialReactTable columns={columns} data={Data}/>
    </> );
}
 
export default Table;