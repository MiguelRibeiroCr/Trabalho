import { Camera, CameraType } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default function App (){
    const [image, setImage] = useState(null);
    const [camera, setCamera] = useState(null);
    const [permission, setPermission] = useState(null);

    useEffect(() => {
        (async () => {
          const  cameraStatus  = await Camera.requestCameraPermissionsAsync();
          setPermission(cameraStatus.status === 'granted');
        })();
      }, []);

      async function takePicture(){
        if (camera){
        
        const photo = await camera.takePictureAsync();
        console.log(photo.uri);
      }
    }  

    return(
        <View style={styles.container}>
            <Camera
            ref={(ref)=> setCamera(ref)}
            style={styles.Camera}
            type={CameraType.back}
            ratio={'1:1'}
            />
            <Button title ="" onPress={()=>{takePicture()}}/>

        </View>
    );
    
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },

    Camera:{
        aspectRatio:1,
        flex: 1,

    }
    
});