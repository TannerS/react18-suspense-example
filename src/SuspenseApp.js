import { DataTableSkeleton } from '@carbon/react';
import { Suspense } from "react";
import { headers } from "./Datatable/Utils";
import SuspenseDatatable from "./Suspense/SuspenseDatatable";

const SuspenseApp = () =>  (
  <div className="App">
    <Suspense fallback={<DataTableSkeleton headers={headers} />}>
      <SuspenseDatatable />
    </Suspense>
  </div>
);

export default SuspenseApp;
