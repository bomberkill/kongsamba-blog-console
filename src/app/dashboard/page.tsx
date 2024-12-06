"use client";
import { ActionIcon, Box, Card, Center, Container, Paper, Text } from "@mantine/core";
import { useTranslation } from "@refinedev/core";
import { RefineThemes } from "@refinedev/mantine";
import {IconPlus} from '@tabler/icons-react'

export default function Dashboard () {
    const {translate} = useTranslation()
    return (
        <Card w="100%" h="100vh" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Box>
                <Center>
                    <ActionIcon variant="filled" color="blue" w={70} h={70} >
                        <IconPlus color="white" size={40} />
                    </ActionIcon>
                </Center>
                <Text mt="md">{translate('Ajouter')}</Text>
            </Box>
        </Card>
    )
};