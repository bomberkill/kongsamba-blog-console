"use client";
import { Create, useForm } from "@refinedev/mantine";
import { useCreate, useLogin, useNavigation, useTranslation } from "@refinedev/core";
import { Container, Paper, PasswordInput, TextInput,Title, Button, Box } from "@mantine/core";
import * as Yup from 'yup'
import { yupResolver } from "@mantine/form";
import React from "react";
import { CREATE_ADMIN } from "@queries";

export default function CreateAdmin () {
    const {translate} = useTranslation()
    const {list} = useNavigation()
    // const {mutate: login} = useLogin<Login>();
    const initialCredentials = {
        email: '',
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
            action: "create"
        }

    });

    const {mutate: createAdmin, isLoading} = useCreate({
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
            gqlMutation: CREATE_ADMIN,
            operation: "createAdmin",
        }
    })

    // const handleSubmit = () => {
    //     login({email: loginForm.values.email, password: loginForm.values.password})
    // }
    return (
        <Create
            isLoading={isLoading}
            title={translate("pages.admins.create")}
            saveButtonProps={{
                // @ts-expect-error
                onClick: onSubmit( async() => {
                    console.log(values)
                    createAdmin()
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
        </Create>
    )
}