import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [isModalVisible, setIsModalVisisble] = useState(false);

  function startAddGoalHandler() {
    setIsModalVisisble(true);
  }

  function endAddGoalHandler() {
    setIsModalVisisble(false);
  }

  function addGoalHandler(goal) {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { text: goal, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id != id);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={isModalVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            renderItem={(goal) => {
              return (
                <GoalItem
                  text={goal.item.text}
                  id={goal.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
