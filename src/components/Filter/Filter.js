import { useDispatch, useSelector} from "react-redux";
import { selectFilter } from "../../redux/contacts/selectors";
import { setFilter } from "../../redux/contacts/filtersSlice";

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    const normalizedFilter = event.target.value.toLowerCase().trim();
    dispatch(setFilter(normalizedFilter));
  };
  return (
    <label >
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};