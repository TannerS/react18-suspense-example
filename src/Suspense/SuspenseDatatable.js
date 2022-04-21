import { fetchData } from "./Data/Data";
import DataTable from "../Datatable/DataTable";

// has to be placed outside the method/component but why?
const resource = fetchData();

const getContent = () => {
  // Try to read user info, although it might not have loaded yet
  const data = resource.data.read();

  return <DataTable rows={data} />
};

const SuspenseDatatable = () => (
  <>
    {getContent()}
  </>
);

export default SuspenseDatatable;
