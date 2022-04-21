import {
  DataTableSkeleton
} from '@carbon/react';
import useFetch from "react-hook-usefetch";
import { useState } from "react";
import DataTable from "./Datatable/DataTable";
import {headers} from "./Datatable/Utils";

function App() {
  const [isLoadingData, setIsLoadingData] = useState(true);

  setTimeout(() => {
    setIsLoadingData(false);
    console.log("data added");
  }, 5000);

  const {
    loading,
    data = [],
  } = useFetch('https://api.coinstats.app/public/v1/markets?coinId=bitcoin');

  const isLoading = () => (
    loading || !data.length || isLoadingData
  );

  return (
    <div className="App">
      {isLoading() ? <DataTableSkeleton headers={headers} /> :  <DataTable rows={data} />}
    </div>
  );
}

export default App;
