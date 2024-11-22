"use client";
import { ArticleTypeBadge } from "@components/badges/ArticleTypeBadge";
import { Badge, Box, Button, Group, Image, Menu, Modal, Table, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { DELETE_ARTICLE, GET_ARTICLE, UPDATE_ARTICLE_STATUS } from "@queries";
import { useDelete, useShow, useTranslation, useUpdate } from "@refinedev/core";
import { DateField, DeleteButton, EditButton, ListButton, RefreshButton, Show, TextField } from "@refinedev/mantine";
import NextImage from "next/image";

export default function ShowArticle () {
    const {translate, getLocale} = useTranslation();
    const [opened, {close, open}] = useDisclosure(false);
    // const {mutate: deleteArticle} = useDelete();
    const {query} = useShow<Article>({
        resource: "articles",
        meta: {
            gqlQuery: GET_ARTICLE
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
        resource: "articles",
        id: data?.data.id,
        values: true,
        meta: {
            gqlMutation: UPDATE_ARTICLE_STATUS,
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
                  <ListButton {...listButtonProps}>{translate("pages.articles.titles.list")}</ListButton>
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
          resource="articles" isLoading={isLoading}
          title={
            <Group>
                <Title order={3}>{translate("pages.articles.show")}</Title>
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
                <Image src={data?.data.articleInput.image ?? ""} alt="photo de l'article" width={600} style={{width: "100%", height: "100%"}}/>
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
                            {translate("pages.articles.tabs.values.infos.type")}
                          </Title>
                        </th>
                        <td>
                        {data.data.articleInput.type ? (
                              <ArticleTypeBadge article={data.data.articleInput.type} />
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
                        {data.data.articleInput.title ? (
                            <TextField
                              value={data.data.articleInput.title}
                            />
                          ) : (
                            <TextField value="-" />
                          )}
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <Title order={6}>
                            {translate("pages.articles.tabs.values.infos.message")}
                          </Title>
                        </th>
                        <td>
                          {data.data.articleInput.message  ? (
                            <TextField
                              value={data.data.articleInput.message}
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