import { DataGridProps } from "@mui/x-data-grid";
import { ComplaintDataList } from "../../data";
import {
  ClosedCell,
  ClosedWitCoupon,
  ConvertedCell,
  RedTextCell,
  StyledDataGrid,
  SuspendedCell,
} from "./StyledComplaintTable";

const ComplaintTable: React.FC = () => {
  const columns = [
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
      field: 'ComplaintDate',
      headerName: 'Complaint Date',
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

  const dataGridProps: DataGridProps = {
    rows: ComplaintDataList,
    columns: columns,
    componentsProps: {
      pagination: {
        page: 5,
        // pageSize: 5,
        rowsPerPageOptions: [5, 10, 20],
      },
    },

    // disableSelectionOnClick: true,
  };

  return (
    // <div style={{ height: 400, width: '70%' }}>
    <StyledDataGrid {...dataGridProps} />
    // </div>
  );
};

export default ComplaintTable;
