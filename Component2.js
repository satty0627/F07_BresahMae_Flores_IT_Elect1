import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Component2 = () => {
  const [message,setMessage]=useState("")
  const [bgColor, setBgColor] = useState('Brown');
  return (
    <View style={styles.container}>
      <Text>Component2</Text>
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

export default Component2;