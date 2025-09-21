import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Component3 = () => {
const [message,setMessage]=useState("")
  const [bgColor, setBgColor] = useState('Blue');
  return (
    <View style={styles.container}>
      <Text>Component3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Component3;