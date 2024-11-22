"use client";
import { DELETE_ARTICLE, GET_ALL_ARTICLES, GET_ALL_PLAYLISTS } from "@queries";
import { ColumnFilter } from "@components/columns/filter";
import { ColumnSorter } from "@components/columns/sorter";
import { TableLoaderSkeleton } from "@components/skeletons/TableLoaderSkeleton";
import { Badge, Box, Group, Pagination, ScrollArea, Table, Text } from "@mantine/core";
import { useDelete, useTranslation } from "@refinedev/core";
import { DateField, DeleteButton, EditButton, List, ShowButton, TextField } from "@refinedev/mantine";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
import React from "react";
import { ArticleTypeBadge } from "@components/badges/ArticleTypeBadge";

export default function ListPlaylists () {
    const  {translate, getLocale} = useTranslation();
    const columns = React.useMemo<ColumnDef<Playlist>[]>(
        () => [
            {
                id: "createdAt",
                accessorKey: "metadata.createdAt",
                header: function render() {
                  return (
                    <Text miw={180}>{translate("pages.playlists.list.createdAt")}</Text>
                  );
                },
                cell: function render({ getValue }) {
                  return (
                    <DateField
                      value={getValue<string>()}
                      format="L LTS"
                      locales={getLocale()}
                      lineClamp={1}
                    />
                  );
                },
                enableColumnFilter: false,
            },
            {
                id: "title",
                accessorKey: "playlistInput.title",
                header: function render() {
                    return (
                    <Text miw={150}>
                        {translate("pages.playlists.list.title")}
                    </Text>
                    );
                },
                // cell: function render({ getValue }) {
                //     const name = getValue<string | undefined>();
                //     return <TextField value={name || "-"} />;
                // },
                // meta: {
                //     inputPlaceholder: translate("categories.fields.attributes.name"),
                //     filterOperator: "contains",
                // },
                enableSorting: false,
                enableColumnFilter: false
            },
            {
                id: "description",
                accessorKey: "playlistInput.description",
                header: function render() {
                    return <Text miw={200}>{translate("pages.playlists.list.description")}</Text>;
                },
                // cell: function render({ getValue }) {
                //     const order = getValue<string>();
                //     return <ArticleTypeBadge article={order} />;
                // },
                meta: {
                    inputPlaceholder: translate("categories.fields.order"),
                    filterOperator: "contains",
                },
                enableSorting: false,
                enableColumnFilter: false
            },
            {
                id: "posted",
                accessorKey: "posted",
                header: function render() {
                    return <Text miw={80}>{translate("pages.playlists.list.posted")}</Text>;
                },
                cell: function render({ getValue }) {
                    const order = getValue<boolean>();
                    return <Badge radius="xs" size="md" variant="light" color={order ? "green" : "red"}>{translate(`badges.status.${order}`)}</Badge>;
                },
                meta: {
                    inputPlaceholder: translate("categories.fields.order"),
                    filterOperator: "contains",
                },
                enableColumnFilter: true,
                enableSorting: false
            },
            {
                id: "actions",
                accessorKey: "id",
                header: "Actions",
                cell: function render({ getValue }) {
                    const articleId = getValue<string>();
                    return (
                    <Group spacing="xs" noWrap>
                        <ShowButton hideText resource="playlists" recordItemId={articleId} />
                        <EditButton hideText resource="playlists" recordItemId={articleId} />
                        <DeleteButton  hideText resource="playlists" recordItemId={articleId} />
                    </Group>
                    );
                },
                enableColumnFilter: false,
                enableSorting: false,
            },
        ],
    [translate, getLocale]);
    const {
        getHeaderGroups,
        getRowModel,
        setOptions,
        refineCore: {
          setCurrent,
          pageCount,
          current,
          tableQuery: { isLoading },
        },
      } = useTable<Playlist>({
        refineCoreProps: {
            resource: "playlists",
            pagination: {
                pageSize: 10,
                current: 1,
                mode: "server",
            },
            meta: {
                gqlQuery: GET_ALL_PLAYLISTS,
            },
        },
        columns
    });
    setOptions((prev) => ({
        ...prev,
        meta: {
          ...prev.meta,
        },
    }));
    return (
        <List title={translate("pages.playlists.titles.list")}>
            <ScrollArea>
                <Table highlightOnHover>
                    <thead>
                        {getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                            return (
                                <th key={header.id}>
                                {!header.isPlaceholder ? (
                                    <Group spacing="xs" noWrap>
                                        <Box>
                                            {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                            )}
                                        </Box>
                                        <Group spacing="xs" noWrap>
                                            <ColumnFilter column={header.column} />
                                            <ColumnSorter column={header.column} />
                                        </Group>
                                    </Group>
                                ) : null}
                                </th>
                            );
                            })}
                        </tr>
                        ))}
                    </thead>
                    <tbody>
                        {isLoading ? (
                        <TableLoaderSkeleton columns={columns.length} rows={5} />
                        ) : (
                        getRowModel().rows.map((row) => {
                            return (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => {
                                    return (
                                        <td key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                        </td>
                                    );
                                    })}
                                </tr>
                            );
                        })
                        )}
                    </tbody>
                </Table>
            </ScrollArea>
            <br />
            <Pagination
                position="right"
                total={pageCount}
                page={current}
                onChange={setCurrent}
            />
        </List>
    )
}