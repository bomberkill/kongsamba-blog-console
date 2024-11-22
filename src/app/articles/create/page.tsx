"use client";
import { CREATE_ARTICLE } from "@queries";
import { Box, Center, FileInput, Image, Select, Text, TextInput, Title } from "@mantine/core";
import { yupResolver } from "@mantine/form";
import { useCreate, useNavigation, useTranslation } from "@refinedev/core";
import { Create, useForm as refineForm } from "@refinedev/mantine";
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage"
import * as Yup from "yup";
// import "../../../../firebaseConfig"
import { useEffect, useState } from "react";
import NextImage from "next/image";
import MDEditor, { commands } from "@uiw/react-md-editor";

export default function CreateArticle () {
    const {translate} = useTranslation()
    const {list} = useNavigation()
    const initialValues = {
        author: localStorage.getItem("id") ?? "",
        type: undefined,
        image: "",
        title: "",
        message: "",
        imageData: null
    };
    const [uplImage, setUplImage] = useState("");
    const validationSchema = Yup.object().shape({
        type: Yup.string().required(translate("pages.articles.form.error.type")),
        imageData: Yup.mixed().required(translate("pages.articles.form.error.image")),
        title: Yup.string().required(translate("pages.articles.form.error.title")),
        message: Yup.string().required(translate("pages.articles.form.error.message")),
    })
    const {getInputProps, onSubmit, values, errors} = refineForm({
        initialValues: initialValues,
        validate: yupResolver(validationSchema),
        refineCoreProps: {
            resource: "articles",
            action: "create",
        }
    })
    const {mutate: createArticle, isLoading, error} = useCreate({
        resource: "articles",
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
            gqlMutation: CREATE_ARTICLE,
            operation: "createArticle"
        }

    })
    useEffect(() => {
        if(values.imageData !== null) {
            const imageFile: unknown = values.imageData;
            if (imageFile instanceof File) {
                const imageUrl = URL.createObjectURL(imageFile);
                setUplImage(imageUrl);
                console.log("image file: ", values.imageData)
                return () => URL.revokeObjectURL(imageUrl)
            }
        } else {
            setUplImage("");
        }
    }, [values.imageData])

    const updloadImage = async () => {
        try {
            if (values.imageData !== null) {
                const storage = getStorage();
                const imageRef = ref(storage, `articles/${values.title}`);
                const imageSnapshot = await uploadBytesResumable(imageRef, values.imageData );
                const imageUrl = await getDownloadURL(imageSnapshot.ref);
                values.image = imageUrl;
            }
        } catch (error) {
            // console.log('erreur survenue', error);
        }
    }
    return (
        <Create 
            title={<Title order={3}>{translate("pages.articles.create")}</Title>} 
            saveButtonProps={{
                // @ts-expect-error
                onClick: onSubmit( async() => {
                    try {
                        await updloadImage()
                        createArticle();
                        list("articles");
                    } catch (error) {
                        console.log('erreur survenue', error); 
                    }
                })
            }}
        >
            <form>
                <Center>
                    <Box w="80%">
                        <Select
                            {...getInputProps('type')}
                            label={translate("pages.articles.form.type.label")}
                            placeholder={translate("pages.articles.form.type.placeholder")}
                            data={[
                                { value: 'ARTICLE', label: translate("pages.articles.form.type.options.article")},
                                { value: 'COVER', label: translate("pages.articles.form.type.options.cover")},
                                { value: 'NEWS', label: translate("pages.articles.form.type.options.news")},
                                { value: 'SPORTS', label: translate("pages.articles.form.type.options.sports")},
                                { value: 'BREVE', label: translate("pages.articles.form.type.options.breve")}
                            ]}
                            mt="md"
                        />
                        <FileInput mt="md" {...getInputProps("imageData")} accept="image/png,image/jpeg, image/jpg" clearable label={translate("pages.articles.form.image")} />
                        {uplImage && (
                            <Image style={{width: 600}} src={uplImage} alt="" />
                        )}
                        <TextInput
                            {...getInputProps('title')}
                            label={translate("pages.articles.form.title")}
                            placeholder={translate("pages.articles.form.title")}
                            mt="md"
                        />
                        <Text size="sm" mt="md">
                            {translate("pages.articles.form.message")}
                        </Text>
                        <MDEditor
                            {...getInputProps("message")} data-color-mode="light"
                        />
                        {errors.message && (
                            <Text mt={2} weight={500} size="xs" color="red">
                                {errors.message}
                            </Text>
                        )}
                    </Box>
                </Center>
            </form>
        </Create>
    )
}