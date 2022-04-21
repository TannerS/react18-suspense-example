import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from '@carbon/react';
import { headers } from "./Utils";

const DataTable = ({ rows }) => (
  <Table>
    <TableHead>
      <TableRow>
        {headers.map((header) => (
          <TableHeader id={header.key} key={header}>
            {header}
          </TableHeader>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index}>
          {Object.keys(row)
            .filter(key => headers.includes(key))
            .map(key => {
              return <TableCell key={key}>{row[key]}</TableCell>;
            })}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default DataTable;
