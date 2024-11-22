"use client";
import { yupResolver } from "@mantine/form";
import { GET_PLAYLIST, UPDATE_PLAYLIST } from "@queries";
import { useNavigation, useShow, useTranslation, useUpdate } from "@refinedev/core";
import { Edit } from "@refinedev/mantine";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useForm as refineForm } from "@refinedev/mantine";
import { Center, FileInput, Group, Image, Select, Skeleton, TextInput } from "@mantine/core";
import { Box } from "@mantine/core";
import {IconPlus, IconCross, IconSquareRoundedPlus, IconSquareRoundedX} from "@tabler/icons-react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable, deleteObject } from "firebase/storage";
// import "../../../../../firebaseConfig";
import MDEditor from "@uiw/react-md-editor";
import { Text } from "@mantine/core";

export default function EditPlaylists () {
    const {translate} = useTranslation()
    const {list} = useNavigation()
    const {query} = useShow<Playlist>({
        resource: "playlists",
        meta: {
            gqlQuery: GET_PLAYLIST
        }
    });

    const {data, isLoading: getLoading} = query;

    const [uplImage, setUplImage] = useState<string | null>(null);
    // useEffect(() => {
    //     if(!getLoading && data) {
    //         setUplImage(data.data.playlistInput.image);
    //     }
    // }, [getLoading])
    const [isLoading, setIsLoading] = useState(false);
    let initialValues = {
        id: data?.data.id,
        title: data?.data.playlistInput.title,
        description: data?.data.playlistInput.description,
        image: data?.data.playlistInput.image,
        singles: data ? data.data.playlistInput.singles : [{title: "", singleLinks: [{platform: "", link: ""}]}],
        author: data?.data.playlistInput.author,
        imageData: null
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required(translate("pages.playlists.form.errors.title")),
        description: Yup.string().required(translate("pages.playlists.form.errors.description")),
        // imageData: Yup.mixed().required(translate("pages.playlists.form.errors.image")),
        singles: Yup.array()
        .of(
            Yup.object().shape({
                title: Yup.string().required(translate("pages.playlists.form.errors.title")),
                singleLinks: Yup.array()
                .of(
                    Yup.object().shape({
                        platform: Yup.string().required(translate("pages.playlists.form.errors.platform")),
                        link: Yup.string().required(translate("pages.playlists.form.errors.link")),
                    })
                )
                .min(1, "At least one link is required")
            })
        ).min(1, "At least one link is required")
    });
    const {values, errors, getInputProps, onSubmit, removeListItem, insertListItem, setFieldValue} = refineForm({
        initialValues: initialValues,
        validate: yupResolver(validationSchema),
        refineCoreProps: {
            action: "edit",
            resource: "playlists",
        }
    })

    const sanitizedVariables = {
        id: values.id,
        playListInput: {
            title: values.title,
            description: values.description,
            image: values.image || "", // Fallback to empty string if needed
            singles: values.singles, // Ensure structure matches
            author: values.author,
        },
    };

    const singleForm = values.singles.map((single, index) => {
        const singeLinkForm = values.singles[index].singleLinks.map((link, linkIndex) => (
            <Box mt="sm" key={linkIndex}>
                <Group>
                    <Select
                        {...getInputProps(`singles.${index}.singleLinks.${linkIndex}.platform`)}
                        label={translate("pages.playlists.form.platform.select.label")}
                        placeholder={translate("pages.playlists.form.platform.select.placeholder")}
                        data={[
                            {value: "YOUTUBE", label: translate("pages.playlists.form.platform.select.option1")},
                            {value: "SPOTIFY", label: translate("pages.playlists.form.platform.select.option2")},
                            {value: "DEEZER", label: translate("pages.playlists.form.platform.select.option3")},
                            {value: "BOOMPLAY", label: translate("pages.playlists.form.platform.select.option4")},
                            {value: "APPLEMUSIC", label: translate("pages.playlists.form.platform.select.option5")},
                            {value: "YOUTUBEMUSIC", label: translate("pages.playlists.form.platform.select.option6")},
                        ]}
                    />
                    <TextInput
                        {...getInputProps(`singles.${index}.singleLinks.${linkIndex}.link`)}
                        label= {translate("pages.playlists.form.platform.input.label")}
                        placeholder= {translate("pages.playlists.form.platform.input.placeholder")}
                    />
                    {linkIndex !== 0 ? (
                        <IconSquareRoundedX stroke={1} color="red" onClick={() => removeListItem(`singles.${index}.singleLinks`, linkIndex)} style={{cursor: "pointer"}} size={25}/>
                    ) : (
                        <IconSquareRoundedPlus stroke={1}  onClick={() => insertListItem(`singles.${index}.singleLinks`, {platform: "", link: ""})} style={{cursor: "pointer"}} size={25}/>
                    )}
                </Group>
            </Box>
        ))

        return (
            <Box mt="md" w="100%" key={index}>
                <Group position="right">
                    {index !== 0 ? (
                        <IconSquareRoundedX stroke={1} color="red" onClick={() => removeListItem("singles", index)} style={{cursor: "pointer"}} size={30}/>
                    ) : (
                        <IconSquareRoundedPlus stroke={1}  onClick={() => insertListItem("singles", {title: "", singleLinks: [{platform: "", link: ""}]})} style={{cursor: "pointer"}} size={30}/>
                    )}
                </Group>
                <TextInput
                    // mt="md"
                    {...getInputProps(`singles.${index}.title`)}
                    label={translate("pages.playlists.form.single.input.label")}
                    placeholder={translate("pages.playlists.form.single.input.placeholder")}
                />
                <Group style={{justifyContent: "space-between"}}>
                </Group>
                {singeLinkForm}
            </Box>
        );
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
            const Imageref = ref(storage, data?.data.playlistInput.image);
            await deleteObject(Imageref);
            console.log("image deleted");
            console.log("end delete");
        } catch (error) {
            console.log('erreur survenue', error);
        }

    }

    const updloadImage = async () => {
        console.log("start upload");
        setIsLoading(true)
        try {
            if (values.imageData !== null) {
                await deleteOldImage();
                const storage = getStorage();
                const imageRef = ref(storage, `playlists/${values.title}`);
                const imageSnapshot = await uploadBytesResumable(imageRef, values.imageData );
                const imageUrl = await getDownloadURL(imageSnapshot.ref);
                setFieldValue("image", imageUrl);
                // values.image = imageUrl;
            } else {
                console.log("image is unchanged cause imageData is ", values.imageData)
            }
        } catch (error) {
            console.log('erreur survenue', error);
        }finally{setIsLoading(false)}
    }

    const {mutate: updatePlaylist} = useUpdate({
        id: data?.data.id,
        values: values,
        resource: "playlists",
        successNotification(data, values, resource) {
            return {
                type: "success",
                message: translate("notifications.success"),
            }
        },
        errorNotification(error, values, resource) {
            console.log("error notif: ", values?.values);
            return {
                type: "error",
                message: translate("notifications.error"),
                description: `${error}`,
            }
        },
        meta: {
            gqlMutation: UPDATE_PLAYLIST,
            operation: "updatePlaylist"
        }
    })

    return (
        <Edit 
            isLoading={isLoading}
            title={translate("pages.playlists.edit")}
            saveButtonProps={{
                // @ts-expect-error
                onClick: onSubmit( async() => {
                    await updloadImage();
                    console.log(values)
                    updatePlaylist()
                    // list("playlists");
                })
            }}
        
        >
            <form>
                <Center>
                    <Box w="80%">
                        <FileInput mt="md" {...getInputProps("imageData")} accept="image/png,image/jpeg, image/jpg" clearable label={translate("pages.articles.form.image")} />
                        <Image mt="md" style={{width: 600}} src={!uplImage ? data?.data.playlistInput.image : uplImage} alt="image1" />
                        {/* {!uplImage ? (
                        ) : (
                            <Image mt="md" style={{width: 600}} src={uplImage} alt="image2" />
                        )} */}
                        <TextInput
                            {...getInputProps('title')}
                            label={translate("pages.articles.form.title")}
                            placeholder={translate("pages.articles.form.title")}
                            mt="md"
                        />
                        <Text size="sm" mt="md">
                            {translate("pages.playlists.form.description")}
                        </Text>
                        <MDEditor
                            {...getInputProps("description")} data-color-mode="light"
                        />
                        {errors.description && (
                            <Text mt={2} weight={500} size="xs" color="red">
                                {errors.description}
                            </Text>
                        )}
                        {singleForm}
                    </Box>
                </Center>
            </form>
        </Edit>
    )
}