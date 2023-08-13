import { dataGridProps } from "./TableColumns";
import { StyledDataGrid } from "./styles";

const ComplaintTable: React.FC = () => {
  return (
    <StyledDataGrid {...dataGridProps} />
  );
};

export default ComplaintTable;
