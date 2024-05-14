import React, {useState} from "react";
import * as ImagePicker from "expo-image-picker";

export const useRegistrationLogic = () => {
    const [selectedImage, setSelectedImage] = useState<ImagePicker.ImageInfo>();

    const openImagePickerAsync = async () => {
    let permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
    }
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
        quality: 1,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (pickerResult.cancelled === true) return;
    setSelectedImage(pickerResult);
    };

    const uploadImage = async () => {
    // upload logic will go here
    }
}