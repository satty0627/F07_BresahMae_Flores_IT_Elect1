import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Component1 = () => {
  const [message,setMessage]=useState("")
  const [bgColor, setBgColor] = useState('gray');
  return (
    <View style={styles.container}>
      <Text>Component1</Text>
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

export default Component1;