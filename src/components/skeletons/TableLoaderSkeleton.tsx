import React, { memo } from "react";
import { Skeleton } from "@mantine/core";

export const TableLoaderSkeleton: React.FC<{
  rows?: number;
  columns: number;
}> = memo((props) => {
  const { rows = 1, columns } = props;
  return (
    <React.Fragment>
      {Array.from({ length: rows }).map((_row, rowIndex) => {
        return (
          <tr key={rowIndex}>
            {Array.from({ length: columns }).map((_col, colIndex) => {
              return (
                <td key={colIndex}>
                  <Skeleton w="70%" h={16} />
                </td>
              );
            })}
          </tr>
        );
      })}
    </React.Fragment>
  );
});
TableLoaderSkeleton.displayName = "TableLoaderSkeleton"