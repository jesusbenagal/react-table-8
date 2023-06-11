import { useMemo, useRef, useState } from "react";
import {
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
  Row,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";

import StyledWrapper from "./StyleWrapper";
import { useVirtual } from "react-virtual";

interface Props {
  columnsTable: any[];
  dataTable: object[];
}

export const Datagrid = ({ columnsTable, dataTable }: Props) => {
  const columns = useMemo(() => columnsTable, [columnsTable]);
  const data = useMemo(() => dataTable, [dataTable]);

  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    columns,
    data,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  });

  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;

  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0;

  return (
    <div ref={tableContainerRef}>
      <StyledWrapper>
        <Table className="table">
          <TableHead className="thead">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="tr" key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableCell
                    className="th"
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{
                      width: header.getSize(),
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          onClick: header.column.getToggleSortingHandler(),
                          style: {
                            cursor: header.column.getCanSort()
                              ? "pointer"
                              : "default",
                          },
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody className="tbody">
            {paddingTop > 0 && (
              <TableRow>
                <TableCell
                  className="td"
                  style={{
                    height: `${paddingTop}px`,
                  }}
                />
              </TableRow>
            )}
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index];
              return (
                <TableRow className="tr" key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell className="td" key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
            {paddingBottom > 0 && (
              <TableRow>
                <TableCell style={{ height: `${paddingBottom}px` }} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </StyledWrapper>
    </div>
  );
};

export default Datagrid;
