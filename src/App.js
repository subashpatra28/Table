import './App.css';
import { PaginationTable } from './components/PaginationTable';
// import { BasicTable } from './components/BasicTable';
import { SortingTable } from './components/SortingTable'

function App() {
  return (
    <div className="App">
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      <PaginationTable />
    </div>
  );
}

export default App;
