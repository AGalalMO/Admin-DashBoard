import { ComplaintDataList } from "../../_mock/TableData";
import {
  ClosedCell,
  ClosedWitCoupon,
  ConvertedCell,
  RedTextCell,
  SuspendedCell,
} from "./styles";
import { DataGridProps } from "@mui/x-data-grid";

export const TableColumns = [
  { field: "ComplaintNumber", headerName: "Complaint Number", width: 180 },
  {
    field: "ComplaintDepartment",
    headerName: "Complaint Department",
    width: 180,
  },
  {
    field: "ComplaintStatus",
    headerName: "Complaint Status",
    width: 160,
    renderCell: (params: any) => {
      const complaintStatus = params.value;

      if (complaintStatus === "معلقة") {
        return <SuspendedCell>{complaintStatus}</SuspendedCell>;
      } else if (complaintStatus === "محولة") {
        return <ConvertedCell>{complaintStatus}</ConvertedCell>;
      } else if (complaintStatus === "مغلقة") {
        return <ClosedCell>{complaintStatus}</ClosedCell>;
      } else if (complaintStatus === "مغلقة مع قسيمة") {
        return <ClosedWitCoupon>{complaintStatus}</ClosedWitCoupon>;
      }

      return complaintStatus;
    },
  },
  {
    field: "ComplaintDate",
    headerName: "Complaint Date",
    width: 160,
    renderCell: (params: any) => <RedTextCell>{params.value}</RedTextCell>,
  },
  {
    field: "ComplaintTimeFrame",
    headerName: "Complaint Time Frame",
    width: 200,
  },
  { field: "TaxpayerName", headerName: "Taxpayer Name", width: 180 },
];

export const dataGridProps: DataGridProps = {
  rows: ComplaintDataList,
  columns: TableColumns,
  componentsProps: {
    pagination: {
      page: 5,
      // pageSize: 5,
      rowsPerPageOptions: [5, 10, 20],
    },
  },

  // disableSelectionOnClick: true,
};
