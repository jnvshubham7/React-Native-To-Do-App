import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleChange = (text) => {
    setTaskText(text);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <View style={{ flexDirection: "row", marginBottom: 10 }}>
      <TextInput
        style={{ flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 5, padding: 10 }}
        placeholder="Enter task..."
        value={taskText}
        onChangeText={handleChange}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

export default TaskInput;
