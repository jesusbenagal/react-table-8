import { ColumnDef } from "@tanstack/react-table";
import { Person } from "../types";

export const columns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    id: "id",
    header: "ID",
    cell: (row) => row.getValue(),
  },
  {
    accessorKey: "firstName",
    id: "firstName",
    header: "First Name",
    cell: (row) => row.getValue(),
  },
  {
    accessorKey: "lastName",
    id: "lastName",
    header: "Last Name",
    cell: (row) => row.getValue(),
  },
  {
    accessorKey: "age",
    id: "age",
    header: "Age",
    cell: (row) => row.getValue(),
  },
  {
    accessorKey: "email",
    id: "email",
    header: "Email",
    cell: (row) => row.getValue(),
  },
  {
    accessorKey: "phone",
    id: "phone",
    header: "Phone",
    cell: (row) => row.getValue(),
  },
  {
    accessorKey: "address",
    id: "address",
    header: "Address",
    cell: (row) => row.getValue(),
  },
  {
    accessorKey: "description",
    id: "description",
    header: "Description",
    cell: (row) => row.getValue(),
  },
];
