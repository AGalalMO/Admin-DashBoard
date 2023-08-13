import { Stack } from "@mui/material";
import { filtersData } from "../../_mock/FilterData";
import FilterItem from "./filterItem";

const GlobalFilter = () => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'}>
      <Stack direction={'row'} gap={3.43}>
        {filtersData.map((item, index) => (
          <FilterItem filter={item} key={index} />
        ))}
      </Stack>
    </Stack>
  );
};
export default GlobalFilter;
