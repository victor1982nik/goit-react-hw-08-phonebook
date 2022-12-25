import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';

import { setFilter } from 'redux/filterSlice';
import { Text, Box } from '@chakra-ui/react';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={8}>
      <Text as="label" fontSize={20} fontWeight="500" display="box" mb={4}>
        Find contacts by name
      </Text>
      <Text
        as="input"
        p={1}
        border="1px"
        borderRadius={4}
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </Box>
  );
}
