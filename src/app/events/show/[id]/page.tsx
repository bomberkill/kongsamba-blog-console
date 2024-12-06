"use client";
import { ArticleTypeBadge } from "@components/badges/ArticleTypeBadge";
import { Badge, Box, Button, Group, Image, Menu, Modal, Table, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DELETE_ARTICLE, GET_ARTICLE, GET_EVENT, UPDATE_ARTICLE_STATUS, UPDATE_EVENT_STATUS } from "@queries";
import { useDelete, useShow, useTranslation, useUpdate } from "@refinedev/core";
import { DateField, DeleteButton, EditButton, ListButton, RefreshButton, Show, TextField } from "@refinedev/mantine";
import NextImage from "next/image";

export default function ShowEvent () {
    const {translate, getLocale} = useTranslation();
    const [opened, {close, open}] = useDisclosure(false);
    // const {mutate: deleteArticle} = useDelete();
    const {query} = useShow<Event>({
        resource: "events",
        meta: {
            gqlQuery: GET_EVENT
        }
    })
    const {data, isLoading} = query
    // deleteArticle({
    //   resource: "articles",
    //   id: data?.data.id ?? "",
    //   meta: {
    //     gqlMutation: DELETE_ARTICLE,
    //   }
    // })
    const {isLoading: updatingStatus, mutate: updateStatus} = useUpdate({
        resource: "events",
        id: data?.data.id,
        values: true,
        meta: {
            gqlMutation: UPDATE_EVENT_STATUS,
        }
    })
    return (
        <Show
          headerButtons={({
            deleteButtonProps,
            editButtonProps,
            listButtonProps,
            refreshButtonProps,
          }) => (
            <>
              {listButtonProps && (
                  <ListButton {...listButtonProps}>{translate("pages.events.titles.list")}</ListButton>
              )}
              {editButtonProps && (
                  <EditButton {...editButtonProps} />
              )}
              {deleteButtonProps && (
                  <DeleteButton {...deleteButtonProps} />
              )}
              <RefreshButton {...refreshButtonProps} />
            </>
          )}
          resource="events" isLoading={isLoading}
          title={
            <Group>
                <Title order={3}>{translate("pages.events.show")}</Title>
                <Badge radius="xs" size="md" variant="light" color={data?.data.posted ? "green" : "red"}>{translate(`badges.status.${data?.data.posted}`)}</Badge>
            </Group>
          }
        >
          <Modal onClose={close} opened={opened} title={translate("modal.title")}>
              <Group mt="md" position="right">
                  <Button onClick={close} variant="light" color="gray">{translate("buttons.cancel")}</Button>
                  <Button onClick={() => {updateStatus(); close()}} loading={updatingStatus} variant="filled" color={data?.data.posted ? "red" : "blue"}>{data?.data.posted ? translate(`buttons.unposted`) : translate(`buttons.posted`)}</Button>
              </Group>
          </Modal>
          <Box w="100%">
              <Group>
                <Image src={data?.data.eventInput.image ?? ""} alt="photo de l'event" width={600} style={{width: "100%", height: "100%"}}/>
                <Group my={24} position="right">
                    <Menu
                        shadow="md"
                        withArrow
                        position="bottom-end"
                        arrowPosition="center"
                    >
                        <Menu.Target>
                        <Button>{translate("buttons.actions")}</Button>
                        </Menu.Target>

                        <Menu.Dropdown>
                        <Menu.Item
                            onClick={() => {
                            open();
                            }}
                        >
                            {data?.data.posted ? translate(`buttons.unposted`) : translate(`buttons.posted`) }
                        </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Group>
              </Group>
              <Box mt={32}>
                {data && (
                  <Table withBorder withColumnBorders>
                    <tbody>
                      <tr>
                        <th>
                          <Title order={6}>
                            {translate("pages.events.tabs.values.infos.endAt")}
                          </Title>
                        </th>
                        <td>
                        {data.data.eventInput.endAt ? (
                            <DateField
                              value={data.data.eventInput.endAt}
                              format="L"
                              locales={getLocale()}
                              lineClamp={1}
                            />
                          ) : (
                            <TextField value="-" />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <Title order={6}>
                            {translate("pages.events.tabs.values.infos.startAt")}
                          </Title>
                        </th>
                        <td>
                        {data.data.eventInput.startAt ? (
                            <DateField
                              value={data.data.eventInput.startAt}
                              format="L"
                              locales={getLocale()}
                              lineClamp={1}
                            />
                          ) : (
                            <TextField value="-" />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <Title order={6}>
                            {translate("pages.articles.tabs.values.infos.title")}
                          </Title>
                        </th>
                        <td>
                        {data.data.eventInput.title ? (
                            <TextField
                              value={data.data.eventInput.title}
                            />
                          ) : (
                            <TextField value="-" />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <Title order={6}>
                            {translate("pages.events.tabs.values.infos.link")}
                          </Title>
                        </th>
                        <td>
                          {data.data.eventInput.link  ? (
                            <TextField
                              value={data.data.eventInput.link}
                            />
                          ) : (
                            <TextField value="-" />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <Title order={6}>
                            {translate("pages.articles.tabs.values.infos.updatedAt")}
                          </Title>
                        </th>
                        <td>
                          {typeof data.data.metadata.updatedAt === "string" ? (
                            <DateField
                              value={data.data.metadata.updatedAt}
                              format="L LTS"
                              locales={getLocale()}
                              lineClamp={1}
                            />
                          ) : (
                            <TextField value="-" />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <Title order={6}>
                            {translate("pages.articles.tabs.values.infos.createdAt")}
                          </Title>
                        </th>
                        <td>
                          {typeof data.data.metadata.createdAt === "string" ? (
                            <DateField
                              value={data.data.metadata.createdAt}
                              format="L LTS"
                              locales={getLocale()}
                              lineClamp={1}
                            />
                          ) : (
                            <TextField value="-" />
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                )}
              </Box>
          </Box>
        </Show>
    )
}