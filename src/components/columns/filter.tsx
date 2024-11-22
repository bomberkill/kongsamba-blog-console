import React, { useState } from "react";
import { TextInput, Menu, ActionIcon, Stack, Group } from "@mantine/core";
import { IconFilter, IconX, IconCheck } from "@tabler/icons-react";
import { Column, RowData } from "@tanstack/table-core";

export type ColumnFilterProps<TData extends RowData> = {
  column: Column<TData>;
};

export const ColumnFilter = <TData extends RowData>({
  column,
}: ColumnFilterProps<TData>): React.ReactElement | null => {
  const [state, setState] = useState<null | { value: unknown }>(null);

  if (!column.getCanFilter()) {
    return null;
  }

  const open = () => {
    setState({
      value: column.getFilterValue(),
    });
  };

  const close = () => {
    setState(null);
  };

  const change = (value: unknown) => {
    setState({ value });
  };

  const clear = () => {
    column.setFilterValue(undefined);
    close();
  };

  const save = () => {
    if (!state) {
      return;
    }
    column.setFilterValue(state.value);
    close();
  };

  const renderFilterElement = () => {
    const {
      filterComponent: FilterComponent,
      inputPlaceholder: placeholder,
      inputData: options,
    } = column.columnDef?.meta as unknown as {
      filterComponent?: React.FC<{
        data?: ReadonlyArray<{ label: string; value: string }>;
        value: unknown;
        onChange: (value: unknown) => void;
      }>;
      inputPlaceholder?: string;
      inputData?: Array<{ label: string; value: string }>;
    };

    if (!FilterComponent && !!state) {
      return (
        <TextInput
          autoComplete="on"
          placeholder={placeholder}
          value={state.value as string | number}
          onChange={(e) => {
            change(e.target.value);
          }}
        />
      );
    }

    return (
      // @ts-expect-error
      <FilterComponent data={options} value={state?.value} onChange={change} />
    );
  };

  return (
    <Menu
      opened={!!state}
      position="bottom"
      withArrow
      transition="scale-y"
      shadow="xl"
      onClose={close}
      width="256px"
      withinPortal
    >
      <Menu.Target>
        <ActionIcon
          size="xs"
          onClick={open}
          variant={column.getIsFiltered() ? "light" : "transparent"}
          color={column.getIsFiltered() ? "primary" : "gray"}
        >
          <IconFilter size={18} />
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        {!!state && (
          <Stack p="xs" spacing="xs">
            {renderFilterElement()}
            <Group position="right" spacing={10} noWrap>
              <ActionIcon
                size="md"
                color="red"
                variant="outline"
                onClick={clear}
              >
                <IconX size={18} />
              </ActionIcon>
              <ActionIcon
                size="md"
                onClick={save}
                color="primary"
                variant="outline"
              >
                <IconCheck size={18} />
              </ActionIcon>
            </Group>
          </Stack>
        )}
      </Menu.Dropdown>
    </Menu>
  );
};
