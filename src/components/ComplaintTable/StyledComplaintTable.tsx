import { Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

export const StyledDataGrid =styled(DataGrid)`
background: #FFFFFF 0% 0% no-repeat padding-box;
border-radius: 17px;
opacity: 1;
width: 1338px;
height: 822px;
`;

export const SharedCellCell = styled.div`
width: 66px;
height: 25px;
border-radius: 13px;
opacity: 1;
text-align: center;
`;
  

 export const SuspendedCell = styled(SharedCellCell)`
 background: #F5C62A33 0% 0% no-repeat padding-box;
`;

 export const ConvertedCell = styled(SharedCellCell)`
 background: #83838333 0% 0% no-repeat padding-box;
`;
export const ClosedCell = styled(SharedCellCell)`
background: #438FCE 0% 0% no-repeat padding-box;
`;

export const ClosedWitCoupon = styled(SharedCellCell)`
background: #2EC988 0% 0% no-repeat padding-box;
width: 122px;
`;

export const RedTextCell = styled.div`
  color: red; 
`;
