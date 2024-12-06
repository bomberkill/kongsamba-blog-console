"use client";
import { CREATE_ARTICLE, CREATE_EVENT, GET_EVENT } from "@queries";
import { Box, Center, FileInput, Group, Image, Select, Text, TextInput, Title } from "@mantine/core";
import { yupResolver } from "@mantine/form";
import { useCreate, useNavigation, useShow, useTranslation, useUpdate } from "@refinedev/core";
import { Create, useForm as refineForm } from "@refinedev/mantine";
import {deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable} from "firebase/storage"
import * as Yup from "yup";
import { DatePicker } from "@mantine/dates";
// import "../../../../firebaseConfig"
import { useEffect, useState } from "react";
import NextImage from "next/image";
import MDEditor, { commands } from "@uiw/react-md-editor";

export default function EditEvent () {
    const {translate} = useTranslation()
    const [showStartAt, setShowStartAt] = useState(false);
    const [showEndAt, setShowEndAt] = useState(false);
    const {list} = useNavigation()
    const {query} = useShow<Event>({
        resource: "events",
        meta: {
            gqlQuery: GET_EVENT
        }
    });

    const {data, isLoading: getLoading} = query;

    const [uplImage, setUplImage] = useState<string | null>(null);
    let initialValues = {
        author: localStorage.getItem("id") ?? "",
        link: data?.data.eventInput.link ?? "",
        image: data?.data.eventInput.image ?? "",
        title: data?.data.eventInput.title ?? "",
        endAt: data?.data.eventInput.endAt ?? "",
        startAt: data?.data.eventInput.startAt ?? "",
        imageData: null
    };
    const validationSchema = Yup.object().shape({
        link: Yup.string(),
        imageData: Yup.mixed().required(translate("pages.events.form.error.image")),
        title: Yup.string(),
        endAt: Yup.date().required(translate("pages.events.form.error.endAt"))
            .when("startAt", (startAt, schema) => (
                startAt ? schema.min(startAt, translate("pages.events.form.error.mustBeAfter")) : schema
            )),
        startAt: Yup.date(),
    })
    const {getInputProps, onSubmit, values, errors} = refineForm({
        initialValues: initialValues,
        validate: yupResolver(validationSchema),
        refineCoreProps: {
            resource: "events",
            action: "edit",
        }
    })
    const {mutate: updateEvent, isLoading, error} = useUpdate({
        id: data?.data.id,
        resource: "events",
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
            gqlMutation: CREATE_EVENT,
            operation: "updateEvent"
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

    const deleteOldImage = async () => {
        console.log("start delete");
        try {
            const storage = getStorage();
            const Imageref = ref(storage, data?.data.eventInput.image);
            await deleteObject(Imageref);
            console.log("image deleted");
            console.log("end delete");
        } catch (error) {
            console.log('erreur survenue', error);
        }

    }

    const updloadImage = async () => {
        try {
            if (values.imageData !== null) {
                await deleteOldImage();
                const storage = getStorage();
                const imageRef = ref(storage, `events/${values.title}`);
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
            isLoading={isLoading}
            title={<Title order={3}>{translate("pages.events.create")}</Title>} 
            saveButtonProps={{
                // @ts-expect-error
                onClick: onSubmit( async() => {
                    try {
                        await updloadImage()
                        updateEvent();
                        list("events");
                    } catch (error) {
                        console.log('erreur survenue', error); 
                    }
                })
            }}
        >
            <form>
                <Center>
                    <Box w="80%">
                        <FileInput withAsterisk mt="md" {...getInputProps("imageData")} accept="image/png,image/jpeg, image/jpg" clearable label={translate("pages.articles.form.image")} />
                        <Image mt="md" style={{width: 600}} src={!uplImage ? data?.data.eventInput.image : uplImage} alt="image1" />
                        <TextInput
                            {...getInputProps('title')}
                            label={translate("pages.events.form.title")}
                            placeholder={translate("pages.events.form.title")}
                            mt="md"
                        />
                        <TextInput
                            {...getInputProps('link')}
                            label={translate("pages.events.form.link")}
                            placeholder={translate("pages.events.form.link")}
                            mt="md"
                        />
                        <Group align="start" w="100%" style={{justifyContent: "space-between"}} mt="md">
                            <DatePicker
                                style={{flex: 1}}
                                label={translate("pages.events.form.link")}
                                placeholder={translate("pages.events.form.link")}
                                minDate={new Date()}
                                {...getInputProps('startAt')}
                            />
                            <DatePicker
                                style={{flex: 1}}
                                withAsterisk
                                label={translate("pages.events.form.link")}
                                placeholder={translate("pages.events.form.link")}
                                minDate={values.startAt ? new Date(new Date(values.startAt).setDate(new Date(values.startAt).getDate() + 1)) : new Date()}
                                {...getInputProps('endAt')}
                            />
                        </Group>
                    </Box>
                </Center>
            </form>
        </Create>
    )
}