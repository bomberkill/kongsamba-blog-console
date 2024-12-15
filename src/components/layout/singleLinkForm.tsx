// import { Box, Group, Select, TextInput } from "@mantine/core";
// import { useForm, yupResolver } from "@mantine/form";
// import { useTranslation } from "@refinedev/core";
// import { useEffect } from "react";
// import * as Yup from "yup";
// import {forwardRef, useImperativeHandle} from "react";

// interface PlatformLinkProps {
//     // index: number;
//     // data: {
//     //     platform: string;
//     //     link: string;
//     // };
//     onChange: (updatedData: { platform: string; link: string }) => void;
//     // onSubmit: (updatedData: { platform: string; link: string }) => void;
// };
// const SingleLinkForm = forwardRef(({onChange}: PlatformLinkProps, ref) => {
//     const { translate } = useTranslation()
//     const initialValues = {
//         link: "",
//         platform: "",
//     };
//     const validationSchema = Yup.object().shape({
//         link: Yup.string().required(translate("pages.playlists.form.platform.error.link")),
//         platform: Yup.string().required(translate("pages.playlists.form.platform.error.platform"))
//     });
//     const platformForm = useForm({
//         initialValues: initialValues,
//         validate: yupResolver(validationSchema)
//     });
//     // useEffect(() => {
//     //     platformForm.onSubmit(() =>
//     //         onChange(platformForm.values)
//     //     )
//     // }, [platformForm.values])
//     useImperativeHandle(ref, (() => {
//         return {
//             submit: () => {
//                 console.log("singelLink useImperative");
//                 // const isValid = platformForm.validate();
//                 // if (isValid.hasErrors) {
//                 //     console.log("Errors:", isValid.errors);
//                 //     // return false;
//                 //     throw Error("Errors: ", isValid.errors);
//                 // } else {
//                 //     onChange(platformForm.values);
//                 //     console.log("link values: " ,platformForm.values)
//                 //     // return true;
//                 // }
//                 () => platformForm.onSubmit( () => onChange(platformForm.values))
//                 // platformForm.onSubmit((values) => {
//                 //     // Si les valeurs sont valides, on les transmet au parent
//                 //     onChange(values);
//                 // }); // Appeler immédiatement pour déclencher la soumission
//             }
//         }
//     }
//     ))
//     return (
//         <Box>
//             <Group>
//                 <Select
//                     {...platformForm.getInputProps("platform")}
//                     label={translate("pages.playlists.form.platform.select.label")}
//                     placeholder={translate("pages.playlists.form.platform.select.placeholder")}
//                     data={[
//                         {value: "YOUTUBE", label: translate("pages.playlists.form.platform.select.option1")},
//                         {value: "SPOTIFY", label: translate("pages.playlists.form.platform.select.option2")},
//                         {value: "DEEZER", label: translate("pages.playlists.form.platform.select.option3")},
//                         {value: "BOOMPLAY", label: translate("pages.playlists.form.platform.select.option4")},
//                         {value: "APPLEMUSIC", label: translate("pages.playlists.form.platform.select.option5")},
//                         {value: "YOUTUBEMUSIC", label: translate("pages.playlists.form.platform.select.option6")},
//                     ]}
//                 />
//                 <TextInput
//                     {...platformForm.getInputProps("link")}
//                     label= {translate("pages.playlists.form.platform.input.label")}
//                     placeholder= {translate("pages.playlists.form.platform.input.placeholder")}
//                 />
//             </Group>
//         </Box>
//     )
// });
// export default SingleLinkForm;