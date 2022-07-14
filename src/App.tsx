
import './styles/App.css';
import SearchBar from "./components/SearchBar";
import { Filters } from './containers/Filters';
import { DataTable } from './components/DataTable';
import { transactions } from './data/mock_transactions';

import Box, { BoxProps } from '@mui/material/Box';
import { purple } from '@mui/material/colors';
import { AutoCompleteCheckboxes } from './components/AutoCompleteCheckboxes';

function App() {
  const COLUMNS = [
    "Transaction Name",
    "Amount",
    "Category",
    "Vendor"
  ]

  let categories = Array.from(new Set(transactions.map(transaction => transaction.category)));
  let names = Array.from(new Set(transactions.map(transaction => transaction.transaction_name)));
  let vendors = Array.from(new Set(transactions.map(transaction => transaction.transaction_vendor)));
  let amountRange = [0, 1000];

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
        <h1 className='searchHeader'>Helicarrier Transaction Task</h1>
        <SearchBar />
        <Filters
          categories={categories}
          names={names}
          amountRange={amountRange}
          vendorNames={vendors}
        />
        <AutoCompleteCheckboxes options={vendors} />
      </Box>
      <DataTable columns={COLUMNS} data={transactions} />
    </div>
  );
}

export default App;
