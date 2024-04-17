import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const searchTerm = useSelector(selectNameFilter);
  const searchId = useId();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(changeFilter(value.trim().toLowerCase()));
  };

  return (
    <div className={css.search}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type='text'
        name='Input'
        placeholder='Search'
        onChange={handleChange}
        id={searchId}
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBox;
