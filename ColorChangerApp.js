import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorChangerApp = () => {
  const [bgColor, setBgColor] = useState('white');
  
  return (
  <View style={[styles.container, { backgroundColor: bgColor}]}>
    <View style={styles.buttonGroup}>
      <Button title="Default(White)" onPress={() => setBgColor('white')}/>
      <Button title="LightGreen" onPress={() => setBgColor('lightgreen')}/>
      <Button title="Gray"onPress={() => setBgColor('gray')}/>
    </View>
  </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    gap: 10
  },
});

export default ColorChangerApp;