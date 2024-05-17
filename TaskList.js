import React from "react";
import { View, Text, Button } from "react-native";

const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Tasks</Text>
      {tasks.map((task) => (
        <View key={task.id} style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
          <Text
            style={{ flex: 1, textDecorationLine: task.completed ? "line-through" : "none" }}
            onPress={() => toggleTask(task.id, task.text)}
          >
            {task.text}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Button
              title={task.completed ? "Undo" : "Complete"}
              onPress={() => toggleTask(task.id, task.text)}
            />
            <Button title="Delete" onPress={() => deleteTask(task.id)} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default TaskList;
