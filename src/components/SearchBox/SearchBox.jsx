import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const selectFilter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value)); // Відправлення екшену зміни фільтра
  };

  return (
    <div className={css.search}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type='text'
        placeholder='Search'
        value={selectFilter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;
