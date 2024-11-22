import React from "react";
import { ActionIcon } from "@mantine/core";
import { IconChevronDown, IconSelector, IconChevronUp } from "@tabler/icons-react";
import { Column, RowData } from "@tanstack/table-core";

export type ColumnSorterProps<TData extends RowData> = {
  column: Column<TData>;
};

export const ColumnSorter = <TData extends RowData>({
  column,
}: ColumnSorterProps<TData>): React.ReactElement | null => {
  if (!column.getCanSort()) {
    return null;
  }

  const sorted = column.getIsSorted();

  return (
    <ActionIcon
      size="xs"
      onClick={column.getToggleSortingHandler()}
      style={{
        transition: "transform 0.25s",
        transform: `rotate(${sorted === "asc" ? "360" : "0"}deg)`,
      }}
      variant={sorted ? "light" : "transparent"}
      color={sorted ? "primary" : "gray"}
    >
      {!sorted ? (
        <IconSelector size={18} />
      ) : sorted === "asc" ? (
        <IconChevronDown size={18} />
      ) : sorted === "desc" ? (
        <IconChevronUp size={18} />
      ) : null}
    </ActionIcon>
  );
};
