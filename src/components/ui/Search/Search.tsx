import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => (
  <Box sx={{ mr: 2 }}>
    <FormControl sx={{ width: { xs: '100%', md: '345px' } }}>
      <OutlinedInput
        size="medium"
        id="header-search"
        startAdornment={
          <InputAdornment position="start" sx={{ mr: 0.5 }}>
            <SearchIcon />
          </InputAdornment>
        }
        aria-describedby="header-search-text"
        inputProps={{
          'aria-label': 'Поиск',
        }}
        placeholder="Поиск"
      />
    </FormControl>
  </Box>
);

export default Search;
