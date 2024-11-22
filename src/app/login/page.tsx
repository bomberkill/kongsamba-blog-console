"use client";
import { useForm } from "@refinedev/mantine";
import { useLogin, useTranslation } from "@refinedev/core";
import { Container, Paper, PasswordInput, TextInput,Title, Button, Box } from "@mantine/core";
import * as Yup from 'yup'
import { yupResolver } from "@mantine/form";
import React from "react";

// type LoginVariables = {
//     email: string;
//     password: string;
//   };
function Login () {
    const {translate} = useTranslation()
    const {mutate: login} = useLogin<Login>();
    const initialCredentials = {
        email: '',
        password: ''
    };
    const validation = Yup.object().shape({
        email: Yup.string().email(translate('pages.login.errors.invalid-email')).required(translate('pages.login.errors.required')),
        password: Yup.string().required(translate('pages.login.errors.required')),
    })
    const loginForm = useForm({
        initialValues: initialCredentials,
        validate: yupResolver(validation),

    })
    const handleSubmit = () => {
        login({email: loginForm.values.email, password: loginForm.values.password})
    }
    return (
        <Box mt={100} h="100%">
            <form onSubmit={loginForm.onSubmit(handleSubmit)}>
                <Container size={420}>
                    <Title ta="center" fw={900}>
                        {translate('pages.login.title')}
                    </Title>
                    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                        <TextInput {...loginForm.getInputProps('email')} label={translate('pages.login.fields.email')} placeholder="your@email.dev" />
                        <PasswordInput {...loginForm.getInputProps('password')} label={translate('pages.login.fields.password')} placeholder="Your password" mt="md" />
                        <Button type="submit" fullWidth mt="xl">
                        {translate('pages.login.signin')}
                        </Button>
                    </Paper>
                </Container>
            </form>
        </Box>
    )
};
export default Login;