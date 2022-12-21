import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { Input, Label } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Label>Find contacts by name</Label>
      <Input
        type="filter"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </>
  );
}
