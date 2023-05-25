import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

export default function App() {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHaspermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHaspermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text> Acesso negado! </Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraType style={{ flex: 1 }} type={type}>
          <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}>
            <TouchableOpacity 
            style={{
              position: 'absolute',
              bottom: 20,
              left: 20,
            }}
            onPress={() =>{
              setType(
                type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
              );
            }}
            >

            </TouchableOpacity>
          </View>
      </CameraType>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});