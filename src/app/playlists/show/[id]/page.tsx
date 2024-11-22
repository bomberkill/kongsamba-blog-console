"use client";
import { Avatar, Badge, Box, Button, Collapse, Group, Image, Menu, Modal, Paper, Table, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { GET_PLAYLIST, UPDATE_PLAYLIST_STATUS } from "@queries";
import { useShow, useTranslation, useUpdate } from "@refinedev/core";
import { DateField, DeleteButton, EditButton, ListButton, RefreshButton, Show, TextField } from "@refinedev/mantine";
import React, { useState } from "react";
import {IconCaretUpFilled, IconCaretDownFilled} from "@tabler/icons-react";

export default function ShowPlaylist () {
    const {translate, getLocale} = useTranslation();
    const [opened, {close, open}] = useDisclosure(false);
    const [openSingle, {toggle}] = useDisclosure(false);
    // const [showSingles, setShowSingles] = useState(false);
    const {query} = useShow<Playlist>({
        resource: "playlists",
        meta: {
            gqlQuery: GET_PLAYLIST
        }
    });
    const {data, isLoading} = query
    const {isLoading: updatingStatus, mutate: updateStatus} = useUpdate({
        resource: "playlists",
        id: data?.data.id,
        values: true,
        meta: {
            gqlMutation: UPDATE_PLAYLIST_STATUS,
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
                    <ListButton {...listButtonProps}>{translate("pages.playlists.titles.list")}</ListButton>
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
          resource="playlists" isLoading={isLoading}
          title={
            <Group>
                <Title order={3}>{translate("pages.playlists.show")}</Title>
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
                <Image src={data?.data.playlistInput.image ?? ""} alt="photo de l'article" width={600} style={{width: "100%", height: "100%"}}/>
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
            <Box mt={35}>
                {data && (
                    <React.Fragment>
                        <Table withBorder withColumnBorders>
                          <tbody>
                            <tr>
                              <th>
                                <Title order={6}>
                                  {translate("pages.playlists.values.infos.title")}
                                </Title>
                              </th>
                              <td>
                              {data.data.playlistInput.title ? (
                                  <TextField
                                    value={data.data.playlistInput.title}
                                  />
                                ) : (
                                  <TextField value="-" />
                                )}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <Title order={6}>
                                  {translate("pages.playlists.values.infos.message")}
                                </Title>
                              </th>
                              <td>
                                {data.data.playlistInput.description  ? (
                                  <TextField
                                    value={data.data.playlistInput.description}
                                  />
                                ) : (
                                  <TextField value="-" />
                                )}
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <Title order={6}>
                                  {translate("pages.playlists.values.infos.updatedAt")}
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
                                  {translate("pages.playlists.values.infos.createdAt")}
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
                        <Box mt="lg">
                            <Group style={{cursor: "pointer"}} onClick={toggle}>
                                <Title order={4}>{translate("pages.playlists.values.infos.single")}</Title>
                                {!openSingle ? <IconCaretUpFilled size={18}/> : <IconCaretDownFilled size={18}/>}
                            </Group>
                            <Collapse mt="sm" in={openSingle}>
                            <Group style={{justifyContent: "center"}} w="100%">
                              {data.data.playlistInput.singles.map((single, index) => (
                                <>
                                  {index % 2 !== 0 ? (
                                    <Paper w="45%" mt="sm" shadow="xs" radius="sm" withBorder p="xs" key={index}>
                                        <Group px="xl" align="center" style={{justifyContent: "space-between"}} w="100%">
                                          <Image width={50} h={50} radius={25} alt="single image" src={single.image ?? "/images/default.jpg"}/>
                                          <Text>{single.title}</Text>
                                          <Avatar.Group spacing="xs">
                                          {single.singleLinks.map((link, linkIndex) => (
                                            <Avatar
                                              key={linkIndex}
                                              radius="xl"
                                              component="a"
                                              target="_blank"
                                              href={link.link}
                                              src={
                                                link.platform === "BOOMPLAY" ? "/images/boomplay.png" : 
                                                link.platform === "APPLEMUSIC" ? "/images/applemusic.png" :
                                                link.platform === "DEEZER" ? "/images/deezer.png" :
                                                link.platform === "SPOTIFY" ? "/images/spotify.png" :
                                                link.platform === "YOUTUBE" ? "/images/yt.png" : "/images/ytmusic.png"
                                              }
                                            />
                                          ))}
                                          </Avatar.Group>
                                        </Group>
                                    </Paper>
                                  ) : (
                                    <Paper w="45%" mt="sm" shadow="xs" radius="sm" withBorder p="xs" key={index}>
                                      <Group px="xl" align="center" style={{justifyContent: "space-between"}} w="100%">
                                        <Image width={50} h={50} radius={25} alt="single image" src={single.image ?? "/images/default.jpg"}/>
                                        <Text>{single.title}</Text>
                                        <Avatar.Group spacing="xs">
                                        {single.singleLinks.map((link, linkIndex) => (
                                          <Avatar
                                            key={linkIndex}
                                            radius="xl"
                                            component="a"
                                            target="_blank"
                                            href={link.link}
                                            src={
                                              link.platform === "BOOMPLAY" ? "/images/boomplay.png" : 
                                              link.platform === "APPLEMUSIC" ? "/images/applemusic.png" :
                                              link.platform === "DEEZER" ? "/images/deezer.png" :
                                              link.platform === "SPOTIFY" ? "/images/spotify.png" :
                                              link.platform === "YOUTUBE" ? "/images/yt.png" : "/images/ytmusic.png"
                                            }
                                          />
                                        ))}
                                        </Avatar.Group>
                                      </Group>
                                    </Paper>
                                  ) }
                                </>
                              ) )}
                            </Group>
                            </Collapse>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
          </Box>

        </Show>
    )
}