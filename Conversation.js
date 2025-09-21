import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function App() {
  const [messages, setMessages] = useState([
    { id: "1", text: "Love?", sender: "Husband" },
    { id: "2", text: "Why man Love?", sender: "Seivy" },
    
    { id: "3", text: "where are you na?", sender: "Husband" },
    { id: "4", text: "In the house pa Love.Why?", sender: "Seivy" },
    { id: "5", text: "cge,I'll be there in 5 mins", sender: "Husband" },
    { id: "6", text: "oki Love take care", sender: "Seivy" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    const newMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "Seivy",
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  const renderItem = ({ item }) =>
    React.createElement(
      View,
      {
        style: [
          styles.message,
          item.sender === "Seivy" ? styles.userMessage : styles.botMessage,
        ],
      },
      [
        React.createElement(Text, { key: "sender", style: styles.sender }, item.sender + ""),
        React.createElement(Text, { key: "text", style: styles.text }, item.text),
      ]
    );

  return React.createElement(
    SafeAreaView,
    { style: styles.container },
    [
      React.createElement(FlatList, {
        key: "list",
        data: messages,
        renderItem: renderItem,
        keyExtractor: (item) => item.id,
        style: styles.chat,
      }),
      React.createElement(
        View,
        { key: "inputRow", style: styles.inputRow },
        [
          React.createElement(TextInput, {
            key: "input",
            style: styles.input,
            value: input,
            onChangeText: setInput,
            placeholder: "Type a message",
          }),
          React.createElement(
            TouchableOpacity,
            { key: "button", style: styles.button, onPress: sendMessage },
            React.createElement(Text, { style: styles.buttonText }, "Send")
          ),
        ]
      ),
    ]
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f2f2" },
  chat: { flex: 1, padding: 10 },
  message: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#4caf50",
  },
  botMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#2196f3",
  },
  sender: { fontWeight: "bold", color: "#fff" },
  text: { color: "#fff" },
  inputRow: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
  },
  button: {
    backgroundColor: "#2196f3",
    marginLeft: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
