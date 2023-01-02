import { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";

function GoalInput(props) {
  const [goal, setGoal] = useState("");

  function goalInputHandler(enteredText) {
    setGoal(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(goal);
    setGoal("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/GoalImage.jpg')} />
        <TextInput
          placeholder="Your Course Goals!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#5e0acc' />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color='#f31282' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : '#311b6b',
    padding : 16,
    paddingBottom : 70
  },
  image : {
    width : '80%',
    height : 220,
    margin : 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor : "#e4d0ff",
    color : '#120438',
    borderRadius : 6,
    width: "100%",
    padding: 10,
  },
  buttonContainer: {
    marginTop : 16,
    flexDirection: "row",
  },
  button : {
    width : 100,
    marginHorizontal : 8
  }
});
export default GoalInput;
