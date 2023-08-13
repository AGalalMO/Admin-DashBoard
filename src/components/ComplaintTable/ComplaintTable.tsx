import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { ComplaintDataList } from '../../data';
import { GreenCell, RedCell, StyledDataGrid } from './StyledComplaintTable';

const ComplaintTable: React.FC = () => {
  const columns = [
    { field: 'ComplaintNumber', headerName: 'Complaint Number', width: 180 },
    { field: 'ComplaintDepartment', headerName: 'Complaint Department', width: 180 },
    {
      field: 'ComplaintStatus',
      headerName: 'Complaint Status',
      width: 160,
      renderCell: (params :any) => {
        const complaintStatus = params.value;
  
        if (complaintStatus === 'معلقة') {
          return <GreenCell>{complaintStatus}</GreenCell>;
        } else if (complaintStatus === 'محولة') {
          return <RedCell>{complaintStatus}</RedCell>;
        }
  
        return complaintStatus;
      },
    },
    { field: 'ComplaintDate', headerName: 'Complaint Date', width: 160 },
    { field: 'ComplaintTimeFrame', headerName: 'Complaint Time Frame', width: 200 },
    { field: 'TaxpayerName', headerName: 'Taxpayer Name', width: 180 },
  ];
  

  const dataGridProps: DataGridProps = {
    rows: ComplaintDataList,
    columns: columns,
    componentsProps: {
      pagination: {
        page:5,
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
