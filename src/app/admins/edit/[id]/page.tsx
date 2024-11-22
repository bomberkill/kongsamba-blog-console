"use client";
import { Edit, useForm } from "@refinedev/mantine";
import { useNavigation, useShow, useTranslation, useUpdate } from "@refinedev/core";
import { Container, Paper, PasswordInput, TextInput,Title, Button, Box } from "@mantine/core";
import * as Yup from 'yup'
import { yupResolver } from "@mantine/form";
import React from "react";
import { CREATE_ADMIN, GET_ADMIN, UPDATE_ADMIN } from "@queries";

export default function EditAdmin () {
    const {translate} = useTranslation()
    const {list} = useNavigation()
    const {query} = useShow<Admin>({
        resource: "playlists",
        meta: {
            gqlQuery: GET_ADMIN
        }
    });

    const {data, isLoading: getLoading} = query;
    const initialCredentials = {
        email: data?.data.email,
        password: ''
    };
    const validation = Yup.object().shape({
        email: Yup.string().email(translate('pages.login.errors.invalid-email')).required(translate('pages.login.errors.required')),
        password: Yup.string().required(translate('pages.login.errors.required')),
    })
    const {values, getInputProps, onSubmit} = useForm({
        initialValues: initialCredentials,
        validate: yupResolver(validation),
        refineCoreProps: {
            resource: "admins",
            action: "edit"
        }

    });

    const {mutate: updateAdmin, isLoading} = useUpdate({
        id: data?.data.id,
        resource: "admins",
        values: values,
        successNotification(data, values, resource) {
            return {
                type: "success",
                message: translate("notifications.success"),
            }
        },
        errorNotification(error, values, resource) {
            return {
                type: "error",
                message: translate("notifications.error"),
                description: `${error}`,
            }
        },
        meta: {
            gqlMutation: UPDATE_ADMIN,
            operation: "updateAdmin",
        }
    })

    // const handleSubmit = () => {
    //     login({email: loginForm.values.email, password: loginForm.values.password})
    // }
    return (
        <Edit
            isLoading={isLoading}
            title={translate("pages.admins.create")}
            saveButtonProps={{
                // @ts-expect-error
                onClick: onSubmit( async() => {
                    console.log(values)
                    updateAdmin()
                    list("admins");
                })
            }}
        >
            <Box mt={100} h="100%">
                <form>
                    <Container size={420}>
                        {/* <Title ta="center" fw={900}>
                            {translate('pages.login.title')}
                        </Title> */}
                        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                            <TextInput {...getInputProps('email')} label={translate('pages.login.fields.email')} placeholder="your@email.dev" />
                            <PasswordInput {...getInputProps('password')} label={translate('pages.login.fields.password')} placeholder="Your password" mt="md" />
                            {/* <Button type="submit" fullWidth mt="xl">
                            {translate('pages.login.signin')}
                            </Button> */}
                        </Paper>
                    </Container>
                </form>
            </Box>
        </Edit>
    )
}