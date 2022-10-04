import { UserContext } from "../../data/UserContext"
import { useContext, useState } from "react"
import { View, Text, StyleSheet, Alert, Image } from "react-native"
import * as ImagePicker from "expo-image-picker"
import CameraButton from "./ui/CameraButton"

const Camera = () => {
  //const [permissionInformation, requestPermission] = ImagePicker.useCameraPermissions()
  const [status, requestPermission] = ImagePicker.useCameraPermissions()
  const [image, setImage] = useState(null)

  const user = useContext(UserContext)

  const verifyAccess = async () => {
    if (status.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission()
      return response.granted
    }
    if (status.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Access denied",
        "You need to give permission to use the camera to take a profile picture"
      )
      return false
    }
    return true
  }

  const onTakePhoto = async () => {
    const hasPermission = await verifyAccess()

    if (!hasPermission) return

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    })

    setImage(image.uri)
  }

  const onSavePicture = () => {
    console.log(image)
    user.changePhoto(image)
  }

  let imagePreview = <Text style={styles.textColor}>Bild saknas</Text>

  if (image) {
    imagePreview = <Image style={styles.image} source={{ uri: image }} />
  }

  return (
    <View style={styles.imageContainer}>
      <View style={styles.imagePreview}>{imagePreview}</View>
      {image !== null ? (
        <View>
          <CameraButton
            onPressed={onSavePicture}
            title="Save as profilepic"
            iconName="save-outline"
          />
          <CameraButton
            onPressed={onTakePhoto}
            title="Take a new photo"
            iconName="camera-outline"
          />
        </View>
      ) : (
        <View>
          <CameraButton
            onPressed={onTakePhoto}
            title="Take Photo"
            iconName="camera-outline"
          />
        </View>
      )}
    </View>
  )
}

export default Camera

const styles = StyleSheet.create({
  imageContainer: {
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  imagePreview: {
    width: 200,
    height: 200,
    fontSize: 24,
    borderRadius: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textColor: {
    marginVertical: 90,
    textAlign: "center",
    color: "#ffffff",
  },
})
