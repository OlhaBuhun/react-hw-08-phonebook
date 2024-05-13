import { useDispatch, useSelector} from "react-redux";
import { selectFilter } from "../../redux/contacts/selectors";
import { setFilter } from "../../redux/contacts/filtersSlice";
import { FormLabel, Input } from "@chakra-ui/react";

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    const normalizedFilter = event.target.value.toLowerCase().trim();
    dispatch(setFilter(normalizedFilter));
  };
  return (
    <FormLabel mb='12px'>Find contacts by name
    <Input
      type="text"
      value={filter}
      placeholder="Enter contact name"
      variant="filled"
      bg="#f0eafb"
      boxShadow='dark-lg'
      onChange={handleFilter}
    />
    </FormLabel>
  );
};