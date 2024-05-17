import React, { useState } from "react";
import { ScrollView, StatusBar, SafeAreaView, View, Text } from "react-native";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [lastTaskName, setLastTaskName] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertColor, setAlertColor] = useState("");

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setLastTaskName(text);
    setAlertColor("#007bff");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const deleteTask = (taskId, taskName) => {
    const deletedTask = tasks.find((task) => task.id === taskId);
    setTasks(tasks.filter((task) => task.id !== taskId));
    setLastTaskName(deletedTask ? deletedTask.text : "");
    setAlertColor("#dc3545");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const toggleTask = (taskId, taskName) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    setLastTaskName(taskName);
    setAlertColor("#28a745");
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 20 }}>
            React Native To-Do App
          </Text>
          <TaskInput addTask={addTask} />
          {showAlert && (
            <View
              style={{
                backgroundColor: alertColor,
                padding: 10,
                borderRadius: 5,
                marginVertical: 10,
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                Task "{lastTaskName}"{" "}
                {alertColor === "#28a745"
                  ? "completion status changed!"
                  : alertColor === "#007bff"
                  ? "added successfully!"
                  : "deleted!"}
              </Text>
            </View>
          )}
          <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
