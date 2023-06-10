import { useMemo } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import StyledWrapper from "./StyleWrapper";

interface Props {
  columnsTable: any[];
  dataTable: object[];
}

export const Datagrid = ({ columnsTable, dataTable }: Props) => {
  const columns = useMemo(() => columnsTable, [columnsTable]);
  const data = useMemo(() => dataTable, [dataTable]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <StyledWrapper>
        <Table className="table">
          <TableHead className="thead">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="tr" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell className="th" key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody className="tbody">
            {table.getRowModel().rows.map((row) => (
              <TableRow className="tr" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="td" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledWrapper>
    </div>
  );
};

export default Datagrid;
