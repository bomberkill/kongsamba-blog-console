// import { Box, FileInput, Group, Image, Select, TextInput } from "@mantine/core";
// import { useForm, yupResolver } from "@mantine/form";
// import { useTranslation } from "@refinedev/core";
// import { TextField } from "@refinedev/mantine";
// import { title } from "process";
// import { useEffect, useState, useRef, forwardRef, useImperativeHandle } from "react";
// import * as Yup from 'yup';
// import {IconPlus, IconSquareRoundedX, IconSquareRoundedPlus} from "@tabler/icons-react"
// import PlatformLink from "./singleLinkForm";
// import SingleLinkForm from "./singleLinkForm";

// type Link = {
//     data: LinkData,
//     deletable: boolean
// }
// export type LinkData = {
//     platform: string;
//     link: string;
// };
// interface SingleProps {
//     // index: number;
//     // data: {
//     //     platform: string;
//     //     link: string;
//     // };
//     onChange: (updatedData: { title: string, links: LinkData[] }) => void;
// };
// const SingleForm = forwardRef(({onChange}: SingleProps, ref) => {
//     const {translate} = useTranslation()
//     const [uplImage , setUplImage] = useState("");
//     const linkRefs = useRef<Array<{submit: () => void}>>([]);

//     const validatesAllLinks = () => {
//         console.log("single validateAllLinks start");
//         linkRefs.current.forEach((link, index) => {
//             if (ref) {
//                 link.submit();
//             }
//         })
//         console.log("single validateAllLinks end");
//     };
//     useImperativeHandle(ref, (() => {
//         return {
//             submit: () => {
//                 validatesAllLinks();
//                 //
//                 // const isValid = singleForm.validate();
//                 // if (isValid.hasErrors) {
//                 //     console.log("Errors:", isValid.errors);
//                 //     // return false;
//                 //     throw Error("Errors: ", isValid.errors);
//                 // } else {
//                 //     onChange(singleForm.values);
//                 //     console.log("link values: " ,singleForm.values)
//                 //     // return true;
//                 // }
//                 singleForm.onSubmit( () => onChange(singleForm.values))
//             }
//         }
//     }
//     ))
//     const initialValues = {
//         title: "",
//         links: [{ platform: "", link: "" }],
//         // image: "",
//         // imageData: null,
//     }
//     const validationSchema = Yup.object().shape({
//         title: Yup.string().required(),
//         // links: Yup.array()
//         // .of(
//         //     Yup.object().shape({
//         //         platform: Yup.string().required("Platform is required"),
//         //         link: Yup.string().required("Link is required"),
//         //     })
//         // )
//         // .min(1, "At least one link is required")
//         // imageData: Yup.mixed().required(),
//     });
//     const singleForm = useForm({
//         initialValues: initialValues,
//         validate: yupResolver(validationSchema),
//     });
//     // useEffect(() => {
//     //     onChange(singleForm.values)
//     // }, [singleForm.values])
//     // useEffect(() => {
//     //     if (singleForm.values.imageData) {
//     //         const image: unknown = singleForm.values.imageData;
//     //         if(image instanceof File) {
//     //             const imageUrl = URL.createObjectURL(image);
//     //             setUplImage(imageUrl);
//     //             return () => URL.revokeObjectURL(imageUrl);
//     //         } else {
//     //             setUplImage("");
//     //         }
//     //     }
//     // }, [singleForm.values.imageData])
//     // const [singleLinkData, setSingleLinkData] = useState<>([
//     //     {values: {} , deletable: false}
//     // ])
//     const [linkData, setLinkData] = useState<Link[]>([
//         {data: {platform: "", link: ""}, deletable: false}
//     ]);
//     const updateLinkData = (index: number, updatedData: LinkData) => {
//         console.log("updateData: " , updatedData, " for id: ", index);
//         singleForm.values.links.map((link, id) => (id === index ? {...link, updatedData} : link))
//         setLinkData((prev) =>
//             prev.map((item, id) => (id === index ? { ...item, ...updatedData } : item))
//         );
//         console.log("single form value: " , singleForm.values);
//     };
//     const addPlatformLink = () => {
//         setLinkData((prev) => [
//             ...prev,
//             {data: {platform: "", link: ""}, deletable: true}
//         ])
//     }
//     const removePlatformLink = (index: number) => {
//         setLinkData((prev) => prev.filter((_, id) => id !== index));
//         singleForm.values.links.filter((_, id) => id !== index )
//     }
//     return (
//         <Box w="80%">
//             <TextInput
//                 mt="md"
//                 {...singleForm.getInputProps('title')}
//                 label={translate("pages.playlists.form.single.input.label")}
//                 placeholder={translate("pages.playlists.form.single.input.placeholder")}
//             />
//             {/* <FileInput
//                 mt="md"
//                 {...singleForm.getInputProps("imageData")}
//                 label={translate("pages.playlists.form.single.file.label")}
//                 accept="image/png,image/jpeg, image/jpg"
//                 clearable
//             />
//             {uplImage && (
//                 <Image mt="md" src={uplImage} alt="single image" width={100} h={100} radius="lg" />
//             )} */}
//             <Box>
//                 {linkData.map((link, index) => (
//                     <Group mt="sm" key={index} align="center">
//                         <SingleLinkForm
//                             ref={(el: any) => (linkRefs.current[index] = el)}
//                             // onSubmit={(updatedData) => updateLinkData(index, updatedData)}
//                             key={index}
//                             onChange={(updatedData) => updateLinkData(index, updatedData)}
//                         />
//                         {link.deletable ? (
//                             <IconSquareRoundedX stroke={1} color="red" onClick={() => removePlatformLink(index)} style={{cursor: "pointer"}} size={25}/>
//                         ) : (
//                             <IconSquareRoundedPlus stroke={1}  onClick={addPlatformLink} style={{cursor: "pointer"}} size={25}/>
//                         )}
//                     </Group>
//                 ))}  
//             </Box>
//             {/* <Group align="start">
//                 <IconSquareRoundedPlus  onClick={addPlatformLink} style={{cursor: "pointer"}} size={25}/>
//             </Group> */}
//         </Box>
//     )
// });
// export default SingleForm;