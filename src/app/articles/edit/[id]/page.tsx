"use client";
import { Box, Center, FileInput, Image, Select, Skeleton, Text, TextInput } from "@mantine/core";
import { yupResolver } from "@mantine/form";
import { GET_ARTICLE, UPDATE_ARTICLE } from "@queries";
import { useDeleteButton, useSelect, useShow, useTranslation, useUpdate } from "@refinedev/core";
import { Edit, useForm as refineForm } from "@refinedev/mantine";
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import * as Yup from "yup"

export default function EditArticle () {
    const {translate} = useTranslation()
    const {query} = useShow<Article>({
        resource: "articles",
        meta: {
            gqlQuery: GET_ARTICLE
        }
    });

    const {data, isLoading} = query;

    let initialValues = {
        author: data?.data.articleInput.author,
        type: data?.data.articleInput.type,
        image: data?.data.articleInput.image ,
        title: data?.data.articleInput.title,
        message: data?.data.articleInput.message,
        imageData: null
    };
    const [uplImage, setUplImage] = useState("");
    useEffect(() => {
        if (data) {
            setUplImage(data.data.articleInput.image)
        }
    }, [isLoading])

    const validationSchema = Yup.object().shape({
        type: Yup.string().required(translate("pages.articles.form.error.type")),
        imageData: Yup.mixed().required(translate("pages.articles.form.error.image")),
        title: Yup.string().required(translate("pages.articles.form.error.title")),
        message: Yup.string().required(translate("pages.articles.form.error.message")),
    })

    const {values, getInputProps, errors, onSubmit} = refineForm({
        initialValues: initialValues,
        validate: yupResolver(validationSchema),
        refineCoreProps: {
            action: "edit",
            resource: "articles"
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
    }, [values.imageData]);

    const {mutate: updateArticle} = useUpdate({
        resource: "articles",
        id: data?.data.id,
        meta: {
            gqlMutation: UPDATE_ARTICLE,
            variables: values
        }
    })
    return (
        <Edit isLoading={isLoading} title={translate("pages.articles.edit")}>
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
                        <Image mt="md" style={{width: 600}} src={!uplImage ? data?.data.articleInput.image : uplImage} alt="image1" />
                        <TextInput
                            {...getInputProps('title')}
                            label={translate("pages.articles.form.title")}
                            placeholder={translate("pages.articles.form.title")}
                            mt="md"
                        />
                        <Text mt="md">
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
        </Edit>
    )
}