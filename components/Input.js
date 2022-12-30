import React, { Component, useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ onSubmit, index, placeholder, styles, keyboardType }) => {

    const [text, setText] = useState('0')

    return (
      <TextInput
        keyboardType={keyboardType || "default"}
        style={styles}
        ref={input => {
          this.textInput = input;
        }}
        onChangeText={text => this.setState({ text })}
        value={text}
        clearTextOnFocus={true}
        onSubmitEditing={() => {
          onSubmit({ index, text });
          this.setState({ text: placeholder });
        }}
    
      />
    );
  }

export default Input