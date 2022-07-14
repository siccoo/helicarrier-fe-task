
import './styles/App.css';
import SearchBar from "./components/SearchBar";
import { Filters } from './containers/Filters';
import { DataTable } from './components/DataTable';
import { transactions } from './data/mock_transactions';

import Box, { BoxProps } from '@mui/material/Box';
import { purple } from '@mui/material/colors';

function App() {
  const COLUMNS = [
    "Transaction Name",
    "Amount",
    "Category",
    "Vendor"
  ]

  // const 
  return (
    <div>
      {/* Helicarrier Simple Transaction Task */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          m: 1,
          backgroundColor: purple[200],
          borderRadius: 1,
          width: '100%',
          height: '600px',
          margin: 'auto'
        }}
      >
        Helicarrier Transaction Task
        <SearchBar  />
        <Filters />
      </Box>

    </div>
  );
}

export default App;
