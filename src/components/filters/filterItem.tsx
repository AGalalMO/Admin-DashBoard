import { filterItem } from "../../@types";
import { StyledFilterItemWrapper, StyledFilterText } from "./styles";

 const FilterItem = ({ filter }: { filter: filterItem }) => {
   return (
     <StyledFilterItemWrapper isSelected={filter.isSelected}>
       <StyledFilterText isSelected={filter.isSelected} >{filter.name}</StyledFilterText>
     </StyledFilterItemWrapper>
   );
 };

export default FilterItem;